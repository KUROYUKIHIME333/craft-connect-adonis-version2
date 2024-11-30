import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'bookings'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('customerId').unsigned().notNullable().references('id').inTable('users')
      table.integer('craftmanId').unsigned().notNullable().references('id').inTable('craftmen')
      table.string('jobName').notNullable()
      table.string('jobCost').notNullable()
      table.string('jobDescription', 400).nullable()
      table.date('jobDate').notNullable()
      table.string('jobHours', 20).notNullable
      table.string('status', 15).defaultTo('in verification')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
