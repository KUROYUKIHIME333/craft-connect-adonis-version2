import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Payment extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare doneBookingId: number

  @column()
  declare billAmount: number

  @column()
  declare paymentMethod: string //mobile money or in cash

  @column()
  declare paymentState: string //confirmed, in progress, failed

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime
}
