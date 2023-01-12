import "../styles/donate.css";
import { nav } from "./nav";

const app = document.getElementById("app");

//add navbar
app.innerHTML = `<div id="nav"></div>`
nav()

//handle events
const profile = document.getElementById("nav-profile");
profile.addEventListener("click", function profileModal() {
    console.log("opens profile modal");
});
document.getElementById("nav-logo").addEventListener("click", function navLogo() {window.location.href="/"});
document.getElementById("nav-home").addEventListener("click", function navHome() {window.location.href="/"});
document.getElementById("nav-create").addEventListener("click", function navCreate() {window.location.href="/src/pages/create.html"});
document.getElementById("nav-market").addEventListener("click", function navMarket() {window.location.href="/src/pages/market.html"});
document.getElementById("nav-donate").addEventListener("click", function navDonate() {window.location.href="/src/pages/donate.html"});