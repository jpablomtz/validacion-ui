import Inicio from './routes/Inicio.svelte'
import Proyectos from './routes/Proyectos.svelte'
import Tablas from './routes/Tablas.svelte'
import Preguntas from './routes/Preguntas.svelte'
import Acercade from './routes/Acercade.svelte'
import Error404 from './routes/Error404.svelte'

const routes = {
    '/' : Inicio,
    '/proyectos' : Proyectos,
    '/tablas/:idproyecto' : Tablas,
    '/preguntas/:idproyecto/:idtabla' : Preguntas,
    '/acercade' : Acercade,
    '*' : Error404
}

export default routes