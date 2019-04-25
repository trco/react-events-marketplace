import React from 'react';

import CustomNavbar from '../components/CustomNavbar'

const CustomLayout = ({ children }) => {

  return (
    <div>
      <CustomNavbar />
      {children}
    </div>
  );
}

export default CustomLayout;
