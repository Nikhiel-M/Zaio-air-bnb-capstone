import React from "react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  PostBookingContainer,
  PostBookingTitle,
  PostBookingFormContainer,
  PostBookingForm,
  PostBookingSelector,
  HiddenFileInput,
  ImagePickerButton
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
  const [images, setImages] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

   const fileInputRef = useRef(null);
  
   const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleChange = (e) => {
    setImages(e.target.files);
    console.log(e.target.files);
  };

  const handleSubmit = async (e) => {
    // If called from button onClick without event
    if (e && e.preventDefault) e.preventDefault();
    setError(null);

    // basic validation for required fields
    if (!title || !description || !address || !pricePerNight) {
      setError("Please fill required fields: title, description, address, price");
      return;
    }

    // Map frontend values to backend schema expectations
    const propertyTypeMap = {
      home: 'house',
      apartment: 'apartment',
      condo: 'condo'
    };
    const roomTypeMap = {
      house: 'entire_place',
      apartment: 'entire_place',
      condo: 'entire_place',
      'private room': 'private_room'
    };

    const payload = {
      title,
      description,
      long_description,
      propertyType: propertyTypeMap[propertyType] || propertyType || 'other',
      roomType: roomTypeMap[roomType] || (roomType === 'private_room' ? 'private_room' : 'entire_place'),
      address: {
        city: address,
        country: 'Unknown'
      },
      bedrooms: Math.max(1, Number(maxGuests) ? Math.ceil(Number(maxGuests) / 2) : 1),
      bathrooms: 1,
      beds: Math.max(1, Number(maxGuests) ? Math.ceil(Number(maxGuests) / 2) : 1),
      maxGuests: Number(maxGuests) || 1,
      pricePerNight: Number(pricePerNight) || 0
    };

    setLoading(true);
    try {
      const token = localStorage.getItem("token");

      // Build multipart/form-data
      const formData = new FormData();
      formData.append('title', payload.title);
      formData.append('description', payload.description);
      formData.append('long_description', payload.long_description);
      formData.append('propertyType', payload.propertyType);
      formData.append('roomType', payload.roomType);
      // send address as JSON string so server can parse it
      formData.append('address', JSON.stringify(payload.address));
      formData.append('bedrooms', String(payload.bedrooms));
      formData.append('bathrooms', String(payload.bathrooms));
      formData.append('beds', String(payload.beds));
      formData.append('maxGuests', String(payload.maxGuests));
      formData.append('pricePerNight', String(payload.pricePerNight));

      if (images && images.length) {
        Array.from(images).forEach((file) => {
          formData.append('images', file);
        });
      }

      const res = await fetch("http://localhost:5000/api/properties", {
        method: "POST",
        headers: {
          ...(token ? { Authorization: `Bearer ${token}` } : {})
          // NOTE: do NOT set Content-Type; browser will set multipart boundary
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
          <option value="home">Home</option>
          <option value="apartment">Apartment</option>
          <option value="condo">Condo</option>
        </PostBookingSelector>



                <PostBookingSelector
          type="text"
          value={roomType}
          onChange={(e) => setRoomType(e.target.value)}
          required
          placeholder="Type of room"
        >
          <option value="">Select room type</option>
          <option value="house">Entire home</option>
          <option value="apartment">Entire apartment</option>
          <option value="condo">Entire condo</option>
          <option value="private room">Private room</option>

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
      <HiddenFileInput
        type="file"
        ref={fileInputRef}
        multiple
        accept="image/*"
        onChange={handleChange}
      />
      
      <ImagePickerButton type="button" onClick={handleClick}>
        Click to select images
      </ImagePickerButton>

      </PostBookingFormContainer>

      {error && <div style={{ margin: "8px 0" }}>{error}</div>}
      <PillButton className="post-btn" onClick={handleSubmit} disabled={loading}>
        {loading ? "Submitting..." : "Submit"}
      </PillButton>
    </PostBookingContainer>
  );
};

export default PostBookingPage;
