import mysql from 'mysql2'
import dbInsert from './mysqlQuerymodule.js'

class users {
  constructor(name, phone, email){
    this.name = name;
    this.phone = phone;
    this.email = email;
  }

  get info(){
    `이름 : ${this._name}, 핸드폰 : ${this._phone}, 이메일 : ${this._email}`
  }


  set name(value){
    if(typeof(value)==="string"){
      this._name = value;
    } else {
      console.log('이름은 문자로 적어주세요')
    }
  };

  set phone(value){
    if(typeof(value)==='number'){
      this._phone= value;
    } else {console.log('핸드폰 번호는 숫자로 적어주세요')}
  };

  set email(value){
    if(typeof(value)==='string'){
      this._email= value;
    } else {console.log('이메일은 숫자로만 이루어질 수 없습니다')}
  };

}

const dbConfig = {
  host : 'localhost',
  user : 'root',
  password : 'dltpals123!!',
  port : '3306',
  datebase : 'pracnode',
  connetionLimit : 5
}

//직렬화에 사용
function convertUserToJSON (userInfo) {
  return JSON.stringify({
    name : this._name,
    phone : this._phone,
    email : this._email
  })
}


function saveUserJSONToDatabase (userJSON){
  const datebase = mysql.createConnection(dbConfig);
  
  datebase.connect((err)=>{
    if(err) {
      console.error('연결실패',err);
      return;
    }
    console.log(`${dbConfig.port}로 연결 성공`)

    //객체화 해줌
    const usersDateParse = JSON.parse(userJSON);
    // const values = usersDateParse.map(value => {value._name,value._phone,value._email});
    const values = usersDateParse.map(value => {value.name,value.phone,value.email});
    console.log(values);

    //query 실행
    datebase.query(dbInsert, values, (err, results)=>{
      if(err){
        console.error('쿼리실행 실패',err);
      } else {
        console.log('결과물 확인',results);
      }
      //연결 종료
      connetion.end();
    })//쿼리 실행문 끝
  })
}

export default {users, convertUserToJSON, saveUserJSONToDatabase};