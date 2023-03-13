import React, { useEffect } from "react";
import Cookies from "universal-cookie";

import { Loader } from "../components";

const REDIRECT_URL = import.meta.env.VITE_REDIRECT_URL as string;

const Dashboard = () => {
  const cookies = new Cookies();

  useEffect(() => {
    window.location.replace(`${REDIRECT_URL}?id=${cookies.get("profileId")}&token=${cookies.get("accessToken")}`);
  },[])
  
  return <Loader />
};

export default Dashboard;
