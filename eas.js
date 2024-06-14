const container = document.querySelector("#container");
const button = document.querySelector("button");


function removeGrid() {
    const rows = document.querySelectorAll(".row");

    for (let row of rows) {
        container.removeChild(row);
    }
}


function createGrid(number = 16) {
    for (let i = 0; i < number; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        
        for (let i = 0; i < number; i++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.addEventListener("mouseenter", () => {
                square.classList.add("colored");
            });
    
            row.appendChild(square);
        }
        container.appendChild(row);
    }
}


button.addEventListener("click", () => {
    const number = parseInt(prompt("Enter desired number of squares per side (Maximum value is 100, minimum value is 10):"));
    if (number < 10 || number > 100) {
        alert("You must enter a number between 10 and 100.");
    }
    else if (typeof number !== "number") {
        alert("Please enter a valid input.");
    }

    removeGrid();
    createGrid(number);
});


createGrid(16);