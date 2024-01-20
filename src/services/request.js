import { ElNotification } from 'element-plus'


export async function request(fn, notify) {
	let data = null;
	let error = null;
	try {
		const response = await fn()
		data = response.data
		const method = response.config.method
		const title = data?.status ?? 'Exito!';
		const message = data?.message;
		const isGet = method === 'get'
		const noNotify = isGet && !notify
		const notification = noNotify ? false : notify ?? true

		if (notification) {
			ElNotification({
				title,
				message,
				type: 'success',
			})
		}


	} catch (e) {
		const title = e.response?.data?.title ?? 'Error!';
		const message = e.response?.data?.message ?? e.message ?? e.error ?? Object.values(e?.errors)[0][0];

		if (e.response?.data?.status !== 422) ElNotification({ title: title, message: message, type: 'error', })
		error = e;
	}
	return { data, error }
}
