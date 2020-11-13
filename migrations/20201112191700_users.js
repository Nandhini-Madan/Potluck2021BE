
exports.up = async function (knex) {
  await knex.schema.createTable('users', users => {
    users.increments("ID");

    users
      .string('firstName', 255)
      .notNullable()

    users
      .string('lastName', 255)
      .notNullable()

    users
      .string('emailId', 255)
      .notNullable()
      .unique();

    users
      .string('password', 255)
      .notNullable();
    users
      .string('userType', 255)
      .notNullable()
    .defaultTo('Guest');
  });
  
  await knex.schema.createTable('addpotluck', table => {
    table.increments('potluckId');
    table
      .string('potluckName')
      .notNullable()
    table
      .string('date')
      .notNullable()
    table
      .string('time')
      .notNullable()
    table
      .string('location')
      .notNullable()
    table
      .string('foodItems')
      .notNullable()
    table
      .integer('userId')
      .notNull()
      .defaultTo(1)
      .references("ID")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")

  });
  await knex.schema.createTable('inviteList', list => {
    list.integer('guestId')
      .notNull()
      .references('ID')
      .inTable('users')
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
    list
      .string('firstName')
      .notNullable()
    list
      .string('lastName')
      .notNullable()
    list
      .string('emailId')
      .notNullable()
    list
      .integer('inviteId')
      .notNull()
      .references('potluckId')
    .inTable('addpotluck')
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
  })


};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('inviteList');
  await knex.schema.dropTableIfExists('addpotluck');
  await knex.schema.dropTableIfExists('users');

};
