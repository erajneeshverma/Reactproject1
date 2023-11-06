import { useState } from 'react'

function App() {
  const [color,setColor] = useState("black");
  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={()=> setColor('green')} className='outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:'green'}}>Green</button>
          <button onClick={()=> setColor('red')} className='outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:'Red'}}>Red</button>
          <button onClick={()=> setColor('blue')} className='outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:'blue'}}>Blue</button>
          <button onClick={()=> setColor('olive')} className='outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:'olive'}}>Olive</button>
          <button onClick={()=> setColor('white')} className='outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:'white'}}>White</button>
          <button onClick={()=> setColor('black')} className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor:'black'}}>Black</button>
          <button onClick={()=> setColor('lavender')} className='outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:'lavender'}}>lavender</button>
          <button onClick={()=> setColor('aqua')} className='outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:'aqua'}}>Aqua</button>
          <button onClick={()=> setColor('fuchsia')} className='outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:'fuchsia'}}>Fuchsia</button>
          <button onClick={()=> setColor('silver')} className='outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:'silver'}}>Silver</button>
        </div>
      </div>
    </div>  
  )
}

export default App
