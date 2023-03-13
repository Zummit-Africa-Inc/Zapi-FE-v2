import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { Loader } from "../components";

const REDIRECT_URL = import.meta.env.VITE_REDIRECT_URL as string;

const Dashboard = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id")
  const token = searchParams.get("token")

  useEffect(() => {
    window.location.replace(`${REDIRECT_URL}?id=${id}&token=${token}`)
  },[])
  
  return <Loader />
};

export default Dashboard;
