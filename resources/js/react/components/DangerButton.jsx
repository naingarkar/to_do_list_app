import React from 'react'

const DangerButton = ({ text, onClick }) => {
  return (
    <button 
      className='text-slate-300 bg-red-500 px-5 py-1 hover:bg-stone-700 rounded-lg'
      onClick={onClick}
    >
      { text }
    </button>
  )
}

export default DangerButton