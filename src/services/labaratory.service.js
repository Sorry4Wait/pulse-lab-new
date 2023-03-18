import ApiService from './api.service'

const LabaratoryService = {
    demo(name) {
        return ApiService.get(`/lab/laboratory/get-demo-${name}`);
    },
    variant(name) {
        return ApiService.get(`/lab/laboratory/get-${name}`);
    },
    getTimer(name){
        return ApiService.get(`/lab/laboratory/get-expire-${name}`);
    },
    start(name){
        return ApiService.post(`/lab/laboratory/start-${name}`);
    },
    submit(name,data){
        return ApiService.post(`/lab/laboratory/submit-${name}`,data);
    }


};
export default LabaratoryService;
