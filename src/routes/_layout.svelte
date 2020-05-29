<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<svelte:head>
	<title>Figuring it out as I go: Raspberry Pi, Python, and Svelte projects.</title>
</svelte:head>

<Nav {segment}/>

<main class="container">
	<slot></slot>
</main>