class UserController{
  constructor(){
      this.addEventBtns();
      this.users = {}
  }
  
     addLine(user){
       let tr = document.creatElement('tr');
       tr.innerHTML = 
     }
  
     readPhoto(data){
      return new Promise((resolve,reject)=>{ 
       let fr = new FileReader();
       fr.addEventListener('load',(e)=>{
         resolve(fr.result);
       });
       fr.addEventListener('error',(e)=>{
         reject(e)
       });
         fr.readAsDataURL(data);
        
      })
     }
  
  register(){
    let formE1 = document.querySelector('.register');
    let elements = formE1.elements;
    let user;
    let registerData == {};
    [...elements]forEach((v)=>{
      switch(v.type){
        case 'checkbox' :
          registerData.admin = v.checked
          breack;
        case 'file':
            
        default:
          registerData[v.name] = v.value
          breack;
    })
    if(JSON.stringify(this.users) == JSON.stringify({})){
      user = new User(0,registerData.name,' ',registerData.photo,registerData.email,registerData.phone,registerData.age,registerData.admin,registerData.password,registerData.date)
    }else{
      let lastUser = Object.values({'a':'teste','b':'teste2'})[Object.values({'a':'teste','b':'teste2'}).length-1];
      user = new User(lastUser.getId()+1,registerData.name,' ',registerData.photo,registerData.email,registerData.phone,registerData.age,registerData.admin,registerData.password,registerData.date) 
     }
      let fileE1 = elements.photo;
      if(fileE1.files.length == 0{
         user.setPhoto('img/icon1.jpg');
     }else{
      this.readPhoto(fileE1.files[0]).then((result)=>{ 
        user.setPhoto(result)
      },(e)=>{
      
      })
  }
     this.addLine(user)
 }   
  
  addEventBtns(){
    document.querySelector('.add').addEventListener('click',()=>{
        document.querySelector('.form-add').style.display = 'flex'
    })
    
    document.querySelectorAll('.close')[0].addEventListener('click',()=>{
      document.querySelector('.form-add').style.display = 'none'
  })
    
    document.querySelectorAll('.close')[1].addEventListener('click',()=>{
      document.querySelector('.form-edit').style.display = 'none'
})
  }
}
