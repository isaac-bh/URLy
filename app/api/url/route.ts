import conn from "@/app/lib/db";

export async function POST(req: Request) {
    const body = await req.json()
    
    const query = 'INSERT INTO urls (url, created_at) VALUES ($1, $2)'
    const values = [body?.url, new Date().toISOString()]
    const response = await conn.query(query, values)
    console.log(response)
    return Response.json({msg: "hello"});
}