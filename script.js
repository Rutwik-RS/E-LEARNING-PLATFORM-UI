document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Enroll button interaction
    document.querySelectorAll(".enroll-btn").forEach(button => {
        button.addEventListener("click", function () {
            alert("You have successfully enrolled in this course!");
        });
    });
});
