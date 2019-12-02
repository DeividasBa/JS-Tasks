//Chenge style(any style) of the .box with js using style function
//... But this time do it to every other .box

//code here

let kintamasis = document.querySelectorAll('.box');

for ( i=1; i<kintamasis.length; i+=2){
kintamasis[i].style.backgroundColor = 'red';
}

//answer is in answer.txt