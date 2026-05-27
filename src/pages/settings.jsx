import React from 'react'

const Settings = () => {
  return (

    <div>

      {/* Heading */}
      <div className='mb-4'>

        <h1 className='fw-bold'>
          Settings
        </h1>

        <p className='text-muted'>
          Manage your account settings
        </p>

      </div>

      {/* Settings Card */}
      <div className='card shadow-sm border-0 p-4'>

        <form>

          {/* Full Name */}
          <div className='mb-4'>

            <label className='form-label fw-semibold'>
              Full Name
            </label>

            <input
              type="text"
              className='form-control'
              placeholder='Enter your full name'
            />

          </div>

          {/* Email */}
          <div className='mb-4'>

            <label className='form-label fw-semibold'>
              Email Address
            </label>

            <input
              type="email"
              className='form-control'
              placeholder='Enter your email'
            />

          </div>

          {/* Password */}
          <div className='mb-4'>

            <label className='form-label fw-semibold'>
              Password
            </label>

            <input
              type="password"
              className='form-control'
              placeholder='Enter new password'
            />

          </div>

          {/* Notifications */}
          <div className='form-check form-switch mb-4'>

            <input
              className='form-check-input'
              type="checkbox"
              id="notifications"
            />

            <label
              className='form-check-label'
              htmlFor="notifications"
            >
              Enable Notifications
            </label>

          </div>

          {/* Buttons */}
          <div className='d-flex gap-3'>

            <button
              type="submit"
              className='btn btn-primary'
            >
              Save Changes
            </button>

            <button
              type="button"
              className='btn btn-outline-secondary'
            >
              Cancel
            </button>

          </div>

        </form>

      </div>

    </div>
  )
}

export default Settings