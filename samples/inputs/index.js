
function toggleSearchInputDisplay(id) {
    let collapsableSearch = document.getElementById(id);
    console.log(collapsableSearch.style.display);
    if (collapsableSearch.style.display === "block") {
        hideSearchInput(id);
    } else {
        console.log("displaying");
        collapsableSearch.style.display = "block";
        collapsableSearch.focus();
        addBlueToSearchIcon(id + "-icon");
    }
}

function hideSearchInput(id) {
    let collapsableSearch = document.getElementById(id);
    removeBlueFromSearchIcon(id + "-icon");
    if (!collapsableSearch.value) {
        collapsableSearch.style.display = "none";
    }
}

function toggleSearchIconColor(id) {
    let searchIcon = document.getElementById(id);
    if (searchIcon.classList.contains("text-gnome-blue-500")) {
        removeBlueFromSearchIcon(id);
    }
    else {
        addBlueToSearchIcon(id);
    }
}

function addBlueToSearchIcon(id) {
    let searchIcon = document.getElementById(id);
    searchIcon.classList.add("text-gnome-blue-500");
}

function removeBlueFromSearchIcon(id) {
    let searchIcon = document.getElementById(id);
    searchIcon.classList.remove("text-gnome-blue-500");
}