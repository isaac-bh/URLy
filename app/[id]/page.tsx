import { redirect } from 'next/navigation'

export default async function URLRedirect({params: {id}}: {params: {id: string}}) {
  const url = await fetch(`http://localhost:3000/api/url/${id}`, {
    method: 'GET',
    headers: { "Content-Type": "application/json" },
  })

  if (url.ok) {
    const data = await url.json()
    redirect(data?.url)
  } 
  return 'Not valid'
}
