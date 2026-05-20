const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("zoomedImage");
const captionText = document.getElementById("caption");
const closeModalBtn = document.getElementsByClassName("close-modal")[0];

// Get all card images
const cardImages = document.querySelectorAll('.card img');

// Add click event to each card image
cardImages.forEach(img => {
    img.addEventListener('click', function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        // Try to get the shortcut key and action from the card
        const card = this.closest('.card');
        const titleEl = card.querySelector('.shortcut-title');
        const title = titleEl ? titleEl.textContent : '';
        captionText.innerHTML = title || 'Blender Shortcut';
    });
});

// Close modal when clicking the X
closeModalBtn.onclick = function () {
    modal.style.display = "none";
}

// Close modal when clicking on the dark background
modal.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Close modal when pressing Escape key
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = "none";
    }
});