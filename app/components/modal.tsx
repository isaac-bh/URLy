'use client'

import Image from "next/image"
import { Dispatch, SetStateAction } from "react"

interface ModalProps {
  type: 'success' | 'error',
  title: string,
  content?: string,
  toggleEvent: Dispatch<SetStateAction<Boolean>>
}

export const Modal = ({ type, title, content, toggleEvent }: ModalProps) => {
  return (
    <div className={`absolute bg-white w-80 h-40 left-0 right-0 bottom-0 top-0 m-auto p-2 border-2 ${(type === 'success') ? 'border-lime-400' : 'border-red-600'}`}>
      <div className="relative w-full h-full">
        <Image
          src={`${(type === 'success') ? 'heroicons-cross-circle-green.svg' : 'heroicons-cross-circle-red.svg'}`}
          className="absolute cursor-pointer top-0 right-0"
          height={25}
          width={25}
          alt="Close button"
          onClick={() => toggleEvent(prev => !prev)}
        />
        <div className="w-full h-full flex flex-col justify-center">
          <p className="text-3xl font-black text-center">{title}</p>
          <p className="text-center">{content}</p>
        </div>
      </div>
    </div>
  )
}
