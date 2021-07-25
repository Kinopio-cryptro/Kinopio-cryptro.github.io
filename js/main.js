// const huf = document.getElementById("huf").value;
// const dev = document.getElementById("deviza").value;

document.getElementById("calc").addEventListener("click", () => {
    console.log(huf);
    document.getElementById("result").innerHTML = (textForm(document.getElementById("huf").value) / textForm(document.getElementById("huf").value)).toFixed(2) * 100
})

function textForm(param) {
    param = param.replace(",", ".")
    const arr = param.split("");

    while (arr.indexOf(" ") > 0) {
        arr.splice(arr.indexOf(" "), 1);
    }

    return parseFloat(arr.join(''));
}
