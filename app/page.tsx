import { geologica } from './fonts'

export default function Home() {
  return (
    <div className='relative'>
      <div className="absolute -z-10 bottom-10 left-4 w-80 h-80 bg-lime-400 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blurred_dot"></div>
      <div className="absolute -z-10 top-20 right-60 w-28 h-28 bg-lime-400 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blurred_dot"></div>
      <div className="absolute -z-10 bottom-20 right-4 w-40 h-40 bg-lime-400 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blurred_dot"></div>
      <div className="absolute -z-10 bottom-20 right-96 w-24 h-24 bg-lime-400 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blurred_dot"></div>
      <div className="absolute -z-10 top-40 left-96 w-32 h-32 bg-lime-400 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blurred_dot"></div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-lime-50/25">
        <nav className='absolute top-0 left-0 right-0 w-2/3 m-auto p-2 flex flex-row justify-between'>
          <p className={`text-xl font-bold text-zinc-900 ${geologica.className}`}>
            URLy
          </p>
          <button className='text-lg w-32 text-white bg-lime-600 hover:bg-lime-700 px-4 py-1 rounded-2xl'>Register</button>
        </nav>
        <header className='w-2/3 m-auto'>
          <div className='w-full text-center'>
            <h1 className={`text-7xl font-bold text-zinc-900 mb-2 ${geologica.className}`}>
              URLy
            </h1>
            <p className='text-5xl'>Don't send 100+ characters URLs, send just a <span className='font-black'>short</span> one.</p>
          </div>
          <form className='w-full my-4'>
            <input autoComplete='off' type="text" name="url" placeholder='URL...' className='text-xl px-4 py-2 bg-white text-gray-800 border border-lime-600 active:border-red-400 rounded-l-2xl w-5/6' />
            <button type='submit' className='text-xl text-white px-4 py-2 rounded-r-2xl border border-lime-600 bg-lime-600 hover:bg-lime-700 w-1/6'>Shorten</button>
          </form>
        </header>
      </main>
    </div>
  )
}
