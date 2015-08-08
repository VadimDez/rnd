/**
 * Created by Vadym on 08/08/15.
 */
export class User {
    constructor(firstName = '', lastName = '') {
        this.firstName = firstName
        this.lastName = lastName
    }

    set firstName(firstName) {
        this._firstName = firstName;
    }
    get firstName() {
        return this._firstName;
    }
    set lastName(lastName) {
        this._lastName = lastName;
    }
    get lastName() {
        return this._lastName;
    }
}
