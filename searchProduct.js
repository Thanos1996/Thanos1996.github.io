
/**
* 
* Hier wird ein Listener jeweils auf das Input-Feld und Searchbutton registriert. Wenn der Benutzer das Input-Feld ausgefüllt hat und sobald er
* entweder auf Enter gedruckt oder auf das Searchbutton geklickt hat, wird die URL mit dem searchUrl vervollständigt, was automatisch unter Verwendung der Router Klasse
* die Sektion SuchErgebnisDisplay einblendet und mithilfe der executeSearch(matches) Funktion das Search Ergebnis liefert.
* 
*/

document.querySelector("button").addEventListener("click", () => searchProdukts());
document.querySelector("input").addEventListener("keypress", () => {
    if (event.key === 'Enter') {
        searchProdukts();
      }
});


function searchProdukts(){
    
    let searchInput = document.getElementById("input").value;
    let searchUrl = `#/search=${searchInput}`;

    // Update the URL and trigger the corresponding route
    window.location.href = searchUrl;
    
}
