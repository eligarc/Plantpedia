import type { NextApiHandler } from 'next'

const credentialsAuth: NextApiHandler<User> = (request, response) => {
	// GET any not OK
	if (request.method !== 'POST') {
		response.status(405).end()
		return
	}
	// POST - ok
	// validate credentials
	if (request.body.password === process.env.PLANTPEDIA_PASSWORD) {
		const plantpediaUser = {
			name: 'Plantpedia user',
			email: 'user@plantpedia.com',
			image: '',
		}
		return response
			.status(200)
			.json(plantpediaUser)
	}
	response.status(401).end()
}

export default credentialsAuth;