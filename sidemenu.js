/* Set the width of the side navigation dynamically based on screen size */
function openNav() {
    if (window.innerWidth <= 768) {
        // For screens smaller than or equal to 768px (mobile and tablet)
        document.getElementById("mySidenav").style.width = "100%";
    } else {
        // For larger screens
        document.getElementById("mySidenav").style.width = "800px";
    }
}

/* Set the width of the side navigation to 0 (close it) */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
