const planetas = require("./planetas.js");
const cowsay = require("cowsay");

planetas.forEach(planeta => {
    const msg = `
        +-------------------------------------------------\n
        | ¡Planeta ${planeta.nombre} descubierto! \n
        | Descripción: ${planeta.descripcion} \n
        | Descubierto en: ${planeta.descubiertoEn} \n
        | Coordenadas: ${planeta.coordenadas.x} X ${planeta.coordenadas.y} Y ${planeta.coordenadas.z} Z \n
        | Tipo: ${planeta.tipo} \n
        +-------------------------------------------------\n
        `;

    console.log(cowsay.say({
        text : msg,
        e : "o o",
        T : "v "
    }));

// or cowsay.think()

    
    
});