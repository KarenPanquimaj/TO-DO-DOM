//Boton de crear
const btnTarea = document.querySelector('#btnTarea')
//Input donde se escribe la tarea
const creaTarea = document.querySelector('#creaTarea')

let value = ''
//Evento para capturar el valor del input
creaTarea.addEventListener('change', (e) => {
    value = e.target.value
})

let contador = 0;
//Crea la tarea
const crearTareita = () => {
    if (value != '') {

        contador = contador + 1;
        const div = ` 
    <div id="padre-${contador}" class = "Card d-flex ">
      <div id="color-${contador}" class = "d-flex gap-5 card-body fondo justify-content-between mt-5">
            <div class="form-check">
             <input id="tarea-${contador}" class="form-check-input" type="checkbox" >
             <label class="form-check-label" for="defaultCheck1">
             <p id="parrafo-${contador}" style="color: black; font-family: cursive; ">${value}</p>
             </label>
            </div>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" id="btnDelete-${contador}" width="20" height="20" fill="currentColor" class="bi bi-trash Eliminador" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg>
            </div>
      </div>
    </div>
    `
        const tareas = document.querySelector('#tareas')
        tareas.insertAdjacentHTML('afterbegin', div)
        const CheckboxCreado = document.querySelector(`#tarea-${contador}`)
        const parrafoCreado = document.querySelector(`#parrafo-${contador}`)
        CheckboxCreado.addEventListener('click', () => {
            parrafoCreado.classList.toggle('text-decoration-line-through')
        })
        creaTarea.value = ''
        value = ''

        const removeCard = document.querySelector(`#padre-${contador}`)
        const Eliminarbtn = document.querySelector(`#btnDelete-${contador}`)
        Eliminarbtn.addEventListener(`click`, () => {
            removeCard.remove()
        })
    }
    else {
        alert('Ingrese texto')
    }
}

//Evento que escucha el click de crear tarea
btnTarea.addEventListener('click', crearTareita)