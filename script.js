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


// function to generate url for fetch using search filters

//selectors for filters
const searchForm = document.querySelector("#search-form")
// console.log(searchForm)
const inputType = document.querySelector("select#type.dropdown")
console.log(inputType)
//activity type
const inputParticipants = document.querySelector("input#participants")
console.log(inputParticipants)
// number of participants (0-8)
const inputBudget = document.querySelector("select#budget")
// console.log(inputBudget)
// budget (0-1)
const inputAccessibility = document.querySelector("select#accessibility")
// console.log(inputAccessibility)
// accessibility (0-1)
const getButton = document.querySelector("#search-form .submit")
console.log(getButton)
//submit button for search form


let typeSnippet = "";
let participantsSnippet = "";
let budgetSnippet = "";
let accessibilitySnippet = "";
let newURL = "";
let elementsArr = [];

// event listener for search form 
getButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (!inputType.value) {
        typeSnippet = "";
    } else if (inputType.value) {
        typeSnippet = `type=${inputType.value}`
        elementsArr.push(typeSnippet);
    }
    if (!inputParticipants.value) {
        participantsSnippet = "";
    } else if (inputParticipants.value == 0) {
        alert("Participants cannot be zero")
    }
    else if (inputParticipants.value) {
        participantsSnippet = `participants=${inputParticipants.value}`;
        elementsArr.push(participantsSnippet);
    }
    if (!inputBudget.value) {
        budgetSnippet = "";
    } else if (inputBudget.value) {
        if (inputBudget.value === "none") {
            budgetSnippet = `price=0`
        } if (inputBudget.value === "low"){
            budgetSnippet = `minprice=0.1&maxprice=0.2`
            
        } if (inputBudget.value === "mid") {
            budgetSnippet = `minprice=0.3&maxprice=0.5`
        } if (inputBudget.value === "high") {
            budgetSnippet = `minprice=0.6&maxprice=1`
        }
        elementsArr.push(budgetSnippet)
    }
    if (!inputAccessibility.value) {
        accessibilitySnippet = "";

    } else if (inputAccessibility.value) {
        if (inputAccessibility.value === "easy") {
            accessibilitySnippet = `minaccessibility=0&maxaccessibility=0.3`
        }
        if (inputAccessibility.value === "medium") {
            accessibilitySnippet = `minaccessibility=0.4&maxaccessibility=0.6`
        }
        if (inputAccessibility.value === "hard") {
            accessibilitySnippet = `minaccessibility=7&maxaccessibility=0.9`
        }
        if (inputAccessibility.value === "extreme") {
            accessibilitySnippet = `accessibility=1`
        }
        elementsArr.push(accessibilitySnippet)
    }

console.log(elementsArr)
newURL = `${BASE_URL}?${elementsArr.join("&")}`
console.log(newURL)

fetch(newURL)
.then((response) => response.json())
.then((json) => {
   
    activityP.innerHTML = `<strong>Activity: </strong>${json.activity}.`;
    typeP.innerHTML = `<strong>Type: </strong>${json.type[0].toUpperCase()+json.type.slice(1)}`;
    participantsP.innerHTML = `<strong>Participants: </strong>${json.participants}`;
    priceP.innerHTML = `<strong>Budget: </strong>${returnBudget(json.price)}`;
    accessibilityP.innerHTML = `<strong>Accessibility: </strong>${returnDifficulty(json.accessibility)}`;

    git


})
.catch((error) =>  {
alert("No activity found with the specified parameters. Use less parameters to get more acitivies.")
})

})


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
  

//to generate a new activity.
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
    

  const ul = document.querySelector("ul");
    const li = document.createElement("li");
    li.innerText = activityJson;
const a = document.createElement("a");
a.setAttribute("class", "fetch")
a.href = `${BASE_URL}?key=${keyToNum}`;
a.append(li);
ul.append(a);
const listItems = document.querySelectorAll("li")

a.addEventListener("click", (event) => {
    event.preventDefault();

fetch(`${a.href}`)
.then((response) => response.json())
.then((json) => {
activityP.innerHTML = `<strong>Activity: </strong>${json.activity}.`;
typeP.innerHTML = `<strong>Type: </strong>${json.type[0].toUpperCase()+json.type.slice(1)}`;
participantsP.innerHTML = `<strong>Participants: </strong>${json.participants}`;
priceP.innerHTML = `<strong>Budget: </strong>${returnBudget(json.price)}`;
accessibilityP.innerHTML = `<strong>Accessibility: </strong>${returnDifficulty(json.accessibility)}`
})

})
// console.log(listItem)



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



