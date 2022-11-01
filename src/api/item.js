// import apiUrl from '../apiConfig'
// import axios from 'axios'

// export const itemCreate = (data, user) => {
// 	return axios({
// 		method: 'POST',
// 		url: apiUrl + '/items',
// 		data: {
// 			item: data,
// 		},
// 		headers: {
// 			Authorization: `Token token=${user.token}`,
// 		},
// 	})
// }

// export const itemIndex = (user) => {
// 	return axios({
// 		method: 'GET',
// 		url: apiUrl + '/items'
// 	})
// }

// export const itemShow = (user, id) => {
// 	return axios({
// 		method: 'GET',
// 		url: apiUrl + '/items/' + id
// 	})
// }

// export const itemUpdate = (data, user, id) => {
// 	return axios({
// 		method: 'PATCH',
// 		url: apiUrl + '/items/' + id,
// 		data: {
// 			item: data,
// 		},
// 		headers: {
// 			Authorization: `Token token=${user.token}`,
// 		},
// 	})
// }

// export const itemDelete = (user, id) => {
// 	return axios({
// 		method: 'DELETE',
// 		url: apiUrl + '/items/' + id,
// 		headers: {
// 			Authorization: `Token token=${user.token}`,
// 		},
// 	})
// }