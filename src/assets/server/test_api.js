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
  console.log('data', data)
  return new Promise((resolve, reject) => {
    /*fetch(URL.SEND_DATA, {
      method: 'POST',
      body: JSON.stringify(data)
    }).then(function(response) {
      resolve(response);
      console.log(response);
    })*/
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
export {
  test_api,
  send
}
