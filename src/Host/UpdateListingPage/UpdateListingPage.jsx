import React, { useEffect, useRef, useState } from "react";
import {
  UpdateListingContainer,
  UpdateListingsTitle,
  UpdateListingsFormContainer,
  UpdateListingsForm,
  UpdateListingsSelector,
  UpdateListingsHiddenFileInput,
  UpdateListingsImagePickerButton,
  UpdateListingsTextArea,
} from "./UpdateListingPage.styled";
import { PillButton } from "../../components/Buttons/PillButton.styled";
import { useParams } from "react-router-dom";
import { useHostGuard } from "../../services/hooks";
import { usePropertyForm } from "../../services/propertySubmit";
import { PostBookingSubtitle } from "../PostBookingPage/PostBookingPage.styled";
import { TiDeleteOutline } from "react-icons/ti";
import { AmenityUL, AmenityListItem } from "../PostBookingPage/PostBookingPage.styled";

const UpdateListingPage = () => {
  useHostGuard();
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [long_description, setLong_description] = useState("");
  const [roomType, setRoomType] = useState("");
  const [maxGuests, setMaxGuests] = useState(1);
  const [pricePerNight, setPricePerNight] = useState("");
  const [images, setImages] = useState([]);
  const [country, setCountry] = useState("");
  const [amenities, setAmenities] = useState([]);
  const [amenityItem, setAmenityItem] = useState("");
  const [average, setAverage] = useState(0);
  const [count, setCount] = useState(0);
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [amenitiesOpen, setAmenitiesOpen] = useState(false);
  const { handlePropertyForm, loading, error } = usePropertyForm();
  // Local loading and error for data fetching
  const [fetchLoading, setFetchLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);


  const addAmenity = (amenityItem) => {
    if (!amenityItem.trim()) return;
    setAmenities((prev) => [...prev, amenityItem]);
    setAmenityItem("");
  };

  const removeAmenity = (amenity, index) => {
    setAmenities((prev) => prev.filter((a, i) => i !== index));
  };

  const amenitiesList = (
    <AmenityUL>
      {amenities.map((amenity, index) => (
        <AmenityListItem key={index}>
          {amenity}{" "}
          <button
            className="delete-btn"
            onClick={() => removeAmenity(amenity, index)}
          >
            <TiDeleteOutline style={{ fontSize: "1.5rem", padding: "0" }} />
          </button>
        </AmenityListItem>
      ))}
    </AmenityUL>
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      title,
      long_description,
      roomType: roomType || "Entire place",
      address: {
        country: country,
      },
      bedrooms: Number(bedrooms) || 1,
      bathrooms: Number(bathrooms) || 1,
      maxGuests: Number(maxGuests) || 1,
      pricePerNight: Number(pricePerNight) || 0,
      amenities,
      rating: { average: Number(average) || 0, count: Number(count) || 0 },
    };
    await handlePropertyForm({ mode: "update", payload, images, id });
  };

  useEffect(() => {
    if (!id) return;
    setFetchLoading(true);
    setFetchError(null);
    fetch(`https://zaio-air-bnb-capstone.onrender.com/api/properties/${id}`)
      .then(async (res) => {
        let data;
        try {
          data = await res.json();
        } catch (jsonErr) {
          setFetchError("Failed to parse backend response.");
          return;
        }
        if (!res.ok) {
          setFetchError(data?.message || `Backend error: ${res.status}`);
          return;
        }
        const prop = data.property || data;
        if (!prop || !prop.title) {
          setFetchError("Property not found or invalid data from backend.");
          return;
        }
        setTitle(prop.title ?? "");
        setLong_description(prop.long_description ?? "");
        setRoomType(prop.roomType ?? "");
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
        setFetchError("Failed to load listing");
      })
      .finally(() => setFetchLoading(false));
  }, [id]);
  if (fetchLoading) return <div>Loading listing data...</div>;
  if (fetchError) return <div className="error-msg">{fetchError}</div>;

  return (
    <UpdateListingContainer>
      <UpdateListingsTitle>Update your listing here!</UpdateListingsTitle>

      <div className="grid-container">

        {/* Title */}
        <UpdateListingsFormContainer>
          <PostBookingSubtitle>Listing Title</PostBookingSubtitle>
          <UpdateListingsForm
            type="text"
            value={typeof title === "string" ? title : (title ?? "")}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Title"
            className="text-block"
          />

        </UpdateListingsFormContainer>

          {/* price/type */}
          <div className="alignment-div">
            {/* Price */}
            <UpdateListingsFormContainer>
              <PostBookingSubtitle>Price</PostBookingSubtitle>
              <UpdateListingsForm
                type="number"
                value={pricePerNight ?? ""}
                onChange={(e) => setPricePerNight(Number(e.target.value) || "")}
                required
                placeholder="Price per night"
                className="number-input"
              />
            </UpdateListingsFormContainer>

            {/* Room Type */}
            <UpdateListingsFormContainer>
              <PostBookingSubtitle>Room Type</PostBookingSubtitle>
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
            </UpdateListingsFormContainer>
          </div>

        {/* Location */}
        <UpdateListingsFormContainer>
          <PostBookingSubtitle>Location</PostBookingSubtitle>
          <UpdateListingsForm
            type="text"
            value={country ?? ""}
            onChange={(e) => setCountry(e.target.value)}
            required
            placeholder="Country"
          />
        </UpdateListingsFormContainer>

        {/* GUESTS/BEDROOMS/BATHROOMS */}
        <div className="alignment-div">

        {/* Guests */}
        <UpdateListingsFormContainer>
          <PostBookingSubtitle>Guests</PostBookingSubtitle>
          <UpdateListingsForm
            type="number"
            value={maxGuests ?? ""}
            onChange={(e) => setMaxGuests(Number(e.target.value) || "")}
            required
            placeholder="Amount of guests"
            className="number-input"
          />
        </UpdateListingsFormContainer>

        {/* Bedrooms */}
        <UpdateListingsFormContainer>
          <PostBookingSubtitle>Bedrooms</PostBookingSubtitle>
          <UpdateListingsForm
            type="number"
            value={bedrooms ?? ""}
            onChange={(e) => setBedrooms(Number(e.target.value) || "")}
            required
            placeholder="Bedrooms"
            className="number-input"
          />
        </UpdateListingsFormContainer>

        {/* Bathrooms */}
        <UpdateListingsFormContainer>
          <PostBookingSubtitle>Bathrooms</PostBookingSubtitle>
          <UpdateListingsForm
            type="number"
            value={bathrooms ?? ""}
            onChange={(e) => setBathrooms(Number(e.target.value) || "")}
            required
            placeholder="Bathrooms"
            className="number-input"
          />
        </UpdateListingsFormContainer>
        </div>

        {/* Description */}
        <UpdateListingsFormContainer>
          <PostBookingSubtitle className="description">Description</PostBookingSubtitle>
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
        </UpdateListingsFormContainer>

        {/* Images */}
        <UpdateListingsFormContainer>
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
            onClick={() =>
              document.querySelector('input[type="file"]')?.click()
            }
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

                {/* Amenities */}
                 <UpdateListingsFormContainer>
              <PostBookingSubtitle>Amenities</PostBookingSubtitle>
              <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                <UpdateListingsForm
                  type="text"
                  value={amenityItem}
                  onChange={(e) => setAmenityItem(e.target.value)}
                  placeholder="Add an amenity"
                />
                <PillButton
                  style={{margin: "0 0 0.6rem 0"} }
                  type="button"
                  onClick={() => addAmenity(amenityItem)}
                >
                  Add
                </PillButton>
              </div>
              <div>{amenitiesList}</div>
            </UpdateListingsFormContainer>

              {error && <div className="error-msg">{error}</div>}
          <div className="button-group">
            <PillButton
              className="post-btn"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </PillButton>

            <PillButton
              className="cancel-btn"
              onClick={() => navigate("/host")}
              disabled={loading}
            >
              Cancel
            </PillButton>
          </div>
      </div>


    </UpdateListingContainer>
  );
};

export default UpdateListingPage;
