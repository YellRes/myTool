import axios from 'axios'

axios.defaults.timeout = 10000
axios.defaults.baseURL = 'http://121.4.61.167:3002'

// 拦截器
// 
export default function AxiosConfig () {
    axios.interceptors.request.use((config) => {

        if (config.params) config.params._t = Date.now()

        return config
    }, (err) => {

        return Promise.reject(err)
    })

    axios.interceptors.response.use((res) => {
        return res.data.body
    }, (err) => {
        
        return Promise.reject(err)
    })
}