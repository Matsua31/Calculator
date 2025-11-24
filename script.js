// Seleccionar la pantalla
const pantalla = document.querySelector('.pantalla');

// Seleccionar todos los botones
const botones = document.querySelectorAll('button');

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const valor = boton.textContent;

        // Limpiar pantalla
        if (valor === 'C') {
            pantalla.textContent = '0';
            return;
        }

        // Borrar último carácter
        if (valor === '←') {
            pantalla.textContent = pantalla.textContent.slice(0, -1) || '0';
            return;
        }

        // Calcular resultado
        if (valor === '=') {
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = 'Error';
            }
            return;
        }

        // Agregar número u operador
        if (pantalla.textContent === '0') {
            pantalla.textContent = valor;
        } else {
            pantalla.textContent += valor;
        }
    });
});

