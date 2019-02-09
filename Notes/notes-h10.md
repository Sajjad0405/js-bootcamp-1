# Modules
Je programma opdelen in modules voorkomt dat het één grote zooi wordt en dat alles van elkaar afhankelijk is. Het ideale programma is uiteindelijk één dat simpel te begrijpen en uit te leggen is en één waar je eenvoudig functionaliteit aan toe kan voegen of van kan verwijderen, zonder dat alles in de soep loopt.

## Dependencies
Relaties tussen modules noem je dependencies (wanneer een module iets van een andere module nodig heeft hangen ze van elkaar af (*to depend*)). Om al direct over modules en dependencies na te denken kan lastig zijn. Wat je ook kan doen is zodra je iets hebt dat solid is, dan een stap terug nemen en te kijken hoe je dit het beste kan organiseren.

## Packages (NPM)
Zodra je code gaat kopieëren moet je, indien er een fout is, alle gekopiëerde instances updaten. Dit kost erg veel tijd en energie. Dit is wat *packages* oplossen. Een package is een stuk code dat gedistribueerd kan worden (gekopieerd en geïnstalleerd). Een package bestaat uit één of meerdere modules en heeft informatie over welke andere packages ze afhankelijk zijn.

Packages die je kan gebruiken kan je vinden via [npm](https://npmjs.org). Je kan packages van npm downloaden en installeren in je project via de `npm CLI` die je kan downloaden op je laptop.

## CommonJS modules
Tot 2015 had JavaScript niet een zelf ingebouwd module-systeem. Echter, modules waren wel hoogstnodig om code te structureren. Daarom was CommonJS in het leven geroepen. CommonJS draait om de `require` functie, die gezien wordt als de 'loader'. Omdat alles binnen `require` in principe binnen een functie staat (de `require` functie) krijgt hetgeen binnen de module zijn eigen lokale scope. Zo importeer en exporteer je modules binnen CommonJS:

```js
// Modules importeren
const ordinal = require("ordinal");
// Importeer volledige package
const { days, months } = require("date-names")
// Importeer module (of functie/variabele) days en months uit de package 'date-names'.

// Exporteer de volgende functie als een module:
exports.formatDate = function(date, format) {
    return format.replace(/YYYY|M(MMM)?|Do?|dddd/g, tag => {
        if (tag == "YYYY") return date.getFullYear();
        if (tag == "M") return date.getMonth();
        if (tag == "MMMM") return months[date.getMonth()];
        if (tag == "D") return date.getDate();
        if (tag == "Do") return ordinal(date.getDate());
        if (tag == "dddd") return days[date.getDay()];
    });
}
```

De bovenstaande functie kunnen we vervolgens in een ander bestand weer importeren:

```js
// Importeer module
const {formatDate} = require("./format-date" /* Pad naar de module */);

console.log(formatDate(new Date(2017, 9, 13), 
                        "dddd the Do"));
// > Friday the 13th
```

## ES2015 modules
Hoewel de ES modules ongeveer hetzelfde werken als de CommonJS modules, die overigens goed samenwerken met NPM, zijn er toch enkele verschillen. Zo importeer je een module met het `import` keyword en exporteer je functies, variabelen of hele bestanden met het `export` keyword. Onderstaand een voorbeeld:

```js
// Import single named export
import ordinal from "ordinal";

// Import multiple named exports
import { days, months } from "date-names";

// Een import een andere naam geven in het huidige bestand
import ordinal as ordinaleMucho from "ordinal";

// Exporteren van een functie
export function formatDate(date,format) {
    // code
}

// Het importeren van die functie
import formatDate from "./format-date.js" // De .js hoeft er niet achter
```

### Verschil tussen `export` en `export default`
`export` gebruik je dus om stukken code te exporteren. `export default` gebruik je voor precies hetzelfde. Echter, een module kan maar één `export default` hebben. De expressie daarvan wordt namelijk geëxporteerd als default export waarde.

Stel dat het onderstaande bestand `myFirstModule.js` is:

```js
export function myLittleFunction(message) {
    console.log(message);
}

const kris = "Kris";
export kris = "Niet Kris";
// Deze kunnen we specifiek aanroepen

export default ["Jacky", "DJ", "Marc"];
// Deze wordt default geëxporteerd
```

Om elementen uit deze module te importeren in `myOtherModule.js` zouden we het volgende moeten doen:

```js
// alle named exports importeren
import * from "./myFirstModule";

// myLittleFunction
import myLittleFunction from "./myFirstModule";

// const Kris
import kris from "./myFirstModule";

// default export array
import dogNames from "./myFirstModule";

console.log(kris);
// > Niet Kris

console.log(dogNames);
// > ["Jacky", "DJ", "Marc"]
```