const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Health check endpoint — CI/CD aur load balancer dono isay use karenge
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// Main endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'v2: Automated deployment via GitHub Actions!',
    hostname: require('os').hostname(),
    version: '1.0.0'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});