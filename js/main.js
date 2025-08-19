// Función para cargar módulos HTML en un contenedor
async function cargarModulo(url, contenedorId) {
  const response = await fetch(url);
  const html = await response.text();
  document.getElementById(contenedorId).innerHTML = html;
}

// Llamadas para cargar los módulos
// Cargar el módulo hola.html en el contenedor con id 'DescubreTupasion'
cargarModulo('/vistas/DescubreTupasion.html', 'DescubreTupasion');
cargarModulo('/vistas/secretosYoga.html', 'secretosYoga');
cargarModulo('/vistas/nutreTuAlma.html', 'nutreTualma');
