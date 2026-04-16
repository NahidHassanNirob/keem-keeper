import React from "react";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 my-5">
      <div className=" text-center space-y-3">
        <h2 className="text-3xl font-bold text-[#244D3F]">
          Friends to keep close in your life
        </h2>
        <p className="text-[#357a63] ">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <button className="btn bg-[#244D3F] text-white">
            + Add Friend
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 my-5">
        <div className="text-center p-5  shadow bg-white rounded-md">
            <h2 className="text-[#244D3F] text-xl font-bold">10</h2>
            <p>Total Friends</p>
        </div>
        <div className="text-center p-5  shadow bg-white rounded-md">
            <h2 className="text-[#244D3F] text-xl font-bold">10</h2>
            <p>Total Friends</p>
        </div>
        <div className="text-center p-5  shadow bg-white rounded-md">
            <h2 className="text-[#244D3F] text-xl font-bold">10</h2>
            <p>Total Friends</p>
        </div>
        <div className="text-center p-5  shadow bg-white rounded-md">
            <h2 className="text-[#244D3F] text-xl font-bold">10</h2>
            <p>Total Friends</p>
        </div>
        
      </div>
    </div>
  );
};

export default Banner;
