import React, { FC } from 'react'

export const Header: FC = () => {
  return (
    <header>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            logo
          </a>
        </div>
      </nav>
    </header>
  )
}
