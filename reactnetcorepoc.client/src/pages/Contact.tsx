import React, { useState } from 'react'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData)
      })
      
      if (response.ok) {
        alert('Thank you for your message! We\'ll get back to you soon.')
        setFormData({ name: '', email: '', message: '' })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        {/* Page Header */}
        <div className="bg-white border-4 border-black shadow-neubrutalism p-8 mb-8 text-center">
          <h1 className="text-3xl font-black text-black mb-4">Contact Us</h1>
          <p className="text-base font-semibold text-black">Get in touch with our development team</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white border-4 border-black shadow-neubrutalism p-8">
            <h2 className="text-2xl font-bold text-black mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-base font-semibold text-black mb-2">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border-4 border-black shadow-neubrutalism-sm focus:shadow-neubrutalism focus:outline-none transition-all duration-200 text-base"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-base font-semibold text-black mb-2">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border-4 border-black shadow-neubrutalism-sm focus:shadow-neubrutalism focus:outline-none transition-all duration-200 text-base"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-base font-semibold text-black mb-2">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full p-4 border-4 border-black shadow-neubrutalism-sm focus:shadow-neubrutalism focus:outline-none transition-all duration-200 text-base resize-vertical"
                />
              </div>
              
              <button
                type="submit"
                className="bg-neubrutalism-yellow border-4 border-black shadow-neubrutalism-sm font-bold text-black px-8 py-4 hover:shadow-neubrutalism hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-neubrutalism-blue border-4 border-black shadow-neubrutalism p-8">
            <h2 className="text-2xl font-bold text-black mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-neubrutalism-yellow border-4 border-black shadow-neubrutalism-sm p-4 text-2xl">📧</div>
                <div>
                  <h3 className="text-lg font-bold text-black">Email</h3>
                  <p className="text-base font-semibold text-black">admin@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-neubrutalism-pink border-4 border-black shadow-neubrutalism-sm p-4 text-2xl">🌐</div>
                <div>
                  <h3 className="text-lg font-bold text-black">Website</h3>
                  <p className="text-base font-semibold text-black">ReactNetCorePOC.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-neubrutalism-green border-4 border-black shadow-neubrutalism-sm p-4 text-2xl">💼</div>
                <div>
                  <h3 className="text-lg font-bold text-black">Company</h3>
                  <p className="text-base font-semibold text-black">ReactNetCorePOC Development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Contact
