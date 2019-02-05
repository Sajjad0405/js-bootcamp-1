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