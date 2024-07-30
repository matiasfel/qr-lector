let hasRedirected = false; // Variable para evitar redirecciones múltiples

function onScanSuccess(decodedText, decodedResult) {
    if (hasRedirected) {
        // Si ya se ha redirigido, no hacer nada
        return;
    }

    hasRedirected = true; // Establecer el flag para evitar redirecciones múltiples

    // Redirige a la URL escaneada
    window.location.href = decodedText;
    // Muestra la URL del codigo qr
    document.getElementById('url-inf').innerHTML = `<a href="${decodedText}" target="_blank">${decodedText}</a>`;


    // Para depuración, puedes seguir registrando el resultado en la consola
    console.log(`Code matched = ${decodedText}`, decodedResult);
}

function onScanFailure(error) {
    // Manejar el fallo de escaneo
    console.warn(`Code scan error = ${error}`);
}

// Configuración del lector QR
let html5QrcodeScanner = new Html5QrcodeScanner(
    "reader",
    { fps: 10, qrbox: {width: 250, height: 250} },
    /* verbose= */ false
);
html5QrcodeScanner.render(onScanSuccess, onScanFailure);
