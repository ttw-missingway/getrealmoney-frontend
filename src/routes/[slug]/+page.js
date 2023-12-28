/** @type {import('./$types').PageLoad} */
import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';
export async function load({ fetch, params }) {
	const directus = getDirectusInstance(fetch);
	return {
		posts: await directus.request(
            readItems('posts', {
                filter: {
                    category: {
                        _eq: params.slug
                    },
                    status: {
                        _eq: 'published'
                    }
                },
            })
		),
        slug: params.slug
	};
}
