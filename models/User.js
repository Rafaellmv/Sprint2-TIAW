class User{
  contructor(id, name, photo, email, phone, age, admin, password){
   this._id = id
    this._name = name
    this._photo = photo
    this._email = email
    this._phone = phone
    this._age = age
    this._admin = admin
    this._password = password
    let date = new Date()
    this._date = date.toLocaleDateString('pt-BR')+'   '+date.toLocaleDateString('pt-BR').slice(0,5)
  }
   
  getId(){
     return this._id;
  }
  getName(){
     return this._name;
  }
  getPhoto(){
     return this._photo;
  }
  getEmail(){
     return this._email;
  }
  getPhone(){
     return this._phone;
  }
  getAge(){
     return this._age;
  }
  getAdmin(){
     return this._admin;
  }
  getPassword(password){
    if(password === 'senha do Mod'){
     return this._password;
    }else{
      return 'senha incorreta'
  }
  getDate(){
     return this._date;
  }
 
  
}
