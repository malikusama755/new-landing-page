import React from 'react'

const Location = () => {
    return (
        <div id="location" className="bg-amber-700 bg-cover bg-center min-h-screen flex flex-col md:flex-row items-center justify-center text-white px-4 py-10">
            <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
                  <img src="horizontal.png" alt="" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-4 sm:p-8 md:p-12 max-w-xl">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Location</h1>
                <p className="text-base sm:text-lg mb-6">
                    Located right across from Centaurus Mall and PIMS Hospital, it offers modern offices, a retail mall, food court, and secure parking — all in one place.
                </p>
                <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full sm:w-auto focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Schedule A Visit Now!
                </button>
            </div>
        </div>
    )
}

export default Location