export class RegisteredUser {
  public name:string;
  public surname:string;
  public username:string;
  public password:string;


  constructor(name:string, surname:string, username:string, password:string) {
      this.name = name;
      this.surname = surname;
      this.username = username;
      this.password = password;
      }
}
