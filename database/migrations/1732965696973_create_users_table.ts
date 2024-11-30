import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('fullName').notNullable()
      table.string('profilePicture').nullable()
      table.string('email', 255).notNullable().unique()
      table.string('gender', 1).notNullable()
      table.date('birthdate').notNullable()
      table.string('password', 1000).notNullable()
      table.string('phoneNumber', 13).notNullable()
      table.string('mobileMoneyNumber', 13).nullable()
      table.string('address').notNullable()
      table.string('status', 9).defaultTo('active')
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
