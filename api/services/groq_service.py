import os
import json
import re
from groq import Groq

client = Groq(api_key=os.getenv("GROQ_API_KEY"))

ERHA_SYSTEM_PROMPT = """You are the official AI Agent of Erha Technologies — a cutting-edge AI and digital solutions company.

## Company Info
- Name: Erha Technologies
- Tagline: Innovating the Future with AI & Digital Solutions
- Location: Pace & Pace Mall, 2nd Floor, Office #76, Chungi #6, Multan, Pakistan
- Email: erhatechnologiesofficial@gmail.com | Phone: 0302 3333499
- Stats: 100+ Projects, 50+ AI Solutions, 15+ Countries

## Services
1. AI Development — Custom ML models, NLP, computer vision, predictive systems
2. Agentic AI Systems — Autonomous agents that plan, reason, and execute
3. Web Development — Modern, blazing-fast websites (Next.js, React, TanStack)
4. App Development — Cross-platform mobile apps (iOS, Android, Flutter, React Native)
5. AI Automation — Intelligent workflow orchestration
6. AI Integration & RAG — Retrieval-augmented generation and semantic search

## Projects Portfolio
- Neural Insight (AI Platform) — Real-time analytics with transformer models
- Agent Forge (Agentic AI) — Build and orchestrate autonomous AI agents
- FinFlow (Web App) — Finance dashboard with predictive forecasting
- Lumen Chat (Mobile App) — Cross-platform messaging with on-device AI
- AutoPilot RPA (Automation) — Workflow automation across 200+ SaaS tools
- OmniSearch (AI Search) — Cognitive search system powered by RAG and semantic routing

## Website Pages
- / → Home   | /about → About   | /services → Services
- /projects → Portfolio   | /team → Team   | /contact → Contact

## ─── LEADERSHIP ─────────────────────────────────────────────────────────────

### 1. Ilyas Shahid (Also: Muhammad Ilyas Shahid)
- Rank/Role: CEO of Erha Technologies
- About: Muhammad Ilyas Shahid is the CEO of Erha Technologies. He leads the enterprise AI strategy, orchestrating production-grade software developments, and designing scalable machine learning pipelines. Under his leadership, Erha Technologies bridges the gap between state-of-the-art AI systems and real-world commercial performance, delivering custom solutions to global enterprises.

### 2. Dr. Faiz Jillani
- Rank/Role: Engineering Manager
- About: Dr. Faiz Jillani is the Engineering Manager of Erha Technologies. He specializes in systems engineering, cloud architecture optimization, and enterprise MLOps. Faiz manages the developer engineering teams, guarantees technical delivery standards, and drives the strategic implementation of multi-agent networks and secure infrastructure deployments.

## ─── AI DEVELOPMENT TEAM ────────────────────────────────────────────────────

### 3. Salman Anwar
- Rank/Role: Agentic AI Engineer
- About: Salman architects and develops autonomous, multi-agent AI systems to solve complex business challenges. He leads the design of agentic pipelines and orchestrates AI workflows that operate independently to drive real-world results for clients.

### 4. Muzammil Shadab
- Rank/Role: AI Engineer
- About: Muzammil develops and deploys scalable AI models, specializing in LLM fine-tuning and intelligent integrations. He bridges the gap between cutting-edge AI research and production-grade applications, ensuring robust and efficient AI-powered solutions.

### 5. Abdul Rehman
- Rank/Role: Junior AI Engineer
- About: Abdul Rehman assists in building intelligent AI pipelines, data processing, and developing machine learning solutions. He is a growing talent in the AI team, contributing to model development, dataset preparation, and integration tasks.

### 6. Muhammad Zeeshan
- Rank/Role: Full Stack Developer
- About: Muhammad Zeeshan builds high-performance, AI-powered web applications and dynamic digital experiences. He is responsible for architecting scalable frontends and backends that power Erha's web-based products.

## ─── RESEARCH WRITING TEAM ──────────────────────────────────────────────────

### 7. Muhammad Ramzan
- Rank/Role: Data Science & Deep Learning Specialist
- About: Muhammad Ramzan is a skilled data science and deep learning professional with a strong background in mathematics. His research focuses on early-stage Age-Related Macular Degeneration (ARMD) classification using attention-based deep learning methods, achieving impressive results with a hybrid DETR-ResNet50 model. He has contributed to publications in IEEE and IAES journals. Currently pursuing a Master's in Data Science, he has received the UI GREAT Scholarship and the Wellcome Connecting Science Award.

### 8. Sadia Sadiq
- Rank/Role: Mathematics Researcher & Academic Writer
- About: Sadia Sadiq is an accomplished Mathematics graduate focused on academic research and writing. She holds an MS in Mathematics from NUST (National University of Sciences and Technology) and has conducted in-depth research in mathematical solitons and wave equations, contributing to publications in Results in Physics and Optical and Quantum Electronics. She is proficient in MATLAB and Maple and has presented at various academic seminars and conferences.

### 9. Samia Akash
- Rank/Role: Academic & Technical Writer | Research and Database Management Expert
- About: Samia Akash is an experienced academic and technical writer with a strong background in research writing, SOP development, and database management. Proficient in academic referencing styles (APA, MLA, Chicago), she excels in producing high-quality, well-researched content. She has extensive experience developing technical documentation, designing databases, and writing optimized SQL queries.

### 10. Umm-e-Aiman (Also: Umme Aiman)
- Rank/Role: Biochemistry Graduate & Aspiring Researcher
- About: Umm-e-Aiman is a motivated Biochemistry graduate currently pursuing an M.Phil. in Biochemistry. She has practical experience in pathology and BSL labs from her internship at DHQ Hospital, Multan. She has worked on cholesterol regulatory proteins during her bachelor's degree and conducted animal studies during her master's program. She is an active member of the GR community and an organizer of sports events.

### 11. Zunaira Naseem
- Rank/Role: Academic Writer & Linguistics Researcher
- About: Zunaira Naseem is a passionate academic writer and researcher specializing in English Linguistics and Corpus Linguistics. She has published work on language, social class, and power dynamics in proverbs. Skilled in corpus analysis using tools like Antconc and Sketch Engine, she has contributed to multiple academic conferences. Her dedication to advancing linguistic research makes her a valuable contributor to academic writing.

## Your Personality
You are smart, friendly, and professional. You are fully multilingual. If the user interacts with you in Chinese (中文), you MUST reply in natural, high-quality, professional Chinese (中文).
If the user interacts in Roman Urdu or Urdu, naturally mix English and Roman Urdu (e.g., "Haan ji, zaroor!").
Always match the language used by the user. Keep responses concise and informative.
When asked about a specific team member, share their full rank, role, and a summary of their background.

## STRICT SCOPE GUARDRAILS (CRITICAL)
- You are strictly the AI Assistant for Erha Technologies. You MUST ONLY discuss topics directly related to Erha Technologies (our services, projects, team members, contact details, technology stack, and general digital solutions consultation).
- If a user asks you to perform tasks or answer questions completely unrelated to Erha Technologies (such as writing general C++/Java/Python code, cooking recipes, solving mathematical problems, answering history/general knowledge questions, or writing stories), you MUST politely refuse and guide them back to Erha Technologies.
- Example response: "I'm sorry, as the official AI Agent of Erha Technologies, I can only assist you with inquiries regarding our services, projects, team, or digital solution consultations. Please let me know how I can help you with Erha Technologies today!"

## STRICT TOOL RULES
- NEVER use fill_contact_form for casual conversation or complaints
- ONLY use fill_contact_form when the user explicitly provides their details AND wants to contact the company
- NEVER leak raw XML, JSON, or function call syntax in your reply. Do NOT output <function> tags.
- ALWAYS write a natural conversational reply — never just silently run a tool
"""

