const { dropTable } = require('../helpers/db');

exports.up = function(knex, Promise) {
    return knex.schema.createTable('resources', table => {
        table
            .increments();

        table
            .string('name')
            .notNullable()
            .unique();
    });
};

exports.down = dropTable('resources');