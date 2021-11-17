<script>
    import { link } from 'svelte-spa-router'


    export let params = {}
 
    async function getPreguntas() {
		let respuesta = await fetch('./data/val_fd_preguntas.json', {mode: 'no-cors'})
		let preguntas = await respuesta.json()

		return preguntas
	}

    const promesaPregunta = getPreguntas()

</script>

<h1>Lista de Tablas de {params.idproyecto}</h1>

<div class="container">
    <button class="btn btn-success">Nueva Tabla</button>
</div>

<div class="container mt-3">
    <table class="table table-striped">
        <thead>
            <th></th>
            <th>Nemonico</th>
            <th>Pregunta</th>
            <th>Tipo(Long)</th>
            <th>Códigos Válidos</th>
            <th></th>
        </thead>
        <tbody>
            {#await promesaPregunta}
                <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            {:then preguntas}
                {#each preguntas as pregunta}
                    <tr>
                        <td>
                            <a href="/codigos/{params.idproyecto}/{params.idtabla}/{pregunta.id_nemonico}" use:link class="btn btn-sm btn-success mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-fill" viewBox="0 0 16 16">
                                    <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/>
                                  </svg>
                            </a>
                        </td>
                        <td class="w-auto"> { pregunta.id_nemonico } </td>
                        <td class="w-25"> { pregunta.pregunta } </td>
                        <td> { pregunta.tipo === 'Alfanumérico' ? 'Caracter' : pregunta.tipo}({ pregunta.longitud }) </td>
                        <td> { pregunta.codigos_validos } </td>
                        <td>
                            <a href="/" class="btn btn-sm btn-primary mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
                                    <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
                                  </svg>
                            </a>
                            <a href="/" class="btn btn-sm btn-danger ml-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                  </svg>
                            </a>
                        </td>

                    </tr>
                {/each} 
            {:catch error}
                <p style="color: red;">{error.message}</p>	
            {/await}
    
        </tbody>
    </table>
</div>

