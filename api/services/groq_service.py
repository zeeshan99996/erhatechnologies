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
6. Thesis Writing — High-quality academic and research writing

## Projects Portfolio
- Neural Insight (AI Platform) — Real-time analytics with transformer models
- Agent Forge (Agentic AI) — Build and orchestrate autonomous AI agents
- FinFlow (Web App) — Finance dashboard with predictive forecasting
- Lumen Chat (Mobile App) — Cross-platform messaging with on-device AI
- AutoPilot RPA (Automation) — Workflow automation across 200+ SaaS tools
- Scholar AI (Research) — AI research assistant for citations and writing

## Website Pages
- / → Home   | /about → About   | /services → Services
- /projects → Portfolio   | /team → Team (/team/ai or /team/research)   | /contact → Contact

## ─── AI DEVELOPMENT TEAM ────────────────────────────────────────────────────

### 1. Salman Anwar
- Rank/Role: Agentic AI Engineer
- About: Salman architects and develops autonomous, multi-agent AI systems to solve complex business challenges. He leads the design of agentic pipelines and orchestrates AI workflows that operate independently to drive real-world results for clients.

### 2. Muzammil Shadab
- Rank/Role: AI Engineer
- About: Muzammil develops and deploys scalable AI models, specializing in LLM fine-tuning and intelligent integrations. He bridges the gap between cutting-edge AI research and production-grade applications, ensuring robust and efficient AI-powered solutions.

### 3. Abdul Rehman
- Rank/Role: Junior AI Engineer
- About: Abdul Rehman assists in building intelligent AI pipelines, data processing, and developing machine learning solutions. He is a growing talent in the AI team, contributing to model development, dataset preparation, and integration tasks.

### 4. Muhammad Zeeshan
- Rank/Role: Full Stack Developer
- About: Muhammad Zeeshan builds high-performance, AI-powered web applications and dynamic digital experiences. He is responsible for architecting scalable frontends and backends that power Erha's web-based products.

## ─── RESEARCH WRITING TEAM ──────────────────────────────────────────────────

### 5. Ilyas Shahid (Also: Muhammad Ilyas Shahid)
- Rank/Role: Founder & CEO of Erha Technologies | Academic Writer & Researcher
- About: Muhammad Ilyas Shahid is an accomplished academic writer and researcher specializing in Computer Science. As the Founder and CEO of Erha Technologies, he leads innovative initiatives at the intersection of technology and research. With a strong portfolio of publications in IEEE and SCI-indexed journals, his work reflects deep expertise in Computer Science. He has made significant contributions to academic research focusing on topics that drive technological advancements.

### 6. Dr. Faiz Jillani
- Rank/Role: Co-Founder | Academic Writer & AI Engineer
- About: Dr. Faiz Jillani is a renowned academic writer and AI engineer specializing in Artificial Intelligence, Generative AI, and Robotics. With a strong publication record in top-tier journals, his research focuses on cutting-edge AI technologies and their applications in robotics. As a Co-Founder of Erha Technologies, Dr. Jillani blends academic expertise with practical industry experience to drive innovation.

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
                        "enum": ["AI Development", "Web & App Development", "Research Writing", "UI/UX Design", "Consultation"]
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
                        "enum": ["home", "about", "services", "projects", "team", "team/ai", "team/research", "contact"],
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
                        "enum": ["all", "AI Platform", "Agentic AI", "Web App", "Mobile App", "Automation", "Research"]
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
    system_prompt = ERHA_SYSTEM_PROMPT
    if knowledge_context:
        system_prompt += f"\n\n## Uploaded Document Context\n{knowledge_context}"

    full_messages = [{"role": "system", "content": system_prompt}] + messages

    try:
        response = client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=full_messages,
            tools=TOOLS,
            tool_choice="auto",
            temperature=0.7,
            max_tokens=1024,
        )
    except Exception as e:
        err_msg = str(e)
        if "failed_generation" in err_msg:
            # Rescue hallucinated tool calls
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
        print(f"Groq API Error: {err_msg}")
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
        model="llama-3.2-11b-vision-preview",
        messages=full_messages,
        temperature=0.7,
        max_tokens=1024,
    )
    return completion.choices[0].message.content
