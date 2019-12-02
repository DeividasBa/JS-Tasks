//After a button press try getting #input value and printing it in to <div id="output">Output:</div>


function btnClick(){
let input = document.querySelector('#input');
let output = document.querySelector('#output');

output.innerHTML = input.value;
    
}

//answer is in answer.txt