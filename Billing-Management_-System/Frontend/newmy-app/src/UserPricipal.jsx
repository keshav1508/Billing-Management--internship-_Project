import axios from 'axios'


const userServiceApiUrl="http://localhost:8080/employees"

 class UserPricipal  {

       getUsers(){
          return axios.get(userServiceApiUrl)
       }
    }

export default new UserPricipal()
