const BASE_URL = "https://www.boredapi.com/api/activity/";

// Selectors 
// section in div5
 const section = document.querySelector("section");
 console.log(section)
  const activityP = document.querySelector(".activity-p");
  // space for activity
    const typeP = document.querySelector(".type-p");
    // space for activity type
    const participantsP = document.querySelector(".participants-p");
    // space for number of participants
    const priceP = document.querySelector(".price-p");
    // space for price budget
    const accessibilityP = document.querySelector(".accessibility-p");
    // space for accessibility 
    console.log(accessibilityP);

    // For display section
function returnBudget(number) {
   if (number === 0) {
      return "None"
   }
   if ((number*100).toFixed(2) > 0 && (number*100).toFixed(2) <= 20) {
    return "Low"
   }
   if ((number*100).toFixed(2) > 20 && (number*100).toFixed(2) <= 50) {
    return "Mid"
   }
   if ((number*100).toFixed(2) > 50) {
    return "High"
   } 

       
    
}

// to display difficulty in accessibility section
function returnDifficulty(number){
    if (number === 0 || number <= 0.3) {
        return "Easy"
    }
    if (number > 0.3 && number <= 0.6) {
        return "Medium"
       }
    if (number > 0.6 && number <= 0.9) {
        return "Hard"
       }
    if  (number == 1) {
        return "Extreme"
       }
}

// landing page fetch
fetch(BASE_URL)
.then((response) => response.json())
.then((json) => {
    const activityJson = json.activity;
    const typeJson = json.type[0].toUpperCase()+json.type.slice(1);
    const participantsJson = json.participants;
    const priceJson = json.price;
    const accessibilityJson = json.accessibility;
    const keyToNum = Number(json.key)


    activityP.innerHTML = `<strong>Activity: </strong>${activityJson}.`;
    typeP.innerHTML = `<strong>Type: </strong>${typeJson}`;
    participantsP.innerHTML = `<strong>Participants: </strong>${participantsJson}`;
    priceP.innerHTML = `<strong>Budget: </strong>${returnBudget(priceJson)}`;
    accessibilityP.innerHTML = `<strong>Accessibility: </strong>${returnDifficulty(accessibilityJson)}`;


    console.log(json)
  


    const randomActivityButton = document.querySelector("form.generate-random input.submit");
randomActivityButton.addEventListener("click", (event) => {
    event.preventDefault();
    fetch(BASE_URL)
.then((response) => response.json())
.then((json) => {
    const activityJson = json.activity;
    const typeJson = json.type[0].toUpperCase()+json.type.slice(1);
    const participantsJson = json.participants;
    const priceJson = json.price;
    const accessibilityJson = json.accessibility;
    const keyToNum = Number(json.key);

    activityP.innerHTML = `<strong>Activity: </strong>${activityJson}.`;
    typeP.innerHTML = `<strong>Type: </strong>${typeJson}`;
    participantsP.innerHTML = `<strong>Participants: </strong>${participantsJson}`;
    priceP.innerHTML = `<strong>Budget: </strong>${returnBudget(priceJson)}`;
    accessibilityP.innerHTML = `<strong>Accessibility: </strong>${returnDifficulty(accessibilityJson)}`;


})


// const ul = document.querySelector("ul");
// const li = document.createElement("li");
// li.textContent = activityJson;
// const a = document.createElement("a");
// a.setAttribute("class", "fetch")
// a.href = `${BASE_URL}?key=${keyToNum}`
// ul.append(a);
// a.appendChild(li);
})

// const ulLiA = document.querySelector("a")
// ulLiA.addEventListener("click", (event) => {
//     event.preventDefault();
// fetch(a.href)
// .then((response) => response.json())
// .then((json) => {
//     const activityJson = json.activity;
//     const typeJson = json.type;
//     const participantsJson = json.participants;
//     const priceJson = json.price;
//     const accessibilityJson = json.accessibility;
//     const keyToNum = Number(json.key)
// 
// 
//     activityP.innerHTML = `<strong>Activity: </strong>${activityJson}.`;
//     typeP.innerHTML = `<strong>Type: </strong>${typeJson}`;
//     participantsP.innerHTML = `<strong>Participants: </strong>${participantsJson}`;
//     priceP.innerHTML = `<strong>Budget: </strong>${returnBudget(priceJson)}`;
//     accessibilityP.innerHTML = `<strong>Accessibility: </strong>${returnDifficulty(accessibilityJson)}`;
// })
// })

 






})



