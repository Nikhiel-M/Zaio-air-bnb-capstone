const handleSubmit = async (e) => {
  e.preventDefault();
  setError(null);
  if (!title || !description || !address || !pricePerNight) {
    setError("Please fill required fields: title, description, address, price");
    return;
  }
  const payload = {
    title,
    description,
    long_description,
    propertyType: propertyType || "Other",
    roomType: roomType || "Entire place",
    address: {
      city: address,
      country: country || "Unknown",
    },
    bedrooms: Number(bedrooms) || 1,
    bathrooms: Number(bathrooms) || 1,
    beds: Math.max(1, Number(maxGuests) ? Math.ceil(Number(maxGuests) / 2) : 1),
    maxGuests: Number(maxGuests) || 1,
    pricePerNight: Number(pricePerNight) || 0,
    amenities,
    rating: { average: Number(average) || 0, count: Number(count) || 0 },
  };
  setLoading(true);
  try {
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("title", payload.title);
    formData.append("description", payload.description);
    formData.append("long_description", payload.long_description);
    formData.append("propertyType", payload.propertyType);
    formData.append("roomType", payload.roomType);
    formData.append("address", JSON.stringify(payload.address));
    formData.append("bedrooms", String(payload.bedrooms));
    formData.append("bathrooms", String(payload.bathrooms));
    formData.append("beds", String(payload.beds));
    formData.append("maxGuests", String(payload.maxGuests));
    formData.append("pricePerNight", String(payload.pricePerNight));
    if (amenities && amenities.length) {
      formData.append("amenities", JSON.stringify(amenities));
    }
    if (payload.rating) {
      formData.append("rating", JSON.stringify(payload.rating));
    }
    if (images && images.length) {
      Array.from(images).forEach((file) => {
        formData.append("images", file);
      });
    }
    const res = await fetch(
      `https://zaio-air-bnb-capstone.onrender.com/api/properties/${id}`,
      {
        method: "PUT",
        headers: {
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: formData,
      },
    );
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Failed to update property");
    navigate("/");
  } catch (err) {
    setError(err.message || "Error updating property");
  } finally {
    setLoading(false);
  }
};
import React, { useEffect } from "react";
import {
  UpdateListingContainer,
  UpdateListingsTitle,
  UpdateListingsFormContainer,
  UpdateListingsForm,
  UpdateListingsSelector,
  UpdateListingsHiddenFileInput,
  UpdateListingsImagePickerButton,
  UpdateListingsAmenityWrapper,
  UpdateListingsAmenityToggle,
  UpdateListingsAmenityMenu,
  UpdateListingsAmenityItem,
  UpdateListingsTextArea,
} from "./UpdateListingPage.styled";
import { PillButton } from "../../components/Buttons/PillButton.styled";
import { useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateListingPage = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [long_description, setLong_description] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [roomType, setRoomType] = useState("");
  const [address, setAddress] = useState("");
  const [maxGuests, setMaxGuests] = useState(1);
  const [pricePerNight, setPricePerNight] = useState(0);
  const [images, setImages] = useState([]);
  const [country, setCountry] = useState("");
  const [amenities, setAmenities] = useState([]);
  const [average, setAverage] = useState(0);
  const [count, setCount] = useState(0);
  const [bedrooms, setBedrooms] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const [amenitiesOpen, setAmenitiesOpen] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (!id) return;
    setLoading(true);
    setError(null);
    fetch(`https://zaio-air-bnb-capstone.onrender.com/api/properties/${id}`)
      .then(async (res) => {
        let data;
        try {
          data = await res.json();
        } catch (jsonErr) {
          setError("Failed to parse backend response.");
          return;
        }
        if (!res.ok) {
          setError(data?.message || `Backend error: ${res.status}`);
          return;
        }
        const prop = data.property || data;
        if (!prop || !prop.title) {
          setError("Property not found or invalid data from backend.");
          return;
        }
        setTitle(prop.title ?? "");
        setDescription(prop.description ?? "");
        setLong_description(prop.long_description ?? "");
        setPropertyType(prop.propertyType ?? "");
        setRoomType(prop.roomType ?? "");
        setAddress(prop.address?.city ?? "");
        setCountry(prop.address?.country ?? "");
        setMaxGuests(prop.maxGuests ?? 1);
        setPricePerNight(prop.pricePerNight ?? 0);
        setBedrooms(prop.bedrooms ?? 1);
        setBathrooms(prop.bathrooms ?? 1);
        setAmenities(Array.isArray(prop.amenities) ? prop.amenities : []);
        setAverage(prop.rating?.average ?? 0);
        setCount(prop.rating?.count ?? 0);
      })
      .catch(() => {
        setError("Failed to load listing");
      })
      .finally(() => setLoading(false));
  }, [id]);
  if (loading) return <div>Loading listing data...</div>;
  if (error) return <div className="error-msg">{error}</div>;

  return (
    <UpdateListingContainer>
      <UpdateListingsTitle>Update your listing here!</UpdateListingsTitle>

      <UpdateListingsFormContainer>
        <UpdateListingsTextArea
          type="text"
          value={typeof title === "string" ? title : (title ?? "")}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Title"
          className="text-block"
        />
        <UpdateListingsTextArea
          type="text"
          value={
            typeof description === "string" ? description : (description ?? "")
          }
          onChange={(e) => setDescription(e.target.value)}
          required
          placeholder="Description"
          className="text-block"
        />

        <UpdateListingsTextArea
          type="text"
          value={
            typeof long_description === "string"
              ? long_description
              : (long_description ?? "")
          }
          onChange={(e) => setLong_description(e.target.value)}
          required
          placeholder="Information"
          className="text-block"
        />
        <UpdateListingsSelector
          type="text"
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
          required
          placeholder="Type of property"
        >
          <option value="">Select property type</option>
          <option value="House">House</option>
          <option value="Apartment">Apartment</option>
          <option value="Condo">Condo</option>
          <option value="Villa">Villa</option>
          <option value="Cabin">Cabin</option>
          <option value="Loft">Loft</option>
          <option value="Townhouse">Townhouse</option>
          <option value="Other">Other</option>
        </UpdateListingsSelector>

        <UpdateListingsSelector
          type="text"
          value={roomType}
          onChange={(e) => setRoomType(e.target.value)}
          required
          placeholder="Type of room"
        >
          <option value="">Select room type</option>
          <option value="Entire place">Entire place</option>
          <option value="Private room">Private room</option>
          <option value="Shared room">Shared room</option>
        </UpdateListingsSelector>

        <UpdateListingsAmenityWrapper>
          <UpdateListingsAmenityToggle
            type="button"
            onClick={() => setAmenitiesOpen((v) => !v)}
            aria-expanded={amenitiesOpen}
            aria-haspopup="listbox"
          >
            {amenities.length
              ? `${amenities.length} selected`
              : "Select amenities"}
          </UpdateListingsAmenityToggle>
          {amenitiesOpen && (
            <UpdateListingsAmenityMenu
              role="listbox"
              aria-multiselectable="true"
            >
              {[
                "wifi",
                "kitchen",
                "parking",
                "pool",
                "gym",
                "air_conditioning",
                "heating",
                "tv",
                "washer",
                "dryer",
                "pets_allowed",
                "smoking_allowed",
              ].map((opt) => (
                <UpdateListingsAmenityItem key={opt}>
                  <input
                    id={`amen-${opt}`}
                    type="checkbox"
                    checked={amenities.includes(opt)}
                    onChange={() => {
                      setAmenities((prev) =>
                        prev.includes(opt)
                          ? prev.filter((a) => a !== opt)
                          : [...prev, opt],
                      );
                    }}
                  />
                  <label
                    htmlFor={`amen-${opt}`}
                    style={{
                      marginLeft: "0.5rem",
                      textTransform: "capitalize",
                    }}
                  >
                    {opt.replace("_", " ")}
                  </label>
                </UpdateListingsAmenityItem>
              ))}
            </UpdateListingsAmenityMenu>
          )}
        </UpdateListingsAmenityWrapper>

        <UpdateListingsForm
          type="number"
          value={maxGuests ?? 1}
          onChange={(e) => setMaxGuests(Number(e.target.value) || 1)}
          required
          placeholder="Amount of guests"
        />
        <UpdateListingsForm
          type="number"
          value={pricePerNight ?? 0}
          onChange={(e) => setPricePerNight(Number(e.target.value) || 0)}
          required
          placeholder="Price per night"
        />
        <UpdateListingsForm
          type="number"
          value={bedrooms ?? 1}
          onChange={(e) => setBedrooms(Number(e.target.value) || 1)}
          required
          placeholder="Bedrooms"
        />
        <UpdateListingsForm
          type="number"
          value={bathrooms ?? 1}
          onChange={(e) => setBathrooms(Number(e.target.value) || 1)}
          required
          placeholder="Bathrooms"
        />

        <UpdateListingsForm
          type="text"
          value={country ?? ""}
          onChange={(e) => setCountry(e.target.value)}
          required
          placeholder="Country"
        />
        <UpdateListingsForm
          type="text"
          value={typeof address === "string" ? address : (address ?? "")}
          onChange={(e) => setAddress(e.target.value)}
          required
          placeholder="Address"
        />

        <UpdateListingsForm
          type="number"
          value={average ?? ""}
          onChange={(e) => setAverage(Number(e.target.value) || 0)}
          required
          placeholder="Stars"
        />
        <UpdateListingsForm
          type="number"
          value={count ?? ""}
          onChange={(e) => setCount(Number(e.target.value) || 0)}
          required
          placeholder="Reviews"
        />
        <UpdateListingsHiddenFileInput
          type="file"
          multiple
          accept="image/*"
          onChange={(e) => {
            const files = e.target.files ? Array.from(e.target.files) : [];
            setImages(files.slice(0, 5));
          }}
        />
        <UpdateListingsImagePickerButton
          type="button"
          onClick={() => document.querySelector('input[type="file"]')?.click()}
          aria-live="polite"
          title={
            images && images.length
              ? `${images.length} ${images.length === 1 ? "image" : "images"} selected`
              : "Click to select 5 images"
          }
        >
          {images && images.length > 0
            ? `${images.length} ${images.length === 1 ? "image" : "images"} selected`
            : "Click to select 5 images"}
        </UpdateListingsImagePickerButton>
      </UpdateListingsFormContainer>

      {error && <div className="error-msg">{error}</div>}
      <PillButton
        className="post-btn"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit"}
      </PillButton>
    </UpdateListingContainer>
  );
};

export default UpdateListingPage;
