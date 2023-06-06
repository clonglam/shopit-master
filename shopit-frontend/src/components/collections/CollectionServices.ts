import APIClient from '../../services/api-client'

export const apiClient = new APIClient<Collection>('/collections')
