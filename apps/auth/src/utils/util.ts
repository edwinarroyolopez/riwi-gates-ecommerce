import CryptoJS from "crypto-js"
export class Util {
  static verifyData(...fields: (number | string | undefined)[]) {
    return fields.every(field=>field);
  }

  static encryptPassword(password:string, key:string = "123"):string{
    const passwordHashed = CryptoJS.AES.encrypt(password,key).toString();
    return passwordHashed;
  }
}
