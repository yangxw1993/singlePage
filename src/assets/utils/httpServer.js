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
 let promise = null;
  if(httpOpts.method === 'post'){
    promise = new Promise((resolve, reject) => {
      axios.post(httpOpts.url, httpOpts.params).then( res => {
        res.status === 200 ? resolve(res.data) : reject(new Error(res.msg))
      })
    })
  }else{
    promise = new Promise((resolve, reject) => {
      axios.get(httpOpts.url, httpOpts.params || '').then( res => {
        res.status === 200 ? resolve(res.data) : reject(new Error(res.msg))
      })
    })
  }
  return promise
}
export default httpServer;
