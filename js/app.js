// Add Cards generate by data.js and app.js
function createReviewCard(review = reviewData[0]) {
  const reviewContainer = document.querySelector("#review-container");
  const reviewCard = document.createElement("div");
  reviewCard.classList.add("review-card");
  reviewContainer.appendChild(reviewCard);

  const reviewHeader = document.createElement("div");
  reviewHeader.classList.add("review-header");
  reviewCard.appendChild(reviewHeader);

  const reviewName = document.createElement("div");
  reviewName.classList.add("review-name");
  reviewName.textContent = review.name;
  reviewHeader.appendChild(reviewName);

  const reviewDate = document.createElement("div");
  reviewDate.classList.add("review-date");
  reviewDate.textContent = review.date;
  reviewHeader.appendChild(reviewDate);

  // Use ★ to show rating
  const reviewRating = document.createElement("div");
  reviewRating.classList.add("review-rating");
  reviewRating.textContent =
    "★".repeat(review.rating) + "☆".repeat(5 - review.rating);
  reviewHeader.appendChild(reviewRating);

  const reviewText = document.createElement("div");
  reviewText.classList.add("review-text");
  reviewText.textContent = review.review;
  reviewCard.appendChild(reviewText);
}

// Create a new review card after user click "Create" button below the final review
function addReview() {
  var form = document.getElementById("review-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const review = {
      id: reviewData.length + 1,
      name: document.getElementById("name").value,
      date: document.getElementById("date").value,
      rating: document.getElementById("rating").value,
      review: document.getElementById("review").value,
    };
    createReviewCard(review);
  });
}

function onload() {
  // Add Cards generate by data.js
  for (let i = 0; i < reviewData.length; i++) {
    createReviewCard(reviewData[i]);
  }
  // Add Cards generate by app.js
  addReview();
}

window.addEventListener("load", onload);
