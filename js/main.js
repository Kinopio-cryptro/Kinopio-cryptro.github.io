const huf = document.getElementById("huf").value;
const dev = document.getElementById("deviza").value;

document.getElementById("calc").addEventListener("click", () => {
    document.getElementById("result").innerHTML = (textForm(huf) / textForm(dev)).toFixed(2) * 100
})

function textForm(param) {
    param = param.replace(",", ".")
    const arr = param.split("");

    while (arr.indexOf(" ") > 0) {
        arr.splice(arr.indexOf(" "), 1);
    }

    return parseFloat(arr.join(''));
}
