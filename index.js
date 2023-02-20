// resetto la pagina



// aggiungo alert

alert("benvenuto");

// aggiungo i prompt e li visualizzo su console
        // nome
const nome = prompt("come ti chiami?");

       // cognome
const cognome = prompt("e di cognome?");

       // colore preferito
const colorePreferito = prompt("il tuo colore preferito?");

       // visualizzo su console
const password = nome + cognome + colorePreferito + '89';
console.log(password)


// sostituisco h1 con i prompt

document.getElementById("pass").innerHTML = password;
console.log(document.getElementById("pass").innerHTML = password)
