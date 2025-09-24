import React from 'react'

function WishlistItem({ item, onToggle, onDelete }) {
  return (
    <div className='flex items-center justify-between bg-gray-100 dark:bg-gray-700 rounded-lg px-4 py-2 mb-2 hover:shadow-md transition-all suration-200'>
      <span onClick={() => onToggle(item.id)}
        className={`cursor-pointer select-none transition-colors ${
          item.purchased ? "line-through text-gray-400" : "hover:text-primary"
        }`}>
        {item.name}
      </span>
      <button onClick={() => onDelete(item.id)} className="flex items-center justify-center p-1 text-red-500 hover:text-red-600 active:scale-90 transition-transform duration-150" aria-label="حذف آیتم">✕</button>
    </div>
  )
}

export default WishlistItem