import axios from './axios';

export const getTasksRequest = tableName => axios.get(`/datos/${tableName}`);
export const getPrestamoRequest = () => axios.get(`/prestamo/`);
export const getTaskRequestbyId = (id) => axios.get(`/datos/${id}`);
export const createTasksRequest = (tableName, task) =>  axios.post(`/datos/${tableName}`, task);
export const updateTaskRequest = (tableName, id, task) => axios.put(`/datos/${tableName}/${id}`, task);
export const deleteTaskRequest = (id) => axios.delete(`/datos/${id}`);
