let num = 123.45;

if (String(num).includes('.')) {
    console.log((String(num).length)-1);
} else {
    console.log(String(num).length);
}

let dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT ";
let neoDna = dna.trim().toUpperCase().replace('GCT', 'AGG');
console.log(neoDna);

if ((neoDna.indexOf('CAT')) !== -1){
    console.log("CAT found!");
} else {
    console.log("CAT NOT found...");
}

console.log(neoDna.slice(16,19));
console.log(`The DNA strand is ${neoDna.length} characters long. Wowza!`);
console.log(`${neoDna.slice(4,7).toLowerCase()}o ${neoDna.slice((neoDna.indexOf('CAT')),(neoDna.indexOf('CAT')+3)).toLowerCase()}`)

let str = 'JavaScript';

console.log(
    `${str.slice(str.indexOf('J'),str.indexOf('J')+1)}${str.slice(str.indexOf('S'),str.indexOf('S')+1)}`
);

let initialsStr = str.replace('a','').replace('v','').replace('a','').replace('c','').replace('r','').replace('i','').replace('p','').replace('t','');

console.log(`The abbreviation for "Javascript" is "${initialsStr}."`);

console.log(str.toUpperCase().slice(0,4).replace('J','L'));

let finalString = 'title case';
console.log(finalString.replace('t','T').replace('c','C'));