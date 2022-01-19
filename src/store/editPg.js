import { createSlice } from "@reduxjs/toolkit";

const editPgSlice = createSlice({
    name: "editPg",
    initialState: {
        // this state starts out as a blank booking object
        bookingToEdit: {
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
        },
    },
    reducers: {
        setBookingToEdit(state, action) {
            state.bookingToEdit = action.payload;
        },
    },
});

export const editPgActions = editPgSlice.actions;

export default editPgSlice.reducer;
