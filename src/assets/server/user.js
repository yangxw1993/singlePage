import httpServer from '../utils/httpServer'
import { URL } from '../const'

function uerRegister(data){
  console.log('data',data)
  return new Promise((resolve, reject) => {
    httpServer({
      url: URL.REGISTER_POST,
      method: 'post',
      data,
    }).then(res => {
      res.code === 0 ? resolve(res.msg) : reject(res.msg)
    }).catch(err => {
      reject(new Error(err))
    })
  })
}
export {
  uerRegister
}
