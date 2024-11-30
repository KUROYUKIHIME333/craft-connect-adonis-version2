import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'payments'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('doneBookingId').unsigned().notNullable().references('id').inTable('bookings')
      table.integer('billAmount').unsigned().notNullable()
      table.string('paymentMethod', 12).notNullable()
      table.string('paymentState', 12).notNullable()

      table.timestamp('created_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
