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
		let target = data.get('target') || '';

		if (content.length < 1) return;

		let allComments = (await db.all('SELECT * FROM comment')).length;

		if (target != '' && target) {
			params.type = 'reply';
			params.id = target;
		}

		await db.run('INSERT INTO comment (username, targetType, targetId, date, content, id) VALUES (?,?,?,?,?,?)',[
			username.username,
			params.type,
			params.id,
			date,
			content,
			allComments + 1
		]);
		
		let msgQuery = 'INSERT INTO messages (username, date, isRead, href, content) VALUES (?,?,?,?,?)';


		if (params.type == 'reply') {
			let oldComment = await db.all('SELECT * FROM comment WHERE id = ?', [
				params.id
			]);

			if (oldComment.length < 1) throw redirect(302, '/');

			await db.run(msgQuery,[
				oldComment[0].username,
				date,
				false,
				'#',
				`${username.username} replied to your comment`
			]);

			throw redirect(302, '/');
		}

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