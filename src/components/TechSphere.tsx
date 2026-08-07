import { useEffect, useRef } from "react";

export function TechSphere({ size = 480 }: { size?: number }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const dpr = window.devicePixelRatio || 1;

    // Size canvas properly for high-DPI displays
    const resize = () => {
      if (!canvas) return;
      canvas.width = size * dpr;
      canvas.height = size * dpr;
      canvas.style.width = `${size}px`;
      canvas.style.height = `${size}px`;
      ctx.scale(dpr, dpr);
    };
    resize();

    // Generate 3D nodes representing neurons
    const nodeCount = 120;
    const nodes: Array<{
      baseX: number;
      baseY: number;
      baseZ: number;
      rx: number; // Rotated base x
      ry: number; // Rotated base y
      rz: number; // Rotated base z
      dx: number; // Displacement x (elastic physics)
      dy: number; // Displacement y
      dz: number; // Displacement z
      vx: number; // Velocity x
      vy: number; // Velocity y
      vz: number; // Velocity z
      px: number; // Projected x
      py: number; // Projected y
      z: number; // Real-time sorted depth (zCurrent)
      color: string;
      isHub: boolean;
      layer: "input" | "hidden" | "output";
      hubLabel: string;
      hubMetric: string;
      rippleSize: number; // Node ripple flare on activation
    }> = [];

    const radius = size * 0.38;

    // Create base 3D coordinates using Golden Spiral
    for (let i = 0; i < nodeCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;

      const bx = radius * Math.sin(phi) * Math.cos(theta);
      const by = radius * Math.sin(phi) * Math.sin(theta);
      const bz = radius * Math.cos(phi);

      nodes.push({
        baseX: bx,
        baseY: by,
        baseZ: bz,
        rx: bx,
        ry: by,
        rz: bz,
        dx: 0,
        dy: 0,
        dz: 0,
        vx: 0,
        vy: 0,
        vz: 0,
        px: 0,
        py: 0,
        z: bz,
        color: "",
        isHub: false,
        layer: "hidden",
        hubLabel: "",
        hubMetric: "",
        rippleSize: 0,
      });
    }

    // Sort nodes horizontally to partition them into input, hidden, output layers
    nodes.sort((a, b) => a.baseX - b.baseX);

    // Assign layers, colors, and hub roles (Neural Network Topology)
    nodes.forEach((n, idx) => {
      if (idx < 40) {
        n.layer = "input";
        n.color = "rgba(56, 189, 248, 0.9)"; // Sky Cyan
        if (idx === 6 || idx === 18) {
          n.isHub = true;
          n.hubLabel = idx === 6 ? "IN_TENSOR" : "DATA_STREAM";
          n.hubMetric = idx === 6 ? "DIM: [64, 768]" : "RATE: 1.2M/s";
        }
      } else if (idx < 80) {
        n.layer = "hidden";
        n.color = "rgba(129, 140, 248, 0.9)"; // Indigo
        if (idx === 52 || idx === 68) {
          n.isHub = true;
          n.hubLabel = idx === 52 ? "LATENT_SPACE" : "ATTN_WEIGHTS";
          n.hubMetric = idx === 52 ? "DIM: 1024" : "HEADS: 12";
        }
      } else {
        n.layer = "output";
        n.color = "rgba(56, 189, 248, 0.9)"; // Sky Cyan
        if (idx === 94 || idx === 112) {
          n.isHub = true;
          n.hubLabel = idx === 94 ? "OUT_LOGITS" : "LOSS_GRADIENT";
          n.hubMetric = idx === 94 ? "CLASSES: 1000" : "FN: CROSS_ENT";
        }
      }
    });

    // Establish neural synaptic connections based on 3D distance
    const connections: Array<number[]> = Array(nodeCount)
      .fill(null)
      .map(() => []);

    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dx = nodes[i].baseX - nodes[j].baseX;
        const dy = nodes[i].baseY - nodes[j].baseY;
        const dz = nodes[i].baseZ - nodes[j].baseZ;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        // skip direct connections between Input and Output (forces routing through hidden layers)
        if (
          (nodes[i].layer === "input" && nodes[j].layer === "output") ||
          (nodes[i].layer === "output" && nodes[j].layer === "input")
        ) {
          continue;
        }

        // Connect nodes if within distance budget
        if (dist < radius * 0.75) {
          connections[i].push(j);
          connections[j].push(i);
        }
      }
    }

    // Generate 3D Orbit Shell Rings (planetary reticle boundaries)
    const ringCount = 3;
    const ringPoints: Array<Array<{ x: number; y: number; z: number }>> = [];
    const ringColors = [
      "rgba(99, 235, 249, 0.35)", // Outer Ring (Cyan)
      "rgba(168, 85, 247, 0.20)", // Mid Ring (Purple)
      "rgba(168, 85, 247, 0.28)", // Inner Ring (Purple - Avoids Green)
    ];

    for (let r = 0; r < ringCount; r++) {
      const points = [];
      const ringRadius = radius * (1.1 + r * 0.08); // Nested layers
      for (let p = 0; p < 64; p++) {
        const theta = (p / 64) * Math.PI * 2;
        let rx = 0,
          ry = 0,
          rz = 0;
        if (r === 0) {
          rx = ringRadius * Math.cos(theta);
          rz = ringRadius * Math.sin(theta);
        } else if (r === 1) {
          ry = ringRadius * Math.cos(theta);
          rz = ringRadius * Math.sin(theta);
        } else {
          rx = ringRadius * Math.cos(theta) * 0.707;
          ry = ringRadius * Math.cos(theta) * 0.707;
          rz = ringRadius * Math.sin(theta);
        }
        points.push({ x: rx, y: ry, z: rz });
      }
      ringPoints.push(points);
    }

    // Initialize interactive data packets flowing along neural pathways
    interface NetworkPacket {
      fromIndex: number;
      toIndex: number;
      progress: number;
      speed: number;
      color: string;
      type: "forward" | "backward";
      path: number[];
      pathStep?: number;
    }

    const packets: Array<NetworkPacket> = [];

    // Seed initial forward pass packets from leftmost input layer nodes
    const activePacketCount = 18;
    const inputIndices = nodes
      .map((n, idx) => (n.layer === "input" ? idx : -1))
      .filter((idx) => idx !== -1);

    for (let pIdx = 0; pIdx < activePacketCount; pIdx++) {
      const fromIndex = inputIndices[Math.floor(Math.random() * inputIndices.length)];
      const targets = connections[fromIndex];
      if (targets && targets.length > 0) {
        // Prefer routing further to the right
        const rightTargets = targets.filter((tIdx) => nodes[tIdx].baseX > nodes[fromIndex].baseX);
        const toIndex =
          rightTargets.length > 0
            ? rightTargets[Math.floor(Math.random() * rightTargets.length)]
            : targets[Math.floor(Math.random() * targets.length)];

        packets.push({
          fromIndex,
          toIndex,
          progress: Math.random(),
          speed: 0.008 + Math.random() * 0.012,
          color: nodes[toIndex].color,
          type: "forward",
          path: [fromIndex],
        });
      }
    }

    // Dynamic sparks triggered on clicks (for visual flair)
    const sparks: Array<{
      fromIndex: number;
      toIndex: number;
      progress: number;
      speed: number;
      color: string;
    }> = [];

    // Interactivity state
    const mouse = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
      canvasX: -1000,
      canvasY: -1000,
      active: false,
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.canvasX = e.clientX - rect.left;
      mouse.canvasY = e.clientY - rect.top;

      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      mouse.targetX = (e.clientX - cx) * 0.0025;
      mouse.targetY = (e.clientY - cy) * 0.0025;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.canvasX = -1000;
      mouse.canvasY = -1000;
    };

    const handleMouseClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      // Find closest node on screen
      let closestNodeIdx = -1;
      let minDist = Infinity;
      for (let i = 0; i < nodes.length; i++) {
        const d = Math.hypot(nodes[i].px - clickX, nodes[i].py - clickY);
        if (d < minDist) {
          minDist = d;
          closestNodeIdx = i;
        }
      }

      // Trigger spark burst if clicked near a node
      if (closestNodeIdx !== -1 && minDist < 45) {
        const sourceNode = nodes[closestNodeIdx];
        sourceNode.rippleSize = 1.0; // Trigger flare ripple

        // Add velocity burst
        sourceNode.vx += (Math.random() - 0.5) * 16;
        sourceNode.vy += (Math.random() - 0.5) * 16;
        sourceNode.vz -= 8;

        const targets = connections[closestNodeIdx];
        if (targets && targets.length > 0) {
          // Send high-speed sparks along connections
          targets.forEach((targetIdx) => {
            sparks.push({
              fromIndex: closestNodeIdx,
              toIndex: targetIdx,
              progress: 0,
              speed: 0.025 + Math.random() * 0.025,
              color: "#ffffff",
            });
          });
        }
      }

      // Launch batch forward activation surge from ALL input nodes
      nodes.forEach((n, idx) => {
        if (n.layer === "input" && Math.random() < 0.45) {
          n.rippleSize = 1.0;
          n.vx += (Math.random() - 0.5) * 6;
          n.vy += (Math.random() - 0.5) * 6;
          n.vz -= 4;

          const targets = connections[idx];
          if (targets && targets.length > 0) {
            const rightTargets = targets.filter((tIdx) => nodes[tIdx].baseX > n.baseX);
            const toIdx =
              rightTargets.length > 0
                ? rightTargets[Math.floor(Math.random() * rightTargets.length)]
                : targets[Math.floor(Math.random() * targets.length)];

            packets.push({
              fromIndex: idx,
              toIndex: toIdx,
              progress: 0,
              speed: 0.012 + Math.random() * 0.015,
              color: nodes[toIdx].color,
              type: "forward",
              path: [idx],
            });
          }
        }
      });
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    canvas.addEventListener("click", handleMouseClick);

    // Initial rotation variables
    let angleX = 0.003;
    let angleY = 0.005;

    // Cybernetic HUD simulated training metrics variables
    let frameCount = 0;
    let epoch = 4820;
    let loss = 0.01422;
    let acc = 99.78;

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, size, size);

      const cx = size / 2;
      const cy = size / 2;

      // Draw volumetric background glow core matching theme palette
      const radGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius * 1.35);
      radGlow.addColorStop(0, "rgba(99, 235, 249, 0.18)"); // Cyan center
      radGlow.addColorStop(0.4, "rgba(168, 85, 247, 0.06)"); // Purple mid
      radGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = radGlow;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.35, 0, Math.PI * 2);
      ctx.fill();

      // Adjust rotation speed based on mouse
      if (mouse.active) {
        angleX += (mouse.targetY - angleX) * 0.1;
        angleY += (mouse.targetX - angleY) * 0.1;
      } else {
        // Slow constant rotations
        angleX += (0.0012 - angleX) * 0.05;
        angleY += (0.0022 - angleY) * 0.05;
      }

      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      // Rotate nodes in 3D, apply physics, and project to 2D
      nodes.forEach((n) => {
        // Base Rotation Y
        const x1 = n.baseX * cosY - n.baseZ * sinY;
        const z1 = n.baseZ * cosY + n.baseX * sinY;

        // Base Rotation X
        const y2 = n.baseY * cosX - z1 * sinX;
        const z2 = z1 * cosX + n.baseY * sinX;

        n.rx = x1;
        n.ry = y2;
        n.rz = z2;

        // Apply mouse magnetic force
        if (mouse.active) {
          const dist2D = Math.hypot(n.px - mouse.canvasX, n.py - mouse.canvasY);
          if (dist2D < 90) {
            const force = (1 - dist2D / 90) * 8; // Force scalar
            const angle = Math.atan2(n.py - mouse.canvasY, n.px - mouse.canvasX);
            n.vx += Math.cos(angle) * force * 0.14;
            n.vy += Math.sin(angle) * force * 0.14;
            n.vz -= force * 0.08;
          }
        }

        // Spring equations return displacement dx/dy/dz back to 0
        n.vx += (0 - n.dx) * 0.08;
        n.vy += (0 - n.dy) * 0.08;
        n.vz += (0 - n.dz) * 0.08;

        n.vx *= 0.82; // Friction dampening
        n.vy *= 0.82;
        n.vz *= 0.82;

        n.dx += n.vx;
        n.dy += n.vy;
        n.dz += n.vz;

        // Decay ripple flare
        if (n.rippleSize > 0) {
          n.rippleSize -= 0.035;
          if (n.rippleSize < 0) n.rippleSize = 0;
        }

        const xCurrent = x1 + n.dx;
        const yCurrent = y2 + n.dy;
        const zCurrent = z2 + n.dz;

        // 3D Perspective projection
        const f = size * 0.85;
        const scale = f / (f + zCurrent);
        n.px = cx + xCurrent * scale;
        n.py = cy + yCurrent * scale;
        n.z = zCurrent;
      });

      // Draw 3D Orbit Shell Rings (with segments depth-sorting)
      ringPoints.forEach((points, rIdx) => {
        const color = ringColors[rIdx];
        ctx.lineWidth = 0.55;
        ctx.setLineDash([6, 12]);

        const rotatedPoints: Array<{ px: number; py: number; z: number }> = [];

        points.forEach((p) => {
          const x1 = p.x * cosY - p.z * sinY;
          const z1 = p.z * cosY + p.x * sinY;
          const y2 = p.y * cosX - z1 * sinX;
          const z2 = z1 * cosX + p.y * sinX;

          const scale = (size * 0.85) / (size * 0.85 + z2);
          const px = cx + x1 * scale;
          const py = cy + y2 * scale;
          rotatedPoints.push({ px, py, z: z2 });
        });

        // Draw ring segments
        for (let i = 0; i < rotatedPoints.length; i++) {
          const p1 = rotatedPoints[i];
          const p2 = rotatedPoints[(i + 1) % rotatedPoints.length];
          const avgZ = (p1.z + p2.z) / 2;

          const depthAlpha = Math.max(0.04, (size * 0.85 - avgZ) / (size * 0.85 * 2.0));
          ctx.strokeStyle = color.replace(/0\.\d+/, (depthAlpha * 0.35).toFixed(3));
          ctx.beginPath();
          ctx.moveTo(p1.px, p1.py);
          ctx.lineTo(p2.px, p2.py);
          ctx.stroke();
        }
      });
      ctx.setLineDash([]); // Reset line dash

      // Draw Network Synapses (Connection Lines)
      ctx.globalCompositeOperation = "lighter";
      for (let i = 0; i < nodes.length; i++) {
        const p1 = nodes[i];
        const fScale = (size * 0.85) / (size * 0.85 + p1.z);

        const targets = connections[i] || [];
        targets.forEach((tIdx) => {
          // Avoid duplicate drawing of connection lines
          if (i > tIdx) return;

          const p2 = nodes[tIdx];
          const dx = p1.px - p2.px;
          const dy = p1.py - p2.py;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < size * 0.18) {
            const alpha = Math.max(0, 1 - dist / (size * 0.18)) * 0.22 * fScale;

            // Curved Axon arc control point calculation
            const rxCP = (p1.rx + p2.rx) / 2;
            const ryCP = (p1.ry + p2.ry) / 2;
            const rzCP = (p1.rz + p2.rz) / 2;

            const cpLen = Math.hypot(rxCP, ryCP, rzCP);
            const bend = 1.15;
            const cpX = cpLen > 0 ? (rxCP / cpLen) * radius * bend : rxCP;
            const cpY = cpLen > 0 ? (ryCP / cpLen) * radius * bend : ryCP;
            const cpZ = cpLen > 0 ? (rzCP / cpLen) * radius * bend : rzCP;

            const cpCurrentX = cpX + (p1.dx + p2.dx) / 2;
            const cpCurrentY = cpY + (p1.dy + p2.dy) / 2;
            const cpCurrentZ = cpZ + (p1.dz + p2.dz) / 2;

            const cpScale = (size * 0.85) / (size * 0.85 + cpCurrentZ);
            const cpx = cx + cpCurrentX * cpScale;
            const cpy = cy + cpCurrentY * cpScale;

            const gradient = ctx.createLinearGradient(p1.px, p1.py, p2.px, p2.py);
            const c1 = p1.color.replace(/0\.\d+/, alpha.toFixed(3));
            const c2 = p2.color.replace(/0\.\d+/, alpha.toFixed(3));

            gradient.addColorStop(0, c1);
            gradient.addColorStop(1, c2);

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.35 + fScale * 0.45;
            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.quadraticCurveTo(cpx, cpy, p2.px, p2.py);
            ctx.stroke();
          }
        });
      }

      // Draw interactive cursor synapses bridging pointer to 3 nearest nodes
      if (mouse.active && mouse.canvasX > -500 && mouse.canvasY > -500) {
        const nearestBridges: Array<{ node: (typeof nodes)[0]; dist: number }> = [];
        nodes.forEach((n) => {
          const dist = Math.hypot(n.px - mouse.canvasX, n.py - mouse.canvasY);
          if (dist < 185) {
            nearestBridges.push({ node: n, dist });
          }
        });
        nearestBridges.sort((a, b) => a.dist - b.dist);

        nearestBridges.slice(0, 3).forEach(({ node, dist }) => {
          const alpha = (1 - dist / 185) * 0.45;

          // Project curve bending towards central core
          const midX = (mouse.canvasX + node.px) / 2;
          const midY = (mouse.canvasY + node.py) / 2;
          const angleToCenter = Math.atan2(cy - midY, cx - midX);
          const cpX = midX + Math.cos(angleToCenter) * 16;
          const cpY = midY + Math.sin(angleToCenter) * 16;

          const grad = ctx.createLinearGradient(mouse.canvasX, mouse.canvasY, node.px, node.py);
          grad.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
          grad.addColorStop(0.5, `rgba(99, 235, 249, ${alpha * 0.65})`);
          grad.addColorStop(1, node.color.replace(/0\.\d+/, alpha.toFixed(3)));

          ctx.strokeStyle = grad;
          ctx.lineWidth = 0.7 + (1 - dist / 185) * 0.9;
          ctx.setLineDash([4, 5]);
          ctx.lineDashOffset = -Date.now() / 24; // Stream dashes toward node

          ctx.beginPath();
          ctx.moveTo(mouse.canvasX, mouse.canvasY);
          ctx.quadraticCurveTo(cpX, cpY, node.px, node.py);
          ctx.stroke();
        });
        ctx.setLineDash([]); // Reset line dash
      }

      // Update Packets (Simulating Forward/Backward Training Optimization Loop)
      for (let i = packets.length - 1; i >= 0; i--) {
        const p = packets[i];
        p.progress += p.speed;

        if (p.progress >= 1) {
          if (p.type === "forward") {
            p.path.push(p.toIndex);

            const isOutput = nodes[p.toIndex].layer === "output";
            const targets = connections[p.toIndex] || [];

            // Limit routing forward (X axis must increment)
            const forwardTargets = targets.filter(
              (tIdx) => nodes[tIdx].baseX > nodes[p.toIndex].baseX && !p.path.includes(tIdx),
            );

            if (isOutput || forwardTargets.length === 0) {
              // Trigger Output Neuron Activation Ripple
              nodes[p.toIndex].rippleSize = 1.0;

              // Spawn Backward Gradient (Backpropagation)
              if (p.path.length >= 2) {
                packets.push({
                  fromIndex: p.toIndex,
                  toIndex: p.path[p.path.length - 2],
                  progress: 0,
                  speed: 0.016 + Math.random() * 0.012, // Faster backprop
                  color: "rgba(236, 72, 153, 0.85)", // Magenta backprop
                  type: "backward",
                  path: [...p.path],
                  pathStep: p.path.length - 1,
                });
              }

              // Reset forward packet to random Input node
              const newStart = inputIndices[Math.floor(Math.random() * inputIndices.length)];
              const newStartTargets = connections[newStart] || [];
              const startRightTargets = newStartTargets.filter(
                (tIdx) => nodes[tIdx].baseX > nodes[newStart].baseX,
              );
              const newTo =
                startRightTargets.length > 0
                  ? startRightTargets[Math.floor(Math.random() * startRightTargets.length)]
                  : newStartTargets[0];

              if (newTo !== undefined) {
                p.fromIndex = newStart;
                p.toIndex = newTo;
                p.progress = 0;
                p.path = [newStart];
                p.speed = 0.008 + Math.random() * 0.012;
                p.color = nodes[newTo].color;
              } else {
                packets.splice(i, 1);
              }
            } else {
              // Hop to next Layer node
              const nextTo = forwardTargets[Math.floor(Math.random() * forwardTargets.length)];
              p.fromIndex = p.toIndex;
              p.toIndex = nextTo;
              p.progress = 0;
              p.color = nodes[nextTo].color;
            }
          } else {
            // Backward pass gradient propagation
            const step = p.pathStep || 0;
            const nextStep = step - 1;

            if (nextStep > 0 && p.path && p.path[nextStep - 1] !== undefined) {
              p.fromIndex = p.toIndex;
              p.toIndex = p.path[nextStep - 1];
              p.progress = 0;
              p.pathStep = nextStep;
            } else {
              // Backprop reached input soma! Trigger weight update ripple
              nodes[p.toIndex].rippleSize = 0.65;
              packets.splice(i, 1);
            }
          }
        }
      }

      // Draw Packets (Curved lasers comets)
      packets.forEach((p) => {
        const n1 = nodes[p.fromIndex];
        const n2 = nodes[p.toIndex];
        if (n1 && n2) {
          // Axon midpoint CP
          const rxCP = (n1.rx + n2.rx) / 2;
          const ryCP = (n1.ry + n2.ry) / 2;
          const rzCP = (n1.rz + n2.rz) / 2;

          const cpLen = Math.hypot(rxCP, ryCP, rzCP);
          const bend = 1.15;
          const cpX = cpLen > 0 ? (rxCP / cpLen) * radius * bend : rxCP;
          const cpY = cpLen > 0 ? (ryCP / cpLen) * radius * bend : ryCP;
          const cpZ = cpLen > 0 ? (rzCP / cpLen) * radius * bend : rzCP;

          const cpCurrentX = cpX + (n1.dx + n2.dx) / 2;
          const cpCurrentY = cpY + (n1.dy + n2.dy) / 2;
          const cpCurrentZ = cpZ + (n1.dz + n2.dz) / 2;

          const cpScale = (size * 0.85) / (size * 0.85 + cpCurrentZ);
          const cpx = cx + cpCurrentX * cpScale;
          const cpy = cy + cpCurrentY * cpScale;

          const pz = n1.z + (n2.z - n1.z) * p.progress;
          const fScale = (size * 0.85) / (size * 0.85 + pz);
          const packetRadius = 2.0 * fScale;

          const getBezierCoord = (p0: number, p1: number, p2: number, t: number) => {
            const mt = 1 - t;
            return mt * mt * p0 + 2 * mt * t * p1 + t * t * p2;
          };

          const px = getBezierCoord(n1.px, cpx, n2.px, p.progress);
          const py = getBezierCoord(n1.py, cpy, n2.py, p.progress);

          const tailProgress = Math.max(0, p.progress - 0.16);
          const tx = getBezierCoord(n1.px, cpx, n2.px, tailProgress);
          const ty = getBezierCoord(n1.py, cpy, n2.py, tailProgress);

          const grad = ctx.createLinearGradient(tx, ty, px, py);
          grad.addColorStop(0, "rgba(0, 0, 0, 0)");
          if (p.type === "forward") {
            grad.addColorStop(0.4, p.color.replace(/0\.\d+/, "0.22"));
            grad.addColorStop(0.8, p.color.replace(/0\.\d+/, "0.85"));
          } else {
            grad.addColorStop(0.4, "rgba(236, 72, 153, 0.22)");
            grad.addColorStop(0.8, "rgba(236, 72, 153, 0.85)");
          }
          grad.addColorStop(1, "#ffffff"); // White hot tip

          ctx.strokeStyle = grad;
          ctx.lineWidth = (p.type === "forward" ? 1.6 : 2.0) * fScale;
          ctx.beginPath();
          ctx.moveTo(tx, ty);
          ctx.lineTo(px, py);
          ctx.stroke();

          // Spark head
          ctx.fillStyle = "#ffffff";
          ctx.beginPath();
          ctx.arc(px, py, packetRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Update click triggered sparks
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.progress += s.speed;
        if (s.progress >= 1) {
          sparks.splice(i, 1);
          continue;
        }

        const n1 = nodes[s.fromIndex];
        const n2 = nodes[s.toIndex];
        if (n1 && n2) {
          const rxCP = (n1.rx + n2.rx) / 2;
          const ryCP = (n1.ry + n2.ry) / 2;
          const rzCP = (n1.rz + n2.rz) / 2;
          const cpLen = Math.hypot(rxCP, ryCP, rzCP);
          const bend = 1.15;
          const cpX = cpLen > 0 ? (rxCP / cpLen) * radius * bend : rxCP;
          const cpY = cpLen > 0 ? (ryCP / cpLen) * radius * bend : ryCP;
          const cpZ = cpLen > 0 ? (rzCP / cpLen) * radius * bend : rzCP;

          const cpCurrentX = cpX + (n1.dx + n2.dx) / 2;
          const cpCurrentY = cpY + (n1.dy + n2.dy) / 2;
          const cpCurrentZ = cpZ + (n1.dz + n2.dz) / 2;

          const cpScale = (size * 0.85) / (size * 0.85 + cpCurrentZ);
          const cpx = cx + cpCurrentX * cpScale;
          const cpy = cy + cpCurrentY * cpScale;

          const fScale = (size * 0.85) / (size * 0.85 + (n1.z + (n2.z - n1.z) * s.progress));

          const getBezierCoord = (p0: number, p1: number, p2: number, t: number) => {
            const mt = 1 - t;
            return mt * mt * p0 + 2 * mt * t * p1 + t * t * p2;
          };

          const px = getBezierCoord(n1.px, cpx, n2.px, s.progress);
          const py = getBezierCoord(n1.py, cpy, n2.py, s.progress);
          const tx = getBezierCoord(n1.px, cpx, n2.px, Math.max(0, s.progress - 0.22));
          const ty = getBezierCoord(n1.py, cpy, n2.py, Math.max(0, s.progress - 0.22));

          const grad = ctx.createLinearGradient(tx, ty, px, py);
          grad.addColorStop(0, "rgba(255, 255, 255, 0)");
          grad.addColorStop(0.4, "rgba(99, 235, 249, 0.45)");
          grad.addColorStop(0.8, "rgba(99, 235, 249, 0.9)");
          grad.addColorStop(1, "#ffffff");

          ctx.strokeStyle = grad;
          ctx.lineWidth = 2.2 * fScale;
          ctx.beginPath();
          ctx.moveTo(tx, ty);
          ctx.lineTo(px, py);
          ctx.stroke();
        }
      }

      // Sort nodes by depth
      const sorted = [...nodes].sort((a, b) => b.z - a.z);

      // Render nodes (back to front)
      sorted.forEach((n) => {
        const scale = (size * 0.85) / (size * 0.85 + n.z);
        const baseRadius = n.isHub ? 4.5 : 1.8;
        const r = baseRadius * scale;
        const alpha = Math.max(0.12, (size * 0.85 - n.z) / (size * 0.85 * 1.6));

        // Draw ripple ring
        if (n.rippleSize > 0) {
          ctx.strokeStyle = n.color.replace(/0\.\d+/, (n.rippleSize * 0.6).toFixed(3));
          ctx.lineWidth = 1.0;
          ctx.beginPath();
          ctx.arc(n.px, n.py, r * (1.0 + n.rippleSize * 3.5), 0, Math.PI * 2);
          ctx.stroke();
        }

        // Outer glowing halo
        ctx.fillStyle = n.color.replace(/0\.\d+/, (alpha * 0.22).toFixed(3));
        ctx.beginPath();
        ctx.arc(n.px, n.py, r * (n.isHub ? 2.5 : 3.5), 0, Math.PI * 2);
        ctx.fill();

        // Node core
        ctx.fillStyle = n.color.replace(/0\.\d+/, alpha.toFixed(3));
        ctx.beginPath();
        ctx.arc(n.px, n.py, r, 0, Math.PI * 2);
        ctx.fill();

        // Hub branching dendrites
        if (n.isHub && scale > 0.75) {
          ctx.strokeStyle = n.color.replace(/0\.\d+/, "0.24");
          ctx.lineWidth = 0.65;
          const numDendrites = 5;
          const timeVal = Date.now() / 1500;
          for (let dIdx = 0; dIdx < numDendrites; dIdx++) {
            const angle =
              (dIdx / numDendrites) * Math.PI * 2 + timeVal * (dIdx % 2 === 0 ? 1 : -1) * 0.2;
            const startR = r;
            const endR = r * (2.1 + Math.sin(timeVal * 2 + dIdx) * 0.3);

            const sx = n.px + Math.cos(angle) * startR;
            const sy = n.py + Math.sin(angle) * startR;
            const ex = n.px + Math.cos(angle) * endR;
            const ey = n.py + Math.sin(angle) * endR;

            const ctrlAngle = angle + 0.15 * Math.sin(timeVal * 3 + dIdx);
            const ctrlR = (startR + endR) / 2;
            const cxCP = n.px + Math.cos(ctrlAngle) * ctrlR;
            const cyCP = n.py + Math.sin(ctrlAngle) * ctrlR;

            ctx.beginPath();
            ctx.moveTo(sx, sy);
            ctx.quadraticCurveTo(cxCP, cyCP, ex, ey);
            ctx.stroke();

            ctx.fillStyle = n.color.replace(/0\.\d+/, "0.6");
            ctx.beginPath();
            ctx.arc(ex, ey, 1.0 * scale, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      });

      // Reset blending
      ctx.globalCompositeOperation = "source-over";

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      canvas.removeEventListener("click", handleMouseClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, [size]);

  return (
    <div
      className="relative mx-auto w-full aspect-square flex items-center justify-center"
      style={{
        maxWidth: size,
      }}
    >
      {/* Hyper-glowing core background matching theme #63EBF9 */}
      <div
        className="absolute w-[54%] h-[54%] rounded-full animate-glow-pulse pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, #63EBF9 0%, rgba(99, 235, 249, 0.4) 50%, transparent 100%)",
          filter: "blur(45px)",
          opacity: 0.42,
        }}
      />

      {/* 3D Interactive Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 block w-full h-full cursor-grab active:cursor-grabbing z-10"
      />

      {/* Concentric SVG HUD overlays (Rotating Target Reticles + Training Telemetry) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 100 100">
        {/* Fine crosshairs in background */}
        <line x1="50" y1="10" x2="50" y2="90" stroke="#63EBF9" strokeWidth="0.08" opacity="0.08" />
        <line x1="10" y1="50" x2="90" y2="50" stroke="#63EBF9" strokeWidth="0.08" opacity="0.08" />

        {/* Outer Tech Ring with Ticks */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#63EBF9"
          strokeWidth="0.15"
          strokeDasharray="1 1.5"
          className="animate-spin-slow"
          style={{ animationDuration: "50s" }}
          opacity="0.25"
        />

        {/* Diagonal ticks scope ring */}
        <circle
          cx="50"
          cy="50"
          r="41"
          fill="none"
          stroke="#63EBF9"
          strokeWidth="0.25"
          strokeDasharray="40 10 15 10"
          className="animate-spin-slow"
          style={{ animationDuration: "35s" }}
          opacity="0.3"
        />

        {/* Reverse Spinning Mid Ring */}
        <circle
          cx="50"
          cy="50"
          r="26"
          fill="none"
          stroke="#63EBF9"
          strokeWidth="0.2"
          strokeDasharray="8 6 2 4"
          className="animate-spin-slow"
          style={{ animationDirection: "reverse", animationDuration: "25s" }}
          opacity="0.25"
        />

        {/* Micro coordinate reticle brackets */}
        <path
          d="M 12 50 A 38 38 0 0 1 50 12"
          fill="none"
          stroke="#63EBF9"
          strokeWidth="0.4"
          strokeDasharray="3 25 3 0"
          opacity="0.3"
        />
        <path
          d="M 88 50 A 38 38 0 0 1 50 88"
          fill="none"
          stroke="#63EBF9"
          strokeWidth="0.4"
          strokeDasharray="3 25 3 0"
          opacity="0.3"
        />
      </svg>
    </div>
  );
}
