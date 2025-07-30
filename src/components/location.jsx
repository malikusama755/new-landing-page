import React from 'react'

const Location = () => {
    return (
        <div className="bg-amber-700 bg-cover bg-center h-screen flex items-center justify-center text-white">
            <div className="max-w-2xl">
                <img src="/horizontal.png" alt="" />
            </div>
            <div className="flex-1 h-3/4 flex flex-col justify-center items-start p-12 max-w-xl">
                <h1 className="text-4xl font-bold mb-4">Location
                   </h1>
                <p className="text-lg">
                     Located right across from Centaurus Mall and PIMS Hospital, it offers modern offices, a retail mall, food court, and secure parking — all in one place.
                </p>
                <button
                    className="bg-blue-600 mt-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
                    type="submit"
                >Schedule A Visit  Now! (CTA Button)
                </button>
            </div>

        </div>
    )
}

export default Location
