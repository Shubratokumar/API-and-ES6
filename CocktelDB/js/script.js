const cocktailContainer = document.getElementById('cocktail-container')

const searchText = () => {
    const input = document.getElementById('input-field');
    const searchValue = input.value;
    const error = document.getElementById('error')
    
    if(typeof searchValue == 'number' || searchValue == ''){
        error.innerText = "Wrong input, Please provied string!!!";
        input.value = '';
        cocktailContainer.innerHTML = ''
    }
    else{
        loadCocktail(searchValue);
        error.innerText = '';
        input.value = '';
    }
}

const loadCocktail = searchText => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCocktail(data.drinks))
}
const displayCocktail = drinks => {
    console.log(drinks);
    const cocktailContainer = document.getElementById('cocktail-container');
    cocktailContainer.innerHTML = "";
    drinks?.forEach( drink => {
        console.log(drink)
        const div = document.createElement('div')
        div.classList.add('cocktail-container')
        div.innerHTML = `
            <img class = "img-fluid" src="${drink.strDrinkThumb}" alt="">
            <p>Drinks Name : ${drink.strDrink}</p>
            <p>Drinks Id : ${drink.idDrink}</p>
            <p>Drinks Catigories : ${drink.strCategory}</p> 
        `;
        cocktailContainer.appendChild(div)
    })
}