import React from 'react'
import SavedShows from '../Component/SavedShows'

const Account = () => {
  return (
    <div className="w-full text-white">
       <img
          className="w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0ef67cc5-0aa7-47cf-87bd-7f595afc7cfb/728618d9-9274-46ab-9850-1015ff9c05df/US-en-20221107-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
      <div className="absolute top-[20%] p-4 md:p-8">
        <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
      </div>
      <SavedShows />
    </div>
  )
}

export default Account
