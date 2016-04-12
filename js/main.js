(function(){

  //Variables
  var lista = document.getElementById('lista'),
      tareaInput = document.getElementById('tareaInput'),
      btnNuevaTarea = document.getElementById('btn-agregar');

  //Funciones
  var agregarTarea = function(){
    var tarea = tareaInput.value,
        nuevaTarea = document.createElement('li'),
        enlace = document.createElement('a'),
        contenido = document.createTextNode(tarea);

    if (tarea === '') {
      tareaInput.setAttribute('placeholder', 'Agrega una tarea válida');
      tareaInput.className = 'error';
      return false;
    }
    //Se agrega el contenido al enlace.
    enlace.appendChild(contenido);
    //Se agrega el contenido al enlace.
    enlace.setAttribute('href', '#');
    //Se agrega el contenido al enlace.
    nuevaTarea.appendChild(enlace);
    //Se agrega nueva tarea a la lista..
    lista.appendChild(nuevaTarea);

    tareaInput.value = '';

    for (var i = 0; i <= lista.children.length -1; i++) {
      lista.children[i].addEventListener('click', function() {
        this.parentNode.removeChild(this);
      });
    }
  };

  var comprobarInput = function(){
    tareaInput.className = "";
    tareaInput.setAttribute('placeholder', 'Agrega tu tarea');
  };

  var eliminarTarea = function (){
    this.parentNode.removeChild(child);
  };

  //Eventos

  //agregar tarea
  btnNuevaTarea.addEventListener('click', agregarTarea);

  //comprobar input
  tareaInput.addEventListener('click', comprobarInput);

  //Borrando elementos de la lista
  for (var i = 0; i <= lista.children.length -1; i++) {
    lista.children[i].addEventListener('click', eliminarTarea);
  }

}());
