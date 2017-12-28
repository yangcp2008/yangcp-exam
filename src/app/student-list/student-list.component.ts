import { Component, OnInit } from '@angular/core';

interface User{
  id:number,
  name:string,
  github:string,
  sex:string
}

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  users:Array<User>;
  constructor() {
    this.loadUsersData();
  }
  sortUsers(type){
    // 参考MDN中的ES6，Array语法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    if('asc' == type){
      this.users.sort((a:User, b:User) => {
        if(a.id > b.id){
            return 1;
        }else if(a.id < b.id){
            return -1;
        }else{
          return 0;
        }
     });
    }else if('desc' == type){
        this.users.sort((a:User, b:User) => {
          if(a.id > b.id){
              return -1;
          }else if(a.id < b.id){
              return 1;
          }else{
            return 0;
          }
        });
    }else{ 
      this.users.sort((a:User, b:User) => {
      let temp = Number(Math.random()*1000).toFixed(0); 
      if(temp > '500'){
        return -1;
      }else if(temp < '500'){
          return 1;
      }else{
        return 0;
      }});
      
    }
    
    console.log("sortUsers Works!");
  }
  loadUsersData(){
    this.users = [
      {id:1,name:"Ryane",github:"ryanemax",sex:"male"},
      {id:2,name:"Liming",github:"liming",sex:"male"},
      {id:3,name:"Xiaohong",github:"xiaohong",sex:"female"}
    ];
  }
  addNewUser(){
    let uuid = Number(Math.random()*1000).toFixed(0);
    let newUser:User = {
      id:Number(uuid),
      name:"Jack",
      github:"Jack",
      sex:"male"
    }
    this.users.push(newUser);
  }
  deleteUserByID(id){
    this.users.forEach((user,index,arr)=>{
      if(user.id==id){
        arr.splice(index,1);
      }
    })
  }
  ngOnInit() {
  }

}
