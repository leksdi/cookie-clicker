const element = document.getElementById("cookie");
const countClick = document.getElementById("clicker__counter");
const speedClick = document.getElementById("clicker__speed");

let time1 = new Date;
let time2 = time1;
let flag = true;

console.log(element.width)

element.onclick = function() {
  
    countClick.textContent ++;

    if (flag) {
        time2 = new Date(); 
        flag = false;
    }

    speedClick.textContent = (1/((time2 - time1)/1000)).toFixed(2);
    
    time1 = new Date();
    flag = true;

    if (countClick.textContent % 2 === 1) {
        element.width = 250;
    } else {
        element.width = 200;
    };


}


