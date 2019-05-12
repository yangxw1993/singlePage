import axios from 'axios';

const httpServer = (opts) => {
  let httpOpts = {
    method: opts.method || 'get',
    url: opts.url || '',
    params: opts.data,
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    }
  };
  if(!opts.data){
    delete httpOpts.data;
  }
  return new Promise((resolve, reject) => {
    axios[httpOpts.method](httpOpts.url, httpOpts.params || '').then( res => {
      res.status === 200 ? resolve(res.data) : reject(new Error(res.msg))
    }).catch(err => {
      reject(new Error(err.msg))
    })
  })
}
export default httpServer;
