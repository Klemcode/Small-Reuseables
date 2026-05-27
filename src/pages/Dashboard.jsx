import React from 'react'

const Dashboard = () => {
  return (

    <div>

      {/* Heading */}
      <div className='mb-4'>
        <h1 className='fw-bold'>
          Dashboard
        </h1>

        <p className='text-muted'>
          For Admin Only 
        </p>
      </div>

      {/* Stats Cards */}
      <div className='row g-4'>

        <div className='col-md-4'>
          <div className='card shadow-sm border-0 p-3'>
            <h5>Total Users</h5>

            <h2 className='fw-bold text-primary'>
              1,250
            </h2>
          </div>
        </div>

        <div className='col-md-4'>
          <div className='card shadow-sm border-0 p-3'>
            <h5>Total Sales</h5>

            <h2 className='fw-bold text-success'>
              ₦450,000
            </h2>
          </div>
        </div>

        <div className='col-md-4'>
          <div className='card shadow-sm border-0 p-3'>
            <h5>Pending Orders</h5>

            <h2 className='fw-bold text-danger'>
              18
            </h2>
          </div>
        </div>

      </div>

      {/* Recent Activities */}
      <div className='card shadow-sm border-0 p-4 mt-5'>

        <h4 className='mb-4'>
          Recent Activities
        </h4>

        <div className='d-flex justify-content-between border-bottom py-2'>
          <span>New user registered</span>
          <span className='text-muted'>
            2 mins ago
          </span>
        </div>

        <div className='d-flex justify-content-between border-bottom py-2'>
          <span>Payment received</span>
          <span className='text-muted'>
            10 mins ago
          </span>
        </div>

        <div className='d-flex justify-content-between border-bottom py-2'>
          <span>New product added</span>
          <span className='text-muted'>
            30 mins ago
          </span>
        </div>

        <div className='d-flex justify-content-between py-2'>
          <span>Server updated</span>
          <span className='text-muted'>
            1 hour ago
          </span>
        </div>

      </div>

    </div>
  )
}

export default Dashboard