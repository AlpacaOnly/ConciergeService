import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ProtectedRoute from "./ProtectedRoute";
import {useEffect, useState} from "react";
import ParentComponent from "../ParentComponent";
import Login from "../components/Login";

export default function AppRoutes() {
    const [user, setUser] = useState()

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) setUser(user);
    }, [])

    console.log(user)

    return (
        <Router>
            <Routes>
                <Route path="/login" element={
                    <ProtectedRoute isAllowed={!user} redirectPath="/">
                        <Login/>
                    </ProtectedRoute>
                }>
                </Route>


                <Route path="/" element={
                    <ProtectedRoute isAllowed={user} redirectPath="/login">
                        <ParentComponent/>
                    </ProtectedRoute>
                }>
                </Route>
            </Routes>
        </Router>
    )
}