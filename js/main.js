const huf = document.getElementById("huf").value;
const dev = document.getElementById("deviza").value;

document.getElementById("calc").addEventListener("click", () => {
    document.getElementById("result").innerHTML = ((textForm(huf) / textForm(dev)).toFixed(2)) * 100
})

function textForm(param) {
    const arr = param.split("");

    while (arr.indexOf(" ") > 0) {
        arr.splice(arr.indexOf(" "), 1);
    }

    param = arr.join('');
    console.log(typeof (arr));
    return parseFloat(param);
}
