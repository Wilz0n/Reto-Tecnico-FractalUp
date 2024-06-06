import React from 'react'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
  const menuList = [
    { name: 'Home', path: '/' },
    { name: 'vista 1', path: '/vista1' },
    { name: 'vista 2', path: '/vista2' }
  ]

  return (
    <aside>
      <div className='menu'>
        <a href='@' className='Logo'>
          Logo
        </a>
        <nav className='navbar-lateral'>
          <ul>
            {menuList.map((menuItem, ix) => {
              return (
                <li key={ix}>
                  <NavLink to={menuItem.path}>{menuItem.name}</NavLink>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </aside>
  )
}

export default SideBar
