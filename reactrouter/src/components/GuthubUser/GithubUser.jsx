import React from 'react'
import { useParams } from 'react-router-dom'
const GithubUser = () => {
    const username = useParams();
  return (
    <div>GithubUser : {username}</div>
  )
}

export default GithubUser