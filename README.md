# Business Dashboard Frontend

A modern React application for the Mini Local Business Dashboard, built with Tailwind CSS and designed to simulate how small businesses might view their SEO content and Google Business data.

## Features

- **Responsive Design**: Mobile-friendly interface that works across all screen sizes
- **Modern UI**: Clean, professional design using Tailwind CSS
- **Real-time Data**: Live updates from the backend API
- **SEO Headline Generation**: AI-style headline regeneration
- **Business Analytics**: Simulated Google Business ratings and reviews
- **Toast Notifications**: User-friendly feedback for all actions

## Technologies Used

- **React 18** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API requests
- **React Hot Toast** - Toast notifications
- **Lucide React** - Beautiful icons

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Project Structure

```
src/
├── App.js              # Main application component
├── App.css             # Custom styles
├── index.js            # Application entry point
├── index.css           # Global styles with Tailwind
└── services/
    └── api.js          # API service functions
```

## Components

### Main Dashboard
- **Input Form**: Business name and location inputs
- **Business Analytics Card**: Displays rating, reviews, and SEO headline
- **Regenerate Button**: Fetches new AI-generated headlines
- **Responsive Layout**: Adapts to mobile and desktop screens

### Features

1. **Business Data Input**
   - Business name field
   - Location field
   - Form validation
   - Loading states

2. **Analytics Display**
   - Google rating (simulated)
   - Number of reviews (simulated)
   - AI-generated SEO headline
   - Business information summary

3. **SEO Headline Management**
   - Display current headline
   - Regenerate new headlines
   - Loading states for regeneration

## API Integration

The frontend communicates with the backend through these endpoints:

- `POST /business-data` - Get business analytics
- `GET /regenerate-headline` - Get new SEO headline

## Styling

The application uses Tailwind CSS for all styling, providing:

- **Responsive Design**: Mobile-first approach
- **Modern UI**: Clean, professional appearance
- **Accessibility**: Proper focus states and contrast
- **Animations**: Smooth transitions and loading states

## Development

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized bundle size
- Lazy loading where appropriate
- Efficient re-renders with React hooks
- Minimal dependencies

## Next Steps

- Add more business metrics
- Implement data persistence
- Add user authentication
- Add more SEO tools
- Implement analytics tracking
