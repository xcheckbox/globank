
import React, { useState } from 'react';
import { Accounts } from 'components/organisms/Accounts';
import { Navbar } from 'shared/Navbar';
import { Sidebar } from 'shared/SideBar/Sidebar';
import styled from 'styled-components';

export const Dashboard = () => {

  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const handleSidebar = () => {
    setIsOpenSidebar(!isOpenSidebar)
  }

  return (
    <div>
      <Navbar>
        <button onClick={() => handleSidebar()}>Sidebar</button>
        <h2>Globank</h2>
        <Sidebar isOpen={isOpenSidebar} handleSidebar={handleSidebar} />
      </Navbar>

      <Accounts />
    </div>
  )
}