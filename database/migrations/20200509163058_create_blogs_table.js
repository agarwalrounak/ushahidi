exports.up = function(knex) {
    return knex.schema.createTable("blogs", table => {
        table.increments("id");
        table.text("content").notNullable();
        table.string("user_id").notNullable();

        table.foreign("user_id")
            .references("id")
            .inTable("users")
            .onDelete("RESTRICT")
            .onUpdate("RESTRICT");
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("blogs");
};
