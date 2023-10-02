const button1 = document.getElementById("button1");
button1.addEventListener("click", roll);

function roll(){
    num = 0;
    x = Math.floor(Math.random() * 7);
    const para = document.createElement("p");
    para.textContent = "roll one: " + x;
    num += x;
    const para2 = document.createElement("p");
    y = Math.floor(Math.random() * 7);
    para2.textContent = "roll one: " + y;
    num += y;
    const para3 = document.createElement("p");
    para3.textContent = "total number: " + num;
    document.body.appendChild(para)
    document.body.appendChild(para2)
    document.body.appendChild(para3);
}