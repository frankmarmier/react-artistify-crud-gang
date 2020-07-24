import React from 'react';
import Logo from './Logo';
import NavMain from './nav/NavMain';
import NavAdmin from './nav/NavAdmin';
import NavBurger from './nav/NavBurger';
import IconDashboard from './icon/IconDashboard';

function HeaderMain({ navMobileClbk }) {
  return (
    <header id="header_main">
      <Logo />
      <NavMain />
      <NavAdmin />
      <IconDashboard size="lg" />
      <NavBurger navMobileClbk={navMobileClbk} />
    </header>
  );
}

export default HeaderMain;
