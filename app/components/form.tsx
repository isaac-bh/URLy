"use client"

import { FormEvent, useState } from 'react'

export const Form = () => {
  const [url, setURL] = useState<string>("")

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const urlRegex: RegExp = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/

    if (urlRegex.test(url)) {      
      const response = await fetch('/api/url', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({url: url})
      })
  
      if (response.ok) alert("Done")
      else alert("Error")
    } else {
      alert("The URL submitted is not valid.")
    }

  }

  return (
    <form onSubmit={onSubmit} className='w-full my-4'>
      <input 
        autoComplete='off' 
        type="text" 
        name="url" 
        value={url} 
        onChange={(e: FormEvent<HTMLInputElement>) => setURL(e.currentTarget.value)} 
        placeholder='URL...' 
        className='text-xl px-4 py-2 bg-white text-gray-800 border border-lime-600 active:border-red-400 rounded-l-2xl w-5/6' 
      />
      <button type='submit' className='text-xl text-white px-4 py-2 rounded-r-2xl border border-lime-600 bg-lime-600 hover:bg-lime-700 w-1/6'>Shorten</button>
    </form>
  )
}
