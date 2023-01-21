import React from "react";

const API = React.lazy(() => import("./API"));
const ComingSoon = React.lazy(() => import("./ComingSoon"));
const Configuration = React.lazy(() => import("./Configuration"));
const Dashboard = React.lazy(() => import("./Dashboard"));
const DashboardAPI = React.lazy(() => import("./DashboardAPI"));
const Discussions = React.lazy(() => import("./Discussions"));
const Documentation = React.lazy(() => import("./Documentation"));
const Error = React.lazy(() => import("./Error"));
const Feedback = React.lazy(() => import("./Feedback"));
const ForgotPassword = React.lazy(() => import("./ForgotPassword"));
const FreeTrial = React.lazy(() => import("./FreeTrial"));
const Home = React.lazy(() => import("./Home"));
const Hub = React.lazy(() => import("./Hub"));
const LoginHistory = React.lazy(() => import("./LoginHistory"));
const Notifications = React.lazy(() => import("./Notifications"));
const OTP = React.lazy(() => import("./OTP"));
const Pricing = React.lazy(() => import("./Pricing"));
const ResetPassword = React.lazy(() => import("./ResetPassword"));
const Success = React.lazy(() => import("./Success"));
const Terms = React.lazy(() => import("./Terms"));
const User = React.lazy(() => import("./User"));
const APIDesc = React.lazy(() => import("./APIDesc"));

export {
  API,
  ComingSoon,
  Configuration,
  Dashboard,
  DashboardAPI,
  Discussions,
  Documentation,
  Error,
  Feedback,
  ForgotPassword,
  FreeTrial,
  Home,
  Hub,
  LoginHistory,
  Notifications,
  OTP,
  Pricing,
  ResetPassword,
  Success,
  Terms,
  User,
  APIDesc,
};
