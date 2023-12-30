import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialuserResultState = {
    users: [
        
    ],
    isTyping: false,
    isInputEmpty: true,
    inputName: ""
};

const userResultSlice = createSlice({
    name: "userResult",
    initialState: initialuserResultState,
    reducers: {
        replace(state, action) {
            state.users = action.payload;
        },
        typing(state) {
            state.isTyping = true;
        },
        notTyping(state) {
            state.isTyping = false;
        },
        changeInputName(state, action) {
            state.inputName = action.payload;
        },
        makeInputEmpty(state) {
            state.isInputEmpty = true;
            state.users = [];
        },
        makeInputNonEmpty(state) {
            state.isInputEmpty = false;
        },
        clearInput(state) {
            state.inputName = "";
            state.isInputEmpty = true;
            state.users = [];
        }
    }
});

const initialBlogState = {
    data: [

    ]
}

const blogSlice = createSlice({
    name: "blogs",
    initialState: initialBlogState,
    reducers: {
        getBlogs(state, action) {
            state.data = action.payload.data;
        }
    }
});

const initialUserState = {
    isLoading: 0,
    details: {
        name: null,
        email: null,
        dateJoined: "",
        count: 0,
        aboutMe: "",
        countForEachMonth: [
            {month: 1, count: 0},
            {month: 2, count: 0},
            {month: 3, count: 0},
            {month: 4, count: 0},
            {month: 5, count: 0},
            {month: 6, count: 0},
            {month: 7, count: 0},
            {month: 8, count: 0},
            {month: 9, count: 0},
            {month: 10, count: 0},
            {month: 11, count: 0},
            {month: 12, count: 1}
        ]
    },
    showSidebar: false,
    isLoggedIn: !!localStorage.getItem("token"),
    blogs: [

    ]
};

const userSlice = createSlice({
    name: "user",
    initialState: initialUserState,
    reducers: {
        getBlogs(state, action) {
            state.blogs = action.payload;
        },
        getDetails(state, action) {
            state.details = action.payload;
        },
        loginHandler(state) {
            state.isLoggedIn = true;
        },
        logoutHandler(state) {
            state.isLoggedIn = false;
        },
        toggleSideBar(state) {
            state.showSidebar = !state.showSidebar;
        },
        closeSideBar(state) {
            state.showSidebar = false;
        },
        getName(state, action) {
            state.details.name = action.payload;
        },getAboutMe(state, action) {
            state.details.aboutMe = action.payload;
        },
    }
});

const store = configureStore({
    reducer: {
        userResult: userResultSlice.reducer,
        blogs: blogSlice.reducer,
        user: userSlice.reducer
    }
});

export default store;
export const userResultActions = userResultSlice.actions;
export const blogActions = blogSlice.actions;
export const userActions = userSlice.actions;