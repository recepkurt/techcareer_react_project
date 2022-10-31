import { axiosInstance } from "./axiosInstance"


export const networkService = {

    getAll: async(url) => {

        let responseData = [];

        await axiosInstance.get(url)
                .then(res => {
                    responseData = res.data;
                })
                .catch((err) => {
                    console.log('ERROR', err);
                    throw err
                })

        return responseData;
    },

    getById: async(url, id) => {
        let responseData = [];

        await axiosInstance.get(url + '/' + id)
                .then(res => {
                    responseData = res.data;
                })

        return responseData;
    },

    add: async(url, data) => {
        let responseData = {};

        await axiosInstance.post(url,data)
                .then(res => {
                    responseData = res.data;
                })
                .catch((err) => {
                    console.log('ERROR', err);
                    throw err
                })

        return responseData;
    },

    update: async (url, data, id) => {
        
        let responseData = {};

        await axiosInstance.put(url + '/' + id, data)
                .then(res => {
                    responseData = res.data;
                })
                .catch((err) => {
                    console.log('ERROR', err);
                    throw err
                })
                
        return responseData;
    },

    delete: async(url, id) => {

        await axiosInstance.delete(url + '/' + id)
                .then(res => res.data)
                .catch((err) => {
                    console.log('ERROR', err);
                    throw err
                })
    }
}