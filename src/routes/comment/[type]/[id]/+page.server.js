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
		
		let msgQuery = 'INSERT INTO messages (username, date, isRead, href, content) VALUES (?,?,?,?,?)';

		if (params.type == 'project') { 
			let href = '/embed/'+params.id;

			let projects = await db.all('SELECT * FROM project WHERE id = ?', [
				params.id
			]);

			if (projects.length < 1) return;

			let project = projects[0];

			await db.run(msgQuery,[
				project.username,
				date,
				false,
				href,
				`${username.username} left a message on your project "${project.title}"`
			]);

			throw redirect(302, href);
		}

		if (params.type == 'user') {
			let href = '/users/'+params.id;

			await db.run(msgQuery,[
				params.id,
				date,
				false,
				href,
				`${username.username} left a message on your profile`
			]);

			throw redirect(302, href);
		}
    }
}