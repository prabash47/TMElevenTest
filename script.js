/ =========================================================
// NAVIGATION / MOBILE MENU TOGGLE
// =========================================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


// =========================================================
// NAVBAR — SERVICES DROPDOWN
// =========================================================

const servicesDropdown = document.getElementById("servicesDropdown");
const dropdownArrow = document.getElementById("dropdownArrow");

if (servicesDropdown && dropdownArrow) {

    function toggleDropdown() {

        const isOpen = servicesDropdown.classList.toggle("open");

        dropdownArrow.setAttribute("aria-expanded", isOpen ? "true" : "false");

    }

    function closeDropdown() {

        servicesDropdown.classList.remove("open");

        dropdownArrow.setAttribute("aria-expanded", "false");

    }

    dropdownArrow.addEventListener("click", function(e) {

        e.stopPropagation();

        toggleDropdown();

    });

    /* Close dropdown when clicking outside of it */

    document.addEventListener("click", function(e) {

        if (!servicesDropdown.contains(e.target)) {

            closeDropdown();

        }

    });

    /* Keep dropdown state clean when the mobile menu is closed */

    if (menuBtn) {

        menuBtn.addEventListener("click", closeDropdown);

    }

}


// =========================================================
// HERO FLIP CARD
// =========================================================

const heroFlip = document.getElementById("heroFlip");

if (heroFlip) {

    let flipped = false;

    function flipHero() {

        flipped = !flipped;

        heroFlip.classList.toggle("flipped", flipped);

    }

    // Auto Flip every 5 seconds
    setInterval(flipHero, 5000);

    // Click Flip
    heroFlip.addEventListener("click", flipHero);

}


// =========================================================
// REVIEWS SLIDER
// =========================================================

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


// =========================================================
// FAQ ACCORDION
// =========================================================

const faqQuestions =
    document.querySelectorAll(".faq-question");

faqQuestions.forEach(function(question) {

    question.addEventListener("click", function() {

        const currentItem =
            question.parentElement;

        const isActive =
            currentItem.classList.contains("active");


        /* Close all other questions */

        document.querySelectorAll(".faq-item")
        .forEach(function(item) {

            item.classList.remove("active");

        });


        /* Open clicked question */

        if (!isActive) {

            currentItem.classList.add("active");

        }

    });

});


// =========================================================
// CONTACT / QUOTE FORM -> WHATSAPP
// =========================================================

const quoteForm = document.getElementById("quoteForm");

if (quoteForm) {

    quoteForm.addEventListener("submit", function(e) {

        e.preventDefault();


        const name =
            document.getElementById("name").value;

        const phone =
            document.getElementById("phone").value;

        const email =
            document.getElementById("email").value;

        const message =
            document.getElementById("message").value;


        /* GET SELECTED SERVICES */

        const selectedServices =
            Array.from(
                document.querySelectorAll(
                    'input[name="services"]:checked'
                )
            ).map(function(checkbox) {
                return checkbox.value;
            });


        /* IF NO SERVICE SELECTED */

        const service =
            selectedServices.length > 0
                ? selectedServices.join(", ")
                : "Not specified";


        // TM11 Construction WhatsApp Number
        // Format: country code + number
        // NO +, spaces, or brackets

        const whatsappNumber =
            "61451160058";


        /* WHATSAPP MESSAGE */

        const text =
`New Quote Request - TM11 Construction

Name: ${name}

Phone: ${phone}

Email: ${email}

Services: ${service}

Project Details:
${message}`;


        /* WHATSAPP URL */

        const whatsappURL =
            "https://wa.me/"
            + whatsappNumber
            + "?text="
            + encodeURIComponent(text);


        /* OPEN WHATSAPP */

        window.open(
            whatsappURL,
            "_blank"
        );

    });

}


// =========================================================
// CONTACT US FLOATING BUTTON
// =========================================================

const contactFloatBtn =
    document.getElementById("contactFloatBtn");

const contactFloatMenu =
    document.getElementById("contactFloatMenu");

if (contactFloatBtn && contactFloatMenu) {

    function openContactFloat() {

        contactFloatMenu.classList.add("active");

        contactFloatBtn.setAttribute("aria-expanded", "true");

    }

    function closeContactFloat() {

        contactFloatMenu.classList.remove("active");

        contactFloatBtn.setAttribute("aria-expanded", "false");

    }

    contactFloatBtn.addEventListener("click", function(e) {

        e.stopPropagation();

        if (contactFloatMenu.classList.contains("active")) {

            closeContactFloat();

        } else {

            openContactFloat();

        }

    });


    document.addEventListener("click", function() {

        closeContactFloat();

    });


    contactFloatMenu.addEventListener("click", function(e) {

        e.stopPropagation();

    });


    /* Close on Escape key for keyboard accessibility */

    document.addEventListener("keydown", function(e) {

        if (e.key === "Escape") {

            closeContactFloat();

        }

    });

}

