import prisma from "@/app/lib/prisma";
import { generateUID } from "@/app/lib/generateUID";

export async function POST(req: Request) {
  try {
    const urlRegex: RegExp = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/
    const body: { url: string } = await req.json()

    if (urlRegex.test(body.url)) {
      let uid: string = ""
      uid = await generateUID()

      const response = await prisma.urls.create({
        data: {
          id: uid,
          url: body?.url,
          created_at: new Date().toISOString()
        }
      })

      return Response.json({ url: process.env.URL_DEPLOY + uid });
    } else {
      return Response.json({ error: "URL submitted is invalid" }, { status: 422 })
    }
  } catch {
    return Response.json({ status: "Service unavailable" }, { status: 500 })
  }
}