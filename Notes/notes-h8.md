# Bugs and Errors
Bugs kan je in twee categorieën plaatsen, namelijk:
1. Bugs die voortkomen uit verwarring van de programmeur
2. Bugs die voortkomen uit fouten bij het verwerken van de gedachten naar code

Het laatste is lastiger te fixen dan het eerste.

## Language
Veel fouten worden naar voren gebracht in bijvoorbeeld de console. Echter, hier is de losheid van JavaScript een irritante factor. Ondanks dat je wellicht typfouten maakt of compleet nutteloze dingen gaat doen als `true * "monkey"` probeert JavaScript er toch nog kaas van te maken en gaat rustig door met het uitvoeren van het script.

JavaScript begint gelukkig wel te klagen als je een programma schrijft dat niet voldoet aan de grammatica van JavaScrip. Ook geeft hij fouten aan als je bijvoorbeeld iets aanroept als een functie terwijl het geen functie is of de waarde van een `undefined` binding probeert op te vragen. 

Echter, vaak produceert je kleine fout slechts `NaN` en weet je voor god niet waar het fout gaat, het programma gaat ondertussen lekker door met uitvoeren alsof er niks aan de hand is. Het probleem komt dan pas later boven water en zorgt er simpelweg voor dat de output van het programma fout is, en dat terwijl er 'niks' fout gaat...

## Strict mode
Om JavaScript wat stricter te maken kan je `"use strict"` gebruiken bovenaan het document of boven in de body van de function:

```javascript
'use strict'
// Code

// Of:

function spotTheProblem() {
    'use strict';
    for (counter = 0; counter < 10; counter++) {
        console.log("Happy coding");
    }
}

spotTheProblem();
// > ReferenceError: counter is not defined
```

Als je hier geen `'use strict'` zou gebruiken maakt JavaScript van `counter` een globale variabele of overschrijft hij een eerdere binding van `counter` om zo het programma te laten werken. Het helpt ook bij de binding van `this` binnen een globale functie (returned in dat geval `undefined`):

```javascript
function Person(name) { this.name = name }

let ferdinand = Person("Ferdinand"); // oeps...

console.log(name);
// > "Ferdinand", JavaScript maakt hier een global binding van name aan... dat is niet wat we willen!


'use strict'
function Person(name) { this.name = name }
let ferdinand = Person("Ferdinand"); // new vergeten...
// > TypeError: Cannot set property 'name' of undefined
```

Er wordt je zo dus direct verteld dat je iets fout doet, dat is enorm handig.

## Types
Sommige programmeertalen willen alle types van alle bindings en expressions weten voordat ze überhaupt beginnen met het runnen van je programma. Ze vertellen je direct wanneer een type inconsistent wordt gebruikt. 

## Testing


## Debugging


## Error propagation


## Exceptions


## Cleaning up after exceptions


## Selective catching


## Assertions