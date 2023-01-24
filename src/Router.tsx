import React from "react";
import { Route, Routes } from "react-router-dom";

import {
  API,
  ComingSoon,
  Dashboard,
  Discussions,
  Documentation,
  Error,
  Feedback,
  FreeTrial,
  Home,
  Hub,
  LoginHistory,
  Notifications,
  Pricing,
  Success,
  Terms,
  User,
  APIDesc,
} from "./pages";
import AuthRoutes from "./components/AuthRoutes";

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/coming-soon" element={<ComingSoon />} />
      <Route path="/error" element={<Error />} />
      <Route path="/documentation" element={<Documentation />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/api-hub" element={<Hub />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/free-trial" element={<FreeTrial />} />
      <Route path="/api/:id" element={<APIDesc />} />

      <Route element={<AuthRoutes />}>
        <Route path="/developer/:id" element={<User />} />
        <Route path="/developer/dashboard" element={<Dashboard />} />
        <Route path="/developer/api/:id" element={<Dashboard />} />
        <Route path="/developer/configuration" element={<Dashboard />} />
        <Route path="/developer/notifications" element={<Notifications />} />
        <Route path="/developer/discussions" element={<Discussions />} />
        <Route path="/developer/login-history" element={<LoginHistory />} />
      </Route>
    </Routes>
  );
};

export default Router;
