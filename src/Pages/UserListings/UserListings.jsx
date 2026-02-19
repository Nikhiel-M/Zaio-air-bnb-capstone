import React, { useEffect, useState } from "react";
import {
  UserListingsTitle,
  UserListingsSubtitle,
  UserListingsContainer,
  UserListingsCard,
  UserListingsInformationContainer,
  UserListigsImage,
  UserListingsDetails,
  UserListingsReview,
  UserListingsIcon,
  OptionsMenu,
} from "./UserListings.styled";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import { propertiesAPI } from "../../services/api";

const ENDPOINT = `https://zaio-air-bnb-capstone.onrender.com/api/properties`;

const UserListings = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();
  const [openOptionsId, setOpenOptionsId] = useState(null);

  useEffect(() => {
    // Get user from localStorage or API (token-based)
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setUserId(null);
          setLoading(false);
          return;
        }
        // Try to get user info from backend
        const res = await fetch(
          "https://zaio-air-bnb-capstone.onrender.com/api/auth/me",
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        );
        if (!res.ok) throw new Error("Failed to fetch user");
        const data = await res.json();
        setUserId(data.user?._id || data.user?.id);
      } catch (err) {
        setError("Failed to load user");
      }
    };
    fetchUser();
  }, []);

  useEffect(() => {
    if (!userId) return;
    let mounted = true;
    const fetchProps = async () => {
      try {
        const res = await fetch(ENDPOINT);
        if (!res.ok) throw new Error(`status ${res.status}`);
        const data = await res.json();
        if (!mounted) return;
        // Only show properties where owner/host is the user
        const allProps = Array.isArray(data) ? data : data.properties || [];
        const userProps = allProps.filter((p) => {
          // Try both _id and id for user, and host/owner fields for property
          const hostId = p.host?._id || p.host || p.owner?._id || p.owner;
          return hostId && userId && String(hostId) === String(userId);
        });
        setProperties(userProps);
      } catch (err) {
        setError("Failed to load properties");
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchProps();
    return () => {
      mounted = false;
    };
  }, [userId]);

  const toggleOptions = (id) => {
    setOpenOptionsId((prevId) => (prevId === id ? null : id));
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this listing?"))
      return;
    try {
      await propertiesAPI.deleteProperty(id);
      setProperties((prev) => prev.filter((p) => p._id !== id && p.id !== id));
    } catch (err) {
      alert("Failed to delete listing");
    }
  };

  if (loading) return <UserListingsContainer>Loading...</UserListingsContainer>;
  if (error) return <UserListingsContainer>{error}</UserListingsContainer>;

  return (
    <UserListingsContainer>
      <UserListingsTitle className="header">Your Listings</UserListingsTitle>

      {properties.length === 0 ? (
        <UserListingsTitle>
          You have not posted any listings yet.
        </UserListingsTitle>
      ) : (
        properties.map((p) => {
          const img =
            p.images?.[0]?.url || "https://via.placeholder.com/400x250";

          const details = [
            p.maxGuests ? `${p.maxGuests} guests` : null,
            p.bedrooms !== undefined ? `${p.bedrooms} bedrooms` : null,
            p.bathrooms !== undefined ? `${p.bathrooms} bathrooms` : null,
            ...(p.amenities || []).slice(0, 3),
          ]
            .filter(Boolean)
            .join(" · ");

          return (
            <UserListingsCard key={p._id || p.id || p.title}>
              <UserListingsInformationContainer>
                <UserListigsImage src={img} alt={p.title} />

                <UserListingsDetails>
                  <UserListingsTitle>
                    {p.title || p.address?.city || "Unknown location"}
                  </UserListingsTitle>

                  <UserListingsSubtitle>{p.description}</UserListingsSubtitle>

                  <UserListingsSubtitle>
                    {p.address.country}
                  </UserListingsSubtitle>

                  <UserListingsSubtitle>{details}</UserListingsSubtitle>

                  <UserListingsReview>
                    <FaStar /> {(p.rating?.average ?? 0).toFixed(1)} (
                    {p.rating?.count ?? 0} reviews)
                  </UserListingsReview>
                </UserListingsDetails>

                <UserListingsIcon>
                  <SlOptionsVertical
                    className="options-icon"
                    onClick={() => toggleOptions(p._id || p.id || p.title)}
                  />
                  {openOptionsId === (p._id || p.id || p.title) && (
                    <OptionsMenu>
                      <h3
                        className="options-title"
                        onClick={() => navigate(`/user-listings/${p._id}`)}
                      >
                        Edit
                      </h3>
                      <h3
                        className="options-title"
                        onClick={() => handleDelete(p._id || p.id || p.title)}
                      >
                        Delete
                      </h3>
                    </OptionsMenu>
                  )}
                </UserListingsIcon>
              </UserListingsInformationContainer>
            </UserListingsCard>
          );
        })
      )}
    </UserListingsContainer>
  );
};

export default UserListings;
