import React from 'react'

const About: React.FC = () => {
  return (
    <div>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="bg-white border-4 border-black shadow-neubrutalism p-8 mb-8 text-center">
          <h1 className="text-5xl font-black text-black mb-4">About ReactNetCorePOC</h1>
          <p className="text-2xl font-semibold text-black">Building modern web applications with React and .NET Core</p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white border-4 border-black shadow-neubrutalism p-6 hover:shadow-neubrutalism-lg transition-all duration-200">
            <h3 className="text-2xl font-bold text-black mb-4">Our Technology Stack</h3>
            <ul className="space-y-2">
              <li className="font-semibold text-black">🎯 <strong>Frontend:</strong> React 19 with TypeScript and Vite</li>
              <li className="font-semibold text-black">⚙️ <strong>Backend:</strong> .NET 8 with ASP.NET Core</li>
              <li className="font-semibold text-black">🏗️ <strong>Architecture:</strong> Multi-Page Application (MPA)</li>
              <li className="font-semibold text-black">🔍 <strong>SEO:</strong> Server-side rendered pages</li>
              <li className="font-semibold text-black">🎨 <strong>Design:</strong> Neubrutalism with Tailwind CSS</li>
            </ul>
          </div>

          <div className="bg-white border-4 border-black shadow-neubrutalism p-6 hover:shadow-neubrutalism-lg transition-all duration-200">
            <h3 className="text-2xl font-bold text-black mb-4">Why MPA?</h3>
            <p className="text-black mb-4">We chose a Multi-Page Application approach to combine the best of both worlds:</p>
            <ul className="space-y-2">
              <li className="font-semibold text-black">✅ SEO-friendly server-side rendering</li>
              <li className="font-semibold text-black">✅ Fast initial page loads</li>
              <li className="font-semibold text-black">✅ Rich React interactivity where needed</li>
              <li className="font-semibold text-black">✅ Progressive enhancement</li>
            </ul>
          </div>

          <div className="bg-white border-4 border-black shadow-neubrutalism p-6 hover:shadow-neubrutalism-lg transition-all duration-200">
            <h3 className="text-2xl font-bold text-black mb-4">Neubrutalism Design</h3>
            <p className="text-black mb-4">Our design philosophy embraces the bold, unapologetic aesthetic of neubrutalism:</p>
            <ul className="space-y-2">
              <li className="font-semibold text-black">🎨 Bold, vibrant colors</li>
              <li className="font-semibold text-black">📦 Thick, black borders</li>
              <li className="font-semibold text-black">🌊 Dramatic shadows</li>
              <li className="font-semibold text-black">💪 Strong typography</li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-neubrutalism-pink border-4 border-black shadow-neubrutalism p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-6">Experience the power of modern web development with our React + .NET Core stack.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/Account/Login" className="bg-neubrutalism-yellow border-4 border-black shadow-neubrutalism-sm font-bold text-black px-6 py-3 hover:shadow-neubrutalism hover:translate-x-1 hover:translate-y-1 transition-all duration-200">
              Login to Dashboard
            </a>
            <a href="/Home/Contact" className="bg-neubrutalism-blue border-4 border-black shadow-neubrutalism-sm font-bold text-black px-6 py-3 hover:shadow-neubrutalism hover:translate-x-1 hover:translate-y-1 transition-all duration-200">
              Contact Us
            </a>
          </div>
        </div>
      </main>

    </div>
  )
}

export default About
