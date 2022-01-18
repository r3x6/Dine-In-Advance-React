import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./Main.module.css";

import { mainPgActions } from "../../store/mainPg";

// IMPORT NECESSARY COMPONENTS HERE
// import Component from "./fileName";

const Main = () => {
  // ALLOWS REDUX STORE TO BE ACCESSED
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // CALL STATES TO BE USED FROM STORE
  // const storeStateName = useSelector((state) => state.mainPg.stateName);

  // OTHER REDUCERS HERE, WITH USEEFFECT TO SPECIFY TRIGGER IF NECESSARY
  const handleNewBooking = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const restaurant = e.target.restaurant.value;
    const group = e.target.group.value;
    const date = e.target.date.value;
    const time = e.target.time.value;
    const data = {
      name,
      phone,
      email,
      restaurant,
      group,
      date,
      time,
    };
    dispatch(mainPgActions.saveNewBooking(data));
    navigate("/confirmation");
  };

  // PAGE HTML TEMPLATE WITH COMPONENTS WHERE NECESSARY (STATIC PARTS ARE AS DEFINED IN MAINPAGE)
  return (
    <div className={styles.mainDiv}>
      <form onSubmit={handleNewBooking}>
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="name">Name: </label>
              </td>
              <td>
                <input name="name" id="name" />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="phone">Contact No. : </label>
              </td>
              <td>
                <input name="phone" id="phone" />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="email">Email: </label>
              </td>
              <td>
                <input name="email" id="email" />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="restaurant">Restaurant: </label>
              </td>
              <td>
                <select name="restaurant" id="restaurant">
                  <option value="changChin">Chang {"&"} Chin</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="group">Group Size: </label>
              </td>
              <td>
                <select name="group" id="group">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="date">Date: </label>
              </td>
              <td>
                <input name="date" id="date" type="date" />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="time">Time: </label>
              </td>
              <td>
                <select name="time" id="time">
                  <option value="9">9:00</option>
                  <option value="10">10:00</option>
                  <option value="11">11:00</option>
                  <option value="12">12:00</option>
                  <option value="13">13:00</option>
                  <option value="14">14:00</option>
                  <option value="15">15:00</option>
                  <option value="16">16:00</option>
                  <option value="17">17:00</option>
                  <option value="18">18:00</option>
                  <option value="19">19:00</option>
                  <option value="20">20:00</option>
                  <option value="21">21:00</option>
                  <option value="22">22:00</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        {/* <NavLink to="/confirmation"> */}
        <button type="submit">Submit</button>
        {/* </NavLink> */}
      </form>
      {/* ADD NAVLINK TO GO TO OTHER PAGES AS PER REQUIRED (CLASS NAME IS FOR ACTIVESTYLES) */}
      {/* <NavLink
        className={(navData) => (navData.isActive ? styles.active : "")}
        to="/TARGETURL"
      >
        LINK TEXT
      </NavLink> */}
    </div>
  );
};
export default Main;

// PUT PAGE SPECIFIC COMPONENTS IN SAME FOLDER
// IF SHARED COMPONENTS, PUT IN SHARE FOLDER
