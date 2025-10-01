import React from 'react'
import {
  CardContainer,
  CardImage,
  CardContent,
  CardTitle,
  CardDescription,
  CardBody
} from "../Cards/Cards.styled";
import { Title } from "../../Styles/General.styled";

const Cards = () => {
  return (
    <CardBody>
      <Title className='card-title'>Inspiration for your next trip </Title>
      <div className="cards">
        <CardContainer>
            <CardImage
              src="https://a0.muscache.com/im/pictures/hosting/Hosting-1315399674645042844/original/27699770-4817-449c-bddc-28e0c2a5b9d2.jpeg?im_w=1200"
              alt="Card Image"
            />
            <CardContent>
              <CardTitle>Sandtons luxurious aparthotel</CardTitle>
              <CardDescription>
                Comfort and privacy in a place to yourself
              </CardDescription>
            </CardContent>
          </CardContainer>

          <CardContainer>
            <CardImage
              src="https://a0.muscache.com/im/pictures/hosting/Hosting-724591618545400785/original/4b545873-2ef1-43f2-a4b8-bb03935cff88.jpeg?im_w=1200"
              alt="Card Image"
            />
            <CardContent>
              <CardTitle>1-Bed Loft Apartment </CardTitle>
              <CardDescription>
                Entire loft in Johannesburg, South Africa
              </CardDescription>
            </CardContent>
          </CardContainer>

          <CardContainer>
            <CardImage
              src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTMzMDM4ODQ5NzgxMTAyMTAzOQ==/original/76b41c7f-3c77-4f56-b26b-1ab3f3a8f9f2.jpeg?im_w=1200"
              alt="Card Image"
            />
            <CardContent>
              <CardTitle>Apartment in Table View</CardTitle>
              <CardDescription>
                Beachfront bliss, sunsets galore
              </CardDescription>
            </CardContent>
          </CardContainer>

          <CardContainer>
            <CardImage
              src="https://a0.muscache.com/im/pictures/hosting/Hosting-1018714310674678113/original/0e0e13e1-aa70-4d03-9c6a-7aa1f5ecc718.jpeg?im_w=1200"
              alt="Card Image"
            />
            <CardContent>
              <CardTitle>Guesthouse in The Bluff</CardTitle>
              <CardDescription>
              Angelfish Cottage modern & on the Beach
              </CardDescription>
            </CardContent>
          </CardContainer>
        </div>
      </CardBody>
)
}

export default Cards