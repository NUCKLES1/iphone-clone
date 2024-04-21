import React from 'react'

function Soundsection () {
  return (
    <section className='w-full bg-white h-[100vh] sound-section' id='sound-section'>
    <div className='text-center w-[40%] ml-[10%] pt-[10rem]'>
    <p className="text-gray-600 text-1xl">New Sound System</p>
      <p className="text-3xl mt-4">Iphone14 Pro</p>
      <p className="text-5xl mt-5  text-blue-600">Feel the base.</p>
      <p className="text-2xl mt-6 text-black">
        from $41.62/mo. for 24 mo. or $999 before trade-in
      </p>
      <ul className="flex flex-1 justify-center mt-6">
        <li>
          <button className="px-5 py-2 bg-blue-500 text-sm border border-transparent rounded-3xl hover:bg-transparent hover:border-blue-500">
            Buy
          </button>
        </li>
        <li>
          <p className="text-blue-500 mt-2 ml-8">Learn more</p>
        </li>
      </ul>
    </div>
    </section>
  )
}

export default Soundsection