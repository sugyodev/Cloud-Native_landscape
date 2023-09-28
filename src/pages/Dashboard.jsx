import React, { useState } from 'react'
import DummyJson from './Dummy.const'

const MAX_NO = 4
function Dashboard() {
  // console.log(DummyJson)
  return (
    <div className="dashboard w-full min-h-screen h-fit sm:p-8 p-4">
      <h1 className='text-gray-600 text-4xl font-semibold px-4'>Cloud Native LandScape</h1>
      <div className='border mt-4 runded-lg flex flex-wrap border-gray-300 px-4 sm:px-8 py-4 w-fit max-w-[100%] rounded-lg justify-center'>
        {
          DummyJson.map((val, ind) => (
            <div key={ind} className='p-4 h-fit w-full sm:w-fit border-[#24bdae] border min-w-[100px] m-1 rounded my-2' style={{flex: '1 0 auto'}}>
              <h2 className='sm:text-lg text-gray-400 font-semibold text-center uppercase'>{val?.label}</h2>
              <div className={`${val?.subset?.length > MAX_NO ? 'mx-auto flex flex-wrap gap-4 justify-center sm:max-w-[540px] max-w-[350px]' : ''} mt-4`}>
                {val?.subset.map((subData, no) => (
                  <div key={no} className='flex my-2 gap-3 items-center justify-center text-gray-600 font-semibold text-sm'>
                    <img src={subData?.icon} className='max-w-[250px] sm:max-w-auto h-auto w-auto max-h-[80px] min-h-[50px]' alt='landscape'/>
                    <p className=''>{subData?.label}</p>
                  </div>
                ))}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Dashboard;
