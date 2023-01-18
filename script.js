const BASE_URL = "https://www.boredapi.com/api/activity/";


fetch(BASE_URL)
.then((response) => response.json())
.then((json) => {
    const section = document.querySelector("section")
    console.log(section)
    console.log(json)
    const activityP = document.querySelector(".activity-p");
    const typeP = document.querySelector(".type-p");
    const participantsP = document.querySelector(".participants-p");
    const priceP = document.querySelector(".price-p");
    const accessibilityP = document.querySelector(".accessibility");
    console.log(accessibilityP);
    
})