# Business Dashboard Backend API

This is the backend API for the Mini Local Business Dashboard, simulating how small businesses might view their SEO content and Google Business data.

## Features

- RESTful API endpoints for business data simulation
- SEO headline generation with business and location personalization
- Simulated Google Business ratings and reviews
- CORS enabled for frontend integration
- Error handling middleware

## Installation

1. Install dependencies:
```bash
npm install
```

2. Create environment file:
```bash
cp .env.example .env
```

3. Start the development server:
```bash
npm run dev
```

## API Endpoints

### Health Check
- `GET /health` - Check server status

### Business Data
- `POST /business-data` - Get simulated business data
  - **Request Body:** `{ "name": "Cake & Co", "location": "Mumbai" }`
  - **Response:** 
    ```json
    {
      "success": true,
      "data": {
        "rating": 4.3,
        "reviews": 127,
        "headline": "Why Cake & Co is Mumbai's Sweetest Spot in 2025"
      }
    }
    ```

### Regenerate Headline
- `GET /regenerate-headline?name=...&location=...` - Get a new AI-generated headline
  - **Query Parameters:** `name` (business name), `location` (business location)
  - **Response:**
    ```json
    {
      "success": true,
      "data": {
        "headline": "Discover Mumbai's Best Cake & Co - A Local Favorite"
      }
    }
    ```

## Request/Response Format

All API responses follow this format:
```json
{
  "success": true,
  "data": {...}
}
```

Error responses:
```json
{
  "success": false,
  "error": "Error message"
}
```

## Development

- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server

## SEO Headlines

The API includes a database of 15 different SEO headline templates that are randomly selected and personalized with the business name and location. Examples include:

- "Why {business} is {location}'s Top Choice in 2025"
- "Discover {location}'s Best {business} - A Local Favorite"
- "{business}: {location}'s Premier Destination for Quality Service"

## Data Simulation

- **Rating:** Randomly generated between 3.0 and 5.0
- **Reviews:** Randomly generated between 50 and 550
- **Headlines:** Randomly selected from predefined templates and personalized

## Next Steps

- Add database integration for persistent data
- Implement user authentication
- Add more sophisticated SEO headline generation
- Add analytics tracking
- Implement rate limiting 