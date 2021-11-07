export const postLogin = async ({ email, password }) => {
	const response = await fetch('https://fake.api.com/login', {
		method: 'post',
		mode: 'cors',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			email,
			password,
		}),
	});

	if (response) {
		return response.json();
	}
};
