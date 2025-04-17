# Laptop Review Rating Predictor
![Image](https://github.com/user-attachments/assets/d3e35ba1-62f3-41f1-808b-c6e8bbbd1650)
![Image](https://github.com/user-attachments/assets/9c12a374-13d4-4936-9044-8509e84c407d)

A simple web application that predicts laptop review ratings based on the sentiment of the review text. This project uses a keyword-based approach to analyze reviews and provide ratings on a scale of 1 to 5 stars.

## Features

- Clean and modern user interface
- Real-time rating prediction
- Visual star rating display
- Responsive design that works on both desktop and mobile devices
- Simple and intuitive user experience

## Setup

1. Install Python requirements:
```bash
pip install flask
```

2. Project Structure:
```
├── app.py              # Flask application server
├── templates
│   └── index.html     # Main HTML template
├── static
│   ├── script.js      # JavaScript for rating prediction
│   └── styless.css    # CSS styles
└── README.md          # This file
```

## Running the Application

1. Navigate to the project directory
2. Run the Flask application:
```bash
python app.py
```
3. Open your web browser and go to: `http://localhost:5000`

## How to Use

1. Enter a laptop review in the text area
2. Click the "Predict Rating" button
3. The application will analyze your review and display:
   - A numerical rating (1.0 - 5.0)
   - A visual star representation of the rating

## Rating Criteria

The application uses the following keyword categories to determine ratings:

- **5.0 stars**: Reviews containing words like "excellent", "amazing", "great", "fantastic", "awesome", "love", "perfect", "best"
- **4.0 stars**: Reviews with "good", "nice", "decent", "satisfied", "happy", "reliable"
- **3.0 stars**: Neutral words like "okay", "average", "fine", "normal", "fair", "moderate"
- **2.0 stars**: Negative words like "bad", "poor", "slow", "disappointing", "mediocre"
- **1.0 stars**: Very negative words like "terrible", "horrible", "worst", "awful", "hate", "garbage", "useless"

## Example Reviews

1. Positive Review:
```
This laptop is excellent! The performance is amazing and the battery life is fantastic.
```
Expected Rating: 5.0 ★★★★★

2. Good Review:
```
A good laptop with nice features. I'm satisfied with the purchase.
```
Expected Rating: 4.0 ★★★★☆

3. Neutral Review:
```
It's an okay laptop for average use. The performance is fine.
```
Expected Rating: 3.0 ★★★☆☆

4. Negative Review:
```
The laptop is disappointing. It runs slow and has mediocre battery life.
```
Expected Rating: 2.0 ★★☆☆☆

5. Very Negative Review:
```
Terrible product! The performance is horrible and it's completely useless for my needs.
```
Expected Rating: 1.0 ★☆☆☆☆

## Technologies Used

- Python/Flask for the backend server
- HTML5 for structure
- CSS3 for styling and animations
- JavaScript for client-side functionality

## Browser Compatibility

The application is compatible with modern browsers including:
- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari

## Note

This is a simple keyword-based rating predictor meant for demonstration purposes. For more accurate sentiment analysis, consider using machine learning models or natural language processing techniques.
