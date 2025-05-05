const result = document.getElementById("result");
const width = document.getElementById("width");
const height = document.getElementById("height");
const storeBtn = document.getElementById("storebtn");
const clearBtn = document.getElementById("clearbtn");
const calcBtn = document.getElementById("calculatebtn");
const recordList = document.getElementById("recordlist");

const successText = document.getElementById("success");



const area = (w,h) => w * h;

calcBtn.onclick = () => {
    const w = width.valueAsNumber;
    const h = height.valueAsNumber;
    const a = area(w,h);

    result.innerText = `${w}ft x ${h}ft = ${a}sqft`;
    width.value = "";
    height.value= "";
}


clearBtn.onclick = () => {
    result.innerText = "";
}

storeBtn.onclick = () => {
    recordList.innerHTML += `<li>${result.innerText}</li>`
    result.innerText = "";
    successText.innerText = "successfully"
}

