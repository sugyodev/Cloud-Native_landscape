import { useNavigate, Outlet } from 'react-router-dom';
import React, { useState } from 'react'

function Layout() {
  return (
    <>
      <Outlet />
    </>
  )
}

export default Layout;
