import qs from 'querystring'
import serverReadFileModule from './server_readfile.js'
import dbConfig from '../mysql/mysql_connect.js'

function a (chunk) {
  let body = '';
  body += chunk;

  let post = qs.parse(body);
  let name = post.name;
  let type = post.type;
  let taek = post.taek;

  let array = [];
  array.push(name, type, parseInt(taek, 10));
  console.log(array);

  const query = 'insert into a (name, type, taek) values (?,?,?)';
  dbConfig.connect();
  dbConfig.query(query, array, (err) => {
    if (err) {
      console.error('쿼리실행 실패', err);
    } else {
      console.log("쿼리실행성공");
    }
  })
  dbConfig.end();


}

export default a;