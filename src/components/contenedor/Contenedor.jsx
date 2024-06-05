import React from 'react'
import { BiSearch } from 'react-icons/bi'

const Contenedor = () => {
  return (
    <section className='home' id='home'>
      <div className='nav-padre'>
        <div className='nav-hijo'>
          <h3>Pais</h3>
          <input type='text' placeholder='Establece el Pais' />
          <div className='navegador'>
            <input type='text' placeholder='Buscar' />
            <button type='submit'>
              <BiSearch></BiSearch>
              <i className='bx bx-search-alt-2'></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contenedor
