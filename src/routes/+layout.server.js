import { auth } from '$lib/auth.js';

/** @type {import('./$types').LayoutServerLoad} */
export async function load({fetch, cookies}) {
    let authVal = await auth(fetch, cookies);

	return authVal;
}