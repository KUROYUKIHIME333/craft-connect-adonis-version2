import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'craftmen'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('userId').unsigned().notNullable().references('id').inTable('users')
      table.string('specialities').nullable()
      table.string('fields').notNullable()
      table.string('certifications').nullable()
      table.string('activityArea').notNullable
      table.string('professionalAddress').notNullable()
      table.string('identityDoc', 15).notNullable()
      table.string('identityDocNumber').notNullable()
      table.date('expirationDate').nullable()
      table.text('identityDocPics').defaultTo('no ID send')
      table.string('validation', 11).defaultTo('no validate')
      table.decimal('score').defaultTo('1')
      table.string('status', 10).defaultTo('working')

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
