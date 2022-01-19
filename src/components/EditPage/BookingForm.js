import React, { useEffect, useState } from "react";

import styles from "./BookingForm.module.css";

function handleSubmit() {}

const BookingForm = (props) => {
    const [bookingData, setBookingData] = useState({
        customerInfo: {
            name: "",
            email: "",
            contactNo: "",
        },
        groupSize: null,
        specialRequests: "",
        date: null, //unix time (seconds) with date. other parts are ignored. Interpreted in SG time zone
        hoursBooked: [null],
        restaurantName: "",
        tableNumber: null,
        deletedFlag: false,
    });

    useEffect(() => {
        setBookingData(props.initialData);
    }, [props]);

    return (
        <form
            onSubmit={(e) => {
                props.onSubmit(e, bookingData);
            }}
        >
            <table>
                <tbody>
                    <tr>
                        <td>
                            <label htmlFor="name">Name: </label>
                        </td>
                        <td>
                            <input
                                name="name"
                                id="name"
                                value={bookingData?.customerInfo?.name}
                                onChange={(e) => {
                                    setBookingData({
                                        ...bookingData,
                                        customerInfo: {
                                            ...bookingData.customerInfo,
                                            name: e.target.value,
                                        },
                                    });
                                }}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="phone">Contact No. : </label>
                        </td>
                        <td>
                            <input
                                name="phone"
                                id="phone"
                                value={bookingData?.customerInfo?.contactNo}
                                onChange={(e) => {
                                    setBookingData({
                                        ...bookingData,
                                        customerInfo: {
                                            ...bookingData.customerInfo,
                                            contactNo: e.target.value,
                                        },
                                    });
                                }}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="email">Email: </label>
                        </td>
                        <td>
                            <input
                                name="email"
                                id="email"
                                value={bookingData?.customerInfo?.email}
                                onChange={(e) => {
                                    setBookingData({
                                        ...bookingData,
                                        customerInfo: {
                                            ...bookingData.customerInfo,
                                            email: e.target.value,
                                        },
                                    });
                                }}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="restaurant">Restaurant: </label>
                        </td>
                        <td>
                            <input
                                name="restaurant"
                                id="restaurant"
                                value={bookingData?.restaurantName}
                                onChange={(e) => {
                                    setBookingData({
                                        ...bookingData,
                                        restaurantName: e.target.value,
                                    });
                                }}
                                readOnly
                                className={styles.readonly}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="group">Group Size: </label>
                        </td>
                        <td>
                            <select
                                name="group"
                                id="group"
                                value={bookingData?.customerInfo?.groupSize}
                                onChange={(e) => {
                                    setBookingData({
                                        ...bookingData,
                                        groupSize: e.target.value,
                                    });
                                }}
                            >
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
                            <input
                                name="date"
                                id="date"
                                type="date"
                                value={bookingData?.customerInfo?.date}
                                onChange={(e) => {
                                    setBookingData({
                                        ...bookingData,
                                        date: e.target.value,
                                    });
                                }}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="time">Time: </label>
                        </td>
                        <td>
                            <select
                                name="time"
                                id="time"
                                value={bookingData?.customerInfo?.hoursBooked}
                                onChange={(e) => {
                                    setBookingData({
                                        ...bookingData,
                                        hoursBooked: e.target.value,
                                    });
                                }}
                            >
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
            <button type="submit">Save Changes</button>
            {/* </NavLink> */}
        </form>
    );
};

export default BookingForm;
