# Raven Parking Lot Frontend

Frontend for the Raven Parking Lot Application built with ReactJS. This application provides a user interface for managing parking areas and calculating parking fees, interacting with a .NET backend API.

## Features
- **Parking Areas Management**: Create, edit, and delete parking areas with customizable rates and discounts.
- **Payment Calculation**: Select a parking area, input parking time and day, and calculate fees in USD, EUR, or PLN.

## Tech Stack
- **Frontend**: ReactJS

## Prerequisites
- [Node.js](https://nodejs.org/) (version 16 or higher recommended)

## Setup Instructions
### Clone the Repository
```bash
git clone https://github.com/VladShpilMan/ParkingLotApp_Front.git
cd ParkingLotApp_Front
```

### Install Dependencies
```bash
npm install
```

### Configure Environment Variables
Create `.env`
Ensure `.env` contains:
```env
REACT_APP_BACK_HOST=YOUT_BACK_HOST
```
Update `REACT_APP_BACK_HOST` if the backend API runs on a different URL.

### Start the Application
```bash
npm run start
```

## Running the Application
- The frontend will be available at `http://localhost:3000` by default.
- Ensure the backend API is running and accessible at the URL specified in `REACT_APP_BACK_HOST`.

## Notes
- The application requires a running backend API to function correctly.
- For backend setup instructions, refer to the backend documentation (https://github.com/VladShpilMan/ParkingLotApp_Back).