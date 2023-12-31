const ps=require('prompt-sync');
const prompt=ps();

let decision=0;
function generarInterfaz(){
    console.log('Hola Olivia \n'
    +  ' Que deberias hacer? \n'
    
    +  ' 1. Ver mis Tareas \n'
    +  ' 2. Buscar una Tarea \n'
    +  ' 3. Agregar una Tarea \n'
    +  ' 4. Salir \n'
    );
}

let tareas = [];


//Funcion para agregar una Tarea
function agregarTarea() {

  const creacion = new Date();

  const ultimaEdicion = creacion;

    let titulo = prompt('Título: ');
    while(titulo==''){
        console.log('El titulo no puede estar vacio');
        titulo = prompt('Título: ');
    }
    let descripcion = prompt('Descripción: ');
    let estado = prompt('Estado(Pendiente/En curso/ Terminada/ Cancelada): ');
    if(estado!='Pendiente' && estado!='En curso' && estado!='Terminada' && estado!='Cancelada'){
      estado='Pendiente';
    }

    let vencimiento = prompt('Fecha de vencimiento (YYYY-MM-DD): ');
    let dificultad = prompt('Dificultad: ');
    if(dificultad!='Facil' && dificultad!='Medio' && dificultad!='Dificil'){
      dificultad='Facil';
    }
    

  let tarea = {
    titulo,
    descripcion,
    estado,
    creacion,
    ultimaEdicion,
    vencimiento,
    dificultad,
  };

  tareas.push(tarea);
  console.log('Tarea agregada:', tarea);
}

//Funcion para ver los detalles de cada Tarea

function verDetallesTarea(tipotarea){
  let indiceTarea = parseInt(prompt('Selecciona el número de la tarea para ver detalles: '));
  if (indiceTarea < 1 || indiceTarea > tipotarea.length) {
    console.log('Opción no válida.');
    return;
  } else {
    indiceTarea=indiceTarea-1;
    let tareaSeleccionada = tipotarea[indiceTarea];
    console.log('\n Detalles de la Tarea:');
    console.log(`  Título: ${tareaSeleccionada.titulo}`);
    console.log(`  Descripción: ${tareaSeleccionada.descripcion}`);
    console.log(`  Estado: ${tareaSeleccionada.estado}`);
    console.log(`  Creación: ${tareaSeleccionada.creacion}`);
    console.log(`  Última Edición: ${tareaSeleccionada.ultimaEdicion}`);
    console.log(`  Vencimiento: ${tareaSeleccionada.vencimiento}`);
    console.log(`  Dificultad: ${tareaSeleccionada.dificultad}`);

    console.log('\n');
    console.log('¿Desea Editar un dato? S / N \n');

    let decision= prompt('');

    if(decision=='S'){
      console.log('¿Que desea editar? (titulo,descripcion,estado,edicion,vencimiento) \n');
      decision= prompt('');

      switch(decision){
        case 'titulo':
          let nuevoTitulo = prompt('Título: ');
          while(nuevoTitulo==''){
              console.log('El titulo no puede estar vacio');
              nuevoTitulo = prompt('Título: ');
          }
          tareaSeleccionada.titulo=nuevoTitulo;
          break;
        case 'descripcion':
          let nuevaDescripcion = prompt('Descripción: ');
          tareaSeleccionada.descripcion=nuevaDescripcion;
          break;
        case 'estado':
          let nuevoEstado = prompt('Estado(Pendiente/En curso/ Terminada/ Cancelada): ');
          if(nuevoEstado!='Pendiente' && nuevoEstado!='En curso' && nuevoEstado!='Terminada' && nuevoEstado!='Cancelada'){
            nuevoEstado='Pendiente';
          }
          tareaSeleccionada.estado=nuevoEstado;
          break;
        case 'edicion':
          let nuevaEdicion = prompt('Fecha de vencimiento (YYYY-MM-DD): ');
          tareaSeleccionada.ultimaEdicion=nuevaEdicion;
          break;
        case 'vencimiento':
          let nuevoVencimiento = prompt('Fecha de vencimiento (YYYY-MM-DD): ');
          tareaSeleccionada.vencimiento=nuevoVencimiento;
          break;
        default:
          console.log('Opcion no valida');
          break;
      }

    }else if(decision=='N'){
      return;
    } else{
      console.log('Opcion no valida');
      return;
    }
  }

}

