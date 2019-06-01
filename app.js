//console.log(data)

var tablehead = document.getElementById("tablehead")
var tableheadrow = tablehead.insertRow(0)
var tableheadname = tableheadrow.insertCell(0)
var tableheadgrams = tableheadrow.insertCell(1)
var tableheadtype = tableheadrow.insertCell(2)
var tableheadtwoE = tableheadrow.insertCell(3)
var tableheadfourE = tableheadrow.insertCell(4)

tableheadname.innerHTML = "Name"
tableheadgrams.innerHTML = "1E"
tableheadtype.innerHTML = "Typ"
tableheadtwoE.innerHTML = "2E"
tableheadfourE.innerHTML = "4E"

var tablebody = document.getElementById("tablebody")

var txtValue
var tr = tablebody.getElementsByTagName("tr");

data.forEach(element => {
    var row = tablebody.insertRow(0)
    var name = row.insertCell(0)
    var grams = row.insertCell(1)
    var type = row.insertCell(2)
    var twoE = row.insertCell(3)
    var fourE = row.insertCell(4)

    name.innerHTML = element.name
    grams.innerHTML = element.grams + 'g'
    type.innerHTML = element.type
    twoE.innerHTML = element.grams*2 + 'g'
    fourE.innerHTML = element.grams*4 + 'g'
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