const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
// Import route handlers
const authRoutes = require('./routes/authRoutes');

// Use route handlers
app.use('/api/auth', authRoutes); // Mount authRoutes under /api/auth


app.use(cors());

const PORT = 5002;

// Your WeatherAPI API key
const API_KEY = "f5c282eb21cd463c1a2a7d9528ce511e";

// Define a default city for testing purposes
const defaultCity = "London";

app.get("/weather", async (req, res) => {
  try {
    // Extract city from query parameter or use the default city
    const city = req.query.city || defaultCity;

    // Log the city being requested
    console.log("Requested city:", city);

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );

    // Log the response received from the weather API
    console.log("Weather API response:", response.data);

    // Send the weather data as a JSON response
    res.json(response.data);
  } catch (error) {
    // Log any errors that occur during the request
    console.error("Error fetching weather data:", error.message);
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
