/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const AuthController = () => import('#controllers/auth_controller')

router.post('/userRegistration', [AuthController, 'userRegistration'])
router.post('/craftmanRegistration', [AuthController, 'craftmanRegistration'])
router.post('/tests', [AuthController, 'tests'])
router.get('/', async ({ request }) => {
  return request.all()
})
