# Introduction
Een goede programmeertaal helpt de programmeur door hen 'toe te staan' vrijwel te praten over de acties die de computer moet doen op een 'hoger' niveau. Het zorgt ervoor dat je niet hele specifieke details hoeft aan te geven, je building blocks kan gebruiken (zoals bijv. een `while loop` en functies als `console.log`), zelf je building blocks kan maken (eigen functies en variabelen) en dat die (zelfgemaakte blokken) goed composable zijn.

JavaScript heeft niets te maken met de andere programmeertaal Java!

JavaScript is erg vrij in wat het toestaat. Aan de ene kant is dat handig voor beginners, aan de andere kant kan dat het vinden van fouten lastig maken omdat het de fouten niet direct aangeeft maar er nog probeert soep van te maken.

JavaScript wordt niet alleen in webbrowsers gebruikt. Ook databases zoals MongoDB en CouchDB gebruiken JavaScript als hun scripting en query-taal. O.a. NodeJS maakt het mogelijk voor JavaScript om buiten de browser te draaien.

# Chapter 1: Values, types and operators
De cornerstone van JavaScript programma's zijn de 'simpele' value types en operators. Er zijn verschillende soorten value types, namelijk:
- Number (numeriek, bijv. 1, 2, 21 etc.)
    - Voor delen van getallen schrijf je het met een punt: `9.5`;
    - Voor hele grote of -kleine getallen kan je een `e` gebruiken om het aantal exponenten (nullen) aan te geven: `2e6` is gelijk aan twee miljoen;
- Arithmetic (uitkomsten van sommen als `100 + 4 * 11`)
    - De `+, -, * en /` noem je operators
    - De `%` operator is de 'remainder operator'. Het is het getal dat overblijft wanneer je X door Y deelt
    - Je hebt ook speciale nummers zoals `Infinity` (oneindig) en `NaN` (not a number, de uitkomst van een niet wiskundige berekening (bijv. een som als `5 / "Hoi"`))
- String (een zin of woord in NL, Engels etc.)
    - Strings staan altijd in quotes: `'Dit is een string'`
    - Je kan single quotes (' '), double quotes (" ") of backticks (``) gebruiken om een string aan te geven
    - Ook heb je speciale characters als Newlines (wanneer je op `ENTER` zou drukken) en Tab characters (wanneer je op `TAB` zou drukken), dit bereik je door een backslash `\` te gebruiken met een flag daarna (`\n` voor een Newline en `\t` voor een Tab)
- Unary operators (bijv. de uitkomst van `typeof`)
    - Operators die twee waardes gebruiken noem je binary operators, operators die één waarde gebruikt noem je een unary operator
- Boolean (`true` of `false`)
    - Word gebruikt om onderscheid te kunnen maken tussen ja/nee, aan/uit, waar/niet waar

## Vergelijkingen
Vergelijkingen produceren altijd Boolean values (`true` of `false`). Een aantal operators voor vergelijkingen zijn als volgt:
- Kleiner dan: `<`
- Groter dan: `>`
- Kleiner dan of gelijk aan: `<=`
- Groter dan of gelijk aan: `>=`
- Hetzelfde als: `==`
- Niet hetzelfde als: `!=`
- Hetzelfde als en hetzelfde datatype (aangeraden): `===`
- Niet hetzelfde als en niet hetzelfde datatype (aangeraden): `!==`

Er is slechts één waarde binnen JavaScript die niet hetzelfde is als zichzelf, namelijk `NaN`.

## Logical operators 
Er zijn drie logical operators:
1. Logical AND: `&&`
2. Logical OR: `||`
3. Ternary operator: 
```javascript
console.log(true ? 1 : 2);
// > 1

