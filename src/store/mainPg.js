import { createSlice } from "@reduxjs/toolkit";

const mainPgSlice = createSlice({
    name: "mainPg",
    initialState: {
        // INPUT STATES REQUIRED FOR THIS PAGE
        // stateName : value
        name: "",
        phone: "",
        email: "",
        restaurant: "",
        group: "",
        date: "",
        time: "",
        req: "",
        restOpt: "",
        grpOpt: [],
        timeOpt: "",
    },
    reducers: {
        // PUT REDUCERS FOR THIS PAGE HERE
        // reducerName(state, action) {
        //   state.stateName = action.payload;
        // },
        saveNewBooking(state, action) {
            state.name = action.payload.name;
            state.phone = action.payload.phone;
            state.email = action.payload.email;
            state.restaurant = action.payload.restaurant;
            state.group = action.payload.group;
            state.date = action.payload.date;
            state.time = action.payload.time;
            state.req = action.payload.req;
        },
        changeRestaurant(state, action) {
            state.restaurant = action.payload;
        },
        changeGroup(state, action) {
            state.group = action.payload;
        },
        changeDate(state, action) {
            state.date = action.payload;
        },
        setRestaurantOptions(state, action) {
            state.restOpt = action.payload;
        },
        setGroupOptions(state, action) {
            for (let i = 0; i < action.payload; i++) {
                state.grpOpt.push(<option value={i + 1}>{i + 1}</option>);
            }
        },
        setTimeOptions(state, action) {
            state.timeOpt = action.payload;
        },
    },
});

export const mainPgActions = mainPgSlice.actions;

export default mainPgSlice.reducer;
