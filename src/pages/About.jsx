import React, { shoutName }  from 'react'
import Button from '../components/Button'

const About = () => {
  return (
<div className="container py-5">
  <div className="card shadow-lg border-0">
    <div className="card-body text-center p-5">

      <h1 className="display-5 fw-bold mb-3">
        About Us
      </h1>

      <p className="lead text-muted mb-4">
        Welcome to our application. We are committed to building
        simple, efficient, and user-friendly solutions that make
        everyday tasks easier and more enjoyable.
      </p>

      <div className="row mt-4">
        <div className="col-md-4">
          <h4>🎯 Mission</h4>
          <p className="text-muted">
            Deliver high-quality digital experiences for our users.
          </p>
        </div>

        <div className="col-md-4">
          <h4>🚀 Vision</h4>
          <p className="text-muted">
            Become a trusted platform that empowers people through technology.
          </p>
        </div>

        <div className="col-md-4">
          <h4>💡 Values</h4>
          <p className="text-muted">
            Innovation, simplicity, reliability, and excellence.
          </p>
        </div>
      </div>

      <div className="mt-5">
        <Button
          title="Learn More"
          color="btn-success"
          func={shoutName}
        />
      </div>

    </div>
  </div>
</div>















  )
}

export default About