<script>
	import { onMount } from 'svelte';
	import { io } from 'socket.io-client';
	/** @type {import('./$types').PageData} */
	export let data;

	const socket = io();

	socket.on('eventFromServer', (message) => {
		console.log(message);
	});

	onMount(() => {
		console.log('DATA: ', data);
	});
</script>

<h1>Blog</h1>
<ul>
	{#each data.posts as post}
		<li>
			<h2>
				<a href="/blog/{post.slug}">
					{post.title}
				</a>
			</h2>
			<span>{post.publish_date} &bull; {post.author.name}</span>
		</li>
	{/each}
</ul>
