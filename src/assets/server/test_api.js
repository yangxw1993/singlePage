import httpServer from '../utils/httpServer'
import { URL } from '../const'
function test_api(){
  return new Promise((resolve, reject) => {
    httpServer({
      url: URL.TEST_API
    }).then(res => {
      resolve(res)
    }).catch(err => {
      reject(new Error(err))
    })
  })
}
function send(data){
  return new Promise((resolve, reject) => {
    httpServer({
      url: URL.SEND_DATA,
      method: 'post',
      data,
    }).then(res => {
      resolve(res)
    }).catch(err => {
      reject(new Error(err))
    })
  })
}
function getData(){
  return new Promise((resolve, reject) => {
    httpServer({
      url: URL.GET_DATA,
    }).then(res => {
      res.code === 0 ? resolve(res.data) : reject(res.msg);
    }).catch(err => {
      reject(new Error(err.msg))
    })
  })
}
export {
  test_api,
  send,
  getData
}
