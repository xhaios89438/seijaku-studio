const projects = {

    "modular-a": {

        title: "Modular A",

        description:
        "A modular furniture system exploring flexibility and minimal form.",

        material:
        "Oak / Steel",

        year:
        "2026",

        dimensions:
        "1200 × 600 × 450mm",

        link:
        "projects/design-01.html",

        hero:
        "images/modular-a/hero.webp",

        media: [

            {
                type:"image",
                src:"images/modular-a/detail-01.webp"
            },

            {
                type:"image",
                src:"images/modular-a/detail-02.webp"
            }

        ]

    },





    "chair-b": {

        title:"b Chair",

        description:
        "A chair design focused on simplicity, comfort and structure.",

        material:
        "Ash Wood / Fabric",

        year:
        "2026",

        dimensions:
        "700 × 650 × 800mm",

        link:
        "projects/design-02.html",

        hero:
        "images/chair-b/hero.webp",

        media:[

            {
                type:"image",
                src:"images/chair-b/detail-01.webp"
            },

            {
                type:"image",
                src:"images/chair-b/detail-02.webp"
            }

        ]

    },





    "table-c": {

        title:"Table C",

        description:
        "A contemporary table exploring balance between material and proportion.",

        material:
        "Walnut / Aluminium",

        year:
        "2026",

        dimensions:
        "1600 × 800 × 740mm",

        link:
        "projects/design-03.html",

        hero:
        "images/table-c/hero.webp",

        media:[

            {
                type:"video",
                src:"videos/table-c/animation.mp4"
            },

            {
                type:"image",
                src:"images/table-c/detail-01.webp"
            },

            {
                type:"image",
                src:"images/table-c/detail-02.webp"
            }

        ]

    }

};









const items =
document.querySelectorAll(".gallery-item");


const overlay =
document.getElementById("lightbox-overlay");


const image =
document.getElementById("lightbox-image");


const video =
document.getElementById("lightbox-video");


const mediaContainer =
document.getElementById("project-media");


const title =
document.getElementById("lightbox-title");


const description =
document.getElementById("project-description");


const material =
document.getElementById("project-material");


const year =
document.getElementById("project-year");


const dimensions =
document.getElementById("project-dimensions");


const link =
document.getElementById("project-link");


const closeBtn =
document.getElementById("close-btn");









items.forEach(item => {

    item.addEventListener("click", () => {

        openProject(item.dataset.project);

    });

});









function openProject(id){


    const project =
    projects[id];


    if(!project) return;





    image.style.display = "block";

    video.style.display = "none";


    video.pause();

    video.src = "";

    mediaContainer.innerHTML = "";







    image.src =
    project.hero;





    project.media.forEach(media => {


        if(media.type === "image"){


            const img =
            document.createElement("img");


            img.src =
            media.src;


            img.className =
            "project-image";


            mediaContainer.appendChild(img);


        }







        if(media.type === "video"){


            const vid =
            document.createElement("video");


            vid.src =
            media.src;


            vid.className =
            "project-video";


            vid.autoplay = true;

            vid.loop = true;

            vid.muted = true;

            vid.playsInline = true;


            mediaContainer.appendChild(vid);


        }


    });







    title.textContent =
    project.title;


    description.textContent =
    project.description;


    material.textContent =
    project.material;


    year.textContent =
    project.year;


    dimensions.textContent =
    project.dimensions;


    link.href =
    project.link;







    overlay.classList.add("active");


    document.body.style.overflow = "hidden";


}









function closeLightbox(){


    overlay.classList.remove("active");


    document.body.style.overflow = "";



    setTimeout(() => {


        video.pause();


        video.currentTime = 0;


        video.src = "";


        mediaContainer.innerHTML = "";


    },350);


}









closeBtn.addEventListener(
"click",
closeLightbox
);









overlay.addEventListener(
"click",
(event) => {


    if(event.target === overlay){

        closeLightbox();

    }


});









document.addEventListener(
"keydown",
(event)=>{


    if(event.key === "Escape"){

        closeLightbox();

    }


});
