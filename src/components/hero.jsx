import React from 'react'
import LoginForm from './loginform'

const Hero = () => {
  return (
    <div className="bg-black bg-cover bg-center min-h-screen flex flex-col md:flex-row items-center justify-center py-10 px-4">
      <div className="bg-black/80 mt-5 rounded-t-lg md:rounded-l-lg md:rounded-tr-none flex-1 flex flex-col justify-center text-white items-start p-6 md:p-12 max-w-xl w-full mb-4 md:mb-0">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Citadel 7 Corporate Tower – The Future of Real Estate Investing in Pakistan
        </h1>
        <p className="text-base md:text-lg">
          Citadel 7 by Chakor Ventures is a CDA-approved corporate tower in Blue Area, Islamabad. If you're exploring real estate investing in Pakistan, this is one of the best and safest investment options available today.
        </p>
      </div>
      <div className="my-5 rounded-b-lg md:rounded-r-lg md:rounded-bl-none flex-1 flex items-center justify-center p-6 md:p-12 max-w-md w-full">
        <LoginForm />
      </div>
    </div>
  )
}

export default Hero