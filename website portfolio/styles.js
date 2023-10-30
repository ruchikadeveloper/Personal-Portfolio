const darkModeToggle = document.getElementById("darkmodetoggle");
const body = document.body;

darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  // You can also use localStorage to save the user's preference here.
});



const recommendationHeading = document.getElementById('recommendation-heading');
const addRecommendationButton = document.getElementById('add-recommendation');
const recommendationBoxes = document.querySelector('.recommendation-boxes');

addRecommendationButton.addEventListener('click', () => {
    const newBox = document.createElement('div');
    newBox.className = 'recommendation-box';
    newBox.innerHTML = `
        <p>Add your suggestion here.</p>
        <button class="add-comment">Add Comment</button>
        <div class="comments"></div>
    `;

    recommendationBoxes.appendChild(newBox);
});

recommendationBoxes.addEventListener('click', (event) => {
    if (event.target.classList.contains('add-comment')) {
        const comment = prompt('Enter your comment:');
        if (comment) {
            const commentsContainer = event.target.nextElementSibling;
            const commentElement = document.createElement('p');
            commentElement.textContent = comment;
            commentsContainer.appendChild(commentElement);
        }
    }
});















document.addEventListener("DOMContentLoaded", function () {
  const commentForm = document.getElementById("comment-form");
  const commentsContainer = document.getElementById("comments");

  commentForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const message = document.getElementById("message").value;

      if (name && message) {
          const comment = document.createElement("div");
          comment.className = "comment";
          comment.innerHTML = `
              <strong>${name}</strong>
              <p>${message}</p>
          `;

          commentsContainer.appendChild(comment);

          // Clear input fields
          document.getElementById("name").value = "";
          document.getElementById("message").value = "";
      }
  });
});

