import {FaPen, FaLayerGroup, FaCube, FaSave } from "react-icons/fa";
import './App.css'

function App() {

  return (
    <>
      <button className='inline-flex items-center justify-center text-neutral-500 border-2 font-bold border-neutral-500 rounded-md w-28 py-2 hover:bg-amber-500 hover:border-amber-500 hover:text-neutral-800 mr-2'><FaPen /><span className="ml-2">Draw</span></button>
      <button className='inline-flex items-center justify-center text-neutral-500 border-2 font-bold border-neutral-500 rounded-md w-28 py-2 hover:bg-amber-500 hover:border-amber-500 hover:text-neutral-800 mr-2'><FaLayerGroup /><span className="ml-2">Depth</span></button>
      <button className='inline-flex items-center justify-center text-neutral-500 border-2 font-bold border-neutral-500 rounded-md w-28 py-2 hover:bg-amber-500 hover:border-amber-500 hover:text-neutral-800 mr-2'><FaCube /><span className="ml-2">Model</span></button>
      <button className='inline-flex items-center justify-center text-neutral-500 border-2 font-bold border-neutral-500 rounded-md w-28 py-2 hover:bg-amber-500 hover:border-amber-500 hover:text-neutral-800 mr-2'><FaSave /><span className="ml-2">Export</span></button>
    </>
  )
}

export default App
