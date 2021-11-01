import axios from "axios";
import React from "react";
import Logo from './../../Assests/icons/logo.png'

export default function payment(props) {
  const placeOrder = (obj,id) => {
    var copy = {
      ...obj,
      food: props.data,
      time: new Date().toString(),
      transactionid:id
    };
    if (props.data.length > 0) {
      axios
        .post("https://tiffinplanet-527d7-default-rtdb.firebaseio.com/.json", copy)
        .then(() => alert("Your Order is Placed!"))
        .catch((err)=>alert(err));
    } else {
      alert("Please select some items from Menu first");
    }
  };
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };
  const displayRazorPay = async (price) => {
    const res = await loadScript("http://checkout.razorpay.com/v1/checkout.js");
    if (!res) {
      alert("You are offline....failed to load RazorPay SDK");
      return;
    }
    const options = {
      key: "rzp_test_JGJK9uDqBHwb7g",
      currency: "INR",
      amount: price * 100,
      Name: "Tiffin Planet",
      description: "healthy food मतलब wealthy mood",
      image: Logo,

      handler: function(response) {
        placeOrder(props.checkOut,response.razorpay_payment_id)
        alert(response.razorpay_payment_id);
        alert("Payment is successful");
      },
      prefill: {
        name: "Your Name",
        contact: "99@@@@@@78",
        email: "xyz@gmail.com",
      },
      notes: {
        address: "some address",
      },
      theme: {
        color: "blue",
        hide_topbar: false,
      },
      /*if(response.razorpay_payment_id)  if database */
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  return (
    <div>
      <button
        type="button"
        onClick={() =>
          displayRazorPay(props.paymentAmount.reduce((a, b) => a + b, 0))
        }
      >
        Place your order
      </button>
    </div>
  );
}
