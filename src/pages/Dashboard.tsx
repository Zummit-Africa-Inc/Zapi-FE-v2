import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Cookies from "universal-cookie";

const REDIRECT_URL = import.meta.env.VITE_REDIRECT_URL as string;

const Dashboard = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const token = searchParams.get("token");
  const cookies = new Cookies();

  useEffect(() => {
    const storedId = cookies.get("profileId");
    const storedToken = cookies.get("accessToken");
    window.location.replace(
      `${REDIRECT_URL}?id=${storedId}&token=${storedToken}`
    );
  }, []);
  return <div>Dashboard</div>;
};

export default Dashboard;
