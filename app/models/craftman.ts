import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Craftman extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare userId: number

  @column()
  declare specialities: string //expertise domains

  @column()
  declare fields: string //macon, frigoriste, plombier, électricien, peintre, menuisier, soudeur/ajusteur

  @column()
  declare certifications: string //diplomas, formations and other accreditations

  @column()
  declare activityArea: string //Communes where the craftman work

  @column()
  declare professionalAddress: string //C/commune Q/quartier AV/avenue N°numéro

  @column()
  declare identityDoc: string //passport, driving license, studend card, voter card

  @column()
  declare identityDocNumber: string

  @column()
  declare expirationDate: Date

  @column()
  declare identityDocPics: string // a base 64 encrypted picture stocked as text

  @column()
  declare validation: string //validate or no validate

  @column()
  declare score: number //0 to 5

  @column()
  declare status: string //working or no working

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
