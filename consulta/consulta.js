function consultar() {
    var registros = []
    localStorage.getItem('dato', JSON.stringify(registros));
    var pval = "";
    registros.forEach(element => {
        pval += "<tr>"
        pval += "<td>" + element.identificacion + "</td>"
        pval += "<td>" + element.nombre + "</td>"
        pval += "<td>" + element.sexo + "</td>"
        pval += "<td>" + element.edad + "</td>"
        pval += "<td>" + element.pulsacion + "</td>"
        pval += "</tr>"
    });


    document.getElementById("tbCuerpo").innerHTML = pval;
}