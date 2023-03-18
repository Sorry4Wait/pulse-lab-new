import ApiService from './api.service'

const DirectoryCurrencyTypeService = {
   create: (data) => {
    return ApiService.post("/api/v.1/directoryCurrencyType/create", data)
   },
   delete: (id) => {
    return ApiService.delete(`/api/v.1/directoryCurrencyType/deleteById/${id}`)
   },
   getList: (data) => {
    return ApiService.post("/api/v.1/directoryCurrencyType/list-search", data)
   },
   update: (data) => {
    return ApiService.put("/api/v.1/directoryCurrencyType/update", data) 
   },

}
 export default DirectoryCurrencyTypeService;