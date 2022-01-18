import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "./NewCfmPage.module.css";

import { mainPgActions } from "../../store/mainPg";

// IMPORT NECESSARY COMPONENTS HERE
// import Component from "./fileName";

const NewCfmPage = (props) => {
  // ALLOWS REDUX STORE TO BE ACCESSED
  const dispatch = useDispatch();

  // CALL STATES TO BE USED FROM STORE
  // const storeStateName = useSelector((state) => state.mainPg.stateName);
  const storeName = useSelector((state) => state.mainPg.name);
  const storePhone = useSelector((state) => state.mainPg.phone);
  const storeEmail = useSelector((state) => state.mainPg.email);
  const storeRestaurant = useSelector((state) => state.mainPg.restaurant);
  const storeGroup = useSelector((state) => state.mainPg.group);
  const storeDate = useSelector((state) => state.mainPg.date);
  const storeTime = useSelector((state) => state.mainPg.time);

  // OTHER REDUCERS HERE, WITH USEEFFECT TO SPECIFY TRIGGER IF NECESSARY

  const handleSaveNewBooking = () => {
    // CALL BACKEND API HERE
    //
    // const apiAction = async (para) => {
    //   const res = await fetch(
    //     `https://apiURL/${para}`,
    //     { method: "HTML VERB"}
    //   );
    //   const data = await res.json();
    //   return data;
    // };
    //
    // IF NECESSARY, THROW IN REDUCER HERE TO HANDLE FETCHED DATA (THIS IS FOR ONLOAD)
    // const handleData = async () => {
    //   const receivedData = await apiAction("someParameter");
    //   dispatch(mainPgActions.reducerName(receivedData));
    // };
    // handleData();
    //
    // REMOVES DEPENDENCY WARNING (DO NOT REMOVE THE COMMENT FOR NEXT LINE)
  };

  // PAGE HTML TEMPLATE WITH COMPONENTS WHERE NECESSARY (STATIC PARTS ARE AS DEFINED IN MAINPAGE)
  return (
    <div className={styles.mainDiv}>
      <table>
        <tbody>
          <tr>
            <td>Name:</td>
            <td>{storeName}</td>
          </tr>
          <tr>
            <td>Contact No. :</td>
            <td>{storePhone}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>{storeEmail}</td>
          </tr>
          <tr>
            <td>Restaurant:</td>
            <td>{storeRestaurant}</td>
          </tr>
          <tr>
            <td>Group Size:</td>
            <td>{storeGroup}</td>
          </tr>
          <tr>
            <td>Date:</td>
            <td>{storeDate}</td>
          </tr>
          <tr>
            <td>Time:</td>
            <td>{storeTime}:00</td>
          </tr>
        </tbody>
      </table>

      <button onClick={handleSaveNewBooking}>Confirm Booking</button>

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
export default NewCfmPage;

// PUT PAGE SPECIFIC COMPONENTS IN SAME FOLDER
// IF SHARED COMPONENTS, PUT IN SHARE FOLDER
