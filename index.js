const test = document.createElement("h2");
document.body.appendChild(test);
test.style.fontSize = "100px";

const awesome = "wow";
let index = 0;

setInterval(() => {
  test.textContent += awesome[index];
  index++;

  if (index === awesome.length + 1) {
    index = 0;
    test.innerText = "";
  }
}, 100);
