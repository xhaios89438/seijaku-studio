const projects = {

    "modular-a": {

        title: "Modular A",

        description:
        "Modular A is a shelving system easily incorporated into any living space, which can adapt to changing environments or user needs. The modular pieces can be re-arranged to form shelf units, bedside tables, coffee tables or in any way needed to fit the space",

        material:
        "Re-engineered Oak worktop / Neodymium magnets",

        year:
        "2019",

        dimensions:
        "(H) 26cm (W) 38cm (D) 25cm",

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
        "b chair is an everyday utility and dining chair designed with a simple core principle, to be as sustainable as possible. b chair is made from a single piece of composite plywood, which uses heat reactive bendable resin to create its unique sculptural form and greatly reduce the complexity of the manufacturing process. As b chair is made from a single piece of plywood, there is no need for any other component, vastly reducing its carbon footprint, and ensuring easy and harmless recycling when it is no longer needed.",

        material:
        "FSC plywood / resin",

        year:
        "2022",

        dimensions:
        "(H) 90cm (W) 45cm (D) 46cm",

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
        "Table C was created to solve a problem found with all coffee tables. The table is either too close to your legs to freely move and stand up, or too far away to easily reach items on the table. Table C is designed to provide as much leg room as possible, along with having a floating table top which can be pulled closer to allow the user sitting down easy access to the table, or pushed away in order to move around",

        material:
        "FSC Plywood / resin / Steel Ball Bearings",

        year:
        "2026",

        dimensions:
        "(H) 52cm (W) 125cm (D) 90cm",

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









/* HEADER SCROLL BEHAVIOUR */


const header =
document.querySelector(".site-header");


const landing =
document.querySelector(".landing");



window.addEventListener("scroll", () => {


    const landingHeight =
    landing.offsetHeight;



    if(window.scrollY > landingHeight - 150){

        header.classList.add("show-header");

    }

    else{

        header.classList.remove("show-header");

    }


});









/* LIGHTBOX */


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
