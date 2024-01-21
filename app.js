// variable globaly declared
let paragraph = document.getElementById("para");
let button = document.getElementById("btn");
let input = document.getElementById("inp");

// make a function
function findWord() {
    let searchText = input.value.trim();
    if (searchText === "") {
        alert(`Write a Word !!`)
        return;
    } 
    var replacepara = paragraph.innerHTML.replaceAll(searchText,`<span style="background-color: black; color: white;">${searchText}</span>`)

   if (replacepara === paragraph.innerHTML) {
        alert("No matches found");
    }

    paragraph.innerHTML = replacepara;
}



