import { useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 
 * @returns { handlePropertyForm, loading, error }
 */
export function usePropertyForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  /**
   * Handles property submission or update.
   * @param {Object} options
   *   - mode: "create" | "update"
   *   - payload: property data (fields, amenities, etc)
   *   - images: array of image files
   *   - id: property id (required for update)
   */
  const handlePropertyForm = async ({ mode, payload, images, id }) => {
    setError(null);
    if (!payload.title || !payload.long_description || !payload.address?.country || !payload.pricePerNight) {
      setError("Please fill required fields: title, description, address, price");
      return;
    }
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();
      formData.append("title", payload.title);
      formData.append("long_description", payload.long_description);
      formData.append("roomType", payload.roomType || "Entire place");
      // For update, backend expects address.country; for create, address as JSON
      if (mode === "update") {
        formData.append("address.country", payload.address.country);
      } else {
        formData.append("address", JSON.stringify(payload.address));
      }
      formData.append("bedrooms", String(payload.bedrooms));
      formData.append("bathrooms", String(payload.bathrooms));
      formData.append("maxGuests", String(payload.maxGuests));
      formData.append("pricePerNight", String(payload.pricePerNight));
      if (payload.rating) {
        formData.append("rating", JSON.stringify(payload.rating));
      }
      if (payload.amenities && payload.amenities.length) {
        formData.append("amenities", JSON.stringify(payload.amenities));
      }
      if (images && images.length) {
        Array.from(images).forEach((file) => {
          formData.append("images", file);
        });
      }
      let url = "https://zaio-air-bnb-capstone.onrender.com/api/properties";
      let method = "POST";
      if (mode === "update") {
        url += `/${id}`;
        method = "PUT";
      }
      const res = await fetch(url, {
        method,
        headers: {
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: formData,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || (mode === "update" ? "Failed to update property" : "Failed to create property"));
      if (mode === "update") {
        navigate("/host");
      } else {
        navigate("/host");
      }
    } catch (err) {
      setError(err.message || (mode === "update" ? "Error updating property" : "Error submitting property"));
    } finally {
      setLoading(false);
    }
  };

  return { handlePropertyForm, loading, error };
}

