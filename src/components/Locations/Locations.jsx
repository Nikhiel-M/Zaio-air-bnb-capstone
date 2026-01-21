import React, { useEffect, useState } from "react";
import {
  LocationsContainer,
  LocationsCard,
  LocationsInformationContainer,
  LocationDetails,
  LocationImage,
  LocationTitle,
  LocationSubtitle,
  LocationReview
} from "./Locations.styled";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BACKEND_URL = 'http://localhost:5000';

const Locations = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Replace direct process.env access with a safe getter for Vite (import.meta.env) or CRA (process.env)
  const getApiBase = () => {
    try {
      // Vite: use VITE_API_URL
      if (typeof import.meta !== "undefined" && import.meta.env && import.meta.env.VITE_API_URL) {
        return String(import.meta.env.VITE_API_URL).replace(/\/$/, "");
      }
    } catch (e) {
      // ignore
    }
    // CRA or other bundlers that expose process.env
    if (typeof process !== "undefined" && process?.env?.REACT_APP_API_URL) {
      return String(process.env.REACT_APP_API_URL).replace(/\/$/, "");
    }
    return "";
  };

  // compute endpoint from env (Vite: VITE_API_URL, CRA: REACT_APP_API_URL)
  const ENDPOINT = `${getApiBase() || 'http://localhost:5000'}/api/properties`;

  useEffect(() => {
    let mounted = true;

    const fetchProps = async () => {
      try {
        const res = await fetch(ENDPOINT);
        if (!res.ok) throw new Error(`status ${res.status}`);
        const data = await res.json();
        if (!mounted) return;
        setProperties(Array.isArray(data) ? data : data.properties || []);
      } catch (err) {
        console.error("Fetch properties error:", err);
        if (mounted) setError("Failed to load properties");
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchProps();
    return () => { mounted = false; };
  }, []); // ENDPOINT used inside effect

  if (loading) return <LocationsContainer>Loading...</LocationsContainer>;
  if (error) return <LocationsContainer>{error}</LocationsContainer>;

  return (
    <LocationsContainer>
      {properties.map((p) => {
            const img = p.images?.[0]?.url ? `${BACKEND_URL}${p.images[0].url}` : "https://via.placeholder.com/400x250";
        const roomLabel =
          p.roomType === "entire_place" ? "Entire place" :
          p.roomType === "private_room" ? "Private room" : "Shared room";
        const details = [
          p.maxGuests ? `${p.maxGuests} guests` : null,
          p.bedrooms !== undefined ? `${p.bedrooms} bedrooms` : null,
          p.bathrooms !== undefined ? `${p.bathrooms} bathrooms` : null,
          ...(p.amenities || []).slice(0, 3)
        ].filter(Boolean).join(" · ");

        return (
          <LocationsCard
            key={p._id || p.id || p.title}
            onClick={() => navigate(`/booking/${p._id}`)}
            style={{ cursor: "pointer" }}
          >
            <LocationsInformationContainer>
              <LocationImage src={img || null} />
              <LocationDetails>
                <LocationSubtitle>{roomLabel}</LocationSubtitle>
                <LocationTitle>{p.title || p.address?.city || "Unknown location"}</LocationTitle>
                <LocationSubtitle>{details}</LocationSubtitle>
                <LocationReview>
                  <FaStar /> {(p.rating?.average ?? 0).toFixed(1)} ({p.rating?.count ?? 0} reviews)
                </LocationReview>
              </LocationDetails>
            </LocationsInformationContainer>
          </LocationsCard>
        );
      })}
    </LocationsContainer>
  );
};

export default Locations;
