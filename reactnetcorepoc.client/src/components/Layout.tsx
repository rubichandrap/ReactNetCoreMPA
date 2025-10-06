import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b-4 border-black shadow-lg">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <a href="/" className="text-2xl font-black text-black hover:text-neubrutalism-blue transition-colors">
                ReactNetCorePOC
              </a>
            </div>
            <ul className="flex space-x-6">
              <li><a href="/" className="font-semibold text-black hover:text-neubrutalism-blue transition-colors">Home</a></li>
              <li><a href="/Home/About" className="font-semibold text-black hover:text-neubrutalism-blue transition-colors">About</a></li>
              <li><a href="/Home/Contact" className="font-semibold text-black hover:text-neubrutalism-blue transition-colors">Contact</a></li>
              <li><a href="/Account/Login" className="font-semibold text-black hover:text-neubrutalism-blue transition-colors">Login</a></li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="min-h-screen">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-neubrutalism-black text-white py-8 mt-16">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg font-bold">&copy; 2024 ReactNetCorePOC. Built with React and .NET Core.</p>
          <p className="text-sm mt-2">Neubrutalism design meets modern web development</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
