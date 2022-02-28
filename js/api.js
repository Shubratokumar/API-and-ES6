/* const loadUser = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(response => response.json())
    .then(data => displayUser(data.results[0]))
}
// loadUser();

const displayUser = users => {
    // console.log(users.gender)
} */

// meal DB
// toggle spinner
const toggleSpinner = displayStyle =>{
    document.getElementById('spinner').style.display = displayStyle;
}
// toggle meals
const toggleMeals = displayStyle =>{
    document.getElementById('meals-container').style.display = displayStyle;
}
const searchMeal = () =>{
    const searchText = document.getElementById('search-field');
    const searchValue = searchText.value; 

    // display spinner
    toggleSpinner('block')
    toggleMeals('none')
    loadMeals(searchValue);
    searchText.value = '';
}
const loadMeals = searchText => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMails(data.meals))
}

// default call for display meals
loadMeals('fish')

const displayMails = meals => {
    const mealsContainer = document.getElementById('meals-container');
    // mealsContainer.textContent = '';
    mealsContainer.innerHTML = '';
    // error handle when searching with wrong input
    if(!meals){

    }
    // optional chaining
    meals?.forEach(meal => {
        // console.log(meal);
        const div = document.createElement('div');
        div.innerHTML = ` 
            <h4>Meal Name : ${meal.strMeal}</h4>
            <p>${meal.strIngredient11 ? meal.strIngredient11 : " "}</p>
            <button onclick="loadMealDetail('${meal.idMeal}')">Click Me</button>
        `
        mealsContainer.appendChild(div);
    })
    //  hide spinner
    toggleSpinner('none');
    toggleMeals('block')
}

const loadMealDetail = mealName => {
    console.log(mealName);
}

// add bootstrap spinner : challenge