import axios from 'axios';

const httpServer = (opts) => {
  let httpOpts = {
    method: opts.method || 'get',
    url: opts.url || '',
    param: opts.data,
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    }
  }
  if(!opts.data){
    delete httpOpts.param;
  }
  let promise = new Promise((resolve, reject) => {
    axios(httpOpts).then( res => {
      res.status === 200 ? resolve(res.data) : reject(new Error(res.msg))
      // res.code === 0 ? resolve(res.data) : reject(new Error(res.msg));
    }).catch(err => {
      reject(new Error(err.message))
    })
  })
  return promise;
}
export default httpServer;