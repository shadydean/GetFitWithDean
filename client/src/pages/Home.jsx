import React from 'react'

function Home() {
  return (
    <div className="min-h-screen">
      <section className="bg-cover bg-center h-screen" style={{backgroundImage: `url(https://i.pinimg.com/originals/2b/03/ce/2b03cec90b46e701a27369634d264336.jpg)`}}>
        <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50 text-white">
          <h1 className="text-4xl font-bold mb-4">Transform your fitness journey!</h1>
          <p className="text-lg mb-6">Unlock your potential with personalized gym courses</p>
          <a href="/courses" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md">
              Join Now
          </a>
        </div>
      </section>

      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Personalized Courses</h3>
            <p>Choose the course that fits your fitness level, from Beginner to Advanced.</p>
          </div>
        </div>
      </section>

      <section className="py-16 text-center bg-white">
        <h2 className="text-3xl font-bold mb-8">Our Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-100 shadow-md p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Beginner</h3>
            <p>Learn basic movements and techniques</p>
          </div>
          <div className="bg-gray-100 shadow-md p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Intermediate</h3>
            <p>Learn more advanced movements and techniques</p>
          </div>
          <div className="bg-gray-100 shadow-md p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Advanced</h3>
            <p>Learn even more advanced movements and techniques</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-8">Earn Badges for Consistency</h2>
        <p className="mb-4">Stay motivated by earning badges as you complete your courses!</p>
        <a href="/badges" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md">
          Check Out Your Badges
        </a>
      </section>

      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">Leaderboard</h2>
        <p className="mb-4">See where you rank against others!</p>
        <a href="/leaderboard" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md">
          View Leaderboard
        </a>
      </section>

      <section className="py-16 bg-gray-100 text-center">
        <h2 className="mb-6 text-3xl font-bold ">Reviews</h2>
        <p className='mb-8'>Look what our users have to say about us</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white shadow-md p-6 rounded-lg">
            <p className="mb-2">This app is the best! I've been using it for a year now and love the personalized training.</p>
            <p className="text-sm text-gray-500">Dean Winchester, User</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <p className="mb-2">This app is the best! I've been using it for a year now and love the personalized training.</p>
            <p className="text-sm text-gray-500">Dean Winchester, User</p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-lg">
            <p className="mb-2">This app is the best! I've been using it for a year now and love the personalized training.</p>
            <p className="text-sm text-gray-500">Dean Winchester, User</p>
          </div>
        </div>
        
      </section>

    </div>
  )
}

export default Home
