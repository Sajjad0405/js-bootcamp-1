# Chapter 5: Higher-order functions
Een groot software programma (veel regels code) is vaak een duur programma. Niet alleen vanwege de som geld die het kost maar ook vanwege de complexiteit. Hoe meer software je bouwt, hoe complexer het vaak wordt, hoe complexer het wordt, hoe groter de kans op bugs en hoe lastiger deze te vinden zijn.

## Abstraction
Abstraction in programmeren houdt in dat er details zijn weggelaten binnen de code, wat het mogelijk maakt om over het probleem te praten op een 'hoger level' (meer abstract). Het is voor jou als developer een goede skill om te kunnen inzien wanneer je op een 'te laag' level van abstractie aan het bouwen bent. A.k.a. je je script tot in de puntjes achter de komma laat weten wat hij per stap moet doen.

## Abstracting repetition
Abstracties zijn goed in te bouwen met functies. Het komt veel voor dat een programma één taak meerdere malen moet uitvoeren, daar hebben we een loop voor (de abstractie). Zo kan je bijvoorbeeld een functie bouwen die iets vijf keer `console.log`t in plaats van letterlijk vijf keer `console.log` neer te zetten:

```javascript
function repeatLog(message) {
    for (let i = 0; i < 5; i++) {
        console.log(message);
    }
}
```

Wat als we iets willen doen een random aantal keer? Ook daar valt een functie voor te schrijven:

```javascript
function repeatSomething(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

repeatSomething(3, console.log);
// > 0, 1, 2
```

We hoeven niet een vooraf bepaalde functie als argument in te vullen zoals `console.log`, vaak is het zelfs eenvoudiger om een functie 'on the spot' te creëren:

```javascript
let labels = [];

repeatSomething(5, i => {
    labels.push(`Unit ${i + 1}`);
});

console.log(labels);
// > ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"]
```

Omdat het best een kleine functie is zou je zelfs nog de `{}` weg kunnen halen en de functie op één lijn kunnen schrijven:

```javascript
// let labels

repeatSomething(5, i => labels.push(`Unit ${i + 1}`));

// console.log
```

## Higher-order functions
Functions die draaien op andere functies door ze als hun argument te nemen (zoals hierboven) of te returnen noem je 'Higher-order functions'. HOF's maken het mogelijk om *acties* abstracter te maken, niet alleen waardes. We kunnen bijvoorbeeld functies hebben die andere functies maken:

```javascript
function greaterThan(n) {
    return m => m > n;
}

let greaterThan10 = greaterThan(10);

console.log(greaterThan10(11));
// > true
```

## Script data set
Waar higher order functions echt goed in zijn is het processen van data. Stel je bijvoorbeeld voor dat je het volgende object hebt van een site als Autotrack waarbij je een dealership onder de loep neemt:

```javascript
let autoHandelDronten = {
    name: "Autohandel Dronten",
    est: 1999,
    autos: [
        {name: "Volvo", hp: 144},
        {name: "Volkswagen", hp: 116},
        {name: "Volkswagen", hp: 240},
        {name: "Volvo", hp: 94},
        {name: "Toyota", hp: 110}
    ]
}
```

## Filtering arrays with `.filter()`
Stel we willen bij Autohandel Dronten alleen de auto's met minder dan 120pk eruit filteren, dan gebruiken we de `.filter()` Higher-order function. Dit is hoe de `.filter()` method onder de motorkap werkt:

```javascript
function filter(arr, test) {
    let passed = [];
    // Elk element dat voldoet aan de test wordt in de nieuwe 'passed' array gestopt.
    for (let element of arr) {
        if (test(element)) {
            passed.push(element);
        }
    }
    return passed;
}

// Dit is hoe je .filter() zou kunnen toepassen:
let {autos} = autoHandelDronten; // Pak de key auto's uit het object
console.log(autos.filter(auto => auto.hp < 120));
// > [{name: "Volkswagen", hp: 116}, {name: "Volvo", hp: 94}, {name: "Toyota", hp: 110}]
```

## Transforming with `.map()`
Stel dat we van de gefilterde auto's alleen het merk terug willen krijgen. Dit kunnen we doen door de `.map()` Higher-order function te gebruiken. `.map()` transformeert een array door een functie toe te passen op elk item binnen de array en bouwt een nieuwe array met de return values. 

De nieuwe array is even groot als de oude, maar de items erin zijn 'gemapt' aan hun nieuwe vorm. Dit is hoe `.map()` onder de motorkap werkt:

```javascript
function map(arr, transform) {
    let mapped = [];
    // Gooi alle elementen uit de array door de functie
    for (let element of arr) {
        // Zet de nieuwe waarden in de 'mapped' array
        mapped.push(transform(element));
    }
    return mapped;
}

// Dit is hoe je .map() zou kunnen toepassen:
let {autos} = autoHandelDronten;
let slappeAutos = autos.filter(auto => auto.hp < 120);

console.log(map(slappeAutos, slappeAuto => slappeAuto.name));
// > ["Volkswagen", "Volvo", "Toyota"]
```

## Summarizing with `.reduce()`
Met `.reduce()` kan je een array om laten zetten tot één waarde. Een som van verschillende nummers is hier een voorbeeld van. Dit is hoe reduce onder de motorkap werkt:

```javascript
function reduce(arr, combine, start) {
    let current = start;
    for (let element of arr) {
        current = combine(current, element);
    }
    return current;
}
```

Als je array minstens één element bevat kan je de parameter voor start weg laten, `.reduce()` begint dan met het eerste element in de array als z'n start waarde en begint met 'reducing' bij het tweede element. Dit is hoe je reduce zou kunnen toepassen om de som van een aantal getallen te krijgen:

```javascript
let numArr = [1, 2, 3, 4];
console.log(numArr.reduce((a, b) => a + b));
// > 10
```

## Composability
De kracht van Higher-order functions komen goed tot uiting wanneer je ze met elkaar gaat combineren. Stel je wilt in ons voorbeeld het gemiddelde aantal pk's van de slappe auto's weten en het gemiddelde aantal pk's van de sterkere auto's:

```javascript
function average(arr) {
    return arr.reduce((a, b) => a + b) / array.length; // Omdat reduce 1 waarde terug geeft kan je die bijvoorbeeld delen, vermenigvuldigen etc.
}

// Slappe auto's
console.log(Math.round(average(
    autos.filter(auto.hp <= 120).map(auto => auto.hp);
));
// > getal

// Sterke auto's
console.log(Math.round(average(
    autos.filter(auto.hp > 120).map(auto => auto.hp);
));
// > getal
```

## Strings and character codes
??

## Recognizing text
??