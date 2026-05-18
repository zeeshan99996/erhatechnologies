import base64
import tempfile
import os
from fastapi import APIRouter, UploadFile, File
from pydantic import BaseModel
from typing import Any
try:
    from api.services.groq_service import chat_with_groq, chat_with_vision
    from api.services.document_reader import read_docx_bytes
except ImportError:
    from services.groq_service import chat_with_groq, chat_with_vision
    from services.document_reader import read_docx_bytes

router = APIRouter(prefix="/chat", tags=["Chat"])


class Message(BaseModel):
    role: str
    content: Any


class ChatRequest(BaseModel):
    messages: list[Message]
    has_vision: bool = False


class ChatResponse(BaseModel):
    reply: str
    action: dict | None = None
    status: str = "success"


@router.post("/", response_model=ChatResponse)
async def chat(req: ChatRequest):
    messages = [m.model_dump() for m in req.messages]

    if req.has_vision:
        reply = chat_with_vision(messages)
        return ChatResponse(reply=reply)

    reply, action = chat_with_groq(messages)
    return ChatResponse(reply=reply, action=action)


@router.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    content = await file.read()
    fname = file.filename or ""

    # .docx — extract text
    if fname.lower().endswith((".docx", ".doc")):
        text = read_docx_bytes(content)
        return {"type": "docx", "text": text[:4000]}

    # Image — return base64
    if file.content_type and file.content_type.startswith("image/"):
        b64 = base64.b64encode(content).decode()
        return {"type": "image", "base64": b64, "mime": file.content_type}

    return {"type": "unsupported", "text": ""}
