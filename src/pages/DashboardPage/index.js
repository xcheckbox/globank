
import React, { useState } from 'react';
import { Accounts } from 'components/organisms/Accounts';
import { Navbar } from 'shared/Navbar';
import { Sidebar } from 'shared/SideBar/Sidebar';
import { useFetch } from 'hooks/useFetch';
import { MdMenu as Menu } from "react-icons/md";
import { Button } from 'components/atoms/Button';

export const Dashboard = () => {

  const API_URL = process.env.REACT_APP_API_URL;
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const handleSidebar = () => {
    setIsOpenSidebar(!isOpenSidebar)
  }

  const { data } = useFetch(`${API_URL}/accounts`);

  return (
    <div>
      <Navbar>
        <Button
          onClick={() => handleSidebar()}
        >
          <Menu />
        </Button>

        <h2>Globank</h2>
        <Sidebar isOpen={isOpenSidebar} handleSidebar={handleSidebar} />
      </Navbar>

      <Accounts accounts={data} />
    </div>
  )
}