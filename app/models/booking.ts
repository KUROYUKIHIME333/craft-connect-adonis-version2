import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Booking extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare customerId: number

  @column()
  declare craftmanId: number

  @column()
  declare jobName: string

  @column()
  declare jobCost: string //Number or coast (2455 for example) + DEVISE

  @column()
  declare jobDescription: string

  @column()
  declare jobDate: Date // DD/MM/YYYY

  @column()
  declare jobHours: string // HH:MM:SS to HH:MM:SS

  @column()
  declare status: string // in verification, refused, confirmed, canceled ou done

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