console.log(false ? 1 : 2);
// > 2
```

De Ternary operator checkt of de waarde voor het vraagteken waar is. Zo ja, dan print geeft hij het eerste getal terug, zo nee, dan geeft hij het getal na de dubbele punt terug.

Qua prioriteit zit het zo: De laagste prio gaat uit naar de `||`, vervolgens komt de `&&` en daarna komen alle andere operators (`>, <, >=, ===` etc.).

## Empty values
Er zijn twee soorten lege waardes, namelijk `null` en `undefined`, deze worden gegeven als er geen waarde is (in bijv. een variabele) om terug te geven. Je hebt natuurlijk `NaN`, echter, dat is geen lege waarde, het geeft wel een waarde alleen is het geen wiskundig iets of een complete string o.i.d. Wanneer er eenmaal `NaN` uit een berekening voortkomt blijft hij bij elke opvolgende berekening `NaN` aangeven.

Als dat het geval is, is het verstandig om te zoeken naar een typfout.

[comment]: <> (==== Add chapter two!! ======)

# Chapter 3: Functions
Functies zijn de bouwblokken van JavaScript, ze voeren kleinere taken uit binnen het hele script. Functies kan je met elkaar samen laten werken of kunnen op zichzelf staan.

Een functie declareren doe je als volgt:

```javascript
// Function expression:
const myFunction = function(x) {
    return x * x;
}

// Function declaration:
function myFunction(x) {
    return x * x;
}

// Arrow function:
const myFunction = (x, y) => {
    return x * y;
}

// Arrow function met 1 parameter:
const myFunction = x => {
    return x * x;
}
```

Een functie aanroepen (invoking) doe je zo:

```javascript
myFunction(4, 6);
```
Functions zonder `return` statement geven standaard undefined terug. De parameters dienen in eerste instantie als placeholders. Hun waarde wordt pas bepaald wanneer de functie wordt aangeroepen en er argumenten worden meegegeven. Als een functie twee parameters heeft maar er maar één wordt meegegeven tijdens het aanroepen dan staat de tweede altijd op `undefined`. Echter, wanneer je een `=` gebruikt binnen de parameter krijgt die parameter een 'default' value als deze niet wordt ingevoerd:

```javascript
function helloWorld(message, timesToDisplayMessage = 4) {
    for (var i = 0; i < timesToDisplayMessage; i++) {
        console.log(message);
    }
}

helloWorld("Hello world!");
/* 
> "Hello world"
> "Hello world"
> "Hello world"
> "Hello world"
*/
```

## Binding and scopes
Bindings die gecreëerd zijn door `let` of `const` hebben altijd een lokale scope aan de hand van waar ze zijn gecreëerd. Om dit duidelijker te krijgen kan je de onderstaande code bestuderen:

```javascript
// Global scope
let message = "Hey";

// Local scope (binnen de functie)
function localScope() {
    let otherMessage = "Hoi";
    return otherMessage;
}

console.log(message);
// > "Hey"

console.log(otherMessage);
// > otherMessage is not defined.
```

Elke scope heeft wel toegang tot variabelen die buiten die scope gecreëerd zijn. Echter, een buitenliggende scope heeft geen toegang tot variabelen binnen een lokalere scope:

```javascript
const x = 10;
const z = 10;

function measureCube() {
    let y = 10;
    // x en z zijn hier wel zichtbaar
    console.log(x * y * z);
}

// y is hier niet zichtbaar
console.log(x * z);
// > 100

measureSurface();
// > 1000
```

Je kan ook functies in andere functies hebben, ook dan is de 'locality' van toepassing. De binnenste functie heeft toegang tot de variabelen van de buitenste functie. Echter, de buitenste functie heeft geen toegang tot de variabelen van de binnenste functie:

```javascript
function outerFunction() {
    let outerVariable = 10;
    function innerFunction() {
        // outerVariable kan hier wel gebruikt worden.
        let innerVariable = outerVariable * 2;
        // > 20;
    }
    // innerVariable kan hier niet gebruikt worden (not defined binnen deze scope)
}
```

Een function expression kan, in tegenstelling tot een function declaration, net als een 'normale' variabele opnieuw worden gedefinieerd indien het niet binded is aan een constante variabele:

```javascript
let myFunction = function(x) {
    return (x + x) * x;
}

if (false) {
    myFunction = function() { /* Doe niets */ }
}
```

Het verschil tussen een function expression / arrow function en een function declaration is dat een function declaration ook toegankelijk is wanneer deze gebruikt wordt voordat hij is gedefinieerd. Function declarations worden conceptueel gezien namelijk naar de top van hun eigen scope getrokken en zijn toegankelijk voor de rest van de scope:

```javascript
// Dit kan:
console.log(myFunction(5));
// > 10

