import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../context";
import { publicRoutes, privateRoutes } from "../router/routes";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const { isAuth, isLoading } = useContext(AuthContext);

    if (isLoading) {
        return <Loader />;
    }
    return isAuth ? (
        <Routes>
            {privateRoutes.map((route) => (
                <Route
                    path={route.path}
                    element={<route.element />}
                    exact={route.exact}
                    key={route.path}
                />
            ))}
            <Route path="/" element={<Navigate replace to={"/posts"} />} />
            <Route path="/login" element={<Navigate replace to={"/posts"} />} />
            <Route path="*" element={<Navigate replace to={"/error"} />} />
        </Routes>
    ) : (
        <Routes>
            {publicRoutes.map((route) => (
                <Route
                    path={route.path}
                    element={<route.element />}
                    exact={route.exact}
                    key={route.path}
                />
            ))}{" "}
            <Route path="*" element={<Navigate replace to={"/login"} />} />
        </Routes>
    );
};

export default AppRouter;
