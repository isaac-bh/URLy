import conn from "@/app/lib/db";
import { generateUID } from "@/app/lib/generateUID";

export async function POST(req: Request) {
  const urlRegex: RegExp = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/
  const body: { url: string } = await req.json()

  if (urlRegex.test(body.url)) {
    let uid: string = ""
    uid = await generateUID()

    const query = 'INSERT INTO urls (id, url, created_at) VALUES ($1, $2, $3)'
    const values = [uid, body?.url, new Date().toISOString()]
    const response = await conn.query(query, values)

    return Response.json({ url: process.env.URL_DEPLOY + uid });
  } else {
    return Response.json({ error: "URL submitted is invalid" }, { status: 422 })
  }
}