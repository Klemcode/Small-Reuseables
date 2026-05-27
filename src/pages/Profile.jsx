
import React from 'react'
import { useParams } from 'react-router-dom'

const Profile = () => {

    const params = useParams()
    console.log(params);

  return (
    <div>This is the Profile for: {params.user}</div>
  )
}

export default Profile

