
const hasLoaded = sessionStorage.getItem("sudahLoading");
const loadingPage = document.querySelector(".loading-page");

if (hasLoaded) {
    loadingPage.style.display = "none";
} else {
    gsap.fromTo('.logo-name', {
        y: 30,
        opacity: 0,
    }, {
        y: 0,
        opacity: 1,
        duration: 0.8, 
        ease: "power2.out"
    });

    gsap.fromTo(".loading-page", 
        { opacity: 1 }, 
        {
            opacity: 0,
            duration: 1.9,
            delay: 1.5,    
            onComplete: () => {
                loadingPage.style.display = "none";
                sessionStorage.setItem("sudahLoading", "true");
            }
        }
    );
}