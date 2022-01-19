import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import BookingForm from "./BookingForm";

import { editPgActions } from "../../store/editPg";

//import styles from "./EditPage.module.css";

//const SERVER_URI = "https://dine-in-advance-server.herokuapp.com";
const SERVER_URI = "http://localhost:5000";

// IMPORT NECESSARY COMPONENTS HERE
// import Component from "./fileName";

const EditPage = () => {
    const routerParams = useParams();

    const [bookingDetails, setBookingDetails] = useState();

    // ALLOWS REDUX STORE TO BE ACCESSED
    const dispatch = useDispatch();

    // CALL STATES TO BE USED FROM STORE
    // const storeStateName = useSelector((state) => state.mainPg.stateName);

    // OTHER REDUCERS HERE, WITH USEEFFECT TO SPECIFY TRIGGER IF NECESSARY

    // on page load, call the GET Booking and load the data
    useEffect(() => {
        console.log(`Fetching data for bookingId: ${routerParams.bookingId}`);

        async function fetchBooking() {
            const response = await fetch(
                `${SERVER_URI}/api/booking?id=${routerParams.bookingId}`
            );
            const myJson = await response.json();
            setBookingDetails(myJson);
        }

        fetchBooking();
    }, []);

    // on submit edit, it will call the PATCH Booking endpoint
    function handleFormSubmit(e, bookingData) {
        e.preventDefault();

        // send to API endpoint
        async function patchBooking() {
            const response = await fetch(
                `${SERVER_URI}/api/booking?id=${routerParams.bookingId}`,
                {
                    method: "PATCH",
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(bookingData),
                }
            );
            const myJson = await response.json();
            // do something with PATCH response
            console.log(myJson);
        }

        try {
            console.log("submitting form");
            console.log("data is: ", JSON.stringify(bookingData));
            patchBooking();
            //window.location.reload();
        } catch (err) {
            console.log(err);
        }
    }

    // delete booking
    function handleDeleteClick(e) {
        async function deleteBooking() {
            const response = await fetch(
                `${SERVER_URI}/api/booking?id=${routerParams.bookingId}`,
                { method: "DELETE" }
            );
            //const myJson = await response.json();
            // do something with DELETE response
            //console.log(myJson);
            window.location.reload();
        }

        if (
            window.confirm("Delete reservation? This action cannot be undone.")
        ) {
            deleteBooking();
        }
    }

    // debug
    console.log("bookingDetails", bookingDetails);

    // PAGE HTML TEMPLATE WITH COMPONENTS WHERE NECESSARY (STATIC PARTS ARE AS DEFINED IN MAINPAGE)
    return (
        <div>
            <h3>Edit Booking</h3>
            {bookingDetails?.deletedFlag && (
                <p style={{ color: "red" }}>This booking has been deleted</p>
            )}
            <BookingForm
                initialData={bookingDetails}
                onSubmit={handleFormSubmit}
            />
            <div>
                {/* <button onClick={handleEditClick}>Save Changes</button> */}
                <button onClick={handleDeleteClick}>Delete</button>
            </div>

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
