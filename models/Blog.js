const {Model} = require("../database/index");

const User = require("./User");

class Blog extends Model {
    static get tableName() {
        return "blogs";
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required:['content', 'user_id'],
            properties: {
                id: {type: 'integer'},
                content: {type: 'text', minLength: 1},
                user_id: {type: 'string'}
            }
        };
    }

    static get relationMappings() {
        return {
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: "blogs.user_id",
                    to: "users.id"
                }

            }
        };
    }
}

module.exports = Blog;
