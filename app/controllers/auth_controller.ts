import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import Craftman from '#models/craftman'
import argon2 from 'argon2'
import axios from 'axios'
//import { messages } from '@vinejs/vine/defaults'

export default class AuthController {
  async userRegistration({ request: req, response: res }: HttpContext) {
    try {
      const datas = req.only([
        'fullName',
        'profilePicture',
        'email',
        'gender',
        'birthdate',
        'password',
        'phoneNumber',
        'mobileMoneyNumber',
        'address',
      ])

      const userVerified = await User.query().where('email', datas.email).first()

      if (userVerified) {
        return res.json({
          message: 'User already exist',
        })
      } else {
        const user = User.create(datas)

        return res.status(201).json({
          message: 'User creation : success',
          user,
        })
      }
    } catch (error) {
      return res.json({
        message: 'An error has occured',
      })
    }
  }

  async craftmanRegistration({ request: req, response: res }: HttpContext) {
    try {
      const datas = req.only([
        'userId',
        'specialities',
        'fields',
        'certifications',
        'activityArea',
        'professionalAddress',
        'identityDoc',
        'identityDocNumber',
        'expirationDate',
        'identityDocPics',
      ])

      const craftmanVerified = await Craftman.query().where('userId', datas.userId).first()

      if (craftmanVerified) {
        return res.status(201).json({
          message: 'Craftman already exist',
        })
      } else {
        const craftman = new Craftman()

        craftman.userId = datas.userId
        craftman.specialities = datas.specialities
        craftman.fields = datas.fields
        craftman.certifications = datas.certifications
        craftman.activityArea = datas.activityArea
        craftman.professionalAddress = datas.professionalAddress
        craftman.identityDoc = datas.identityDoc
        craftman.identityDocNumber = datas.identityDocNumber
        craftman.expirationDate = datas.expirationDate
        craftman.identityDocPics = datas.identityDocPics

        console.log(craftman)

        return res.json({
          message: 'Craftman creation : success',
        })
      }
    } catch (error) {
      return res.status(201).json({
        message: 'An error has occured',
        error: error.message,
      })
    }
  }

  async tests({ response: res }: HttpContext) {
    return res.json({
      message: 'Test',
    })
  }
}
