class UserController{
  constructor(){
      this.addEventBtns();
      this.users = {}
  }
  
     addLine(user){
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
          this.readPhoto(v.files[0])  
        default:
          registerData[v.name] = v.value
          breack;
    })
    if(JSON.stringify(this.users) == JSON.stringify({})){
      user = new User(0,elements.name.value,elements.photo.value,elements.email.value,elements.phone.value,elements.age.value,elements.admin.value,elements.password.value,elements.date.value)
    }else{
      let lastUser = Object.values({'a':'teste','b':'teste2'})[Object.values({'a':'teste','b':'teste2'}).length-1];
      user = new User(lastUser.getId()+1,elements.name.value,elements.photo.value,elements.email.value,elements.phone.value,elements.age.value,elements.admin.value,elements.password.value,elements.date.value)  
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
