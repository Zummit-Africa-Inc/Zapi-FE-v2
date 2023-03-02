import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const REDIRECT_URL = import.meta.env.VITE_REDIRECT_URL as string;

const Dashboard = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id")
  const token = searchParams.get("token")

  useEffect(() => {
    window.location.replace(`${REDIRECT_URL}?id=${id}&token=${token}`)
  },[])
  return <div>Dashboard</div>;
};

export default Dashboard;
