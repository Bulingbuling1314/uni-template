// service.js文件
import Vue from 'vue'
import axios from 'axios'
// #ifdef MP-WEIXIN
let baseURL = 'https://rjgsc-dev-h5.kjj.51kjdata.com'
// #endif
// #ifdef H5
let baseURL = '/api'
// #endif
const service = axios.create({
    withCredentials: true,
    crossDomain: true,
    baseURL,
    timeout: 6000
})

// request拦截器,在请求之前做一些处理
service.interceptors.request.use(
    config => {
        // if (store.state.token) {
        //     // 给请求头添加user-token
        //     config.headers["user-token"] = store.state.token;
        // }
        console.log('请求拦截成功')
        return config;
    },
    error => {
        console.log(error); // for debug
        return Promise.reject(error);
    }
);

//配置成功后的拦截器
service.interceptors.response.use(res => {
    if (res.data.resultCode == 200) {
        return Promise.resolve(res.data)
    } else {
        return Promise.reject(res.data.msg);
    }
}, error => {
    return Promise.reject(error)
})


axios.defaults.adapter = function(config) { //自己定义个适配器，用来适配uniapp的语法
    return new Promise((resolve, reject) => {
        console.log(config)
        var settle = require('axios/lib/core/settle');
        var buildURL = require('axios/lib/helpers/buildURL');
        uni.request({
            method: config.method.toUpperCase(),
            url: config.baseURL + buildURL(config.url, config.params, config.paramsSerializer),
            header: config.headers,
            data: config.data,
            dataType: config.dataType,
            responseType: config.responseType,
            sslVerify: config.sslVerify,
            complete: function complete(response) {
                console.log("执行完成：",response)
                response = {
                    data: response.data,
                    status: response.statusCode,
                    errMsg: response.errMsg,
                    header: response.header,
                    config: config
                };

                settle(resolve, reject, response);
            }
        })
    })
}
export default service