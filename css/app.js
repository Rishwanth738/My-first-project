let openbtn = document.getElementById('open-btn');
let modalContainer = document.getElementById('modal-container');
let closebtn = document.querySelector('.close-btn');
let modal = document.querySelector('.modal');
openbtn.addEventListener("click", function() {
    modalContainer.style.display = "block";
    modal.classList.add('hi');
});

// Ensure the close button works
closebtn.addEventListener("click", function() {
    modalContainer.style.display = "none";
    modal.classList.remove('hi');
});

// Ensure clicking outside the modal closes it
window.addEventListener("click", function(e) {
    if (e.target === modalContainer) {
        modalContainer.style.display = 'none';
        modal.classList.remove('hi');
    }
});