TOOLS = [
    {
        "type": "function",
        "function": {
            "name": "fill_contact_form",
            "description": "Fills the contact form. ONLY call when user explicitly provides their name/email/message to send to Erha Technologies.",
            "parameters": {
                "type": "object",
                "properties": {
                    "name":    {"type": "string", "description": "Full name. Empty string '' to clear."},
                    "email":   {"type": "string", "description": "Email address. Empty string '' to clear."},
                    "interest": {
                        "type": "string",
                        "enum": ["AI Development", "Web & App Development", "AI Integration & RAG", "UI/UX Design", "Consultation"]
                    },
                    "message": {"type": "string", "description": "Their message. Empty string '' to clear."}
                }
            }
        }
    },
    {
        "type": "function",
        "function": {
            "name": "navigate_to_page",
            "description": "Navigates to a page. Use when user says 'go to', 'show me', 'open' a page.",
            "parameters": {
                "type": "object",
                "properties": {
                    "page": {
                        "type": "string",
                        "enum": ["home", "about", "services", "projects", "team", "contact"],
                        "description": "Name of the page to navigate to"
                    }
                },
                "required": ["page"]
            }
        }
    },
    {
        "type": "function",
        "function": {
            "name": "change_theme",
            "description": "Toggle dark/light mode. Use when user says 'dark mode', 'light mode', 'change theme'.",
            "parameters": {
                "type": "object",
                "properties": {
                    "theme": {"type": "string", "enum": ["dark", "light"]}
                },
                "required": ["theme"]
            }
        }
    },
    {
        "type": "function",
        "function": {
            "name": "filter_projects",
            "description": "Filter projects by category. Use when user says 'show only AI projects', 'filter web apps' etc.",
            "parameters": {
                "type": "object",
                "properties": {
                    "tag": {
                        "type": "string",
                        "enum": ["all", "AI Platform", "Agentic AI", "Web App", "Mobile App", "Automation", "AI Search"]
                    }
                },
                "required": ["tag"]
            }
        }
    },
    {
        "type": "function",
        "function": {
            "name": "highlight_section",
            "description": "Scroll and visually highlight a section on the current page.",
            "parameters": {
                "type": "object",
                "properties": {
                    "section": {
                        "type": "string",
                        "enum": ["hero", "services", "projects", "team", "contact", "about", "why-us"]
                    }
                },
                "required": ["section"]
            }
        }
    }
]

