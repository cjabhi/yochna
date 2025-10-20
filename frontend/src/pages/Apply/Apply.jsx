import React from 'react'
import { useParams } from 'react-router-dom'
import Career from '../../components/Career/Career'

const Apply = ({url}) => {
  const { id } = useParams()
  return (
    <>
    <Career url={url} jobId={id} />
    </>
  )
}

export default Apply
