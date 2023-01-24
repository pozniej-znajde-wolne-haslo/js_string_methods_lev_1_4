const A = 'Susi is going to codingschool';

const slicesPastedIntoHtml = document.getElementById('slicesInHtml');

const a = A.slice(0, 4);
const b = A.slice(5, 7);
const c = `${b} ${A.slice(8, 16)} ${A.slice(23, 29)}`;
const d = A.slice(23, 29);
const e = `${a} ${b} ${d}`;

console.log(`${a} 
${b} 
${c} 
${d} 
${e}`);

slicesPastedIntoHtml.innerHTML = `${a} <br> ${b} <br> ${c} <br> ${d} <br> ${e}`;


/* Verwende die Methode "slice" um in deinem HTML folgendes angezeigt zu bekommen:
Susi
is
is going to school
school
Susi is school

Speichere jedes Ergebnis in einer Variablen und verwende document.write(myVar+"<br>"), um das Ergebnis im Dokument auszugeben.
myVar ist hier nur ein Beispiel und kann durch den Namen deiner Variablen ersetzt werden.
 */