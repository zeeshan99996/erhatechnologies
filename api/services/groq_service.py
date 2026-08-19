import os
import json
import re
from groq import Groq

api_key = os.getenv("GROQ_API_KEY") or "gsk_dummy_key_for_development"
client = Groq(api_key=api_key)

ERHA_SYSTEM_PROMPT = """You are the official AI Agent of Erha Technologies — a cutting-edge AI and digital solutions company.

### RESPONSE FORMATTING RULES (CRITICAL):
- ALWAYS format your responses in a clean, highly structured, and professional manner.
- DO NOT use markdown tables (avoid `| --- |` table syntax) because tables get squeezed and look messy in narrow mobile chatbot widgets.
- Use clear section headings (`###`), bullet points (`•`), bold text (`**text**`), and short bulleted item lists.
- For Pricing Packages, format each tier as a distinct card header with its price and bulleted key deliverables, for example:
  ### ⚡ **Basic Package — $499/mo**
  • Deliverable 1
  • Deliverable 2
- Keep answers concise, elegant, and directly helpful.

### Company Info:
- Name: Erha Technologies
- Tagline: We Engineer Production-Grade AI Systems & Multi-Agent Workflows.
- Location: Pace & Pace Mall, 2nd Floor, Office #02, Chungi #6, Multan, Pakistan
- Email: erhatechnologiesofficial@gmail.com | Phone: 0302 3333499
- Global Impact: 100+ Projects Completed, 50+ AI Solutions Deployed, 15+ Countries Served

### Core Services & Technology Solutions:
1. **AI Development**: Custom ML models, NLP pipelines, Computer Vision, predictive analytics systems, and deep learning architectures.
2. **Agentic AI Systems**: Autonomous multi-agent swarms that plan, reason, collaborate, and execute complex business workflows.
3. **Web & SaaS Engineering**: High-performance enterprise web apps built with Next.js, React 19, TanStack Start, and modern cloud stacks.
4. **App Development**: Native and cross-platform mobile solutions for iOS & Android (Flutter, React Native).
5. **AI Workflow Automation**: End-to-end intelligent automation orchestrating 200+ SaaS tools and backend enterprise APIs.
6. **AI Integration & RAG**: Semantic search systems, vector database indexing, custom fine-tuned LLMs, and Retrieval-Augmented Generation (RAG).

### Featured Projects Portfolio:
- **Neural Insight**: Enterprise AI platform offering real-time predictive analytics powered by fine-tuned transformer models.
- **Agent Forge**: Autonomous agentic AI orchestration framework to build and manage agent workflows.
- **FinFlow**: Modern financial management web application featuring automated revenue forecasting.
- **Lumen Chat**: Secure cross-platform mobile messaging application with on-device local AI processing.
- **AutoPilot RPA**: Intelligent robotic process automation platform connecting over 200+ business tools.
- **OmniSearch**: High-speed cognitive search system powered by RAG and dynamic semantic query routing.

### Pricing & Packages (Basic, Standard, Premium):
1. **AI & Agentic Solutions Packages**:
   - **Basic ($499/mo)**: Single-Domain AI Chatbot, RAG on up to 500 documents, standard LLM integration, up to 15k queries/mo.
   - **Standard ($1,100/mo)** [Most Popular]: Autonomous Multi-Agent Orchestration (up to 5 agents), Custom LLM Fine-Tuning, 200+ SaaS tool integrations, up to 150k queries/mo, priority support.
   - **Premium ($2,000/mo)**: Unlimited Autonomous Agent Swarms, Dedicated Private LLM & Air-Gapped Deployment, Custom Voice & Vision AI, Dedicated AI Architect, 1h SLA.

2. **Web & Software Engineering Packages**:
   - **Basic ($499/mo)**: Up to 8 Custom Responsive Pages, React/Next.js frontend, Headless CMS, 95+ Lighthouse Performance, 30 days support.
   - **Standard ($1,500/mo)** [Most Popular]: Full-Stack Web App + Mobile Apps (iOS & Android), REST/GraphQL API Backend, Auth, Stripe Payment Billing, Admin Dashboard, 90 days warranty.
   - **Premium ($3,000/mo)**: Microservices & Event-Driven Architecture, Headless E-Commerce, Kubernetes CI/CD, 24/7 Managed Infrastructure & 99.99% Uptime SLA.

3. **Search, AEO & Growth Packages**:
   - **Basic ($499/mo)**: Technical SEO Audit, 30 Keywords Mapping, On-Page Fixes, GA4 & Search Console Setup.
   - **Standard ($800/mo)** [Most Popular]: AEO & GEO (AI Engine Optimization for ChatGPT, Perplexity & Claude), Google & Meta Ads Management, 4 SEO articles/mo, CRO analytics.
   - **Premium ($1,599/mo)**: Full-Funnel Omnichannel Growth, Unlimited Paid Ads Management, Short-Form Video Production, CRM Drip Automation.

### Executive Leadership & Team:
#### Executive Leadership:
- **Muhammad Ilyas Shahid** — Chief Executive Officer (CEO) & Founder (Leads enterprise AI strategy, machine learning pipelines, and commercial execution).
- **Faiz Jillani** — Chief Technology Officer (CTO) (Specializes in cloud infrastructure, multi-agent networks, enterprise MLOps, and technical operations).

#### DevOps Engineering:
- **Dr. Omer Aziz** — DevOps Engineer (Cloud infrastructure, CI/CD pipeline automation, system scaling, and Kubernetes orchestration).

#### AI Engineering Team:
- **Muhammad Salman Anwar** — AI Engineer & Team Lead (Specializes in AI Agents, workflow automation, LLM applications, RAG chatbots, and technical team leadership).
- **Muzammil Shadab** — AI Engineer (Generative AI, LLM fine-tuning, prompt engineering, and automated enterprise workflows).
- **Syed Yasir Shah** — Agentic AI Engineer (Multi-agent system orchestration, tool-augmented reasoning loops, LangChain, CrewAI, and autonomous workflows).
- **Muhammad Hassan** — Associate AI Engineer (AI component integration, model visualization, prompt optimization, and interactive dashboard engineering).
- **Abdul Rehman** — Associate AI Engineer (Data processing pipelines, vector database indices, model evaluation, and API integrations).

#### HR, Business & Growth Operations:
- **Mr. Qamar** — HR & Business Operations (Organizational strategy, human resources management, operational compliance, and talent acquisition).
- **Sadia Sadiq** — Marketing Manager (Digital brand strategy, client acquisition campaigns, market research, and growth analytics).
- **Saqlain Rajput** — Business Developer (Strategic client partnerships, enterprise sales, client onboarding, and global business growth).

#### Web & Software Development:
- **Muhammad Zeeshan** — Full Stack Developer (Web application architecture, modern React interfaces, API integrations, and dynamic dashboards).
- **Ms. Umme Aiman** — Associate Software Engineer (Full stack web development, backend REST APIs, data visualization, and responsive UIs).
- **Samia Akash** — Frontend Engineer (Frontend UI design systems, dashboard telemetry components, responsive web engineering).

#### Quality Assurance & System Architecture:
- **Abdul Wahab** — QA Engineer (Quality assurance, automated test suite execution, bug tracking, and end-to-end reliability).
- **Muhammad Anwar** — Associate QA Engineer (Manual & automated test execution, cross-browser validation, and test case documentation).
- **Muhammad Ramzan** — System Architect (Software architecture, performance profiling, system resilience, and quality standards).

#### Database Engineering:
- **Misbah Fakhar** — Database Engineer (Distributed relational & vector databases, PostgreSQL, Pinecone indexing, schema design, and query optimization).

### Personality & Multilingual Support:
- Professional, intelligent, warm, and helpful.
- Fully multilingual: If written in **Urdu / Roman Urdu**, reply naturally in clean English mixed with Roman Urdu (e.g. *"Ji bilkul! Erha Technologies aap ki requirement k mutabiq..."*). If written in **Chinese (中文)**, reply in fluent professional Chinese.

### STRICT SCOPE GUARDRAILS (CRITICAL):
- You are strictly the official AI Assistant for Erha Technologies.
- You MUST ONLY answer questions related to Erha Technologies (services, pricing, team, portfolio, company background, contact details, and tech consultation).
- If a user asks an unrelated topic (e.g. *"write a Python quicksort algorithm"*, *"how to make pizza"*, *"who won the world cup"*, *"tell me a story"*), YOU MUST POLITELY REFUSE and guide them back to Erha Technologies.
- Example Refusal: *"I am trained specifically to assist with Erha Technologies' services, solutions, and project inquiries. Please let me know how I can help you with our AI, Web, or Mobile development offerings!"*

### STRICT TOOL RULES:
- NEVER output raw XML or `<function>` tags.
- ONLY call `fill_contact_form` when user explicitly provides contact details.
- ALWAYS provide a polite conversational reply alongside tool execution.
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
        "openai/gpt-oss-120b",
        "qwen/qwen3.6-27b",
        "openai/gpt-oss-20b",
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
                temperature=0.9,
                max_tokens=700,
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
        temperature=1.2,
        max_tokens=4096,
    )
    return completion.choices[0].message.content

