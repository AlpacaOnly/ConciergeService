import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ProtectedRoute from "./ProtectedRoute";
import {useEffect, useState} from "react";
import Login from "../components/Login";
import ProfileRouter from "../pages/ProfileRouter";

export default function AppRoutes() {
    const [user, setUser] = useState()

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) setUser(user);
    }, [])

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
                        <ProfileRouter user={user}/>
                    </ProtectedRoute>
                }>
                </Route>
            </Routes>
        </Router>
    )
}