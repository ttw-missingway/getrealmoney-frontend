<script>
	import { PUBLIC_APIURL } from '$env/static/public';
	import { onMount } from 'svelte';
	/** @type {import('./$types').PageData} */
	export let data;

	onMount(() => {
		console.log('POSTS: ', data);
	});
</script>

<img
	src="{PUBLIC_APIURL}/assets/{data.post.thumbnail.filename_disk}?w=200&h=200&f=crop&q=80"
	alt={data.post.thumbnail.description}
	class="max-w-[1rem]"
/>
<h1>{data.post.title}</h1>
<div>{@html data.post.content}</div>
