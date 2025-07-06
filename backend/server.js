const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// SEO Headlines database
const seoHeadlines = [
  "Why {business} is {location}'s Top Choice in 2025",
  "Discover {location}'s Best {business} - A Local Favorite",
  "{business}: {location}'s Premier Destination for Quality Service",
  "The Ultimate Guide to {business} in {location}",
  "{business} - {location}'s Most Trusted Business",
  "Experience Excellence at {business} in {location}",
  "{business}: Where {location} Locals Go for Quality",
  "Your Go-To {business} in {location} - Rated #1",
  "{business} - {location}'s Hidden Gem You Need to Know",
  "Why {location} Residents Choose {business}",
  "{business}: The {location} Business That Never Disappoints",
  "Find the Best {business} Experience in {location}",
  "{business} - {location}'s Most Recommended Business",
  "Quality Meets Convenience at {business} in {location}",
  "{business}: {location}'s Business of Choice"
];

// Business categories for enhanced analytics
const businessCategories = [
  "Restaurant & Food", "Retail & Shopping", "Health & Wellness", 
  "Beauty & Spa", "Fitness & Sports", "Education & Training",
  "Professional Services", "Entertainment", "Automotive", "Home & Garden"
];

// Helper function to generate comprehensive business data
const generateBusinessData = (businessName, location) => {
  const rating = (Math.random() * 2 + 3).toFixed(1); // Random rating between 3.0 and 5.0
  const reviews = Math.floor(Math.random() * 500) + 50; // Random reviews between 50 and 550
  const headline = seoHeadlines[Math.floor(Math.random() * seoHeadlines.length)]
    .replace('{business}', businessName)
    .replace('{location}', location);
  
  // Enhanced analytics
  const category = businessCategories[Math.floor(Math.random() * businessCategories.length)];
  const monthlyRevenue = parseInt(Math.floor(Math.random() * 50000) + 10000, 10); // $10K - $60K
  const customerGrowth = parseFloat((Math.random() * 40 + 10).toFixed(1)); // 10% - 50%
  const repeatCustomers = parseInt(Math.floor(Math.random() * 40) + 60, 10); // 60% - 100%
  const responseTime = parseInt(Math.floor(Math.random() * 12) + 2, 10); // 2-14 hours
  const socialMediaFollowers = parseInt(Math.floor(Math.random() * 5000) + 500, 10); // 500-5500
  const websiteVisits = parseInt(Math.floor(Math.random() * 10000) + 2000, 10); // 2000-12000
  const conversionRate = parseFloat((Math.random() * 8 + 2).toFixed(1)); // 2% - 10%
  const averageOrderValue = parseInt(Math.floor(Math.random() * 100) + 25, 10); // $25 - $125
  const employeeCount = parseInt(Math.floor(Math.random() * 20) + 3, 10); // 3-23 employees
  const yearsInBusiness = parseInt(Math.floor(Math.random() * 15) + 1, 10); // 1-16 years
  
  // Social media metrics
  const socialMetrics = {
    instagram: {
      followers: parseInt(Math.floor(socialMediaFollowers * 0.6), 10),
      engagement: parseFloat((Math.random() * 5 + 2).toFixed(1)),
      posts: parseInt(Math.floor(Math.random() * 200) + 50, 10)
    },
    facebook: {
      followers: parseInt(Math.floor(socialMediaFollowers * 0.4), 10),
      engagement: parseFloat((Math.random() * 3 + 1).toFixed(1)),
      posts: parseInt(Math.floor(Math.random() * 150) + 30, 10)
    },
    google: {
      reviews: reviews,
      rating: parseFloat(rating),
      photos: parseInt(Math.floor(Math.random() * 50) + 10, 10)
    }
  };

  // SEO metrics
  const seoMetrics = {
    keywordRankings: parseInt(Math.floor(Math.random() * 20) + 5, 10), // 5-25 keywords
    organicTraffic: parseInt(Math.floor(websiteVisits * 0.7), 10),
    backlinks: parseInt(Math.floor(Math.random() * 200) + 50, 10),
    domainAuthority: parseInt(Math.floor(Math.random() * 30) + 20, 10), // 20-50
    pageSpeed: parseFloat((Math.random() * 20 + 70).toFixed(1)) // 70-90 score
  };

  // Customer satisfaction metrics
  const satisfactionMetrics = {
    overallSatisfaction: parseFloat((Math.random() * 20 + 80).toFixed(1)), // 80-100%
    serviceQuality: parseFloat((Math.random() * 15 + 85).toFixed(1)), // 85-100%
    valueForMoney: parseFloat((Math.random() * 20 + 80).toFixed(1)), // 80-100%
    wouldRecommend: parseFloat((Math.random() * 25 + 75).toFixed(1)) // 75-100%
  };

  return {
    rating: parseFloat(rating),
    reviews: reviews,
    headline: headline,
    category: category,
    monthlyRevenue: monthlyRevenue,
    customerGrowth: customerGrowth,
    repeatCustomers: repeatCustomers,
    responseTime: responseTime,
    socialMediaFollowers: socialMediaFollowers,
    websiteVisits: websiteVisits,
    conversionRate: conversionRate,
    averageOrderValue: averageOrderValue,
    employeeCount: employeeCount,
    yearsInBusiness: yearsInBusiness,
    socialMetrics: socialMetrics,
    seoMetrics: seoMetrics,
    satisfactionMetrics: satisfactionMetrics,
    lastUpdated: new Date().toISOString()
  };
};

// POST /business-data endpoint
app.post('/business-data', (req, res) => {
  try {
    const { name, location } = req.body;
    
    // Validate input
    if (!name || !location) {
      return res.status(400).json({
        success: false,
        error: 'Business name and location are required'
      });
    }
    
    // Generate comprehensive business data
    const businessData = generateBusinessData(name, location);
    
    res.json({
      success: true,
      data: businessData
    });
  } catch (error) {
    console.error('Error processing business data:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to process business data'
    });
  }
});

// GET /regenerate-headline endpoint
app.get('/regenerate-headline', (req, res) => {
  try {
    const { name, location } = req.query;
    
    // Validate input
    if (!name || !location) {
      return res.status(400).json({
        success: false,
        error: 'Business name and location are required'
      });
    }
    
    // Generate a new headline
    const newHeadline = seoHeadlines[Math.floor(Math.random() * seoHeadlines.length)]
      .replace('{business}', name)
      .replace('{location}', location);
    
    res.json({
      success: true,
      data: {
        headline: newHeadline
      }
    });
  } catch (error) {
    console.error('Error regenerating headline:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to regenerate headline'
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Business Dashboard API is running',
    timestamp: new Date().toISOString()
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'Mini Local Business Dashboard API',
    version: '2.0.0',
    endpoints: {
      health: 'GET /health',
      businessData: 'POST /business-data',
      regenerateHeadline: 'GET /regenerate-headline'
    }
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Business Dashboard API running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
});

module.exports = app; 