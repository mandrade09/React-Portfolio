// component contains the Navigation component and is included at the top of each page.

import React from 'react';
import Navigation from './Navigation';

function Header() {
  return (
    <header>
      <h1>Your Name</h1>
      <Navigation />
    </header>
  );
}

export default Header;
