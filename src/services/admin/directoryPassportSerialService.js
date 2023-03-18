import ApiService from '../api.service';

const DirectoryPassportSerialService = {
    create: (data) => {
        return ApiService.post("/api/v.1/directory/passport-serial/create", data)
    },
    delete: (id) => {
        return ApiService.delete(`/api/v.1/directory/passport-serial/deleteById/${id}`)
    },
    getList: (data) => {
        return ApiService.post("/api/v.1/directory/passport-serial/list-search", data)
    },
    update: (data) => {
        return ApiService.put("/api/v.1/directory/passport-serial/update", data)
    },

}
export default DirectoryPassportSerialService;