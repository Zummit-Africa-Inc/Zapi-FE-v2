import React from "react";

const API = React.lazy(() => import('./API'))
const ComingSoon = React.lazy(() => import('./ComingSoon'))
const Configuration = React.lazy(() => import('./Configuration'))
const Dashboard = React.lazy(() => import('./Dashboard'))
const DashboardAPI = React.lazy(() => import('./DashboardAPI'))
const Discussions = React.lazy(() => import('./Discussions'))
const Documentation = React.lazy(() => import('./Documentation'))
const Error = React.lazy(() => import('./Error'))
const Feedback = React.lazy(() => import('./Feedback'))
const FreeTrial = React.lazy(() => import('./FreeTrial'))
const Home = React.lazy(() => import('./Home'))
const Hub = React.lazy(() => import('./Hub'))
const Login = React.lazy(() => import('./Login'))
const LoginHistory = React.lazy(() => import('./LoginHistory'))
const Notifications = React.lazy(() => import('./Notifications'))
const Pricing = React.lazy(() => import('./Pricing'))
const Signup = React.lazy(() => import('./Signup'))
const Success = React.lazy(() => import('./Success'))
const Terms = React.lazy(() => import('./Terms'))
const User = React.lazy(() => import('./User'))
const APIDesc = React.lazy(() => import('./APIDesc'))
const Contact = React.lazy(() => import('./Contact'))

export {
    API, ComingSoon, Configuration, Dashboard, DashboardAPI, Discussions, Documentation, Error, Feedback,
    FreeTrial, Home, Hub, Login, LoginHistory, Notifications, Pricing,
    Signup, Success, Terms, User, APIDesc, Contact
}
