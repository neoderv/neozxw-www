import { auth } from '$lib/auth.js';
import { initDb } from '$lib/db.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({params, cookies, fetch}) {
	let db = await initDb();

	let username = (await auth(fetch, cookies)).username;

	let query = await db.all('SELECT * FROM project WHERE id = ?',[
		params.id
	]);
	return {id: params.id, data: query[0], username};
}