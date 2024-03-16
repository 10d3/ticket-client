import React from 'react'

function Dashboard() {
  return (
    <section className='w-full h-fit'>
        <div className='flex flex-col md:flex-row' >
            <div className='sidebar hidden md:flex flex-col w-[15%] justify-between'>
                <div className=''>
                    <h1>logo</h1>
                </div>
                <div>
                    <h1>Home</h1>
                    <h1>Dashboard</h1>
                </div>
                <div>
                    <h1>create events</h1>
                </div>
            </div>
            <div className='w-'>
                dashboard
            </div>
        </div>
    </section>
  )
}

export default Dashboard