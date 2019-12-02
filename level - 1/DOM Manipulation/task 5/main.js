//Generate and print obj *array* into <div id="output"></div> (note: print every variable inside a unique <p> tag and every array item in <div>)

const obj = [
    {
        name: 'vardenis',
        age: 45,
        info: 'Lorem ipsum dolor sit amet.'
    },
    {
        name: 'pavardenis',
        age: 256,
        info: 'Consectetur adipiscing elit.'
    },
    {
        name: 'vardpavardenis',
        age: 25,
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
];

//code here
let HTML ='';
for( i=0; i<obj.length; i++)
HTML += `
<p>${obj[i].name}</p>
<p>${obj[i].age}</p>
<p>${obj[i].info}</p>
`
document.querySelector('#output').innerHTML = HTML;
//answer is in answer.txt