//Print all values of array in <div id="output"></div>

const array = ["This", "is", "an", "array"];

//code here
for(i = 0 ; i < array.length; i++)
document.getElementById('output').insertAdjacentHTML("beforeend", array[i] + ' ' )

//answer is in answer.txt