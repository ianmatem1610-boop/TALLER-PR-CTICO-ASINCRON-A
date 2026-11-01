function retirarDinero(monto) {
    const saldoDisponible = 500;
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (monto <= saldoDisponible) {
                const saldoRestante = saldoDisponible - monto;
                resolve(`Retiro exitoso de $${monto}. Saldo restante: $${saldoRestante}`);
            } else {
                reject(`Fondos insuficientes. Límite de retiro: $${saldoDisponible}`);
            }
        }, 1500);
    });
}

console.log("--- INICIANDO PRUEBAS DE CAJERO ATM ---");

// Caso Exitoso  da $200
retirarDinero(200)
    .then((mensaje) => {
        console.log("✅ [ATM Exitoso]:", mensaje);
    })
    .catch((error) => {
        console.log("❌ [ATM Exitoso Error]:", error);
    });

// Caso Fallido sa $600
retirarDinero(600)
    .then((mensaje) => {
        console.log("✅ [ATM Fallido]:", mensaje);
    })
    .catch((error) => {
        console.log("❌ [ATM Fallido Error]:", error);
    });


function verificarEdad(edad) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (edad >= 18) {
                resolve("Acceso concedido. Bienvenido a la plataforma");
            } else {
                reject("Acceso denegado. Registro permitido solo para mayores de edad");
            }
        }, 1000);
    });
}

verificarEdad(20)
    .then(res => console.log("✅ [Edad 20]:", res))
    .catch(err => console.log("❌ [Edad 20]:", err));

verificarEdad(15)
    .then(res => console.log("✅ [Edad 15]:", res))
    .catch(err => console.log("❌ [Edad 15]:", err));



function consultarClima(ciudad) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // dimula datos de ciudades
            const climas = {
                "Quito": { temperatura: "18°C", condicion: "Parcialmente nublado" },
                "Guayaquil": { temperatura: "31°C", condicion: "Soleado" },
                "Cuenca": { temperatura: "16°C", condicion: "Lluvioso" }
            };

            if (climas[ciudad]) {
                resolve(climas[ciudad]);
            } else {
                // da un error si la ciudad no existe
                reject(`No se pudo obtener el clima para la ciudad: ${ciudad}`);
            }
        }, 1500);
    });
}

async function mostrarClima(ciudad) {
    try {
        console.log(`\n⏳ Consultando el clima para ${ciudad}...`);
        const resultado = await consultarClima(ciudad);
        console.log(`🌦️ Clima en ${ciudad}:`);
        console.log(`   - Temperatura: ${resultado.temperatura}`);
        console.log(`   - Condición: ${resultado.condicion}`);
    } catch (error) {
        console.log(`❌ Error al consultar el clima: ${error}`);
    }
}

mostrarClima("Quito");