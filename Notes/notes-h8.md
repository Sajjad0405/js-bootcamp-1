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
Sommige programmeertalen willen alle types van alle bindings en expressions weten voordat ze überhaupt beginnen met het runnen van je programma. Ze vertellen je direct wanneer een type inconsistent wordt gebruikt. JavaScript houdt hier pas rekening mee on runtime, en zelfs dan probeert het nog kaas te maken van je fouten... niet bepaald een ideale situatie dus.

Veel van de fouten die worden gemaakt komen door verwarring die ontstaat over watvoor waarde er in of uit functies komen (bijv. moet er een array in of een object etc.). Om te voorkomen dat je verward raakt kan je zulke comments boven de functie neerzetten:

```javascript
// (VillageState, Array) > {direction: string, memory: array})
function goalOrientedRobot() {
    // code
}
```

## Testing
Als een taal ons niet gaat helpen met het vinden van fouten zullen we ze op de lastige manier moeten vinden: door het te runnen en te kijken of ons programma het juiste ding doet. Dat telkens doen is een slecht idee, niet alleen is het irritant, het kost ook nog eens veel meer tijd. Je kan er ook voor kiezen om een eigen test te schrijven:

Beter is om gebruik te maken van zogenaamde *test runners*: Programma's, gebouwd uit functies en methods, waarmee je je code kan testen en die nuttige informatie geven als een test faalt.

## Debugging
Zodra je merkt dat er iets mis is met je code is de volgende stap om uit te zoeken *wat* er dan mis is met je code. Soms is het logisch en staat er precies in de console waar de fout voorkomt. Echter, het kan ook voorkomen dat de lijn die de fout triggert simpelweg de eerste lijn is waar een waarde die ergens anders is gedefinieerd op een verkeerde manier gebruikt wordt.

### Programma analyseren
Als je programma niet de juiste output geeft en je niet direct ziet waar de fout vandaan komt, neem dan een stap terug in plaats van direct aanpassingen te doen om te kijken of het beter wordt. Beter is om te analyseren wat er precies gebeurt en kom met een theorie waarom het fout zou kunnen zijn gegaan.

### `Console.log()`
Door strategisch wat `console.log`'s neer te zetten in je code kan je erachter komen hoe het programma zich gedraagt. Als er bijvoorbeeld iets fout gaat in een loop met misschien de waarde van `i` zou je die elke keer kunnen console loggen.

### Browser debugger
Een alternatief voor `console.log` is gebruik te maken van de debugger in je browser. De debugger heeft een handige feature, namelijk het neerzetten van breakpoints. Wanneer je ergens een breakpoint neer zet stopt het script met draaien op dat moment en kan je de waarden van bindings inspecteren. 

### Debugger statement
Je kan ook nog een `debugger` statement in je code neerzetten. Als je dat doet en de debugger van de browser is actief, dan stopt het script met draaien op het punt dat het `debugger` tegenkomt.

## Error handling
Wat gebeurt er als niet de programmeur een fout heeft gemaakt, maar de gebruiker een 'fout' maakt door niet de juiste input in te vullen? Dat is waar we het nu over gaan hebben. In alle gevallen dat je iets maakt waar meerdere mensen gebruik van gaan maken wil je hebben dat het programma reageert op een foute input. Dit kan zijn door het te negeren en door te gaan met draaien of door de gebruiker te laten weten dat er iets is fout gegaan.

Stel dat je een functie hebt `promptInteger` die de gebruiker vraagt om een heel getal in te voeren en die returnt. Echter, wat moet het returnen als de gebruiker een string invoert? Dan kan je gebruik maken van een if/else statement om de 'foute' input te ondervangen:

```javascript
function promptNumber(question) {
    const result = Number(prompt(question));
    // als de input geen nummer is, return dan iets anders
    if (Number.isNaN(result)) return 'Je moet een nummer invullen';
    // anders, return het resultaat
    else return result;
}
```

De bovenstaande manier heeft echter ook z'n minpunten. Stel dat je functie elk soort input kan nemen als argument. Dan kan je nergens zo expliciet checken of die input goed of fout is... In zo'n geval moet je het resultaat in een object gooien om goed van fout te kunnen onderscheiden:

```javascript
function lastElement(array) {
    if (array.length == 0) {
        return { failed: true };
    } else {
        return { element: array[array.length - 1] };
    }
}
```

Daarnaast kan het leiden tot aparte code. Als een stukje code 10 keer runt moet er dus 10 keer gecheckt worden of de functie `null` returnt. Als het antwoord van de functie op een `null` input om simpelweg `null` te returnen moeten callers van de functie ook weer checken etc.

## Exception handling
When a function cannot proceed normally, what we would like to do is just stop what we are doing and immediately jump to a place that knows how to handle the problem. This is what exception handling does.

Wanneer een functie niet op de normale manier door kan gaan 

## Cleaning up after exceptions


## Selective catching


## Assertions