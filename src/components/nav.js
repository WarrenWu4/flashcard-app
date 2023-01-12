import "../styles/nav.css";

//create nav
export function nav() {
    const nav = document.getElementById("nav")
    nav.innerHTML = `
        <div id="nav-links">
            <div id="nav-logo">JUMBO</div>
            <div id="nav-home">Home</div>
            <div id="nav-create">Create</div>
            <div id="nav-market">Market</div>
            <div id="nav-donate">Donate</div>
        </div>
        <div id="nav-profile"></div>
    `
}