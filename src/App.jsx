import React, { useEffect, useState } from 'react'
import WishlistForm from './components/WishlistForm'
import WishlistList from './components/WishlistList'

function App() {
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem("wishlist")
    return saved ? JSON.parse(saved) : []
  })
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theem") === "dark"
  })

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist))
  }, [wishlist])

  useEffect(() => {
    if(darkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else{
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  },[darkMode])


  const addHandler = (item) => {
    setWishlist([...wishlist, item])
  }

  const toggleHandler = (id) => {
    setWishlist(wishlist.map((item) => item.id === id ? { ...item, purchased: !item.purchased } : item))
  }
 
  const deleteHandler = (id) => {
    setWishlist(wishlist.filter((item) => item.id !==id))
  }

  return (
    <div className='min-h-screen bg-gray-50 dark:bg-gray-900 p-6 text-gray-800 dark:text-gray-100 transition-colors'>
      <div className='max-w-lg mx-auto'>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            📝 Wishlist Manager
          </h1>
          <button onClick={() => setDarkMode(!darkMode)} className="px-2.5 pb-3 pt-2 rounded-lg bg-primary text-white hover:bg-blue-600 active:scale-95 transition-all duration-200">
            {darkMode ? "☀️ روشن" : "🌙 تاریک"}
          </button>
        </div>
        <div className="rounded-xl shadow-lg bg-white dark:bg-gray-800 p-5 transition-colors">
          <WishlistForm onAdd={addHandler} />
          <WishlistList items={wishlist} onToggle={toggleHandler} onDelete={deleteHandler} />
        </div>
      </div>
    </div>
  )
}

export default App