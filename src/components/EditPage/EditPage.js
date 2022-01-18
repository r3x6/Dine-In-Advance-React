import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";

import { editPgActions } from "../../store/editPg";

const SERVER_URI = "https://dine-in-advance-server.herokuapp.com";
//const SERVER_URI = "localhost:5000";

// IMPORT NECESSARY COMPONENTS HERE
// import Component from "./fileName";

const EditPage = () => {
    const routerParams = useParams();

    const [bookingDetails, setBookingDetails] = useState();
    const [textAreaValue, setTextAreaValue] = useState();

    // ALLOWS REDUX STORE TO BE ACCESSED
    const dispatch = useDispatch();

    // CALL STATES TO BE USED FROM STORE
    // const storeStateName = useSelector((state) => state.mainPg.stateName);

    // States needed for EDIT page:
    // - reservation number (controlled HTML input)
    // - all the data about reservation (controlled HTML inputs. Use the "New" as a template. Use "readonly" for the fields that impact reservation availability)
    //    - is there a way to reuse the form? Maybe the reservation form can be a reuseable Component

    // Functions needed:

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
            setTextAreaValue(JSON.stringify(myJson));
        }

        fetchBooking();
    }, []);

    // on submit edit, it will call the PATCH Booking endpoint
    function handleEditClick(e) {
        // send to API endpoint
        async function patchBooking() {
            const response = await fetch(
                `${SERVER_URI}/api/booking?id=${routerParams.bookingId}`,
                { method: "PATCH", body: JSON.stringify(bookingDetails) }
            );
            const myJson = await response.json();
            // do something with PATCH response
            console.log(myJson);
        }

        try {
            const obj = JSON.parse(textAreaValue);
            patchBooking();
        } catch (err) {
            console.log(err);
        }
    }

    // delete booking

    // PAGE HTML TEMPLATE WITH COMPONENTS WHERE NECESSARY (STATIC PARTS ARE AS DEFINED IN MAINPAGE)
    return (
        <div>
            <h3>Edit Booking</h3>
            <textarea
                rows="15"
                cols="50"
                value={textAreaValue}
                onChange={(e) => {
                    setTextAreaValue(e.target.value);
                }}
            />
            <div>
                <button onClick={handleEditClick}>Save Changes</button>
                <button>Delete</button>
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
