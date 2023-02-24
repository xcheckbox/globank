
import React, { useState } from 'react';
import { Accounts } from 'components/organisms/Accounts';
import { Navbar } from 'shared/Navbar';
import { Sidebar } from 'shared/SideBar/Sidebar';
import styled from 'styled-components';
import { useFetch } from 'hooks/useFetch';

export const Dashboard = () => {

  const API_URL = process.env.REACT_APP_API_URL;
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const handleSidebar = () => {
    setIsOpenSidebar(!isOpenSidebar)
  }

  const { isLoading, data } = useFetch(`${API_URL}/accounts`);

  return (
    <div>
      <Navbar>
        <button onClick={() => handleSidebar()}>Sidebar</button>
        <h2>Globank</h2>
        <Sidebar isOpen={isOpenSidebar} handleSidebar={handleSidebar} />
      </Navbar>

      <Accounts accounts={data} />
    </div>
  )
}