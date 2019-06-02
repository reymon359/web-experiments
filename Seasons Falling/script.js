/*
 * Seasons Falling
 * Ramon Morcillo @reymon359
 * ramonmorcillo.com
 */

let seasonIndex = (Math.floor(Math.random() * 2) + 1); // The season we will start. It will be random
console.log(seasonIndex);

function changeSeason() {
    let html = '';
    // I will build the html here
    html += `<section><h2>Seasons Falling</h2>`;

    for (let containerIndex = 1; containerIndex < 4; containerIndex++) {
        // Now I make 3 set containers
        html += `<div class="set set${containerIndex}">`;

        // now 3 groups of 3 images each
        for (let imgGroupIndex = 1; imgGroupIndex < 4; imgGroupIndex++) { // The loop for groups

            for (let imgIndex = 1; imgIndex < 4; imgIndex++) { // The loop for the images

                html += `<div><img src="https://raw.githubusercontent.com/reymon359/web-experiments/master/Seasons%20Falling/season${seasonIndex}_${imgIndex}.png" alt=""></div>`;

            }
        }

        html += `</div>`;
    }

    html += `</section>`;
    document.getElementsByTagName('body')[0].innerHTML = html;

    // Increasing the season number
    seasonIndex = (seasonIndex === 2) ? 1 : seasonIndex + 1;
    console.log(seasonIndex);
    setTimeout(() => {
        changeSeason();
    }, 5000);
}