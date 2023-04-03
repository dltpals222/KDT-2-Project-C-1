import http from 'http'
import fs from 'fs'
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
  datebase : 'prolog',
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
  
  datebase.connet((err)=>{
    if(err) {
      console.error('연결실패',err);
      return;
    }
    console.log(`${dbConfig.port}로 연결 성공`)
  })

  
}