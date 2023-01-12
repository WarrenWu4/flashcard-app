import "../styles/home.css";

export function home() {
    let cards = [1, 2, 3, 4, 5, 6, 7, 8]
    const home = document.getElementById("home");
    home.innerHTML = `
        <div id="home-header">
            <div id="home-text">Sets</div>
            <div id="home-btns">
                <div id="card-view"></div>
                <div id="list-view"></div>
                <div id="sort"></div>
            </div>
        </div>
        <div id="home-sets"></div>
    `
    // TODO: add fixed cards and reponsive grid
    // add cards
    const sets = document.getElementById("home-sets");
    for(let i=0; i < cards.length; i++) {
        sets.innerHTML += `<div id="card"></div>`
    }
}