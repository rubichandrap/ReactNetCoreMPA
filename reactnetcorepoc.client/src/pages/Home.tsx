import React, { useState, useEffect } from 'react'

interface WeatherForecast {
  date: string
  temperatureC: number
  temperatureF: number
  summary: string
}

const Home: React.FC = () => {
  const [count, setCount] = useState(0)
  const [weatherData, setWeatherData] = useState<WeatherForecast[] | null>(null)

  useEffect(() => {
    // Fetch weather data
    fetch('/WeatherForecast')
      .then(response => response.json())
      .then(data => setWeatherData(data))
      .catch(error => console.error('Error fetching weather:', error))
  }, [])

  return (
    <div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-neubrutalism-yellow to-neubrutalism-pink border-b-4 border-black py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-black text-black mb-6">Welcome to PowerApproval</h1>
          <p className="text-lg font-semibold text-black mb-8">A modern React + .NET Core application with neubrutalism design and SEO-friendly server-side rendering</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/Home/About" className="bg-white border-4 border-black shadow-neubrutalism-sm font-bold text-black px-8 py-4 hover:shadow-neubrutalism hover:translate-x-1 hover:translate-y-1 transition-all duration-200">
              Learn More
            </a>
            <a href="/Account/Login" className="bg-neubrutalism-blue border-4 border-black shadow-neubrutalism-sm font-bold text-black px-8 py-4 hover:shadow-neubrutalism hover:translate-x-1 hover:translate-y-1 transition-all duration-200">
              Get Started
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white border-4 border-black shadow-neubrutalism p-8 hover:shadow-neubrutalism-lg transition-all duration-200">
            <h3 className="text-xl font-bold text-black mb-4">🚀 Server-Side Rendering</h3>
            <p className="text-black">SEO-friendly pages with server-side rendering for better search engine visibility and faster initial page loads.</p>
          </div>
          
          <div className="bg-white border-4 border-black shadow-neubrutalism p-8 hover:shadow-neubrutalism-lg transition-all duration-200">
            <h3 className="text-xl font-bold text-black mb-4">⚡ React Interactivity</h3>
            <p className="text-black">Rich client-side interactivity powered by React components with Tailwind CSS for modern styling.</p>
          </div>
          
          <div className="bg-white border-4 border-black shadow-neubrutalism p-8 hover:shadow-neubrutalism-lg transition-all duration-200">
            <h3 className="text-xl font-bold text-black mb-4">🔧 .NET Core API</h3>
            <p className="text-black">Robust backend API with Swagger documentation and cookie-based authentication.</p>
          </div>
          
          <div className="bg-white border-4 border-black shadow-neubrutalism p-8 hover:shadow-neubrutalism-lg transition-all duration-200">
            <h3 className="text-xl font-bold text-black mb-4">🎨 Neubrutalism Design</h3>
            <p className="text-black">Bold, colorful design with thick borders, shadows, and vibrant colors that make your app stand out.</p>
          </div>
          
          <div className="bg-white border-4 border-black shadow-neubrutalism p-8 hover:shadow-neubrutalism-lg transition-all duration-200">
            <h3 className="text-xl font-bold text-black mb-4">📱 Responsive Layout</h3>
            <p className="text-black">Mobile-first design that works perfectly on all devices with modern CSS Grid and Flexbox.</p>
          </div>
          
          <div className="bg-white border-4 border-black shadow-neubrutalism p-8 hover:shadow-neubrutalism-lg transition-all duration-200">
            <h3 className="text-xl font-bold text-black mb-4">🔐 Secure Authentication</h3>
            <p className="text-black">Built-in authentication system with cookie-based sessions and role-based authorization.</p>
          </div>
        </div>

        {/* Interactive React Components */}
        <div className="bg-white border-4 border-black shadow-neubrutalism p-8 mb-8">
          <h2 className="text-2xl font-bold text-center mb-8 text-black">Interactive React Components</h2>
          
          {/* Counter Component */}
          <div className="bg-neubrutalism-yellow border-4 border-black shadow-neubrutalism-sm p-6 mb-6">
            <h3 className="text-lg font-bold mb-4 text-black">Counter Component</h3>
            <button 
              onClick={() => setCount(count + 1)}
              className="bg-neubrutalism-pink border-4 border-black shadow-neubrutalism-sm font-bold text-white px-6 py-3 hover:shadow-neubrutalism hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
            >
              Count is {count}
            </button>
          </div>
          
          {/* Weather Widget */}
          {weatherData && (
            <div className="bg-neubrutalism-blue border-4 border-black shadow-neubrutalism-sm p-6">
              <h3 className="text-lg font-bold mb-4 text-black">Weather Forecast</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {weatherData.slice(0, 3).map((forecast: WeatherForecast, index: number) => (
                  <div key={index} className="bg-white border-4 border-black shadow-neubrutalism-sm p-4 text-center">
                    <div className="font-bold text-black">{forecast.date}</div>
                    <div className="text-xl font-bold text-neubrutalism-pink">{forecast.temperatureC}°C</div>
                    <div className="font-semibold text-black">{forecast.summary}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default Home
