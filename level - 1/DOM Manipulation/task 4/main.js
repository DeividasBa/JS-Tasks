//Generate and print obj into <div id="output"></div> (note: print every variable inside a unique <p> tag)

const obj = {
    name:'vardenis',
    age: 45,
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
};

//code here

let HTML='';
HTML =`
<p> name:'vardenis'</p>
<p> age: 45 </p>
<p> info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' </p>
`
document.getElementById('output').innerHTML = HTML;
//answer is in answer.txt