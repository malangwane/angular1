export class User {

  constructor(
    public firstName = '',
    public lastName = '',
    public email = '',
    public addressType = 'home',
    public street1?: string,
    public street2?: string,
    public city?: string,
    public zip?: string) { }
}
