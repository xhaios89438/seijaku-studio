const items = document.querySelectorAll(".gallery-item");

const overlay = document.getElementById("lightbox-overlay");

const image = document.getElementById("lightbox-image");

const secondImage = document.getElementById("second-image");

const title = document.getElementById("lightbox-title");

const description = document.getElementById("project-description");

const link = document.getElementById("project-link");

const closeBtn = document.getElementById("close-btn");





items.forEach(item => {


    item.addEventListener("click", () => {



        image.src = item.dataset.image;


        secondImage.src = item.dataset.second;



        title.textContent = item.dataset.title;



        description.textContent = item.dataset.description;



        link.href = item.dataset.link;



        overlay.classList.add("active");



        document.body.style.overflow = "hidden";


    });


});







function closeLightbox(){


    overlay.classList.remove("active");


    document.body.style.overflow = "";


}







closeBtn.addEventListener("click", closeLightbox);







overlay.addEventListener("click", (e) => {


    if(e.target === overlay){


        closeLightbox();


    }


});







document.addEventListener("keydown", (e)=>{


    if(e.key === "Escape"){


        closeLightbox();

    }


});
