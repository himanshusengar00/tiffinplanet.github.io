import React, { useState } from "react";
import './Form.css'
import { db } from "./firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        contact: contact,
        city: city,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your enquiry has been submitted, Have a good day!👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setContact("");
    setCity("");
    setMessage("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Business Enquiry Form <span role="img" aria-label="Phone">📞</span></h1>
      <label>Name</label>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Email</label>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Contact Number</label>
      <input
        placeholder="Contact Number"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
      />
      <label>City</label>
      <input
        placeholder="City Name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <label>Message</label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button
        type="submit"
        style={{ background: loader ? "#ccc" : " " }}
      >
        Submit
      </button>
    </form>
  );
};

export default Contact;

