//Task 1 & 2 & 3//

let date ={
    name:"Hikmat",
    gender:"Male",
    birthday:"21.05.1993",
    age:"21",
    setAge:(newAge)=>{
      date.age=newAge
    },
    getLogthis:()=>{
      console.log(this);
    },
    getYear:function(){
      return 65-this.age;
    }
  }
  
  date.setAge(30)
  
  console.log(date.birthday);
  console.log(date);
  console.log(date.getYear());



  //Task four//

  let client={
    fullName:"Hikmat Malikov",
    creditLimit:"5000",
    balans:"3000",
    precentOfMinPayment:"8%",

    getBalance:function(){
     let remainBalance=client.balans-client.creditLimit;
     if(remainBalance<0){
      return{
        
      }
     }
    },
    getMinPayment:function(){

    }

  }

  console.log(client.getBalance());  
  console.log(client.getMinPayment());