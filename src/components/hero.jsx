import React from 'react'
import LoginForm from './loginform'

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col md:flex-row items-center justify-center py-10 px-4 overflow-hidden">
      {/* Background Video */}
      <iframe
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://www.youtube.com/embed/ymRGlHe5CLE?autoplay=1&mute=1&controls=1&loop=1&playlist=ymRGlHe5CLE"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10"></div>
      {/* Content */}
      <div className="relative z-20 bg-black/80 mt-5 rounded-t-lg md:rounded-l-lg md:rounded-tr-none flex-1 flex flex-col justify-center text-white items-start p-6 md:p-12 max-w-xl w-full mb-4 md:mb-0">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Citadel 7 Corporate Tower – The Future of Real Estate Investing in Pakistan
        </h1>
        <p className="text-base md:text-lg">
          Citadel 7 by Chakor Ventures is a CDA-approved corporate tower in Blue Area, Islamabad. If you're exploring real estate investing in Pakistan, this is one of the best and safest investment options available today.
        </p>
      </div>
      <div className="relative z-20 my-5 rounded-b-lg md:rounded-r-lg md:rounded-bl-none flex-1 flex items-center justify-center p-6 md:p-12 max-w-md w-full">
        <LoginForm />
      </div>
    </div>
  )
}

export default Hero