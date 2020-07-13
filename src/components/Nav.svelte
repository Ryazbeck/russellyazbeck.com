<script>
	export let segment;
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte'
	import FaGithubSquare from 'svelte-icons/fa/FaGithubSquare.svelte'
	import FaEnvelopeSquare from 'svelte-icons/fa/FaEnvelopeSquare.svelte'
</script>

<style>
	nav {
		border-top: 1px solid rgba(255,62,0,0.1);
		padding: 0 1em;
		background: rgba(250, 240, 202)
	}

  .icon {
    color: rgb(58, 58, 58);
    width: 24px;
		height: 24px;
		transition: .2s;
	}
	
	.icon:hover {
		color: rgb(115,115,115);
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(175, 59, 110);
		display: block;
		bottom: 0;
	}

	li > a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>

<nav class="absolute bottom-0 w-full md:top-0 md:relative md:text-black">
	<div class="flex justify-between md:items-center md:justify-around font-display">
		<span class="flex flex-col py-1">
			<span class="text-sm font-semibold">Russell Yazbeck</span>
			<span class="flex flex-row">
				<span class="cursor-pointer icon">
					<a href="https://www.linkedin.com/in/russellyazbeck/" target="_blank">
						<FaLinkedin />
					</a>
				</span>
				<span class="cursor-pointer icon">
					<a href="https://github.com/Ryazbeck" target="_blank">
						<FaGithubSquare />
					</a>
				</span>
				<span class="cursor-pointer icon">
					<a href="mailto: russellyazbeck@gmail.com?subject=I%20wanna%20be%20less%20busy" target="_blank">
						<FaEnvelopeSquare />
					</a>
				</span>
			</span>
		</span>
		<span class="font-semibold">
			<ul>
				<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a></li>

				<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
						the blog data when we hover over the link or tap it on a touchscreen -->
				<li><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">blog</a></li>
			</ul>
		</span>
	</div>
</nav>
