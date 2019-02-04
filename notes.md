#Introduction
Een goede programmeertaal helpt de programmeur door hen 'toe te staan' vrijwel te praten over de acties die de computer moet doen op een 'hoger' niveau. Het zorgt ervoor dat je niet hele specifieke details hoeft aan te geven, je building blocks kan gebruiken (zoals bijv. een `while loop` en functies als `console.log`), zelf je building blocks kan maken (eigen functies en variabelen) en dat die (zelfgemaakte blokken) goed composable zijn.

JavaScript heeft niets te maken met de andere programmeertaal Java!

JavaScript is erg vrij in wat het toestaat. Aan de ene kant is dat handig voor beginners, aan de andere kant kan dat het vinden van fouten lastig maken omdat het de fouten niet direct aangeeft maar er nog probeert soep van te maken.

JavaScript wordt niet alleen in webbrowsers gebruikt. Ook databases zoals MongoDB en CouchDB gebruiken JavaScript als hun scripting en query-taal. O.a. NodeJS maakt het mogelijk voor JavaScript om buiten de browser te draaien.

#Chapter 1: Values, types and operators
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