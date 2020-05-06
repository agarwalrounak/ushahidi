const {Model} = require("../database/index");

class User extends Model {
    static get tableName() {
        return "users";
    }

    // To be used when primary column is named something other than "id"
    // static get idColumn() {
    //     return "user_id";
    // }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['id', 'email', 'password'],
            properties: {
                id: {type: 'string'},
                email: {type: 'string', format: 'email'},
                password: {type: 'string'}
            }
        }
    }
}

module.exports = User;
