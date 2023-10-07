
import { initDb } from '$lib/db.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({f}) {
    let db = await initDb();

    let query = await db.all('SELECT * FROM project ORDER BY id DESC');
	return {query};
}