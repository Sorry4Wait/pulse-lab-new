import ApiService from './api.service';

const DepartmentControllerService = {
    create: (data) => {
     return ApiService.post("/api/v.1/department/create", data)
    },
    delete: (id) => {
     return ApiService.delete(`/api/v.1/department/deleteById/${id}`)
    },
    getList: (data) => {
     return ApiService.post("/api/v.1/department/list-search", data)
    },
    update: (data) => {
     return ApiService.put("/api/v.1/department/update", data) 
    },
 
 }
  export default DepartmentControllerService;