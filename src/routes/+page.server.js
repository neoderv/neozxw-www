
import { initDb } from '$lib/db.js';

import { auth } from '$lib/auth.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({fetch, cookies}) {
    let db = await initDb();
    let authVal = await auth(fetch, cookies);

    let query = await db.all('SELECT * FROM project ORDER BY id DESC');
	return {query, authVal};
}