import React, { useState, useEffect } from 'react'

const Dashboard: React.FC = () => {
  const [stats] = useState({
    projects: 42,
    users: 128,
    uptime: 99.9,
    apiCalls: 1200
  })

  const [isAnimating, setIsAnimating] = useState(false)

  const animateStats = () => {
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), 1000)
  }

  useEffect(() => {
    const interval = setInterval(animateStats, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        {/* Dashboard Header */}
        <div className="bg-neubrutalism-blue border-4 border-black shadow-neubrutalism p-8 mb-8 text-center">
          <h1 className="text-3xl font-black text-black mb-4">Welcome to Dashboard</h1>
          <p className="text-lg font-semibold text-black">Hello, Admin! Here's your ReactNetCorePOC dashboard.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className={`bg-neubrutalism-pink border-4 border-black shadow-neubrutalism-sm p-6 text-center transition-all duration-500 ${isAnimating ? 'animate-bounce' : ''}`}>
            <div className="text-3xl font-black text-white mb-2">{stats.projects}</div>
            <div className="text-base font-semibold text-white">Projects</div>
          </div>
          
          <div className={`bg-neubrutalism-green border-4 border-black shadow-neubrutalism-sm p-6 text-center transition-all duration-500 ${isAnimating ? 'animate-bounce' : ''}`}>
            <div className="text-3xl font-black text-black mb-2">{stats.users}</div>
            <div className="text-base font-semibold text-black">Users</div>
          </div>
          
          <div className={`bg-neubrutalism-orange border-4 border-black shadow-neubrutalism-sm p-6 text-center transition-all duration-500 ${isAnimating ? 'animate-bounce' : ''}`}>
            <div className="text-3xl font-black text-black mb-2">{stats.uptime}%</div>
            <div className="text-base font-semibold text-black">Uptime</div>
          </div>
          
          <div className={`bg-neubrutalism-purple border-4 border-black shadow-neubrutalism-sm p-6 text-center transition-all duration-500 ${isAnimating ? 'animate-bounce' : ''}`}>
            <div className="text-3xl font-black text-black mb-2">{stats.apiCalls}</div>
            <div className="text-base font-semibold text-black">API Calls</div>
          </div>
        </div>

        {/* Interactive Dashboard Components */}
        <div className="bg-white border-4 border-black shadow-neubrutalism p-8 mb-8">
          <h2 className="text-2xl font-bold text-center mb-8 text-black">Interactive Dashboard</h2>
          
          <div className="text-center">
            <button 
              onClick={animateStats}
              className="bg-neubrutalism-yellow border-4 border-black shadow-neubrutalism-sm font-bold text-black px-8 py-4 hover:shadow-neubrutalism hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
            >
              Refresh Stats
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="/" className="bg-neubrutalism-blue border-4 border-black shadow-neubrutalism-sm font-bold text-black px-8 py-4 hover:shadow-neubrutalism hover:translate-x-1 hover:translate-y-1 transition-all duration-200">
            Back to Home
          </a>
          <a href="/Account/Logout" className="bg-neubrutalism-red border-4 border-black shadow-neubrutalism-sm font-bold text-white px-8 py-4 hover:shadow-neubrutalism hover:translate-x-1 hover:translate-y-1 transition-all duration-200">
            Logout
          </a>
        </div>
      </main>
    </div>
  )
}

export default Dashboard
