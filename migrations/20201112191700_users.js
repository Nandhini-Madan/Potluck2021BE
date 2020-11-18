
exports.up = async function (knex) {
  await knex.schema.createTable('users', users => {
    users.increments("ID")

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
      /*
    users
      .string('userType', 255)
      .notNullable()
      .defaultTo('Guest');*/
  });
/*
  await knex.schema.createTable('addPotluck', table => {
    table.increments('potluckId');
    table
      .string('potluckName',255)
      .notNullable()
    table
      .string('date',255)
      .notNullable()
    table
      .string('time',255)
      .notNullable()
    table
      .string('location',255)
      .notNullable()
    table
      .string('foodItems',255)
      .notNullable()
    table
      .string("notes",255)

    table
      .integer('userId')
      .notNull()

      .references("ID")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")

  });/*
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
      .inTable('addPotluck')
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
  })*/


};

exports.down = async function (knex) {

  //await knex.schema.dropTableIfExists('inviteList');
 // await knex.schema.dropTableIfExists('addPotluck');
  await knex.schema.dropTableIfExists('users');

};
