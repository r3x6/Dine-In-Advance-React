import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { editPgActions } from "../../store/editPg";

// IMPORT NECESSARY COMPONENTS HERE
// import Component from "./fileName";

const EditPage = () => {
  // ALLOWS REDUX STORE TO BE ACCESSED
  const dispatch = useDispatch();

  // CALL STATES TO BE USED FROM STORE
  // const storeStateName = useSelector((state) => state.mainPg.stateName);

  // OTHER REDUCERS HERE, WITH USEEFFECT TO SPECIFY TRIGGER IF NECESSARY

  // PAGE HTML TEMPLATE WITH COMPONENTS WHERE NECESSARY (STATIC PARTS ARE AS DEFINED IN MAINPAGE)
  return (
    <div>
      EDIT PAGE
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
export default EditPage;

// PUT PAGE SPECIFIC COMPONENTS IN SAME FOLDER
// IF SHARED COMPONENTS, PUT IN SHARE FOLDER