/* =========================================================
   TM ELEVEN CONTACT SECTION JS
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const shareBtn = document.getElementById("tm11ShareBtn");
    const saveBtn = document.getElementById("tm11SaveContact");

    const qrOverlay = document.getElementById("tm11QrOverlay");
    const qrClose = document.getElementById("tm11QrClose");
    const qrImage = document.getElementById("tm11QrImage");
    const qrCopyBtn = document.getElementById("tm11QrCopyBtn");

    const TM11_URL = "https://tmeleven.com.au/";
    const TM11_URL_LABEL = "tmeleven.com.au";


    /* =========================
       SHARE -> QR CODE MODAL
       ========================= */

    function openTM11QrModal() {

        if (!qrOverlay) return;

        if (qrImage && !qrImage.getAttribute("src")) {

            const qrApiUrl =
                "https://api.qrserver.com/v1/create-qr-code/?size=360x360&qzone=1&data=" +
                encodeURIComponent(TM11_URL);

            qrImage.addEventListener("error", () => {

                const box = document.getElementById("tm11QrCodeBox");

                if (box) {
                    box.innerHTML =
                        '<p class="tm11-qr-fallback">QR code unavailable right now - use the link below.</p>';
                }

            }, { once: true });

            qrImage.src = qrApiUrl;

        }

        qrOverlay.classList.add("is-active");

        document.body.style.overflow = "hidden";

        if (qrClose) {
            qrClose.focus();
        }

    }


    function closeTM11QrModal() {

        if (!qrOverlay) return;

        qrOverlay.classList.remove("is-active");

        document.body.style.overflow = "";

        if (shareBtn) {
            shareBtn.focus();
        }

    }


    if (shareBtn) {

        shareBtn.addEventListener("click", () => {
            openTM11QrModal();
        });

    }


    if (qrClose) {

        qrClose.addEventListener("click", closeTM11QrModal);

    }


    if (qrOverlay) {

        qrOverlay.addEventListener("click", (event) => {

            if (event.target === qrOverlay) {
                closeTM11QrModal();
            }

        });

    }


    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape" &&
            qrOverlay &&
            qrOverlay.classList.contains("is-active")) {

            closeTM11QrModal();

        }

    });


    if (qrCopyBtn) {

        qrCopyBtn.addEventListener("click", async () => {

            try {

                await navigator.clipboard.writeText(TM11_URL);

                showTM11Message("Link copied!");

                qrCopyBtn.classList.add("is-copied");

                setTimeout(() => {
                    qrCopyBtn.classList.remove("is-copied");
                }, 1500);

            } catch (error) {

                showTM11Message("Visit: " + TM11_URL_LABEL);

            }

        });

    }


    /* =========================
       SAVE CONTACT
       ========================= */

    if (saveBtn) {

        saveBtn.addEventListener("click", () => {

            const vCard = `BEGIN:VCARD
VERSION:3.0
N:;TM Eleven;;;
FN:TM Eleven
ORG:TM 11 PTY LTD
TEL;TYPE=CELL:0451160058
EMAIL:tmeleven111@gmail.com
URL:https://tmeleven.com.au/
NOTE:Concrete | Landscaping | Fencing
END:VCARD`;

            const blob = new Blob(
                [vCard],
                { type: "text/vcard;charset=utf-8" }
            );

            const url = URL.createObjectURL(blob);

            const link = document.createElement("a");

            link.href = url;
            link.download = "TM-Eleven-Contact.vcf";

            document.body.appendChild(link);

            link.click();

            document.body.removeChild(link);

            URL.revokeObjectURL(url);

            showTM11Message("Contact card ready!");

        });

    }


    /* =========================
       PLACEHOLDER SOCIAL LINKS
       (stops the page jumping to the
       top until real profile URLs
       are added)
       ========================= */

    document.querySelectorAll('.tm11-socials a[href="#"]').forEach((link) => {

        link.addEventListener("click", (event) => {
            event.preventDefault();
        });

    });


    /* =========================
       SMALL NOTIFICATION
       ========================= */

    function showTM11Message(message) {

        const oldMessage =
            document.querySelector(".tm11-toast");

        if (oldMessage) {
            oldMessage.remove();
        }


        const toast = document.createElement("div");

        toast.className = "tm11-toast";

        toast.textContent = message;


        Object.assign(toast.style, {

            position: "fixed",
            left: "50%",
            bottom: "30px",
            transform: "translateX(-50%)",

            padding: "12px 20px",

            background: "#0070c0",
            color: "#fff",

            border: "2px solid #ffb900",

            borderRadius: "30px",

            fontSize: "13px",
            fontWeight: "700",

            zIndex: "200000",

            boxShadow: "0 10px 30px rgba(0,0,0,.2)"

        });


        document.body.appendChild(toast);


        setTimeout(() => {

            toast.style.opacity = "0";

            toast.style.transition = "opacity .3s ease";

            setTimeout(() => toast.remove(), 300);

        }, 2200);

    }

});
