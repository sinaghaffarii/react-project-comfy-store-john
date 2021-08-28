import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.svg'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links } from '../utils/constants'
import CartButtons from './CartButtons'
import { useProductsContext } from '../context/products_context'
import { useUserContext } from '../context/user_context'

const Nav = () => {
  // ----------------------------- برای باز کردن SIDEBAR استفاده میشه 
  const {openSidebar} = useProductsContext()
  return (
    <NavContainer>
      <div className="nav-header">
        <div className="nav-center ">
          <Link to="/">
            <img src={logo}  alt="comfy sloth"/>
          </Link>
          {/* آیتم هایی که در utils نوشته شده به این صورت روشون مپ میکنیم */}
          <ul className="nav-links">
            {links.map((link) => {
                const {id , url , text} = link;
               return <li key={id} >
                  <Link to={url}>
                    {text}
                  </Link>
                </li>
            })}
          </ul>
         <CartButtons/>
        </div>
        <button className="nav-toggle" onClick={openSidebar}> 
              <FaBars/>
          </button>
      </div>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        font-weight: 600;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`

export default Nav
