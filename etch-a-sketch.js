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

    let radomColor = generateRadomRGBA();
    square.style.backgroundColor = `rgba(${radomColor.r}, ${radomColor.g}, ${radomColor.b},0)`;
    square.addEventListener("mouseover", () => {
      console.log(square.style.backgroundColor);
      const rgbaValues = square.style.backgroundColor
        // 正则表达式，获取所有的数字也包括小数。
        .match(/\d+(\.\d+)?/g)
        .map(Number);
      let alpha = rgbaValues[3];
      console.log(rgbaValues);
      if (alpha < 1) {
        alpha += 0.1;
      } else {
        alpha = 1;
      }
      square.style.backgroundColor = `rgba(${radomColor.r}, ${radomColor.g}, ${radomColor.b},${alpha})`;
      square.style.cursor = "pointer";
    });
    bigBox.appendChild(square);
  }
}

function generateRadomRGBA() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const a = 0;
  return {
    r: r,
    g: g,
    b: b,
    a: a,
  };
}
// function makeSquareDarker() {
//  这些是错误代码，但是可以参考颜色更改。
//     bigBox.firstChild.addEventListener("mouseover", () => {
//     const currentColor = getComputedStyle(square).backgroundColor;
//     const rgbValues = currentColor.match(/\d+/g).map(Number);
//     // 访问透明度值：代码首先检查 rgbValues 数组的第四个元素（对应于 alpha 值）是否被定义。这是通过 rgbValues !== undefined 来实现的。
//     // 如果 alpha 值存在，则将其除以 255，以将其转换为 0 到 1 的范围，这是 CSS 中透明度的标准表示。这里是保持原来的透明度不变。
//     const alpha = rgbValues[3] !== undefined ? rgbValues[3] / 255 : 1;
//     const darkenedColor = `rgba(${Math.max(0, rgbValues[0] - 20)}, ${Math.max(
//       0,
//       rgbValues[1] - 20
//     )}, ${Math.max(0, rgbValues[2] - 20)}, ${alpha})`;

//     square.style.backgroundColor = darkenedColor; // 设置新的背景颜色
//   });
// }

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
