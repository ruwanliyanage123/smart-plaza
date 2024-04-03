import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const NoUrl = () => {
  const params = useParams();
  const logation = useLocation();
  console.log(params["*"]);
  console.log(logation.pathname);

  return (
    <div className=' w-full flex flex-col items-center justify-center'>404</div>
  )
}

export default NoUrl