import { Roboto, Geologica } from 'next/font/google'
import localFont from 'next/font/local'

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ["400"]
})

export const geologica = Geologica({
  weight: ["400"],
  subsets: ['latin'],
})

export const satoshi = localFont({
  src: './assets/fonts/Satoshi-Regular.ttf',
  display: 'swap',
})