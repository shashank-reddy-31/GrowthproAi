# Mini Local Business Dashboard

A full-stack web application that provides comprehensive business analytics and insights for local businesses. Built with React frontend and Express.js backend.

## 🚀 Features

- **Business Analytics Dashboard**: Generate comprehensive business reports with simulated data
- **SEO Headline Generation**: AI-powered SEO headlines for better online visibility
- **Multi-tab Analytics**: 
  - Overview Dashboard
  - Financial Metrics
  - Social Media Analytics
  - SEO Performance
  - Customer Insights
- **Real-time Data**: Simulated real-time business metrics and KPIs
- **Responsive Design**: Modern UI that works on desktop and mobile devices

## 🛠️ Tech Stack

### Frontend
- **React.js** - User interface framework
- **Tailwind CSS** - Styling and responsive design
- **Axios** - HTTP client for API calls
- **React Hot Toast** - User notifications
- **Lucide React** - Modern icons

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **CORS** - Cross-origin resource sharing
- **Dotenv** - Environment variables

## 📁 Project Structure

```
full-stack-intern-assignment/
├── frontend/
│   ├── src/
│   │   ├── App.js          # Main dashboard component
│   │   ├── App.css         # Custom styles
│   │   ├── index.js        # React entry point
│   │   └── index.css       # Global styles
│   ├── package.json        # Frontend dependencies
│   └── public/             # Static files
├── backend/
│   ├── server.js           # Express server with API endpoints
│   ├── package.json        # Backend dependencies
│   └── README.md           # Backend documentation
└── README.md               # This file
```

## 🚀 Quick Start

### Prerequisites
- **Node.js** (version 14 or higher)
- **npm** (comes with Node.js)

### Step 1: Clone and Setup
```bash
# Clone the repository (if using git)
git clone <repository-url>
cd full-stack-intern-assignment

# Or if you have the project files directly
cd full-stack-intern-assignment
```

### Step 2: Install Dependencies

#### Backend Setup
```bash
cd backend
npm install
```

#### Frontend Setup
```bash
cd frontend
npm install
```

### Step 3: Run the Application

#### Option 1: Run Backend and Frontend Separately (Recommended)

**Terminal 1 - Start Backend:**
```bash
cd backend
npm start
```
The backend will start on `http://localhost:5000`

**Terminal 2 - Start Frontend:**
```bash
cd frontend
npm start
```
The frontend will start on `http://localhost:3000` and open automatically in your browser.

#### Option 2: Run Both Together (if concurrently is installed)
```bash
# From the root directory
npm run dev
```

### Step 4: Use the Application

1. **Open your browser** and go to `http://localhost:3000`
2. **Enter Business Details**:
   - Business Name (e.g., "Cake & Co")
   - Location (e.g., "New York")
3. **Click "Generate Analytics Report"**
4. **Explore the Dashboard**:
   - Switch between tabs (Overview, Financial, Social Media, SEO Analytics, Customer Insights)
   - Click "Regenerate Headline" to get new SEO headlines
   - View comprehensive business metrics and analytics

## 📊 API Endpoints

### Backend API (Port 5000)

| Endpoint | Method | Description | Request Body |
|----------|--------|-------------|--------------|
| `/business-data` | POST | Generate business analytics | `{ "name": "Business Name", "location": "Location" }` |
| `/regenerate-headline` | GET | Generate new SEO headline | Query params: `name`, `location` |
| `/health` | GET | Health check endpoint | None |
| `/` | GET | API information | None |

### Example API Usage

```bash
# Generate business data
curl -X POST http://localhost:5000/business-data \
  -H "Content-Type: application/json" \
  -d '{"name": "Cake & Co", "location": "New York"}'

# Regenerate headline
curl "http://localhost:5000/regenerate-headline?name=Cake%20%26%20Co&location=New%20York"
```

## 🎯 Features in Detail

### Business Analytics Dashboard
- **Google Rating & Reviews**: Simulated customer ratings and review counts
- **Monthly Revenue**: Financial performance metrics
- **Customer Growth**: Percentage growth indicators
- **Social Media Metrics**: Instagram, Facebook, and Google Business data
- **SEO Performance**: Keyword rankings, organic traffic, domain authority
- **Customer Satisfaction**: Overall satisfaction scores and recommendations

### Data Visualization
- **Progress Bars**: Visual representation of metrics
- **Color-coded Indicators**: Green (good), Yellow (average), Red (needs improvement)
- **Responsive Cards**: Clean, modern UI components
- **Tab Navigation**: Organized data presentation

## 🔧 Troubleshooting

### Common Issues

**1. Port Already in Use**
```bash
# If port 5000 is busy, change it in backend/server.js
const PORT = process.env.PORT || 3001;  # Change to different port
```

**2. Frontend Can't Connect to Backend**
- Ensure backend is running on port 5000
- Check that CORS is enabled in backend
- Verify API URLs in frontend/src/App.js

**3. Module Not Found Errors**
```bash
# Reinstall dependencies
cd frontend && npm install
cd ../backend && npm install
```

**4. Concurrently Not Found**
- Run backend and frontend in separate terminals (Option 1 above)
- Or install concurrently: `npm install -g concurrently`

### Development Commands

```bash
# Backend development (auto-restart on changes)
cd backend
npm run dev

# Frontend development (auto-reload on changes)
cd frontend
npm start
