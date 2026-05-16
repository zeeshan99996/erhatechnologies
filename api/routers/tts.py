import io
import asyncio
from fastapi import APIRouter
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
from gtts import gTTS

router = APIRouter(prefix="/tts", tags=["TTS"])


class TTSRequest(BaseModel):
    text: str
    lang: str = "en"


@router.post("/speak")
async def speak(req: TTSRequest):
    clean = (
        req.text.replace("**", "").replace("*", "")
        .replace("#", "").replace("`", "").strip()
    )
    if not clean:
        return {"error": "Empty text"}

    # en with co.in TLD = Indian English — handles Roman Urdu naturally
    tts = gTTS(text=clean, lang="en", tld="co.in", slow=False)
    buf = io.BytesIO()
    tts.write_to_fp(buf)
    buf.seek(0)

    return StreamingResponse(buf, media_type="audio/mpeg")
