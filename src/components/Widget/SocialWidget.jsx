import React from 'react'
// import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
import Div from '../Div';

export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1">
      <a href='https://www.linkedin.com/company/epexai-labs/' target='_blank' className="cs-center">
        <Icon icon="fa6-brands:linkedin-in" />
      </a>
      {/* <Link to='/' className="cs-center">
        <Icon icon="fa6-brands:twitter" />               
      </Link>
      <Link to='/' className="cs-center">
        <Icon icon="fa6-brands:youtube" />              
      </Link>
      <Link to='/' className="cs-center">
        <Icon icon="fa6-brands:slack" />
      </Link> */}
    </Div>
  )
}
