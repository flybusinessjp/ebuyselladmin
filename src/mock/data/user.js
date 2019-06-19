import Mock from 'mockjs';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const LoginUsers= [];


  LoginUsers.push(Mock.mock({
      username: 'admin',
      password: '123456',
      avatar: '',
      name: '管理员'
  
  }));

axios
.get("http://http://101.201.233.31//user/v1/tokens?userName=${LoginUsers.username}&passWord=${LoginUsers.password}")
.then(response => {
    this.userData = response.data;
    console.log(response);
})
.catch(error => {
    console.log(errror);
});




const Users = [];

for (let i = 0; i < 6; i++) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    addr: i,
    birth: Mock.Random.date(),
    sex: Mock.Random.integer(0, 1)
  }));
}

export { LoginUsers, Users };
