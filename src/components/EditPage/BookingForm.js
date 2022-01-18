import React, { useState } from "react";

import styles from "./BookingForm.module.css";

function handleSubmit() {}

const BookingForm = (props) => {
    const [bookingData, setBookingData] = useState();

    return (
        <form onSubmit={handleSubmit}>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <label htmlFor="name">Name: </label>
                        </td>
                        <td>
                            <input name="name" id="name" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="phone">Contact No. : </label>
                        </td>
                        <td>
                            <input name="phone" id="phone" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="email">Email: </label>
                        </td>
                        <td>
                            <input name="email" id="email" />
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
                                value="Chang & Chin"
                                readonly
                                class={styles.readonly}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="group">Group Size: </label>
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
                            <label htmlFor="date">Date: </label>
                        </td>
                        <td>
                            <input name="date" id="date" type="date" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="time">Time: </label>
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
                </tbody>
            </table>
            {/* <NavLink to="/confirmation"> */}
            <button type="submit">Submit</button>
            {/* </NavLink> */}
        </form>
    );
};

export default BookingForm;
