//Question 2 Answer


//fetch data from API
const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const resultContainer = document.querySelector(".results");

async function getGames() {
    try {
        const response = await fetch(url);

        const result = await response.json();

        console.log(result.all);

        const playsCount = result.results;

        resultContainer.innerHTML = "";


        for (let i = 0; i <= playsCount.length; i++) {
            console.log(playsCount[i].name);
            console.log(result);


            //for (let i = 0; i <= apiCount.length; i++) {
            //     console.log(apiCount[i].playtime);
            //     console.log(result);
            // }
            //for (let i = 0; i <= apiCount.length; i++) {
            //    console.log(apiCount[i].platforms);
            //    //console.log(result);
            // }


            if (i === 6) {
                break;
            }

            resultContainer.innerHTML += `<div class="playsName">${playsCount[i].name}</div>`;

            resultContainer.innerHTML += `<div class="playTags">${playsCount[i].tags}</div>`;

            resultContainer.innerHTML += `<div class="playsRates">${playsCount[i].ratings}</div>`;

        }
    } catch (errors) {
        console.log(errors);
        resultContainer.innerHTML = "Invalid entry entered";
    }

}

getGames(url);