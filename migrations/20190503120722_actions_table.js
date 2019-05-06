
exports.up = function(knex, Promise) {
    
    return knex.schema
    .createTable('actions', tbl => {
            
        tbl.increments()

        tbl.text('description')
        .notNullable()

        tbl.text('notes')

        tbl.boolean('completed')

        tbl.integer('project_id').unsigned().notNullable().references('id').inTable('projects')

    })
};

exports.down = function(knex, Promise) {
    return knex.scheme.dropTableIfExists('actions')
};
