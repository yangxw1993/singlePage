import axios from 'axios'
// import qs from 'qs'
import { local } from './global'

axios.interceptors.request.use(config => {
  // loading
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return response
}, error => {
  local.remove('token')
  local.remove('curUserInfo')
  location.href = '/'
  return Promise.resolve(error.response)
})

function checkStatus (response) {
  // loading
  // 如果http状态码正常，则直接返回数据
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    return response.data
    // 如果不需要除了data之外的数据，可以直接 return response.data
  }
  // 异常状态下，把错误信息返回去
  return {
    status: -404,
    msg: '网络异常'
  }
}

function checkCode (res) {
  // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  /* if (res.status === -404) {
    // alert(res);
    console.log(res)
  } */
  if (res.status === '401') {
    alert('401')
  }
  if (res.data && (!res.data.success)) {
    // alert(res.data);
    // console.log(res)
  }
  return res
}

export default {

  activitypost(url, data) {

    let postInfo = {
      method: 'post',
      url:url,
      data: data,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    }
    return axios(postInfo).then(
        (response) => {
          return checkStatus(response)
        }
    ).then(
        (res) => {
          return checkCode(res)
        }
    )


    //return axios.post(url,Qs.stringify(data)).then(
    //    (response) => {
    //      return checkStatus(response)
    //    }
    //).then(
    //    (res) => {
    //      return checkCode(res)
    //    }
    //)
  },

  post (url, data) {
    let postInfo = {
      method: 'post',
      url,
      data: data,
      timeout: 10000,
      headers: {
        token: local.get('token'),
        'Content-Type': 'application/json'
      }
    }
    return axios(postInfo).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  },
  get (url, params) {
    let getInfo = {
      method: 'get',
      url,
      params, // get 请求时带的参数
      timeout: 10000,
      headers: {
        token: local.get('token')
      }
    }
    if (!params) {
      delete getInfo.params
    }
    if (!localStorage.getItem('token')) {
      delete getInfo.headers
    }
    return axios(getInfo).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  },
  all (arr) {
    return axios.all(arr).then(axios.spread(function (...arr) {
      return arguments
    }))
  }
}