function myFunction(x) {
    return x + x;
}

// Dit kan niet:
console.log(mySecondFunction(10));

const mySecondFunction = function(x) {
    return x * x;
}
```

## Closure and Recursion
Closure houdt in dat je een specifieke local binding (binnen een functie) toegankelijk maakt voor de buitenliggende scope:

```javascript
function times(factor) {
    return number => number * factor;
}

// Hier wordt de 'factor' parameter ingevuld van de times functie
let timesFive = times(5);

// Hier de 'number' parameter van de return value van de times functie
console.log(timesFive(2));
// > 10
```
Recursion houdt in dat een functie zichzelf kan callen. Dit moet je echter niet te vaak doen, dan overflow je de call stack en crasht je browser:

```javascript
function findSolution(target) {
    function find(current, history) {
        if (current === target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return  find(current + 5, `(${history} + 5)`) ||
                    find(current * 3, `${history} * 3`);
        }
    }
    return find(1, "1");
}

console.log(findSolution(24));
// > (((1 * 3) + 5) * 3)
```

## Growing functions
Om te voorkomen dat je je code gaat kopiëren is het handig om, wanneer je denkt dat te moeten doen, je functies te abstraheren. Dat wil zeggen dat je de functie opnieuw gaat bekijken en hem wat generieker maakt om vervolgens de juiste waarden in parameters in te vullen, in ons geval wil een autohandelaar weten welke auto's hij in zijn bezit heeft, hij laat ons weten dat hij Volvo's en Volkswagens heeft.

We willen hem een overzicht geven van de hoeveelheid auto's hij van elk merk heeft met daarvoor altijd een drie cijfers voor het aantal (bijv. `001 Volkwagens`):

```javascript
function printCarInventory(volvos, volkswagens) {
    let volvoString = String(volvos);
    while (volvoString.length < 3) {
        volvoString = "0" + volvoString;
    }
    console.log(`${volvoString} Volvo's`);

    let volkswagenString = String(volkswagens);
    while (volkswagenString.length < 3) {
        volkswagenString = "0" + volkswagenString;
    }
    console.log(`${volkswagenString} Volvo's`);
}

printCarInventory(50, 20);
// Hoewel dit zou werken zijn we in de bovenstaande functie code aan het kopiëren, ook wanneer hij vraagt om de Toyota's toe te voegen... Dat willen we voorkomen! Beter is dus om de bovenstaande functie generieker te bouwen:

function printZeroPaddedWithLabel(number, label) {
    let numberString = String(number);
    while (numberString.length < 3) {
        numberString = "0" + numberString;
    }
    console.log(`${numberString} ${label}`);
}

function printCarInventory(volvos, volkswagens, toyotas) {
    printZeroPaddedWithLabel(volvos, "Volvo's");
    printZeroPaddedWithLabel(volkswagens, "Volkswagens");
    printZeroPaddedWithLabel(toyotas, "Toyota's");
}

printCarInventory(50, 20, 15);

// Ook dit werkt! Echter de naam 'printZeroPaddedWithLabel' is vrij awkward... Het doet drie dingen in één functie: het printen in de console, nullen toevoegen en een label eraan toevoegen. We kunnen daarom ook één ding uit de functie pakken en die omzetten in een nieuwe functie (het toevoegen van de nullen):

function zeroPad(number, width) {
    let string = String(number);
    while (string.length < width) {
        string = "0" + string;
    }
    return string;
}

function printCarInventory(volvos, volkswagens, toyotas) {
    console.log(`${zeroPad(volvos, 3)} Volvo's`);
    console.log(`${zeroPad(volkswagens, 3)} Volkswagens`);
    console.log(`${zeroPad(toyotas, 3)} Toyota's`);
}

// Nu voegt de zeroPad functie de nullen toe en de printCarInventory voegt een label toe en print de resultaten op de console.
```

# Chapter 4: Data structures: Objects and Arrays
Een `array` gebruik je om een lijst van verschillende data in te stoppen (bijv. verschillende strings of numbers). Je definiëert een array als volgt:

```javascript

```