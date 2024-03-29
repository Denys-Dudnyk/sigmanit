export const API_URL = `${process.env.APP_URL}/api`

export const API_SERVER_URL = `${process.env.APP_SERVER_URL}/api`

export const getGenresUrl = (string: string) => `/genres${string}`
export const getProductsUrl = (string: string) => `/products${string}`
