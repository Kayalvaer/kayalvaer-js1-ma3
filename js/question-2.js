//Question 2 Answer


//fetch data from API
const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const resultContainer = document.querySelector(".results");

async function getGames() {
    try {
        //fetch

        const response = await fetch(url);

        const result = await response.json();
        console.log(result.results);

        const gameCount = result.results;

        for (let i = 0; i <= gameCount.length; i++) {
            console.log(gameCount[i].name);
            //console.log(result);

            //for (let i = 0; i <= gameCount.length; i++) {
            //console.log(gameCount[i]);

            //for (let i = 0; i <= gameCount.length; i++) {
            //console.log(gameCount[i]);


            resultContainer.innerHTML += `<div class="listResult">${gameCount[i].name}</div>`;

            resultContainer.innerHTML += `<div class="listSlug">${gameCount[i].slug}</div>`;

            resultContainer.innerHTML += `<div class="listPlay">${gameCount[i].playtime}</div>`;


            if (i === 6) {
                break;
            }

        }
    } catch (errors) {
        console.log(errors);
        resultContainer.innerHTML = "Invalid entry entered";
    }

}

getGames(url);