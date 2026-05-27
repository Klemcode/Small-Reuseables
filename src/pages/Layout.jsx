import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (

    <div className='d-flex'>

      {/* Sidebar */}
      <div
        className='bg-dark text-white p-4'
        style={{
          width: '235px',
          minHeight: '93vh'
        }}
      >

        <h2 className='mb-4'>
          Employee Panel
        </h2>

        <div className='d-flex flex-column gap-3'>

          <Link
            to="/employee/dashboard"
            className='text-white text-decoration-none'
          >
            Dashboard
          </Link>

          <Link
            to="/employee/profile"
            className='text-white text-decoration-none'
          >
            Profile
          </Link>

          <Link
            to="/employee/settings"
            className='text-white text-decoration-none'
          >
            Settings
          </Link>

            <Link
            to="/employee/fetch"
            className='text-white text-decoration-none'
          >
            Fetch
          </Link>

        </div>

      </div>

      {/* Main Content */}
      <div
        className='p-4'
        style={{
          flex: 1,
          backgroundColor: '#f4f4f4'
        }}
      >

        {/* Topbar */}
        <div
          className='bg-white shadow-sm p-3 mb-4 rounded'
        >
          <h3>
            Welcome Clement 
          </h3>
        </div>

        {/* Child Pages Render Here */}
        <Outlet />

      </div>

    </div>
  )
}

export default Layout