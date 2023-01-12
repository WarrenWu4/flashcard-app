import "../styles/main.css";
import { home } from "./home";
import { nav } from "./nav";

const app = document.getElementById("app");

// create nav bar
app.innerHTML = `<div id="nav"></div>`;
nav()

//create rest of home page
app.innerHTML += `<div id="home"></div>`
home()

//handle events
const profile = document.getElementById("nav-profile");
const sort = document.getElementById("sort");
profile.addEventListener("click", function profileModal() {
    console.log("opens profile modal");
});
sort.addEventListener("click", function sortModal() {
    console.log("opens sort modal");
});
document.getElementById("nav-logo").addEventListener("click", function navLogo() {window.location.href="/"});
document.getElementById("nav-home").addEventListener("click", function navHome() {window.location.href="/"});
document.getElementById("nav-create").addEventListener("click", function navCreate() {window.location.href="/src/pages/create.html"});
document.getElementById("nav-market").addEventListener("click", function navMarket() {window.location.href="/src/pages/market.html"});
document.getElementById("nav-donate").addEventListener("click", function navDonate() {window.location.href="/src/pages/donate.html"});
