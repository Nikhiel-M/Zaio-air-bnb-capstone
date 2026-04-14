import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authAPI } from "./api";

export function checkHost(redirectPath = "/") {
  const navigate = useNavigate();
  useEffect(() => {
    const checkHost = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login-host"); // Not logged in, redirect to host login
        return;
      }
      try {
        const user = await authAPI.getCurrentUser();
        if (!user.isHost && user.role !== "host") {
          navigate(redirectPath); // Not a host, redirect
        }
      } catch (err) {
        navigate("/login-host"); 
      }
    };
    checkHost();
  }, [navigate, redirectPath]);
}