// Función para cargar módulos HTML en un contenedor
async function cargarModulo(url, contenedorId) {
  const response = await fetch(url);
  const html = await response.text();
  document.getElementById(contenedorId).innerHTML = html;
}

// Llamadas para cargar los módulos
cargarModulo('DescubreTupasion.html', 'DescubreTupasion');// Cargar el módulo hola.html en el contenedor con id 'DescubreTupasion'
cargarModulo('secretosYoga.html', 'secretosYoga');
