import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import CatSearch from "./pages/CatSearch";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import Information from "./pages/Information";
import LandingPage from "./pages/LandingPage";
import NavBar from "./components/NavBar";
import "./assets/index.css";

export const ResultContext = React.createContext();

export const ResultProvider = ({ children }) => {
    const [result, setResult] = useState(null);

    return (
        <ResultContext.Provider value={{ result, setResult }}>
            {children}
        </ResultContext.Provider>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <NavBar />
                <Outlet />
            </>
        ),
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <LandingPage />,
                index: true,
            },
            {
                path: "/catsearch",
                element: <CatSearch />,
            },
            {
                path: "/information/:breedName",
                element: <Information />,
            },
            {
                path: "/about",
                element: <About />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ResultProvider>
            <RouterProvider router={router} />
        </ResultProvider>
    </React.StrictMode>
);
