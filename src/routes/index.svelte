<script>
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte'
	import FaGithubSquare from 'svelte-icons/fa/FaGithubSquare.svelte'
	import FaEnvelopeSquare from 'svelte-icons/fa/FaEnvelopeSquare.svelte'

</script>

<style>
	h1 {
		font-size: 3em;
		text-transform: uppercase;
		font-weight: 700;
	}

  .icon {
    color: rgb(58, 58, 58);
    width: 32px;
		height: 32px;
		transition: .2s;
	}
	
	.icon:hover {
		color: rgb(115,115,115);
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Solutions by Russell Yazbeck</title>
</svelte:head>

<h1 class="font-display">
Do<br />
Less<br />
Busywork</h1>

<p class="text-xs text-left text-gray-700 font-body">
	bus·y·work<br />
	/ˈbizēˌwərk/<br />
	<i>noun</i>: work that keeps a person busy but has little value in itself. <br/> <br/>
</p>

<p class="text-left font-body">
	I quit my job to help people be less busy.<br/>
	Contact me if you want to be one of those people.<br/>
	Inventory, point-of-sale, home gardening, environment monitoring.<br/>
</p>

<div class="flex flex-row mt-2">
	<span class="cursor-pointer icon">
		<FaLinkedin />
	</span>
	<span class="cursor-pointer icon">
		<FaGithubSquare />
	</span>
	<span class="cursor-pointer icon">
		<FaEnvelopeSquare />
	</span>
</div>