import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('full_name').notNullable()
      table.string('profile_picture').nullable()
      table.string('email', 255).notNullable().unique()
      table.string('gender', 1).notNullable()
      table.date('birthdate').notNullable()
      table.string('password', 1000).notNullable()
      table.string('phone_number', 13).notNullable()
      table.string('mobile_noney_number', 13).nullable()
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
