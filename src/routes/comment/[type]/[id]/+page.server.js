import { redirect } from '@sveltejs/kit';
import { auth } from '$lib/auth.js';
import { initDb } from '$lib/db.js';

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ cookies, request, fetch, params}) => {
		let db = await initDb();
		let date = +(new Date);

        let username = await auth(fetch, cookies);
        if (!username || username.username == '!nobody') return;

		const data = await request.formData();
        let content = data.get('content') || '';

		if (content.length < 1) return;

		await db.run('INSERT INTO comment (username, targetType, targetId, date, content) VALUES (?,?,?,?,?)',[
			username.username,
			params.type,
			params.id,
			date,
			content
		]);

		if (params.type == 'project') { 
			throw redirect(302, '/embed/'+params.id);
		}

		if (params.type == 'user') {
			throw redirect(302, '/users/'+params.id);
		}
    }
}