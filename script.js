var selectedRow = null;
function onFormSubmit(e) {
    event.preventDefault();
    var formData = readFormData();
    if (selectedRow===null) {
        insertNewRecord(formData);
    }else{
        updateRecord(formData);
    }
    resetForm();
}

function readFormData() {
    var formData = {};
    formData["nom"]=document.getElementById("nom").value;
    formData["prenom"]=document.getElementById("prenom").value;
    formData["pays"]=document.getElementById("pays").value;
    formData["genre"]=document.getElementById("genre").value;
    formData["email"]=document.getElementById("email").value;
    formData["telephone"]=document.getElementById("telephone").value;
    formData["date"]=document.getElementById("date").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1=newRow.insertCell(0);
    cell1.innerHTML = data.nom;
    var cell2=newRow.insertCell(1);
    cell2.innerHTML = data.prenom;
    var cell3=newRow.insertCell(2);
    cell3.innerHTML = data.pays;
    var cell4=newRow.insertCell(3);
    cell4.innerHTML = data.genre;
    var cell5=newRow.insertCell(4);
    cell5.innerHTML = data.email;
    var cell6=newRow.insertCell(5);
    cell6.innerHTML = data.telephone;
    var cell7=newRow.insertCell(6);
    cell7.innerHTML = data.date;
    var cell8 = newRow.insertCell(7);
    cell8.innerHTML = `<button onClick='onEdit(this)'>Editer</button> <button onClick='onDelete(this)' >Supprimer</button>`;
}
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById('nom').value = selectedRow.cells[0].innerHTML;
    document.getElementById('prenom').value = selectedRow.cells[1].innerHTML;
    document.getElementById('pays').value = selectedRow.cells[2].innerHTML;
    document.getElementById('genre').value = selectedRow.cells[3].innerHTML;
    document.getElementById('email').value = selectedRow.cells[4].innerHTML;
    document.getElementById('telephone').value = selectedRow.cells[5].innerHTML;
    document.getElementById('date').value = selectedRow.cells[6].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.nom;
    selectedRow.cells[1].innerHTML = formData.prenom;
    selectedRow.cells[2].innerHTML = formData.pays;
    selectedRow.cells[3].innerHTML = formData.genre;
    selectedRow.cells[4].innerHTML = formData.email;
    selectedRow.cells[5].innerHTML = formData.telephone;
    selectedRow.cells[6].innerHTML = formData.date;
}
function onDelete(td) {
    if (confirm('Voulez-vous vraiment supprimer ?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
    }
    resetForm();
}

function resetForm() {
    document.getElementById('nom').value='';
    document.getElementById('pernom').value='';
    document.getElementById('pays').value='';
    document.getElementById('genre').value='';
    document.getElementById('email').value='';
    document.getElementById('telephone').value='';
    document.getElementById('date').value='';
}