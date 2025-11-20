
    document.getElementById("addDivBtn").addEventListener("click", function () {
        // Pobierz wszystkie elementy z klasą "row"
        const rows = document.querySelectorAll(".row");

        rows.forEach(function(row) {
            const newDiv = document.createElement("div");
             newDiv.textContent = "Nowy element ";
            row.appendChild(newDiv);
        });
    });

document.getElementById("removeDivBtn").addEventListener("click", function () {
    const rows = document.querySelectorAll(".row");

    rows.forEach(function(row) {
        if (row.children.length > 0) {
            row.removeChild(row.lastElementChild);
        }
    });
});

document.getElementById("addMenuItemBtn").addEventListener("click", function () {
    const navList = document.querySelector("nav ul");

    // Tworzymy nowy element <li> z <a>
    const newItem = document.createElement("li");
    const newLink = document.createElement("a");

    // Można nadać unikalne ID każdemu kolejnemu elementowi
    const itemCount = navList.children.length + 1;
    newLink.href = "#new" + itemCount;
    newLink.textContent = "Nowy " + itemCount;

    newItem.appendChild(newLink);
    navList.appendChild(newItem);
});

document.getElementById("removeItemBtn").addEventListener("click", function () {
    const navList = document.querySelector("nav ul");

    if (navList.children.length > 0) {
        navList.removeChild(navList.lastElementChild);
    }
});
