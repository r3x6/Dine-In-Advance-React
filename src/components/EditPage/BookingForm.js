import React, { useEffect, useState } from "react";

import styles from "./BookingForm.module.css";

// input is in seconds since 1970
function unixTimestampToISODate(unixTimestamp) {
    const bookingDate = new Date(unixTimestamp * 1000);
    return bookingDate.toISOString().slice(0, 10);
}

const BookingForm = (props) => {
    const [formData, setFormData] = useState(props.initialData);

    useEffect(() => {
        setFormData(props.initialData);
    }, [props]);

    return (
        <form
            onSubmit={(e) => {
                props.onSubmit(e, formData);
            }}
        >
            <table>
                <tbody>
                    <tr>
                        <td>Booking number:</td>
                        <td>{props.bookingId}</td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="name">Name: </label>
                        </td>
                        <td>
                            <input
                                name="name"
                                id="name"
                                value={formData?.customerInfo?.name}
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        customerInfo: {
                                            ...formData.customerInfo,
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
                                value={formData?.customerInfo?.contactNo}
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        customerInfo: {
                                            ...formData.customerInfo,
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
                                value={formData?.customerInfo?.email}
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        customerInfo: {
                                            ...formData.customerInfo,
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
                        <td>{formData?.restaurantName}</td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="group">Group Size: </label>
                        </td>
                        <td>
                            <select
                                name="group"
                                id="group"
                                value={formData?.groupSize}
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
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
                                value={unixTimestampToISODate(formData?.date)}
                                onChange={(e) => {
                                    const timeAsUnixSeconds = new Date(
                                        e.target.value
                                    );

                                    setFormData({
                                        ...formData,
                                        date: timeAsUnixSeconds,
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
                                value={formData?.hoursBooked?.[0]?.toString()}
                                onChange={(e) => {
                                    console.log("time: ", e.target.value);
                                    setFormData({
                                        ...formData,
                                        hoursBooked: [parseInt(e.target.value)],
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
                    <tr>
                        <td>Table number:</td>
                        <td>{formData?.tableNumber}</td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="specialRequests">
                                Special Requests:
                            </label>
                        </td>
                        <td>
                            <input
                                name="specialRequests"
                                id="specialRequests"
                                value={formData?.specialRequests}
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        specialRequests: e.target.value,
                                    });
                                }}
                            />
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
