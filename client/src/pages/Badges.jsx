import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Badges() {
  const [badges, setBadges] = useState([])

  useEffect(() => {
    const fetchBadges = async () => {

    try{
      const response = axios.get('/api/user/badges')
      setBadges(response.data)
    }catch(err){
      console.error('error fetching the badges', err)
    }
  } 
  fetchBadges()
  }, [])

  
  return (
    <div className="bg-gray-100 min-h-screen p-8">
    <h1 className="text-3xl font-bold mb-8 text-center">Your Badges</h1>
    
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {badges.map((badge) => (
        <div key={badge.id} className={`p-6 rounded-lg shadow-lg ${badge.unlocked ? 'bg-green-100' : 'bg-gray-200 opacity-50'}`}>
          <div className="text-center">
            {/* Badge Icon */}
            <div className="mb-4">
              <img
                src={badge.icon} // Use actual badge icon from backend
                alt={badge.name}
                className="w-20 h-20 mx-auto"
              />
            </div>
            {/* Badge Name */}
            <h2 className="text-xl font-semibold">{badge.name}</h2>
            {/* Badge Status */}
            <p className="text-sm text-gray-500">{badge.unlocked ? 'Unlocked' : 'Locked'}</p>
            {/* Badge Description */}
            <p className="text-gray-600 mt-2 text-sm">{badge.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Badges
