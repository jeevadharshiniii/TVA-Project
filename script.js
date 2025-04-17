function predictRating() {
    const reviewInput = document.getElementById('reviewInput').value.trim().toLowerCase();
    const resultSection = document.getElementById('resultSection');
    const ratingValue = document.getElementById('ratingValue');
    const starsDisplay = document.getElementById('starsDisplay');
    
    if (!reviewInput) {
        alert('Please enter a review first!');
        return;
    }

    // Define keywords for different ratings
    const keywords = {
        excellent: ['excellent', 'amazing', 'great', 'fantastic', 'awesome', 'love', 'perfect', 'best'],
        good: ['good', 'nice', 'decent', 'satisfied', 'happy', 'reliable'],
        neutral: ['okay', 'average', 'fine', 'normal', 'fair', 'moderate'],
        bad: ['bad', 'poor', 'slow', 'disappointing', 'mediocre'],
        terrible: ['terrible', 'horrible', 'worst', 'awful', 'hate', 'garbage', 'useless']
    };

    // Check which keywords are present
    let rating = 3.0; // Default neutral rating

    // Check for keywords and assign ratings
    if (keywords.excellent.some(word => reviewInput.includes(word))) {
        rating = 5.0;
    } else if (keywords.good.some(word => reviewInput.includes(word))) {
        rating = 4.0;
    } else if (keywords.neutral.some(word => reviewInput.includes(word))) {
        rating = 3.0;
    } else if (keywords.bad.some(word => reviewInput.includes(word))) {
        rating = 2.0;
    } else if (keywords.terrible.some(word => reviewInput.includes(word))) {
        rating = 1.0;
    }

    // Update rating display
    ratingValue.textContent = rating.toFixed(1);
    
    // Update stars display
    const fullStars = Math.floor(rating);
    let starsHTML = '★'.repeat(fullStars);
    starsHTML += '☆'.repeat(5 - fullStars);
    starsDisplay.innerHTML = starsHTML;
    
    // Show result section with animation
    resultSection.classList.add('visible');
}