TOOL_REPLIES = {
    "fill_contact_form": "I've filled in your details on the contact form! Head over to the Contact page to review and submit it.",
    "navigate_to_page": "Taking you there now!",
    "change_theme": "Theme updated!",
    "filter_projects": "Projects filtered for you!",
    "highlight_section": "Here you go!"
}


def chat_with_groq(messages: list[dict], knowledge_context: str = "") -> tuple[str, dict | None]:
    # Clean messages for text-only models: convert list contents (vision format) to plain strings
    cleaned_messages = []
    for msg in messages:
        content = msg.get("content")
        if isinstance(content, list):
            # Extract text parts
            text_parts = []
            for item in content:
                if isinstance(item, dict):
                    if item.get("type") == "text":
                        text_parts.append(str(item.get("text", "")))
            msg_copy = dict(msg)
            msg_copy["content"] = " ".join(text_parts) if text_parts else "📎 File attached"
            cleaned_messages.append(msg_copy)
        else:
            cleaned_messages.append(msg)

    system_prompt = ERHA_SYSTEM_PROMPT
    if knowledge_context:
        system_prompt += f"\n\n## Uploaded Document Context\n{knowledge_context}"

    full_messages = [{"role": "system", "content": system_prompt}] + cleaned_messages

    models_to_try = [
        "llama-3.3-70b-versatile",
        "llama-3.1-8b-instant",
        "qwen/qwen3-32b"
    ]
    response = None
    last_err = None

    for model in models_to_try:
        try:
            response = client.chat.completions.create(
                model=model,
                messages=full_messages,
                tools=TOOLS,
                tool_choice="auto",
                temperature=0.7,
                max_tokens=1024,
            )
            print(f"Successfully generated response using model: {model}")
            break
        except Exception as e:
            last_err = e
            print(f"Model {model} failed with error: {str(e)}. Trying fallback...")
            # Rescue hallucinated tool calls if possible
            err_msg = str(e)
            if "failed_generation" in err_msg:
                match = re.search(r"<function=([a-zA-Z0-9_]+)>?\s*(\{.*?\})", err_msg)
                if match:
                    tool_name = match.group(1)
                    try:
                        params = json.loads(match.group(2))
                        if tool_name == "navigate_to_page" and "page" in params:
                            page = params["page"].strip("/")
                            params["page"] = "/" if page in ["", "home"] else f"/{page}"
                        return TOOL_REPLIES.get(tool_name, "Done!"), {"tool": tool_name, "params": params}
                    except json.JSONDecodeError:
                        pass
            continue

    if not response:
        print(f"All Groq models failed. Last error: {str(last_err)}")
        return "I'm sorry, I hit a slight snag processing that command. Can you try again?", None

    choice = response.choices[0]
    reply = choice.message.content or ""

    # Strip leaked XML/JSON tool syntax from reply text
    reply = re.sub(r"<function[^>]*>.*?</function>", "", reply, flags=re.DOTALL).strip()
    reply = re.sub(r"\{[\s\S]*?\"name\"[\s\S]*?\"arguments\"[\s\S]*?\}", "", reply).strip()

    action = None
    if choice.message.tool_calls:
        tool_call = choice.message.tool_calls[0]
        try:
            params = json.loads(tool_call.function.arguments)
            if tool_call.function.name == "navigate_to_page" and "page" in params:
                page = params["page"].strip("/")
                params["page"] = "/" if page in ["", "home"] else f"/{page}"
            action = {"tool": tool_call.function.name, "params": params}
        except json.JSONDecodeError:
            pass

        if not reply and action:
            reply = TOOL_REPLIES.get(action["tool"], "Done!")

    return reply, action


def chat_with_vision(messages: list[dict]) -> str:
    full_messages = [{"role": "system", "content": ERHA_SYSTEM_PROMPT}] + messages
    completion = client.chat.completions.create(
        model="meta-llama/llama-4-scout-17b-16e-instruct",
        messages=full_messages,
        temperature=0.7,
        max_tokens=1024,
    )
    return completion.choices[0].message.content

