const defaultContainerWidth = 800;
const defaultCumberOfSqure = 16;
const bigBox = document.querySelector("#bigBox");
bigBox.style.display = "flex";
bigBox.style.flexWrap = "wrap";
bigBox.style.width = "800px";
bigBox.style.height = "800px";
createSquares(defaultCumberOfSqure);

function createSquares(numberOfSqure) {
  for (let i = 0; i < numberOfSqure * numberOfSqure; i++) {
    const square = document.createElement("div");

    square.style.width = `${defaultContainerWidth / numberOfSqure}px`;
    square.style.height = `${defaultContainerWidth / numberOfSqure}px`;
    square.style.border = "2px solid black";
    square.style.boxSizing = "border-box";
    let radomColor = generateRadomRGB();

    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = `rgb(${radomColor.r}, ${radomColor.g}, ${radomColor.b})`;
      square.style.cursor = "pointer";
    });
    bigBox.appendChild(square);
  }
}

function generateRadomRGB() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return {
    r: r,
    g: g,
    b: b,
  };
}

const pageDiv = document.querySelector("#pageDiv");
const button = document.createElement("button");
pageDiv.insertBefore(button, bigBox);
button.style.color = "white";
button.style.backgroundColor = "#808040";
button.style.height = "60px";
button.style.width = "180px";
button.style.margin = "20px";
button.textContent = "reset your size of small boxes";

button.addEventListener("click", function () {
  let input = +prompt(
    "Please type in the number of the small boxes in one row."
  );
  if (!Number.isInteger(input) || input < 1 || input > 100) {
    alert("Please enter a valid number between 1 and 100.");
  } else {
    while (bigBox.firstChild) {
      bigBox.removeChild(bigBox.firstChild);
    }
    createSquares(input);
  }
});
