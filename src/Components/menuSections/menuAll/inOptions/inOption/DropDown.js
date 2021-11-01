import React from "react";
import { Container, Row, Col } from 'reactstrap';
import './dropDown.css';
const DropDown = ({ selected, setSelected, days, setDays }) => {

   const handleChange = (e) => {
      setSelected(e.target.value)
      console.log(selected);
   }
   const handleDays = (e) => {
      setDays(e.target.value)
      console.log(selected);
   }

   return (
      <div className="dropStyle">
         {/* <label for="cars">Choose meal:</label> */}
         <Container>

            <Row>
               <Col xs="2"md="1" xl="1">
                  <legend>
                     <p> Meal type</p>
                  </legend>
               </Col>
               <Col xs="4" md="2" xl="2">
                  <select class="drop" name="food" id="food" onChange={(e) => handleChange(e)} >
                     <option value="select">Select</option>
                     <option value="lunch">Lunch</option>
                     <option value="dinner">Dinner</option>
                     <option value="both">Both</option>
                  </select>
               </Col>
            </Row>
            <Row>
               <Col xs="2" md="1" xl="1">
               <legend>
                     <p> Meal package</p>
                  </legend>
               </Col>
               <Col xs="4" md="2" xl="2">
                  <select class="drop" name="days" id="days" onChange={(e) => handleDays(e)} >
                     <option value="select">Select</option>
                     <option value="3days">3 days</option>
                     <option value="7days">7 days</option>
                     <option value="15days">15 days</option>
                     <option value="30days">30 days</option>
                  </select>
               </Col>
            </Row>
         </Container>
      </div>
   );
};

export default DropDown;

