document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-img");
    var captionText = document.getElementById("caption");
    var closeBtn = document.getElementsByClassName("close")[0];

    document.querySelectorAll(".gallery-container img").forEach(function (img) {
        img.onclick = function () {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        };
    });

    closeBtn.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});

let currentPage = 1;
const totalPages = document.querySelectorAll('.gallery-section').length;

function changePage(direction) {
    currentPage += direction;
    if (currentPage < 1) currentPage = totalPages;
    if (currentPage > totalPages) currentPage = 1;
    updateGallery();
}

function updateGallery() {
    const sections = document.querySelectorAll('.gallery-section');
    sections.forEach(section => {
        section.style.display = section.getAttribute('data-page') == currentPage ? 'flex' : 'none';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    updateGallery();

    const galleryContainers = document.querySelectorAll('.gallery-container');
    galleryContainers.forEach(container => {
        container.addEventListener('click', () => {
            container.classList.toggle('active');
        });
    });
});
