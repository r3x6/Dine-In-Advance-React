import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./Main.module.css";

import { mainPgActions } from "../../store/mainPg";

// IMPORT NECESSARY COMPONENTS HERE
// import Component from "./fileName";

const Main = () => {
    // ALLOWS REDUX STORE TO BE ACCESSED
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // CALL STATES TO BE USED FROM STORE
    // const storeStateName = useSelector((state) => state.mainPg.stateName);
    const storeRestaurant = useSelector((state) => state.mainPg.restaurant);
    const storeGroup = useSelector((state) => state.mainPg.group);
    const storeDate = useSelector((state) => state.mainPg.date);

    // OTHER REDUCERS HERE, WITH USEEFFECT TO SPECIFY TRIGGER IF NECESSARY

    const restaurantOptions = "";
    useEffect(async () => {
        const checkOptions = async () => {
            const payload = {
                checker: "restaurant",
            };
            const res = await fetch(
                `http://localhost:5000/api/checkAvailable`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                }
            );
            const data = await res.json();
            return data;
        };
        // path before .map depends on API res
        restaurantOptions = checkOptions().map((x) => {
            return <option value={x.restaurantName}>{x.restaurantName}</option>;
        });
    }, []);

    const groupOptions = [];
    useEffect(async () => {
        const checkOptions = async () => {
            const payload = {
                checker: "group",
                restaurantState: storeRestaurant,
            };
            const res = await fetch(
                `http://localhost:5000/api/checkAvailable`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                }
            );
            const data = await res.json();
            return data;
        };
        // path before .map depends on API res
        const groupSizeArr = checkOptions().tables.map((x) => x.maxGroupSize);
        const groupSizeLimit = groupSizeArr.sort((a, b) => b - a)[0];

        for (let i = 0; i < groupSizeLimit; i++) {
            groupOptions.push(<option value={i + 1}>{i + 1}</option>);
        }
    }, [storeRestaurant]);

    const timeOptions = "";
    useEffect(async () => {
        const checkOptions = async () => {
            const payload = {
                checker: "time",
                restaurantState: storeRestaurant,
                groupState: storeGroup,
                dateState: storeDate,
            };
            const res = await fetch(
                `http://localhost:5000/api/checkAvailable`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                }
            );
            const data = await res.json();
            return data;
        };

        timeOptions = checkOptions().map((x) => {
            return <option value={x.time}>{x.time}</option>;
        });
    }, [storeDate]);

    const handleChangeRestaurant = (e) => {
        e.preventDefault();
        const restaurant = e.target.value;
        dispatch(mainPgActions.changeRestaurant(restaurant));
    };
    const handleChangeGroup = (e) => {
        e.preventDefault();
        const group = e.target.value;
        dispatch(mainPgActions.changeGroup(group));
    };
    const handleChangeDate = (e) => {
        e.preventDefault();
        const date = e.target.value;
        dispatch(mainPgActions.changeDate(date));
    };

    const handleNewBooking = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const phone = e.target.phone.value;
        const email = e.target.email.value;
        const restaurant = e.target.restaurant.value;
        const group = e.target.group.value;
        const date = e.target.date.value;
        const time = e.target.time.value;
        const req = e.target.req.value;
        const data = {
            name,
            phone,
            email,
            restaurant,
            group,
            date,
            time,
            req,
        };
        dispatch(mainPgActions.saveNewBooking(data));
        navigate("/confirmation");
    };

    const handleNewEdit = (e) => {
        e.preventDefault();
        const bookingId = e.target.bookingId.value;
        navigate(`/edit/${bookingId}`);
    };

    // PAGE HTML TEMPLATE WITH COMPONENTS WHERE NECESSARY (STATIC PARTS ARE AS DEFINED IN MAINPAGE)
    return (
        <div className={styles.mainDiv}>
            <div className={styles.leftSide}>
                <form onSubmit={handleNewBooking}>
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
                                    <label htmlFor="phone">
                                        Contact No. :{" "}
                                    </label>
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
                                    <label htmlFor="restaurant">
                                        Restaurant:{" "}
                                    </label>
                                </td>
                                <td>
                                    <select
                                        name="restaurant"
                                        id="restaurant"
                                        onChange={handleChangeRestaurant}
                                    >
                                        {restaurantOptions}
                                    </select>
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
                                        onChange={handleChangeGroup}
                                    >
                                        {groupOptions}
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
                                        onChange={handleChangeDate}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="time">Time: </label>
                                </td>
                                <td>
                                    <select name="time" id="time">
                                        {timeOptions}
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="req">
                                        Special Requests:{" "}
                                    </label>
                                </td>
                                <td>
                                    <input name="req" id="req" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    {/* <NavLink to="/confirmation"> */}
                    <button type="submit">Submit</button>
                    {/* </NavLink> */}
                </form>
            </div>
            <div className={styles.rightSide}>
                <p>Already have a booking?</p>
                <p>Input your booking Id to edit it:</p>
                <form onSubmit={handleNewEdit}>
                    <input
                        placeholder="Booking ID"
                        name="bookingId"
                        id="bookingId"
                    />
                    <button type="submit">Submit</button>
                </form>
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
export default Main;

// PUT PAGE SPECIFIC COMPONENTS IN SAME FOLDER
// IF SHARED COMPONENTS, PUT IN SHARE FOLDER
