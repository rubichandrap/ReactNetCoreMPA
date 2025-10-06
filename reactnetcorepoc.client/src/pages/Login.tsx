import React, { useState } from 'react'

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/Account/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          email: formData.email,
          password: formData.password,
          rememberMe: formData.rememberMe.toString()
        })
      })
      
      if (response.ok) {
        window.location.href = '/Dashboard'
      } else {
        alert('Invalid email or password')
      }
    } catch (error) {
      console.error('Error logging in:', error)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <div className="max-w-md w-full">
        {/* Login Form */}
        <div className="bg-white border-4 border-black shadow-neubrutalism p-8">
          <h2 className="text-3xl font-bold text-center text-black mb-8">Login to ReactNetCorePOC</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-lg font-semibold text-black mb-2">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-4 border-4 border-black shadow-neubrutalism-sm focus:shadow-neubrutalism focus:outline-none transition-all duration-200 text-lg"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-lg font-semibold text-black mb-2">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full p-4 border-4 border-black shadow-neubrutalism-sm focus:shadow-neubrutalism focus:outline-none transition-all duration-200 text-lg"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="w-5 h-5 accent-neubrutalism-yellow"
              />
              <label htmlFor="rememberMe" className="text-lg font-semibold text-black">Remember me</label>
            </div>
            
            <button
              type="submit"
              className="w-full bg-neubrutalism-yellow border-4 border-black shadow-neubrutalism-sm font-bold text-black px-8 py-4 hover:shadow-neubrutalism hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
            >
              Login
            </button>
          </form>
          
          {/* Demo Credentials */}
          <div className="mt-8 pt-6 border-t-4 border-black">
            <h3 className="text-lg font-bold text-black mb-4">Demo Credentials</h3>
            <div className="bg-neubrutalism-yellow border-4 border-black shadow-neubrutalism-sm p-4">
              <p className="font-semibold text-black mb-2"><strong>Email:</strong> admin@example.com</p>
              <p className="font-semibold text-black"><strong>Password:</strong> P@ssword1234!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
