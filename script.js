const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

const slider = document.querySelector(".services-grid");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

if (slider && next && prev) {

    next.addEventListener("click", () => {

        const card = slider.querySelector(".service-card");

        slider.scrollBy({

            left: card.offsetWidth + 18,

            behavior: "smooth"

        });

    });

    prev.addEventListener("click", () => {

        const card = slider.querySelector(".service-card");

        slider.scrollBy({

            left: -(card.offsetWidth + 18),

            behavior: "smooth"

        });

    });

}

/*==========================
      REVIEWS SLIDER
==========================*/

const reviewsGrid = document.querySelector(".reviews-grid");
const reviewNext = document.querySelector(".review-next");
const reviewPrev = document.querySelector(".review-prev");

if (reviewsGrid && reviewNext && reviewPrev) {

    let autoSlide;

    function getCardWidth() {
        const card = reviewsGrid.querySelector(".review-card");
        const gap = parseInt(getComputedStyle(reviewsGrid).gap) || 0;
        return card.offsetWidth + gap;
    }

    function nextReview() {

        const maxScroll =
            reviewsGrid.scrollWidth - reviewsGrid.clientWidth;

        if (reviewsGrid.scrollLeft >= maxScroll - 5) {

            reviewsGrid.scrollTo({
                left: 0,
                behavior: "smooth"
            });

        } else {

            reviewsGrid.scrollBy({
                left: getCardWidth(),
                behavior: "smooth"
            });

        }

    }

    function prevReview() {

        if (reviewsGrid.scrollLeft <= 5) {

            reviewsGrid.scrollTo({
                left: reviewsGrid.scrollWidth,
                behavior: "smooth"
            });

        } else {

            reviewsGrid.scrollBy({
                left: -getCardWidth(),
                behavior: "smooth"
            });

        }

    }

    reviewNext.addEventListener("click", () => {

        nextReview();

    });

    reviewPrev.addEventListener("click", () => {

        prevReview();

    });

    function startAutoSlide() {

        if (window.innerWidth <= 900) {

            autoSlide = setInterval(nextReview, 5000);

        }

    }

    function stopAutoSlide() {

        clearInterval(autoSlide);

    }

    reviewsGrid.addEventListener("mouseenter", stopAutoSlide);
    reviewsGrid.addEventListener("mouseleave", startAutoSlide);

    reviewsGrid.addEventListener("touchstart", stopAutoSlide);
    reviewsGrid.addEventListener("touchend", startAutoSlide);

    startAutoSlide();



}


/* ==========================
        WHATSAPP QUOTE FORM
========================== */


const quoteForm = document.getElementById("quoteForm");



if(quoteForm){



    quoteForm.addEventListener(
    "submit",
    function(e){



        e.preventDefault();



        const name =
        document.getElementById("name").value;



        const phone =
        document.getElementById("phone").value;



        const email =
        document.getElementById("email").value;



        const service =
        document.getElementById("service").value;



        const message =
        document.getElementById("message").value;




        // TM11 WhatsApp Number

        const whatsappNumber =
        "61451160058";




        const text = 
`New Quote Request - TM11 Construction


Name: ${name}

Phone: ${phone}

Email: ${email}

Service: ${service}

Project Details:
${message}
`;





        const whatsappURL =
        "https://wa.me/"
        + whatsappNumber
        + "?text="
        + encodeURIComponent(text);




        window.open(
            whatsappURL,
            "_blank"
        );



    });



}