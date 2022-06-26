import axiosClient from "./axiosClient";

const ApiKey = {
    getKeyFeatures: () => {
        const url = '/api/genshin-impact/key-features';
        return axiosClient.get(url);
    }
 }
 
 export default ApiKey;
