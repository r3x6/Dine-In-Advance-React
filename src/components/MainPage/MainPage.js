import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Navigate, Routes } from "react-router-dom";
import styles from "./MainPage.module.css";

import { mainPgActions } from "../../store/mainPg";

// IMPORT NECESSARY COMPONENTS HERE
// import Component from "./fileName";
import Main from "./Main";
import NewCfmPg from "../NewCfmPage/NewCfmPage";
import EditPg from "../EditPage/EditPage";
import EditCfmPg from "../EditCfmPage/EditCfmPage";

const MainPage = () => {
  // ALLOWS REDUX STORE TO BE ACCESSED
  const dispatch = useDispatch();

  // CALL STATES TO BE USED FROM STORE
  // const storeStateName = useSelector((state) => state.mainPg.stateName);

  useEffect(() => {
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
    // eslint-disable-next-line
  }, []);

  // OTHER REDUCERS HERE, WITH USEEFFECT TO SPECIFY TRIGGER IF NECESSARY

  // PAGE HTML TEMPLATE WITH COMPONENTS WHERE NECESSARY
  return (
    <div className={styles.mainPageContainer}>
      <div className={styles.dashboard}>
        <header>DASHBOARD</header>
        {/* PARTS THAT CHANGE WITH THE PAGES, ANYTHING U WANNA KEEP STATIC PUT OUTSIDE */}
        <div>
          <Routes>
            <Route path="/" element={<Navigate replace to="/main" />} />
            <Route path="/main" element={<Main />} />
            <Route path="/confirmation" element={<NewCfmPg />} />
            <Route path="/edit/:bookingId" element={<EditPg />} />
            <Route
              path="//edit/:bookingId/confirmation"
              element={<EditCfmPg />}
            />
          </Routes>
          {/* IN OTHER PAGES, USE NAVLINK TO ANY OF THESE SET ROUTES */}
        </div>
        <footer></footer>
      </div>
    </div>
  );
};
export default MainPage;

// PUT PAGE SPECIFIC COMPONENTS IN SAME FOLDER
// IF SHARED COMPONENTS, PUT IN SHARE FOLDER
