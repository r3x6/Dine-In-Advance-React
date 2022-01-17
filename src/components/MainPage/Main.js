import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "./Main.module.css";

import { newCfmActions } from "../../store/newCfm";

// IMPORT NECESSARY COMPONENTS HERE
// import Component from "./fileName";

const Main = () => {
  // ALLOWS REDUX STORE TO BE ACCESSED
  const dispatch = useDispatch();

  // CALL STATES TO BE USED FROM STORE
  // const storeStateName = useSelector((state) => state.mainPg.stateName);

  // OTHER REDUCERS HERE, WITH USEEFFECT TO SPECIFY TRIGGER IF NECESSARY

  // PAGE HTML TEMPLATE WITH COMPONENTS WHERE NECESSARY (STATIC PARTS ARE AS DEFINED IN MAINPAGE)
  return (
    <div className={styles.mainDiv}>
      <form>
        <table>
          <tr>
            <td>
              <label for="name">Name: </label>
            </td>
            <td>
              <input name="name" id="name" />
            </td>
          </tr>
          <tr>
            <td>
              <label for="phone">Contact No. : </label>
            </td>
            <td>
              <input name="phone" id="phone" />
            </td>
          </tr>
          <tr>
            <td>
              <label for="email">Email: </label>
            </td>
            <td>
              <input name="email" id="email" />
            </td>
          </tr>
          <tr>
            <td>
              <label for="restaurant">Restaurant: </label>
            </td>
            <td>
              <select name="restaurant" id="restaurant">
                <option value="changChin">Chang & Chin</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label for="group">Group Size: </label>
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
              <label for="date">Date: </label>
            </td>
            <td>
              <select name="date" id="date">
                <option value="date">
                  Probably needs a calendar display for this
                </option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label for="time">Time: </label>
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
        </table>
        <NavLink to="/confirmation">
          <button typeof="submit">Submit</button>
        </NavLink>
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
