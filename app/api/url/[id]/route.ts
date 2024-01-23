import prisma from "@/app/lib/prisma";

export async function GET(req: Request, route: { params: { id: string } }) {
  try {
    const response = await prisma.urls.findUniqueOrThrow({
      where: {
        id: route.params.id
      }
    })

    return Response.json({ url: response.url })
  } catch {
    return Response.json({ status: 'URL Not found' }, { status: 404 })
  }
  // return Response.json({ error: "URL submitted is invalid" }, { status: 422 })
}