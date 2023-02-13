

var clickb = document.querySelector(".btncolor")

clickb.addEventListener("click", hideCards)

function hideCards() {
    let rightcard = document.getElementById('right-card');
    rightcard.style.transform = "translateX(-355px)";
    rightcard.style.transition = "0.3s ease-in";

    let leftCard = document.getElementById('left-card');
    leftCard.style.transform = "translateX(355px)";
    leftCard.style.transition = "0.3s ease-in";

    let tittle1 = document.getElementById("Jetty");
    tittle1.innerHTML = "";


    setTimeout(() => {
        let get = document.getElementById("second-heading");
        get.style.display = "flex";
    }, 300);

    setTimeout(() => {
        let get = document.querySelector('body');
        get.style.backgroundImage = "url('image2.png')";
    }, 300);


    setTimeout(() => {
        let get = document.getElementById('left-card');
        get.style.display = 'none';
    }, 300);

    setTimeout(() => {
        let get = document.getElementById('right-card');
        get.style.display = 'none';
    }, 300);

    setTimeout(() => {
        let middleCard = document.getElementById("middle-card");
        middleCard.style.transform = "translateX(355px)";
        middleCard.style.transition = "0.3s ease-in";
    }, 300)

    setTimeout(() => {
        let tittle1 = document.getElementById("btn-plan")
        tittle1.innerHTML = "papy now";
    }, 300);


}

