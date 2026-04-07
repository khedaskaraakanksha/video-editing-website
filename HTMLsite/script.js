function showMsg() {
    alert("Welcome to Video Editing Studio 🎬");
}

/* SCROLL ANIMATION */
window.addEventListener("scroll", function() {
    let sections = document.querySelectorAll("section");

    sections.forEach(sec => {
        let top = sec.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            sec.style.opacity = "1";
            sec.style.transform = "translateY(0)";
        }
    });
});
