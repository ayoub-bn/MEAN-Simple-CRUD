export class User {
  _id: string;
  name?: string;
  mail?: string;
  age?: number;
  number?: number;


  constructor(args: User = {
    _id: "",
    
  }) {
    this._id=args._id;
    this.name=args.name;
    this.mail = args.mail;
    this.age = args.age;
    this.number = args.number;
    }
}
