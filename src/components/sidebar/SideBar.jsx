import React from 'react'

const SideBar = () => {
  return (
    <aside>
      <div className='menu'>
        <a href='@' className='Logo'>
          Logo
        </a>
        <nav className='navbar-lateral'>
          <ul>
            <li>
              {/* <a href='#home'>Home</a> */}
              <a href='@'>Home</a>
            </li>
            <li>
              {/* <a href='./HTML/Vista1.html'>Vista 1</a> */}
              <a href='@'>Vista 1</a>
            </li>
            <li>
              {/* <a href='./HTML/Vista2.html'>Vista 2</a> */}
              <a href='@'>Vista 2</a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  )
}

export default SideBar
