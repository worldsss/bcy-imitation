import axios from 'axios'


/*
export function request01(config) {
  return new Promise((resolve, reject) => {
    // 1.创建axios实例
    const instance1 = axios.create({
      baseURL:'http://123.207.32.32:8000',
      timeout:5000
    })
    //发送真正的网络请求,返回值就是promise，可以直接在调用时使用
    return instance1(config)

  })
}*/

export function request01(config) {
  return new Promise((resolve, reject) => {
    // 1.创建axios实例
    const instance1 = axios.create({
      baseURL: `http://localhost:8081`,
      timeout: 5000,
     /* headers: {
        'content-type': 'application/x-www-form-urlencoded&charset=utf-8'
      }*/
    })

    // 3.发送真正的网络请求,返回值就是promise，可以直接在调用时使用
    return instance1(config)

  })
}


export function instance2() {

}