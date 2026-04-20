import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authAPI } from "./api";

// Custom hook to guard host-only routes
export function useHostGuard(redirectPath = "/login-host") {
  const navigate = useNavigate();
  useEffect(() => {
    const checkHost = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("You must be logged in as a host to access this page.");
        navigate("/login-host", { replace: true });
        return;
      }
      try {
        const response = await authAPI.getCurrentUser();
        const user = response.user;
        if (!(user && (user.isHost === true || user.role === "host"))) {
          navigate(redirectPath, { replace: true });
        }
      } catch (err) {
        navigate("/login-host", { replace: true });
      }
    };
    checkHost();
  }, [redirectPath]);
}

