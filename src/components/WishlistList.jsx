import React from 'react'
import WishlistItem from './WishlistItem'

function WishlistList({items, onToggle, onDelete}) {
  if(items.length === 0) {
    return <p className="text-gray-500">لیست خالی است...</p>
  }
  return (
    <div>
      {items.map((item) => (
        <WishlistItem key={item.id} item={item} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </div>
  )
}

export default WishlistList