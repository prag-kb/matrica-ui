import React from 'react';
import "../App.css";


const Cards = () => {

  const detailCards = [
    {
      id: "Solana",
      amount: 0,
      icon: "",
      coin_value: 0
    },
    {
      id: "BitCoin",
      amount: 0,
      icon: "",
      coin_value: 0
    },
    {
      id: "Ethreum",
      amount: 0,
      icon: "",
      coin_value: 0
    },
    {
      id: "Polygon",
      amount: 0,
      icon: "",
      coin_value: 0
    },
  ]
  return (
    <div style={{ display: "grid", gridTemplateColumns: "0fr 0fr 1fr", gap: "15px", margin: "20px 0 20px 20px" }}>
      <div>
        <div className='cardBody' style={{ width: "12rem", backgroundColor: "lightgrey", padding: "10px", borderRadius: "10px", height: "10rem", textAlign: "center", display: "grid" }}>
          <div style={{ color: "slategray" }}>Total Portfolio Value</div>
          <div style={{ fontSize: "xx-large" }}>$ 176.30</div>
          <select style={{ margin: "10px" }}></select>
        </div>
      </div>

      <div>
        <div className='cardBody' style={{ width: "12rem", backgroundColor: "lightgrey", padding: "10px", borderRadius: "10px", height: "10rem", textAlign: "center", display: "grid" }}>
          <div style={{ color: "slategray" }}>NFTs Owned</div>
          <div style={{ fontSize: "xx-large" }}>17</div>
          <div className=""></div>
        </div>
      </div>

      <div>
        <div className='cardBody' style={{ width: "25rem", backgroundColor: "lightgrey", padding: "10px", borderRadius: "10px", height: "10rem", textAlign: "center", display: "grid" }}>
          <div style={{ color: "slategray", display: "flex", justifySelf: "center" }}>Total NFT values by Network</div>
          <div style={{ display: "grid", fontSize: "x-large", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", justifyItems: "start", gap: "10px", width: "inherit" }}>
            {detailCards?.map((x) => (
              <div className="">
                ${x?.amount} <samp>({x?.icon} {x?.coin_value})</samp>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards