import React from "react";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  PostBookingContainer,
  PostBookingTitle,
  PostBookingSubtitle,
  PostBookingFormContainer,
  PostBookingForm,
  PostBookingSelector,
  HiddenFileInput,
  ImagePickerButton,
  AmenityWrapper,
  AmenityToggle,
  AmenityMenu,
  AmenityItem,
  PostBookingAlignmentContainer,
  PostBookingTextarea,
} from "./PostBookingPage.styled";
import { PillButton } from "../../components/Buttons/PillButton.styled";
import { useHostGuard } from "../../services/hooks";

const PostBookingPage = () => {
  useHostGuard();
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
  // const [average, setAverage] = useState("");
  // const [count, setCount] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [amenitiesOpen, setAmenitiesOpen] = useState(false);
  const amenityRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Amenities options (must match backend enum exactly)
  const amenityOptions = [
    "Wifi",
    "Kitchen",
    "Parking",
    "Pool",
    "Gym",
    "Air conditioning",
    "Heating",
    "TV",
    "Washer",
    "Dryer",
    "Pets allowed",
    "Smoking allowed",
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
    if (!title || !long_description || !country || !pricePerNight) {
      setError(
        "Please fill required fields: title, description, address, price",
      );
      return;
    }
    
      const randomAverage = (Math.random() * 5).toFixed(1);
      const randomCount = Math.floor(Math.random() * 600);
      

    const payload = {
      title,
      long_description,
      roomType: roomType || "Entire place",
      address: {
        country: country || "Unknown",
      },
      bedrooms:
        bedrooms === ""
          ? Math.max(1, maxGuests !== "" ? Math.ceil(Number(maxGuests) / 2) : 1)
          : Number(bedrooms),
      bathrooms: bathrooms === "" ? 1 : Number(bathrooms),
      maxGuests: maxGuests === "" ? 1 : Number(maxGuests),
      pricePerNight: pricePerNight === "" ? 0 : Number(pricePerNight),
      amenities,
      rating: { average: Number(randomAverage), count: Number(randomCount) },
    };

    setLoading(true);
    try {
      const token = localStorage.getItem("token");

      const formData = new FormData();
      formData.append("title", payload.title);
      formData.append("long_description", payload.long_description);
      formData.append("roomType", payload.roomType);
      formData.append("address", JSON.stringify(payload.address));
      formData.append("bedrooms", String(payload.bedrooms));
      formData.append("bathrooms", String(payload.bathrooms));
      formData.append("maxGuests", String(payload.maxGuests));
      formData.append("pricePerNight", String(payload.pricePerNight));
      formData.append("rating", (payload.rating));

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

      const res = await fetch(
        "https://zaio-air-bnb-capstone.onrender.com/api/properties",
        {
          method: "POST",
          headers: {
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
          body: formData,
        },
      );

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
        <div className="left-column">
          {/* Title */}
          <PostBookingSubtitle>Listing Title</PostBookingSubtitle>
          <PostBookingForm
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          {/* Country */}
          <PostBookingSubtitle>Location</PostBookingSubtitle>
          <PostBookingForm
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />

          {/* LongDescription */}
          <PostBookingSubtitle>Description</PostBookingSubtitle>
          <PostBookingTextarea
            className="description"
            type="textarea"
            value={long_description}
            onChange={(e) => setLong_description(e.target.value)}
            required
          />
          {/* Add enhanced cleaning/self check-in boxes here */}

          {/* Amenities (Needs to be redone so that anything can be typed and selected) */}
          <PostBookingSubtitle>Amenities</PostBookingSubtitle>
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
        </div>

        <div className="right-column">
          <div className="column-container">
            <PostBookingAlignmentContainer>
              {/* Price */}
              <PostBookingSubtitle>Price</PostBookingSubtitle>
              <PostBookingForm
                type="number"
                value={pricePerNight}
                onChange={(e) => setPricePerNight(e.target.value)}
                required
                className="number-input"
              />
            </PostBookingAlignmentContainer>

            <PostBookingAlignmentContainer>
              {/* Room Type */}
              <PostBookingSubtitle>Type</PostBookingSubtitle>
              <PostBookingSelector
                type="text"
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
                required
              >
                <option value="">Select room type</option>
                <option value="Entire place">Entire place</option>
                <option value="Private room">Private room</option>
                <option value="Shared room">Shared room</option>
              </PostBookingSelector>
            </PostBookingAlignmentContainer>
          </div>

          <div className="column-container">
            <PostBookingAlignmentContainer>
              {/* Guests */}
              <PostBookingSubtitle>Guests</PostBookingSubtitle>
              <PostBookingForm
                type="number"
                value={maxGuests}
                onChange={(e) => setMaxGuests(e.target.value)}
                required
                className="number-input"
              />
            </PostBookingAlignmentContainer>
            <PostBookingAlignmentContainer>
              {/* Bedrooms */}
              <PostBookingSubtitle>Bedrooms</PostBookingSubtitle>
              <PostBookingForm
                type="number"
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
                min={1}
                className="number-input"
              />
            </PostBookingAlignmentContainer>
            <PostBookingAlignmentContainer>
              {/* Bathrooms */}
              <PostBookingSubtitle>Bathrooms</PostBookingSubtitle>
              <PostBookingForm
                type="number"
                value={bathrooms}
                onChange={(e) => setBathrooms(e.target.value)}
                min={1}
                className="number-input"
              />
            </PostBookingAlignmentContainer>
          </div>

          {/* Image Upload */}
          <PostBookingSubtitle>Image Upload</PostBookingSubtitle>
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
        </div>
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
