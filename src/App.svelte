<script>
	import Router from 'svelte-spa-router'
	import { link } from 'svelte-spa-router'
	import routes from './routes'


  let valor = ''
  let currentProyect = ''
  let hayProyecto = false
  let tablasFiltradas

    async function getProyectos() {
		let respuesta = await fetch('./data/val_proyectos.json', {mode: 'no-cors'})
		let proyectos = await respuesta.json()

		return proyectos
	}

	async function getTablas() {
		console.log('Hola mundo')
		let respuesta = await fetch('./data/val_tablas.json', {mode: 'no-cors'})
		let tablas = await respuesta.json()
	
		tablasFiltradas = tablas

		return tablas
	}

	function filtrarTablas() {

	}

	const promesaProyecto = getProyectos()
	const promesa = getTablas()

</script>

<main>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<div class="container-fluid">
		  <a class="navbar-brand" href="/">Validación</a>
		  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		  </button>
		  <div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav">
			  <li class="nav-item">
				<a class="nav-link active" aria-current="page" href="/" use:link>Inicio</a>
			  </li>
			  <li class="nav-item">
				<a class="nav-link" href="/proyectos" use:link>Proyectos</a>
			  </li>
			  <li class="nav-item">
				<a class="nav-link" href="/acercade" use:link>Acerca de</a>
			  </li>
			</ul>
		  </div>
		</div>
	  </nav>


<Router {routes} />


<!-- 
	{#if (hayProyecto)}
		<p>{tablasFiltradas}</p>
		<div>
			{#await promesa}
				<p>Cargando...</p>
			{:then tablas}
				<select bind:value="{valor}">
					{#each tablas as tabla}
						<option value="{tabla.id_tabla}">{tabla.id_tabla}</option>
					{/each} 
				</select>
			{:catch error}
				<p style="color: red;">{error.message}</p>	
			{/await}
		</div>
	{/if}
	<p>{valor}</p> -->
</main>

<style>

</style>