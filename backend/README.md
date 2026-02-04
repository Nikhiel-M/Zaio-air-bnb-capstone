# Airbnb Clone Backend

A RESTful API backend for an Airbnb clone built with Node.js, Express.js, and MongoDB.

## Features

- User authentication (register, login, JWT tokens)
- Property management (CRUD operations)
- Booking system with date validation
- Review and rating system
- Host and guest functionality
- Location-based property search
- File upload support for property images

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user

### Users
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile
- `PUT /api/users/change-password` - Change password
- `PATCH /api/users/become-host` - Become a host
<!-- - `GET /api/users/:id/public` - Get public user profile -->

### Properties
- `GET /api/properties` - Get all properties (with filtering)
- `GET /api/properties/:id` - Get single property
- `POST /api/properties` - Create new property (host only)
- `PUT /api/properties/:id` - Update property (host only)
- `DELETE /api/properties/:id` - Delete property (host only)
- `GET /api/properties/search/location` - Search by location

### Bookings
- `POST /api/bookings` - Create new booking
- `GET /api/bookings/my-bookings` - Get user's bookings
- `GET /api/bookings/host-bookings` - Get host's bookings
- `GET /api/bookings/:id` - Get single booking
- `PATCH /api/bookings/:id/status` - Update booking status (host only)
- `PATCH /api/bookings/:id/cancel` - Cancel booking
- `POST /api/bookings/:id/review` - Add review to booking

## Installation

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `.env` file and update the values
   - Make sure MongoDB is running

4. Seed the database with sample data:
   ```bash
   npm run seed
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

The server will start on `http://localhost:5000`

## Sample Login Credentials

After running the seed script, you can use these test accounts:

**Host Accounts:**
- Email: john@example.com, Password: password123
- Email: bob@example.com, Password: password123

**Guest Account:**
- Email: jane@example.com, Password: password123

## Database Models

### User
- firstName, lastName, email, password
- profilePicture, phoneNumber, dateOfBirth
- isHost, isVerified, role

### Property
- title, description, propertyType, roomType
- address with coordinates for location search
- amenities, bedrooms, bathrooms, beds, maxGuests
- pricePerNight, images, availability
- host reference, rating system

### Booking
- property, guest, host references
- checkInDate, checkOutDate, numberOfGuests
- totalPrice, status, paymentStatus
- specialRequests, review system

## Technologies Used

- Node.js & Express.js
- MongoDB & Mongoose
- JWT for authentication
- bcryptjs for password hashing
- CORS for cross-origin requests
- multer for file uploads
- dotenv for environment variables