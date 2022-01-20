import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import styles from "./NewCfmPage.module.css";

import { newCfmActions } from "../../store/newCfm";

// IMPORT NECESSARY COMPONENTS HERE
// import Component from "./fileName";

const NewCfmPage = () => {
    // ALLOWS REDUX STORE TO BE ACCESSED
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // CALL STATES TO BE USED FROM STORE
    // const storeStateName = useSelector((state) => state.mainPg.stateName);
    const storeName = useSelector((state) => state.mainPg.name);
    const storePhone = useSelector((state) => state.mainPg.phone);
    const storeEmail = useSelector((state) => state.mainPg.email);
    const storeRestaurant = useSelector((state) => state.mainPg.restaurant);
    const storeGroup = useSelector((state) => state.mainPg.group);
    const storeDate = useSelector((state) => state.mainPg.date);
    const storeTime = useSelector((state) => state.mainPg.time);
    const storeReq = useSelector((state) => state.mainPg.req);
    const storeBookingId = useSelector((state) => state.newCfm.bookingId);

    // OTHER REDUCERS HERE, WITH USEEFFECT TO SPECIFY TRIGGER IF NECESSARY

    const handleSaveNewBooking = async (e) => {
        // CALL BACKEND API HERE
        e.preventDefault();

        const newBooking = {
            customerInfo: {
                name: storeName,
                email: storeEmail,
                contactNo: storePhone,
            },
            groupSize: storeGroup,
            specialRequests: storeReq,
            date: storeDate,
            hoursBooked: [storeTime],
            restaurantName: storeRestaurant,
        };

        const res = await fetch("http://localhost:5000/api/booking", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newBooking),
        });

        const data = await res.json();

        // IF NECESSARY, THROW IN REDUCER HERE TO HANDLE FETCHED DATA (THIS IS FOR ONLOAD)
        // const handleData = async () => {
        //   const receivedData = await apiAction("someParameter");
        //   dispatch(mainPgActions.reducerName(receivedData));
        // };
        // handleData();

        dispatch(newCfmActions.setBookingId(data._id));
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
                    <tr>
                        <td>Special Requests:</td>
                        <td>{storeReq}</td>
                    </tr>
                </tbody>
            </table>

            {storeBookingId ? (
                <>
                    <br />
                    <p>Booking made successfully!</p>
                    <p>Your booking id is:</p>
                    <h2>{storeBookingId}</h2>
                    <br />
                    <button
                        onClick={() => {
                            navigate(`/`);
                        }}
                    >
                        Back to Main Page
                    </button>
                </>
            ) : (
                <>
                    {" "}
                    <br />
                    <button onClick={handleSaveNewBooking}>
                        Confirm Booking
                    </button>
                </>
            )}

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
