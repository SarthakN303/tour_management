import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'

import { servicesData } from '../assets/data/stuff'

const Services = () => {
  return (
    <>
       {
        servicesData.map((item,index)=><Col lg="3" md="6" sm="12" className='mb-4' key={index}><ServiceCard item={item}/></Col>)
       }
    </>
  )
}

export default Services