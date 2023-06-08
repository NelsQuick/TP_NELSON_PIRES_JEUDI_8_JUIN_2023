/*---------------------------------------------------
    SOLUTION : recours à localStorage
 ---------------------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("rgpd-popup");
    const acceptButton = document.getElementById("accept-cookies");


// Vérifie si l'utilisateur a accepté les RGPD

    if (localStorage.getItem("rgpdaccepted") === "true") {
        popup.style.display = "none";
    }

// Définit l'acceptation des RGPD dans le localStorage

    acceptButton.addEventListener("click", function () {
        localStorage.setItem("rgpdaccepted", "true");
        popup.style.display = "none";
    });
});