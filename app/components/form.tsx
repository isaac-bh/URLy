"use client"

import { FormEvent, useState } from 'react'
import { Modal } from './modal'

export const Form = () => {
  const [url, setURL] = useState<string>("")

  const [title, setTitle] = useState<string>("")
  const [type, setType] = useState<'error' | 'success'>("error")
  const [content, setContent] = useState<string>("")
  const [toggleModal, setToggleModal] = useState<Boolean>(false)


  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const urlRegex: RegExp = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/

    if (urlRegex.test(url)) {
      const response = await fetch('/api/url', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url })
      })

      if (response.ok) {
        const { url }: { url: string } = await response.json()

        setTitle("URL creada")
        setContent(url)
        setType("success")
        setToggleModal(true)
      } else {
        setTitle("Service unavailable")
        setContent("Try again in few minutes")
        setType("error")
        setToggleModal(true)
      }
    } else {
      setTitle("Given URL is not valid")
      setContent("Check the URL that you've given")
      setType("error")
      setToggleModal(true)
    }

  }

  return (
    <>
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
      {
        toggleModal && <Modal type={type} title={title} content={content} toggleEvent={setToggleModal} />
      }

    </>
  )
}
