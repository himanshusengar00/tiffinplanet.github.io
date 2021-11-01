import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import DropDown from './DropDown'
import "./inOption.css";

const inOption = (props) => {
  const [selected, setSelected] = useState("");
  const [days, setDays] = useState("");
  const [price, setPrice] = useState("");
  //  if (selected === "lunch") return props.price * 2;

  useEffect(
    () => {
      //   lunch
      if (selected === "lunch" && days === "3days") setPrice(props.price * 3);
      else if (selected === "lunch" && days === "7days") setPrice(props.price * 7);
      else if (selected === "lunch" && days === "15days") setPrice(props.price * 15);
      else if (selected === "lunch" && days === "30days") setPrice(props.price * 30);
      //  dinner
      else if (selected === "dinner" && days === "3days") setPrice(props.price * 3);
      else if (selected === "dinner" && days === "7days") setPrice(props.price * 7);
      else if (selected === "dinner" && days === "15days") setPrice(props.price * 15);
      else if (selected === "dinner" && days === "30days") setPrice(props.price * 30);
      //   both
      else if (selected === "both" && days === "3days") setPrice(props.price * 2 * 3);
      else if (selected === "both" && days === "7days") setPrice(props.price * 2 * 7);
      else if (selected === "both" && days === "15days") setPrice(props.price * 2 * 15);
      else if (selected === "both" && days === "30days") setPrice(props.price * 2 * 30);
      else setPrice(props.price);
    },
    [selected, days]
  );

  let value = (
    <div className="inOption">
      <p className="inHead">{props.head}</p>
      <div className="inImgBox">
        <img src={props.image} alt="Img" />
      </div>

      <p className="inContent">{props.content}</p>
      {/* <p className="inPrice">&#x20B9; {props.price} </p> */}
      <p className="inPrice">&#x20B9; {price} </p>
      <p className="customize" onClick={props.customization}>
        <DropDown selected={selected} setSelected={setSelected} days={days} setDays={setDays} price={price} />
      </p>

      <button
        type="button"
        className="inOpButton"
        onClick={() =>
          props.add({
            head: props.head,
            counter: 1,
            url: props.image,
            price: price,
            Days: setDays,
            content: props.content,
          })
        }
      >
        Add to Cart
      </button>
      <NavLink
        to="/order"
        onClick={() =>
          props.add({
            head: props.head,
            counter: 1,
            url: props.image,
            price: price,
            Days: setDays,
            content: props.content,
          })
        }
      >
        Order Now
      </NavLink>
    </div>
  );
  let result = props.check !== null ? value : null;
  console.log(result);
  return <div>{result}</div>;
};

export default inOption;
