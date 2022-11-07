import apiUrl from '../apiConfig'
import axios from 'axios'

export const cartAdd = (data, user, itemId) => {
	return axios({
		method: 'POST',
		url: apiUrl + '/cart/' + itemId,
		data: {
			cart: data,
		},
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const cartIndex = (user) => {
	return axios({
		method: 'GET',
		url: apiUrl + '/cart'
	})
}

export const cartUpdate = (data, user, id) => {
	return axios({
		method: 'PATCH',
		url: apiUrl + '/cart/' + id,
		data: {
			cart: data,
		},
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const cartDelete = (user, id) => {
	return axios({
		method: 'DELETE',
		url: apiUrl + '/cart/' + id,
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}