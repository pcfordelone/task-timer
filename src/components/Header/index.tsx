import React from 'react'
import { NavLink } from 'react-router-dom'

import { HeaderContainer } from './styles'
import { Timer, Scroll } from 'phosphor-react'

import LogoImg from './../../assets/logo.png'

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <span>
        <img src={LogoImg} alt="" />
        <div>
          <h2>
            <i>Pomodoro Timer</i>
          </h2>
          <p>Optimize your time</p>
        </div>
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
