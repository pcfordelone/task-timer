import React from 'react'
import { NavLink } from 'react-router-dom'

import { HeaderContainer } from './styles'
import { Timer, Scroll } from 'phosphor-react'

import LogoImg from './../../assets/logo.svg'

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <span>
        <img src={LogoImg} alt="" />
      </span>
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="History">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
