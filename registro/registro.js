function calcularPulsacion() {
    var identificacion = document.getElementById("identificacion").value;
    var nombre = document.getElementById("nombre").value;
    var sexo = document.getElementById("operacionSeleccionada").value.toString();
    var edad = document.getElementById("edad").value;
    var pulsacion;
    if (sexo === "FEMENINO") {
        pulsacion = (220 - edad) / 10;
    } else {
        pulsacion = (210 - edad) / 10;
    }
    document.getElementById("pulsacion").value = pulsacion;
    guardar(identificacion, nombre, sexo, edad, pulsacion);
}

function guardar(identificacion, nombre, sexo, edad, pulsacion) {

    var registroNew = { "identificacion": identificacion, "nombre": nombre, "sexo": sexo, "edad": edad, "pulsacion": pulsacion }
    var registros = [];

    if (JSON.parse(localStorage.getItem('dato')) != null) {
        registros = JSON.parse(localStorage.getItem('dato'));
    }

    registros.push(registroNew);

}