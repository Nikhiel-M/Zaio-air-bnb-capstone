import React from "react";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  PostBookingContainer,
  PostBookingTitle,
  PostBookingFormContainer,
  PostBookingForm,
  PostBookingSelector,
  HiddenFileInput,
  ImagePickerButton,
  AmenityWrapper,
  AmenityToggle,
  AmenityMenu,
  AmenityItem,
} from "./PostBookingPage.styled";
import { PillButton } from "../../components/Buttons/PillButton.styled";

const PostBookingPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [long_description, setLong_description] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [roomType, setRoomType] = useState("");
  const [address, setAddress] = useState("");
  const [maxGuests, setMaxGuests] = useState("");
  const [pricePerNight, setPricePerNight] = useState("");
  const [images, setImages] = useState(null);
  const [country, setCountry] = useState("");
  const [amenities, setAmenities] = useState([]);
  const [average, setAverage] = useState();
  const [count, setCount] = useState();
  const [bedrooms, setBedrooms] = useState();
  const [bathrooms, setBathrooms] = useState();
  const [amenitiesOpen, setAmenitiesOpen] = useState(false);
  const amenityRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Amenities options (match backend Schema)
  const amenityOptions = [
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
  ];

  const toggleAmenity = (name) => {
    setAmenities((prev) => {
      if (prev.includes(name)) return prev.filter((a) => a !== name);
      return [...prev, name];
    });
  };
  const navigate = useNavigate();

  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  useEffect(() => {
    const onDocClick = (e) => {
      if (
        amenitiesOpen &&
        amenityRef.current &&
        !amenityRef.current.contains(e.target)
      ) {
        setAmenitiesOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [amenitiesOpen]);

  const handleChange = (e) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    const limited = files.slice(0, 5);
    setImages(limited);
  };

  const handleAmenitiesChange = (e) => {
    const selected = Array.from(e.target.selectedOptions).map((o) => o.value);
    setAmenities(selected);
  };

  const handleSubmit = async (e) => {
    // If called from button onClick without event
    if (e && e.preventDefault) e.preventDefault();
    setError(null);

    // basic validation for required fields
    if (!title || !description || !address || !pricePerNight) {
      setError(
        "Please fill required fields: title, description, address, price",
      );
      return;
    }

    // Select values now match backend enums directly
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
      bedrooms:
        Number(bedrooms) ||
        Math.max(1, Number(maxGuests) ? Math.ceil(Number(maxGuests) / 2) : 1),
      bathrooms: Number(bathrooms) || 1,
      beds: Math.max(
        1,
        Number(maxGuests) ? Math.ceil(Number(maxGuests) / 2) : 1,
      ),
      maxGuests: Number(maxGuests) || 1,
      pricePerNight: Number(pricePerNight) || 0,
      amenities,
      rating: { average: Number(average) || 0, count: Number(count) || 0 },
    };

    setLoading(true);
    try {
      const token = localStorage.getItem("token");

      // Build multipart/form-data
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

      // http://localhost:5000/api/properties

      const res = await fetch("https://zaio-air-bnb-capstone.onrender.com/properties", {
        method: "POST",
        headers: {
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to create property");

      // on success navigate or clear form
      navigate("/");
    } catch (err) {
      console.error(err);
      setError(err.message || "Error submitting property");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PostBookingContainer>
      <PostBookingTitle>Please fill in these fields</PostBookingTitle>

      <PostBookingFormContainer>
        <PostBookingForm
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Title"
        />
        <PostBookingForm
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          placeholder="description"
        />

        <PostBookingForm
          type="text"
          value={long_description}
          onChange={(e) => setLong_description(e.target.value)}
          required
          placeholder="Information"
        />

        <PostBookingSelector
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
        </PostBookingSelector>

        <PostBookingSelector
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
        </PostBookingSelector>

        <PostBookingForm
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          placeholder="Address"
        />
        <PostBookingForm
          type="number"
          value={maxGuests}
          onChange={(e) => setMaxGuests(e.target.value)}
          required
          placeholder="Amount of guests"
        />
        <PostBookingForm
          type="number"
          value={pricePerNight}
          onChange={(e) => setPricePerNight(e.target.value)}
          required
          placeholder="Price per night"
        />

        <PostBookingForm
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Country"
        />

        <PostBookingForm
          type="number"
          value={bedrooms}
          onChange={(e) => setBedrooms(Number(e.target.value) || 1)}
          min={1}
          placeholder="Bedrooms"
        />

        <PostBookingForm
          type="number"
          value={bathrooms}
          onChange={(e) => setBathrooms(Number(e.target.value) || 1)}
          min={1}
          placeholder="Bathrooms"
        />

          <div>
            <AmenityWrapper>
              <AmenityToggle
                type="button"
                onClick={() => setAmenitiesOpen((v) => !v)}
                aria-expanded={amenitiesOpen}
                aria-haspopup="listbox"
              >
                {amenities.length
                  ? `${amenities.length} selected`
                  : "Select amenities"}
              </AmenityToggle>

              {amenitiesOpen && (
                <AmenityMenu role="listbox" aria-multiselectable="true">
                  {amenityOptions.map((opt) => (
                    <AmenityItem key={opt}>
                      <input
                        id={`amen-${opt}`}
                        type="checkbox"
                        checked={amenities.includes(opt)}
                        onChange={() => {
                          // toggle
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
                    </AmenityItem>
                  ))}
                </AmenityMenu>
              )}
            </AmenityWrapper>
          </div>
  

        <PostBookingForm
          type="number"
          value={average}
          onChange={(e) => setAverage(Number(e.target.value) || 0)}
          min={0}
          max={5}
          step={0.1}
          placeholder="Stars (0-5)"
        />

        <PostBookingForm
          type="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value) || 0)}
          min={0}
          placeholder="Reviews"
        />

        <HiddenFileInput
          type="file"
          ref={fileInputRef}
          multiple
          accept="image/*"
          onChange={handleChange}
        />

        <ImagePickerButton
          type="button"
          onClick={handleClick}
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
        </ImagePickerButton>
      </PostBookingFormContainer>

      {error && <div className="error-msg">{error}</div>}
      <PillButton
        className="post-btn"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit"}
      </PillButton>
    </PostBookingContainer>
  );
};

export default PostBookingPage;