//Funcion para ver las tareas
function verTareas() {

  if (tareas.length === 0) {
    console.log('No hay tareas para mostrar.');
    return;
  }

  console.log('Que tareas desea ver? \n'

  +  ' 1. Todas \n'
  +  ' 2. Pendientes \n'
  +  ' 3. En curso \n'
  +  ' 4. Terminadas \n'
  +  ' 0. Volver \n'
  );
  decision=parseInt(prompt(''));
  switch(decision){
    case 1:
        console.log('Todas las tareas \n');
        console.log("\n");
        tareas.forEach((tarea, index) => { 
          console.log(index + 1 + "." ,tarea.titulo);
          console.log("\n");
 //         console.log(`  Título: ${tarea.titulo}`);
        });
        verDetallesTarea(tareas);

        break;
    case 2:
        console.log('Tareas pendientes');
        let tareasPendientes = tareas.filter(tarea => tarea.estado == 'Pendiente');
        tareasPendientes.forEach((tarea, index) => { 
          console.log(index + 1 + "." ,tarea.titulo);
          console.log("\n");
        });
        verDetallesTarea(tareasPendientes);
        break;
    case 3:
        console.log('Tareas en curso');
        let tareasEnCurso = tareas.filter(tarea => tarea.estado == 'En curso');
        tareasEnCurso.forEach((tarea, index) => { 
          console.log(index + 1 + "." ,tarea.titulo);
          console.log("\n");
        });
        verDetallesTarea(tareasEnCurso);
        break;
    case 4:
        console.log('Tareas terminadas');
        let tareasTerminadas = tareas.filter(tarea => tarea.estado == 'Terminada');
        tareasTerminadas.forEach((tarea, index) => { 
          console.log(index + 1 + "." ,tarea.titulo);
          console.log("\n");
        });
        verDetallesTarea(tareasTerminadas);
        break;
    case 0:
        console.log('Volver');
        return;
    default:
        console.log('Opcion no valida');
        break;
  }
}

//Funcion para buscar tarea por titulo

function buscarTarea(){
  if (tareas.length === 0) {
    console.log('No hay tareas para buscar.');
    return;
  }
    let cadenaBusqueda = prompt('Ingrese el título o parte del título de la tarea: ');
  
    // Filtrar las tareas cuyos títulos contienen la cadena de búsqueda
    let tareasEncontradas = tareas.filter(tarea => tarea.titulo.includes(cadenaBusqueda));
  
    if (tareasEncontradas.length === 0) {
      console.log(`No se encontraron tareas con el título que contiene "${cadenaBusqueda}".`);
      return;
    }
  
    console.log(`Estas son las tareas relacionadas con el titulo "${cadenaBusqueda}":` );
    console.log("\n \n");
    tareasEncontradas.forEach((tarea, index) => { 
      console.log(index + 1 + "." ,tarea.titulo);
      console.log("\n");
    });
    verDetallesTarea(tareasEncontradas);
  }

  //Funcion para ya tener tareas agregadas de manera predeterminada

  function tareaEjemplo(titulo,descripcion,estado,creacion,ultimaEdicion,vencimiento,dificultad){

      const tarea = {
        titulo,
        descripcion,
        estado,
        creacion,
        ultimaEdicion,
        vencimiento,
        dificultad,
      };
    
      tareas.push(tarea);
  }
  

//Ejecucion del Programa --------------------------------------------------------------------------------------------------------------
tareaEjemplo('Hacer el TP','Hacer el TP de Javascript','Pendiente','2021-04-01','2021-04-01','2021-04-01','Facil');
tareaEjemplo('jugar al Cs','Jugar al Cs con los pibes','En curso','2021-04-01','2021-04-01','2021-04-01','Facil');
tareaEjemplo('Tomar mate','Tomar mate con los pibes','Terminada','2021-04-01','2021-04-01','2021-04-01','Facil');
  generarInterfaz();
  decision=parseInt(prompt(''));
  while(decision!=4){
  switch(decision){
      case 1:
          verTareas();
          break;
      case 2:
          console.log('Buscar tarea');
          buscarTarea();
          break;
      case 3:
          agregarTarea();
          break;
      case 4:
          console.log('Salir');
          break;
      default:
          console.log('Opcion no valida');
          break;
  }
  generarInterfaz();
  decision=parseInt(prompt(''));
}