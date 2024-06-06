import React from 'react'
import SideBar from '../sidebar/SideBar'

const Layout = (props) => {
  return (
    <div>
      <SideBar />
      <section className='home main-content' id='home'>
        {props.children}
      </section>
    </div>
  )
}

export default Layout
