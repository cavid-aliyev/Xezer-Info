import React from 'react'
import { useLocation } from "react-router";
import {Sidebar, Header, Posts} from '../components'

const Homepage = () => {
    const location = useLocation();
    console.log(location);
    return (
        <>
        <Header />
        <div className="home">
          <Posts />
          <Sidebar />
        </div>
      </>
    )
}

export default Homepage
