import { readFile } from 'fs/promises';

/** @type {import('./$types').RequestHandler} */
export async function GET({params}) {
	let id = params.id.replace(/\D/g,'');

	return new Response(await readFile(`${process.cwd()}/db/projects/${id}.sb3`));
}