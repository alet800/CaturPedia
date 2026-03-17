
const hasLoaded = sessionStorage.getItem("sudahLoading");
const loadingPage = document.querySelector(".loading-page");

if (hasLoaded) {

    loadingPage.style.display = "none";
} else {
    gsap.fromTo(
        ".loading-page",
        { opacity: 1 },
        {
            opacity: 0,
            duration: 4.5,
            delay: 3.5,
            onComplete: () => {
                loadingPage.style.display = "none";
                sessionStorage.setItem("sudahLoading", "true");
            }
        }
    );

    gsap.fromTo('.logo-name', {
        y: 50,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        duration: 1.5, 
        delay: 0.5,
        ease: "power2.out",
        force3D: true 
    });
}