import ApiService from './api.service';

const DepartmentTypeControlService = {
    create: (data) => {
     return ApiService.post("/api/v1/departmentType/create", data)
    },
    delete: (id) => {
     return ApiService.delete(`/api/v1/departmentType/deleteById/${id}`)
    },
    getList: (data) => {
     return ApiService.post("/api/v1/departmentType/list-search", data)
    },
    update: (data) => {
     return ApiService.put("/api/v1/departmentType/update", data) 
    },
 
 }
  export default DepartmentTypeControlService;