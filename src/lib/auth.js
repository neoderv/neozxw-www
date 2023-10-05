const AUTH_URL = 'https://auth.dervland.net/token/';

export async function auth(fetch, cookies) {
    let cookieData = cookies ? (cookies.get('token') || 'no') : 'no';
    let auth = await fetch(`${AUTH_URL}?token=${encodeURIComponent(cookieData)}`).then(x => x.json());

	return auth;
}