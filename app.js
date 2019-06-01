//console.log(data)

var table = document.getElementById("table")

var txtValue
var tr = table.getElementsByTagName("tr");

data.forEach(element => {
    var row = table.insertRow(0)
    var name = row.insertCell(0)
    var grams = row.insertCell(1)
    var type = row.insertCell(2)

    name.innerHTML = element.name
    grams.innerHTML = element.grams + 'g'
    type.innerHTML = element.type
});


function search() {
    var searchFieldValue = document.getElementById("searchInput").value.toUpperCase()
    for (let index = 0; index < data.length; index++) {
        td = tr[index].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(searchFieldValue) > -1) {
                tr[index].style.display = "";
            } else {
                tr[index].style.display = "none";
            }
        }
    }
}