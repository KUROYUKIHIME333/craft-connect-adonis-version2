import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import Craftman from '#models/craftman'
import argon2 from 'argon2'
import axios from 'axios'
//import { messages } from '@vinejs/vine/defaults'

export default class AuthController {
  //REGISTER A SIMPLE USER
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
      datas.password = await argon2.hash(datas.password)

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
  //  REGISTER A CRAFTMAN
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
        const craftman = Craftman.create(datas)

        return res.json({
          message: 'Craftman creation : success',
          craftman,
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
