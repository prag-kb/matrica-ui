import React from "react";
import "../App.css";
import SOL from "../asset/sol.svg"
// import Bitcoin from "../asset/bitcoin.svg"
import Ethereum from "../asset/ethe.svg"
import Polygon from "../asset/poly.svg"
import { CiBitcoin } from 'react-icons/ci';

const Cards = () => {
  const detailCards = [
    {
      id: "Solana",
      amount: 0,
      icon: <img src={SOL} alt="Solana" className="w-2.5" />,
      coin_value: 0,
    },
    {
      id: "BitCoin",
      amount: 0,
      icon: <div className="text-warning">{<CiBitcoin/>}</div>,
      coin_value: 0,
    },
    {
      id: "Ethreum",
      amount: 0,
      icon: <img src={Ethereum} alt="Ethereum" className="w-2.5" />,
      coin_value: 0,
    },
    {
      id: "Polygon",
      amount: 0,
      icon: <img src={Polygon} alt="Polygon" className="w-2.5" />,
      coin_value: 0,
    },
  ];

  const currencyOptions = [
    {
      name:"USD",
      symbol:"$"
    },
    {
      name:"Bit Coin",
      symbol:"#"
    },
    {
      name:"SOL",
      symbol:"@"
    }
  ]
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "0fr 0fr 1fr",
        gap: "15px",
        margin: "20px 0 0 20px",
      }}
    >
      <div>
        <div
          className="cardBody"
          style={{
            width: "12rem",
            backgroundColor: "lightgrey",
            padding: "10px",
            borderRadius: "10px",
            height: "10rem",
            textAlign: "center",
            display: "grid",
          }}
        >
          <div style={{ color: "slategray" }}>Total Portfolio Value</div>
          <div style={{ fontSize: "xx-large" }}>$ 176.30</div>
          <select style={{ margin: "10px" }}>
            {currencyOptions?.map((x)=> (
              <option key={x?.symbol} value={x?.name}>{x?.symbol} {x?.name}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <div
          className="cardBody"
          style={{
            width: "12rem",
            backgroundColor: "lightgrey",
            padding: "10px",
            borderRadius: "10px",
            height: "10rem",
            textAlign: "center",
            display: "grid",
          }}
        >
          <div style={{ color: "slategray" }}>NFTs Owned</div>
          <div style={{ fontSize: "xx-large" }}>17</div>
          <div className=""></div>
        </div>
      </div>

      <div>
        <div
          className="cardBody"
          style={{
            width: "25rem",
            backgroundColor: "lightgrey",
            padding: "10px",
            borderRadius: "10px",
            height: "10rem",
            textAlign: "center",
            display: "grid",
          }}
        >
          <div
            style={{
              color: "slategray",
              display: "flex",
              justifySelf: "center",
            }}
          >
            Total NFT values by Network
          </div>
          <div
            style={{
              display: "grid",
              fontSize: "x-large",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              justifyItems: "start",
              gap: "10px",
              width: "inherit",
            }}
          >
            {detailCards?.map((x) => (
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                ${x?.amount}{" "}
                <samp
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "medium",
                    margin: "5px 0 0 0",
                    gap: "2px",
                  }}
                >
                  ({x?.icon} {x?.coin_value})
                </samp>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
