import React, { useState } from 'react'
import DummyJson from './Dummy.const'

const MAX_SM = 4
const MAX_MD = 8
const MAX_LG = 12

function Dashboard() {
  const [showSidebar, setShowSidebar] = useState(false)
  const [year, setYear] = useState('')
  const [label, setLabel] = useState('')

  const isFilterMatched = (y_val = '', l_val = '') => {
    const isLabelMatched = l_val.toUpperCase().indexOf(label.toUpperCase()) > -1
    const isYearMatched = y_val.toString().indexOf(year.toString()) > -1

    if (year && label) {
      return isYearMatched && isLabelMatched
    } else if (year) {
      return isYearMatched
    } else if (label) {
      return isLabelMatched
    } else {
      return false
    }
  }

  const drawFlow = (jsonData) => (
    jsonData.map((val, ind) => (
      <div key={ind} className='p-4 h-fit w-full sm:w-fit border-[#24bdae] border min-w-[100px] m-1 rounded my-2' style={{ flex: '1 0 auto' }}>
        <h2 className={`${val?.subgraph ? 'sm:text-lg text-base text-gray-400' : 'sm:text-base text-[15px] text-gray-500'} font-semibold text-center uppercase`}>{val?.label}</h2>
        {val?.subset &&
          <div className={`${val?.subset?.length > MAX_SM ? 'mx-auto flex flex-wrap gap-4 justify-center max-w-[350px]' : ''} ${val?.subset?.length > MAX_MD ? 'md:max-w-[450px]' : ''}  ${val?.subset?.length > MAX_LG ? 'md:max-w-[600px]' : ''} mt-4`}>
            {val?.subset.map((subData, no) => (
              <div key={no} className='my-2 text-gray-800 font-semibold text-sm w-fit text-center mx-auto'>
                <img src={subData?.icon} className='max-w-[250px] sm:max-w-auto h-auto w-auto max-h-[80px] min-h-[50px]' alt='landscape' />
                <p className={`${isFilterMatched(subData?.year, subData?.label) && 'bg-[#00ffaaa6]'} w-fit mx-auto`}>{subData?.label}</p>
              </div>
            ))
            }
          </div>
        }
        {val?.subgraph && <div className='flex flex-wrap'>{drawFlow(val?.subgraph)}</div>}
      </div>
    ))
  )
  return (
    <div className="dashboard w-full min-h-screen h-fit">
      <div className={`shadow-right w-[300px] min-h-screen h-fit left-0 pt-12 p-6 z-[2] absolute bg-white transition-all duration-300 shrink-0 ${showSidebar ? "block" : "hidden md:block"}`}>
        <div className='flex gap-4'>
          <div className='mx-2 cursor-pointer md:hidden text-xl' onClick={() => setShowSidebar(false)}>
            <i className='fa fa-bars'></i>
          </div>
          <h1 className='text-gray-600 text-xl sm:text-2xl font-semibold'>Filters</h1>
        </div>
        <div className='py-4 mt-2'>
          <div className='flex gap-2 items-center text-gray-700'>
            <p className='w-16'>Year&nbsp;:</p>
            <input
              value={year}
              onChange={(e) => setYear(e.target.value)}
              type="number"
              className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-gray-700 block w-full p-2.5" placeholder="2020" />
          </div>
          <div className='flex gap-2 items-center text-gray-700 mt-2'>
            <p className='w-16'>Label&nbsp;:</p>
            <input
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              type="text"
              className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-gray-700 block w-full p-2.5" placeholder="Type label ..." />
          </div>
        </div>
      </div>
      {showSidebar && <div className='opacity-50 md:hidden bg-black sm:block fixed inset-0' onClick={() => { setShowSidebar(false) }}></div>}
      <div className='md:ml-[300px] transition-all duration-300 sm:px-8 p-4'>
        <div className='flex px-4 gap-4 items-center h-10'>
          <div className='mx-2 cursor-pointer md:hidden text-xl' onClick={() => setShowSidebar(true)}><i className='fa fa-bars'></i></div>
          <h1 className='text-gray-600 text-2xl sm:text-4xl font-semibold'>Cloud Native LandScape</h1>
        </div>
        <div className='border mt-4 runded-lg flex flex-wrap border-gray-300 px-4 sm:px-8 py-4 w-fit max-w-[100%] rounded-lg justify-center'>
          {
            drawFlow(DummyJson)
          }
        </div>
      </div>
    </div >
  );
}

export default Dashboard;
