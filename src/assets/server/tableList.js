import httpServer  from '../utils/httpServer';
import {URL} from '../const'

function getTableList(){
  return new Promise((resolve, reject) => {
    httpServer({
      url: `${URL.GETTABLELIST}?action=init` ,
    }).then( res => {
      res.code === 0 ? resolve(res.data) : reject(new Error(res.msg))
    }).catch(err => {
      reject(new Error(err.message))
    })
  })
}
function getMovieList(){
  return new Promise((resolve, reject) => {
    httpServer({
      url: URL.USER + '/18813068824' ,
    }).then( res => {
      res.code === 0 ? resolve(res.data) : reject(new Error(res.msg))
    }).catch(err => {
      reject(new Error(err.message))
    })
  })
}
function addTable(data){
  return new Promise((resolve, reject) => {
    httpServer({
      url: `${URL.GETTABLELIST}?action=add` ,
      method: 'post',
      data: data
    }).then( res => {
      resolve(res)
      // res.code === 0 ? resolve(res.data) : reject(new Error(res.msg))
    }).catch(err => {
      reject(new Error(err.message))
    })
  })
}
export {
  getTableList,
  addTable,
  getMovieList
}