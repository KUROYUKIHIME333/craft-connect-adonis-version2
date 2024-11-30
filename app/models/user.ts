import { DateTime } from 'luxon'
//import hash from '@adonisjs/core/services/hash'
//import { compose } from '@adonisjs/core/helpers'
import { BaseModel, column } from '@adonisjs/lucid/orm'
//import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'

//const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
//  uids: ['email'],
//  passwordColumnName: 'password',
//})

//compose(BaseModel, AuthFinder)

export default class User extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare fullName: string | null

  @column()
  declare email: string

  @column()
  declare profilePicture: string // A imgbb or cloudinary link

  @column({ serializeAs: null })
  declare password: string

  @column()
  declare gender: string //M or F or X

  @column()
  declare birthdate: Date //DD/MM/AAAA

  @column()
  declare phoneNumber: string //+243XXXXXXXXX

  @column()
  declare mobileMoneyNumber: string //+243XXXXXXXXX

  @column()
  declare address: string

  @column()
  declare status: string //active or no active

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null
}
