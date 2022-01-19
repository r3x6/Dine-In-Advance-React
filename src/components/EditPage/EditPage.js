import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BookingForm from "./BookingForm";

import { editPgActions } from "../../store/editPg";

//import styles from "./EditPage.module.css";

//const SERVER_URI = "https://dine-in-advance-server.herokuapp.com";
const SERVER_URI = "http://localhost:5000";

const EditPage = () => {
    const routerParams = useParams();

    // ALLOWS REDUX STORE TO BE ACCESSED
    const dispatch = useDispatch();

    // CALL STATES TO BE USED FROM STORE
    // const storeStateName = useSelector((state) => state.mainPg.stateName);
    const bookingToEdit = useSelector((state) => state.editPg.bookingToEdit); // creates pointer to Redux state

    // OTHER REDUCERS HERE, WITH USEEFFECT TO SPECIFY TRIGGER IF NECESSARY

    // on page load, call the GET Booking and load the data
    useEffect(() => {
        console.log(`Fetching data for bookingId: ${routerParams.bookingId}`);

        async function fetchBooking() {
            const response = await fetch(
                `${SERVER_URI}/api/booking?id=${routerParams.bookingId}`
            );
            const myJson = await response.json();
            dispatch(editPgActions.setBookingToEdit(myJson));
        }

        fetchBooking();
    }, [dispatch, routerParams.bookingId]);

    // callback for the form's onSubmit. This will take the form data and put it in the Redux store
    // it will also send the data to the server via the PATCH Booking endpoint.
    // For now, we will not have a confirmation page, but
    // with Redux it will be possible to add it in later.
    function handleFormSubmit(e, formData) {
        e.preventDefault();

        // save data to Redux state
        dispatch(editPgActions.setBookingToEdit(formData));

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
                    body: JSON.stringify(formData),
                }
            );
            const myJson = await response.json();
            // do something with PATCH response
            console.log("response from server:", myJson);
        }

        try {
            console.log(
                "submitting form to server, with body: ",
                JSON.stringify(formData)
            );
            patchBooking();
            // placeholder for Edit Confirmation page
            window.alert(
                "Booking successfully updated! You may now close the window."
            );
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
            const myJson = await response.json();
            // do something with DELETE response
            console.log(myJson);
            window.location.reload();
        }

        if (
            window.confirm("Delete reservation? This action cannot be undone.")
        ) {
            deleteBooking();
        }
    }

    // PAGE HTML TEMPLATE WITH COMPONENTS WHERE NECESSARY (STATIC PARTS ARE AS DEFINED IN MAINPAGE)
    return (
        <div>
            <h3>Edit Booking</h3>
            {bookingToEdit?.deletedFlag && (
                <p style={{ color: "red" }}>This booking has been deleted</p>
            )}
            <BookingForm
                initialData={bookingToEdit}
                onSubmit={handleFormSubmit}
                bookingId={routerParams.bookingId}
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
