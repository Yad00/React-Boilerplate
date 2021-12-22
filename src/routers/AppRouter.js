import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from "../components/DashboardPage";
import NotFoundPage from "../components/NotFoundPage";
import LoginPage from "../components/LoginPage";
import PrivateRoute from './PrivateRoute';
import PublicRoute from "./PublicRoute";

const AppRouter = () => (
    <Router>
        <div>
            <Routes>
                <Route exact path="/" element={<PublicRoute><LoginPage /></PublicRoute>} />
                <Route exact path="/dashboard" element={<PrivateRoute><DashboardPage /></PrivateRoute>}/>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    </Router>
);

export default AppRouter;