export class User {
  userId: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  role: string;
  gender: string;
  dob: string;
  constructor(obj?: Object) {
    this.map(obj);
  }
  public map(obj: Object): User {
    if (obj != null) {
      let key;
      for (key in obj) {
        this[key] = obj[key];
      }
    }
    return this;
  }
  public getUserId(): string {
    return this.userId;
  }
  public setUserId(userId: string): void {
    this.userId = userId;
  }
}
