import qs from 'querystring'
import serverReadFileModule from './server_readfile.js'
import dbSet from '../mysql/mysql_connect.js'

function a(chunk, query) {
  let body = '';
  body += chunk;
  let postArray = [];
  let post = qs.parse(body);
  console.log(post);
  for (let i in post){
    postArray.push(post[i]);
  }
  console.log(postArray);
  dbSet.connect();
  dbSet.query(query, postArray, (err) => {
    if (err) {
      console.error('쿼리실행 실패', err);
    } else {
      console.log("쿼리실행성공");
    }
  })
  dbSet.end();
}

export default a;