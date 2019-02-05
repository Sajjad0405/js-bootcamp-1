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