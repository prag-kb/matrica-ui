import React from 'react'
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div style={{width:"70rem", display:"flex", alignItems:"center"}}>
      <div className='search_bar'>
        <CiSearch style={{margin: "0 0 0 10px", display:"flex", alignItems:"center"}} />
        <input
        className=''
        style={{
          width: "100%",
          border: "none",
          borderRadius: "20px",
          padding:"1px",
          outline:"none"
        }}
        type='search'
        placeholder='Search by Wallets, Users,...'
        />
      </div>
      <button className='profile'>Profile Name</button>
    </div>
  )
}

export default Header