import React from 'react'

interface LoadingSpinnerProps {
  pageName?: string
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ pageName = 'page' }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white border-4 border-black shadow-neubrutalism p-8 text-center max-w-md">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-neubrutalism-blue border-t-transparent mx-auto mb-4"></div>
        <h3 className="text-xl font-bold text-black mb-2">Loading {pageName}...</h3>
        <p className="text-gray-600">Please wait while we load the content</p>
      </div>
    </div>
  )
}

export default LoadingSpinner
