
exports.up = function(knex, Promise) {
  
    return knex.schema
        .createTable('projects', tbl => {
            
            tbl.increments()

            tbl.string('name', 255)
            .notNullable()

            tbl.text('description')

            tbl.boolean('completed')
        })
};

exports.down = function(knex, Promise) {
    return knex.scheme.dropTableIfExists('projects')
};
