export class User {
    firstName: string;
    lastName: string;
    birthDate: number; //(timestemp)
    street: string;
    zipcode: number;
    city: string;

    constructor(obj?: any) {
        this.firstName = obj ? obj.firstName : ''; //(Short if/else statement, when obj exists then obj.firstName else(the :) empty string)/ ?=if :=else
        this.lastName = obj ? obj.lastName : '';
        this.birthDate = obj ? obj.birthDate : '';
        this.street = obj ? obj.street : '';
        this.zipcode = obj ? obj.zipcode : '';
        this.city = obj ? obj.city : '';
    }

    public toJSON() {
        return {
             firstName: this.firstName,
             lastName: this.lastName,
             birthDate: this.birthDate,
             street: this.street,
             zipcode: this.zipcode,
             city: this.city

        }
    }
}