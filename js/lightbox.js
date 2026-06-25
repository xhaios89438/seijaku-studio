const items = document.querySelectorAll(".gallery-item");

const overlay = document.getElementById("lightbox-overlay");

const image = document.getElementById("lightbox-image");

const title = document.getElementById("lightbox-title");

const link = document.getElementById("project-link");

const closeBtn = document.getElementById("close-btn");

items.forEach(item => {

    item.addEventListener("click", () => {

        image.src = item.dataset.image;

        title.textContent = item.dataset.title;

        link.href = item.dataset.link;

        overlay.style.display = "flex";

    });

});

closeBtn.addEventListener("click", () => {

    overlay.style.display = "none";

});

overlay.addEventListener("click", (e) => {

    if(e.target === overlay){

        overlay.style.display = "none";

    }

});
