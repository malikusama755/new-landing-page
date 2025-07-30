import React from 'react'
import LoginForm from './loginform'

const Hero = () => {
    return (
        <div className="bg-black bg-cover bg-center h-screen flex items-center justify-center text-white">
            <div className=" bg-opacity-80 rounded-l-lg shadow-lg flex-1 h-3/4 flex flex-col justify-center items-start p-12 max-w-xl">
                <h1 className="text-4xl font-bold mb-4">Citadel 7 Corporate Tower – The Future of Real Estate Investing in Pakistan</h1>
                <p className="text-lg">Citadel 7 by Chakor Ventures is a CDA-approved corporate tower in Blue Area, Islamabad. If you're exploring real estate investing in Pakistan, this is one of the best and safest investment options available today.</p>
            <button
                className="bg-blue-600 mt-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
                type="submit"
            >Schedule A Visit  Now! (CTA Button)
            </button>
            </div>
            <div className="">
                <LoginForm />
            </div>
        </div>
    )
}

export default Hero