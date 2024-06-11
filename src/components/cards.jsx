import React from 'react';
import "../App.css";


const Cards = () => {
  return (
      <div style={{display: "grid", gridTemplateColumns:"0fr 0fr 1fr", gap:"15px", margin:"20px 0 0 20px"}}>
        <div>
          <div className='cardBody' style={{ width: "12rem",backgroundColor:"lightgrey",padding:"10px",borderRadius:"10px",height:"10rem",textAlign:"center",display:"grid"}}>
            <div style={{color:"slategray"}}>Total Portfolio Value</div>
            <div style={{fontSize:"xx-large"}}>$ 176.30</div>
            <select style={{margin:"10px"}}></select>
          </div>
        </div>

        <div>
          <div className='cardBody' style={{ width: "12rem",backgroundColor:"lightgrey",padding:"10px",borderRadius:"10px",height:"10rem",textAlign:"center",display:"grid"}}>
            <div style={{color:"slategray"}}>NFTs Owned</div>
            <div style={{fontSize:"xx-large"}}>17</div>
            <div className=""></div>
          </div>

        </div>
    </div>
  )
}

export default Cards