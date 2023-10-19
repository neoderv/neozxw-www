const AUTH_URL = 'https://auth.dervland.net/token/';


import { initDb } from '$lib/db.js';

export async function auth(fetch, cookies) {

    let db = await initDb();

    let cookieData = cookies ? (cookies.get('token') || 'no') : 'no';
    let auth = await fetch(`${AUTH_URL}?token=${encodeURIComponent(cookieData)}`).then(x => x.json());

    let userData = await db.all('SELECT * FROM user WHERE username = ?', [
        auth.username
    ]);

    auth.isAdmin = userData.length > 0 ? userData[0].isAdmin : '';

	return auth;
}