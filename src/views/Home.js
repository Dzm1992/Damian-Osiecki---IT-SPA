export function Home() {
    const section = document.createElement('section');
    const img = document.createElement('img');
    img.style.alignItems = "center";
    img.src = require('../assets/ita_spa_main.jpg');
    img.style.width = '70vw';
    img.style.border = "2px solid black";
    section.style.padding = "0em 10em"


    section.innerHTML = `
        <center><h2>IT Spa</h2></center>
        <p>Witaj w najlepszym spa dla programistów w Polsce! Oferujemy najlepsze zabiegi SPA nad morzem, 
        które pomogą Ci się zrelaksować, a także zadziałają dobroczynnie na Twoje ciało!</p>
    `;

   
    section.append(img);



    return section;
}
