import React from 'react'
import LoginForm from './loginform'

const Hero = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background YouTube Video */}
      <div className="absolute inset-0 z-0">
        <div className="w-[177.77vh] h-screen absolute top-0 left-1/2 -translate-x-1/2">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/ymRGlHe5CLE?autoplay=1&mute=1&controls=0&loop=1&playlist=ymRGlHe5CLE&modestbranding=1&rel=0&showinfo=0"
            title="Background Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10"></div>

      {/* Foreground Content */}
      <div className="relative z-20 w-full h-full flex items-center justify-center px-4 md:px-12">
        <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-center gap-6">
          {/* Text Block */}
          <div className="text-white rounded-lg p-6 w-full md:w-[45%] max-w-xl">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 leading-snug">
              Citadel 7 Corporate Tower – The Future of Real Estate Investing in Pakistan
            </h1>
            <p className="text-sm md:text-base">
              Citadel 7 by Chakor Ventures is a CDA-approved corporate tower in Blue Area, Islamabad.
              If you're exploring real estate investing in Pakistan, this is one of the best and safest investment options available today.
            </p>
          </div>

          {/* Login Form Block */}
          <div className="invert p-6 w-full md:w-[35%] max-w-md">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
