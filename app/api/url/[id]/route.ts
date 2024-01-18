import conn from "@/app/lib/db";

export async function GET(req: Request, route: {params: {id: string}}) {
  const query = 'SELECT url FROM urls WHERE id = $1'
  const values = [route.params.id]
  const response = await conn.query(query, values)

  return Response.json({url: response.rows[0]?.url})
  // return Response.json({ error: "URL submitted is invalid" }, { status: 422 })
}