import React from "react";
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
} from "./UpdateListingPage.styled";
import { PillButton } from "../../components/Buttons/PillButton.styled";

const UpdateListingPage = () => {
  return (
    <UpdateListingContainer>
      <UpdateListingsTitle>Update your listing here!</UpdateListingsTitle>

      <UpdateListingsFormContainer>
        <UpdateListingsForm
          type="text"
          // value={title}
          // onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Title"
        />

        <UpdateListingsForm
          type="text"
          // value={title}
          // onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Description"
        />

        <UpdateListingsForm
          type="text"
          // value={title}
          // onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Information"
        />

        <UpdateListingsForm
          type="text"
          // value={title}
          // onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Select property type"
        />

        <UpdateListingsForm
          type="text"
          // value={title}
          // onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Select room type"
        />

        <UpdateListingsForm
          type="text"
          // value={title}
          // onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Address"
        />

        <UpdateListingsForm
          type="text"
          // value={title}
          // onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Amount of guests"
        />

        <UpdateListingsForm
          type="text"
          // value={title}
          // onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Price per night"
        />

        <UpdateListingsForm
          type="text"
          // value={title}
          // onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Country"
        />

        <UpdateListingsForm
          type="text"
          // value={title}
          // onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Bedrooms"
        />

        <UpdateListingsForm
          type="text"
          // value={title}
          // onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Bathrooms"
        />

        <UpdateListingsForm
          type="text"
          // value={title}
          // onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Select amenities"
        />

        <UpdateListingsForm
          type="text"
          // value={title}
          // onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Stars"
        />

        <UpdateListingsForm
          type="text"
          // value={title}
          // onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Reviews"
        />

        <UpdateListingsForm
          type="text"
          // value={title}
          // onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Click to select 5 images"
        />
      </UpdateListingsFormContainer>

            <PillButton
              className="post-btn"
              // onClick={handleSubmit}
              // disabled={loading}
            >
              {/* {loading ? "Submitting..." : "Submit"} */} Loading
            </PillButton>
    </UpdateListingContainer>
  );
};

export default UpdateListingPage;
