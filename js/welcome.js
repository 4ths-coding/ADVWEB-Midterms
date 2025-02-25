// If user doesn't not exist then redirect to form
if (!sessionStorage.getItem("USER")) location.replace("../index.html");
else {
    const userDetails = JSON.parse(sessionStorage.getItem("USER"));

    document.getElementById("firstName").innerHTML = userDetails.firstName;
}



function startLandingPage() {
    const animationEndDuration = 5;

    const button = document.querySelector(".welcome-message--button");
    const message = document.querySelector(".welcome-message--6");

    button.classList.add("end");
    message.classList.add("end");

    setTimeout(() => {
        location.replace("../pages/landingPage.html");
    }, 1000);    
}