document.getElementById("hamburger").addEventListener("click", openNav)

function openNav() {
   document.getElementById("navlinks").classList.add("active")
}
document.getElementById("close").addEventListener("click", closeNav)
function closeNav() {
    document.getElementById("navlinks").classList.remove("active")
}