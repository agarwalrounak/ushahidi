exports.up = function(knex) {
    return knex.schema.createTable("users", table => {
        table.string("id").notNullable().primary();
        table.string("email").notNullable().unique();
        table.string("password").notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("users");
};
