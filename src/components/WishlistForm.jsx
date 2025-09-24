import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

function WishlistForm({onAdd}) {
    const [text, setText] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        if(!text.trim()) return;
        onAdd({
            id: uuidv4(),
            name: text,
            purchased: false,
        })
        setText("")
    }

  return (
    <form onSubmit={submitHandler} className='flex gap-2 mb-4'>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="ایتم مورد نظر..."
        className='flex-grow border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 rounded-lg px-4 py-2 focus:outline-none focus:border-primary transition-colors' />
        <button type='submit'
        className='bg-primary text-white px-5 py-2 rounded-lg hover:bg-blue-600 active:scale-95 transition'>افزودن</button>
    </form>
  )
}

export default WishlistForm