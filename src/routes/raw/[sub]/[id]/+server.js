import { readFile } from 'fs/promises';

const legalSub = {
	'projects': 'sb3',
	'pfp': 'png'
}

/** @type {import('./$types').RequestHandler} */
export async function GET({params}) {
	let id = params.id.replace(/[^A-Za-z0-9\-_]/g,'');

	let sub = params.sub;

	if (!legalSub[sub]) sub = 'projects';

	return new Response(await readFile(`${process.cwd()}/db/${sub}/${id}.${legalSub[sub]}`));
}