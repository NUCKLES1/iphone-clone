import React from 'react'

function Displaysection () {
  return (
    <section className='w-full h-[100vh] text-center justify-center items-center'>
          <p className="text-gray-400 text-1xl pt-10">New</p>
      <p className="text-5xl mt-5 text-purple-400">Brilliant.</p>
      <p className="text-2xl mt-5">A display that's up to 2x brighter in the sun.</p>
      <ul className="flex flex-1 justify-center mt-6">
        <li>
          <button className="px-5 py-2 bg-blue-500 text-sm border border-transparent rounded-3xl hover:bg-transparent hover:border-blue-500">
            Try me!
          </button>
        </li>
      </ul>
    </section>
  )
}

export default Displaysection