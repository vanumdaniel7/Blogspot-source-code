import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialAuthState = {
    count: 0,
    name: localStorage.getItem("name"),
    email: localStorage.getItem("email"),
    password: localStorage.getItem("password"),
    isLoggedIn: !!localStorage.getItem("token"),
    joinedDate: localStorage.getItem("joinedDate"),
    profilePictureURL: localStorage.getItem("profilePictureURL")
};

const authSlice = createSlice({
    name: "auth",
    initialState: initialAuthState,
    reducers: {
        
    }
});

const initialNavbarState = {
    usersFoundWhileSearching: [
        
    ],
    isTyping: false,
    inputName: ""
};

const navbarSlice = createSlice({
    name: "navbar",
    initialState: initialNavbarState,
    reducers: {
        replace(state, action) {
            state.usersFoundWhileSearching = action.payload;
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
            state.inputName = "";
            state.usersFoundWhileSearching = [];
        }
    }
});

const sidebarInitialState = {
    translate: "translateX(-100%)",
    mainContentWidth: "100%"
}

const sidebarSlice = createSlice({
    name: "sidebar",
    initialState: sidebarInitialState,
    reducers: {
        toggle(state) {
            if(state.translate === "translateX(0%)") {
                state.translate = "translateX(-100%)";
                state.mainContentWidth = "100%";
            } else {
                state.translate = "translateX(0%)";
                state.mainContentWidth = "calc(100% - 60px)"
            }
        }
    }
});

const initialBlogState = {
    loadcnt: -1,
    isLoading: true,
    data: [

    ]
}

const blogSlice = createSlice({
    name: "blogs",
    initialState: initialBlogState,
    reducers: {
        addBlogs(state, action) {
            state.data = [...state.data, ...action.payload.data];
        },
        increaseLoadCnt(state) {
            state.loadcnt++;
        },
        getSpinner(state) {
            state.isLoading = true;
        },
        removeSpinner(state) {
            state.isLoading = false;
        }
    }
});

const initialUserProfileState = {
    loadcnt: -1,
    isLoading: 0,
    details: {
        name: null,
        email: null,
        joinedDate: null,
        count: null,
    },
    blogs: [

    ]
}

const userProfileSlice = createSlice({
    name: "userProfile",
    initialState: initialUserProfileState,
    reducers: {
        getBlogs(state, action) {
            state.blogs = [...state.blogs, ...action.payload];
        },
        getDetails(state, action) {
            state.details = action.payload;
        },
        increaseLoadCnt(state) {
            state.loadcnt++;
        },
        decreaseLoadCnt(state) {
            state.loadcnt--;
        },
        getSpinner(state) {
            state.isLoading = true;
        },
        removeSpinner(state) {
            state.isLoading = false;
        },
        loginHandler(state) {
            state.isLoggedIn = true;
        },
        logoutHandler(state) {
            state.isLoggedIn = false;
        }
    }
});

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        blogs: blogSlice.reducer,
        navbar: navbarSlice.reducer,
        sidebar: sidebarSlice.reducer,
        user: userProfileSlice.reducer
    }
});

export default store;
export const authActions = authSlice.actions;
export const blogsActions = blogSlice.actions;
export const navbarActions = navbarSlice.actions;
export const sidebarActions = sidebarSlice.actions;
export const userProfileActions = userProfileSlice.actions;