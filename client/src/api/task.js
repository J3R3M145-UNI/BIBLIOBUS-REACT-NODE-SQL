import axios from './axios';

export const getTasksRequest = tableName => axios.get(`/datos/${tableName}`);
export const getTaskRequest = id => axios.get(`/datos/${id}`);
export const createTasksRequest = task =>  axios.get("/datos", task);
export const updateTaskRequest = task => { axios.put(`/datos/${task._id}`, task) };
export const deleteTaskRequest = id => axios.delete(`/datos/${id}`);