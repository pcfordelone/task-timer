import React from 'react'

import { GithubLogo, LinkedinLogo } from 'phosphor-react'
import { FooterContainer } from './styles'

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <div className="container">
        <p>
          <strong>Paulo César Fordelone</strong> - Web developer & Digital
          Designer
        </p>
        <div>
          <a
            href="https://github.com/pcfordelone"
            target="_blank"
            rel="noreferrer"
          >
            <GithubLogo size={32} />
          </a>
          <a
            href="https://linkedin.com/in/pcfordelone/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinLogo size={32} />
          </a>
        </div>
      </div>
    </FooterContainer>
  )
}
