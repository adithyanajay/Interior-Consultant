
// code to open navbar in mobile mode when the hamburger menu is clicked
document.getElementById("hamburger").addEventListener("click", openNav)
function openNav() {
   document.getElementById("navlinks").classList.add("active")
}

// code to close navbar in mobile mode when the close button is clicked
document.getElementById("close").addEventListener("click", closeNav)
function closeNav() {
    document.getElementById("navlinks").classList.remove("active")
}