import React from 'react'

function Navber() {
  return (
 <>
 <nav class="bg-gray-300 flex  justify-between items-center px-[100px] h-[70px]">
  
    <div class=" ">
      <span class="text-black font-bold text-xl w-full">Bookazon.</span>
    </div>
    <div class=" justify-between   flex">
     <div className='flex gap-5 items-center justify-center'>
      <a href="#" class="text-black fimly-roboto hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
      <a href="#" class="text-black fimly-roboto hover:text-white px-3 py-2 rounded-md text-sm  font-medium">EN</a>
      <a href="#" class="text-black fimly-roboto hover:text-white px-3 py-2 rounded-md text-sm font-medium">Hotels</a>
      <a href="#" class="text-black fimly-roboto hover:text-white px-3 py-2 rounded-md text-sm font-medium">Deals</a>
      <a href="#" class="text-black fimly-roboto hover:text-white px-3 py-2 rounded-md text-sm font-medium">Features</a>
      <a href="#" class="text-black fimly-roboto hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact us</a>
      </div>
    <a href="#" class="inline-block bg-blue-500 ml-[60px] hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Sign Up</a>
    
  </div>
</nav>
 </>
  )
}

export default Navber