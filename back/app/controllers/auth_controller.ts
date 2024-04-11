import User from '#models/user'
import { loginUserValidator, registerUserValidator } from '#validators/auth'
import type { HttpContext } from '@adonisjs/core/http'
import hash from '@adonisjs/core/services/hash'

export default class AuthController {
  async register({ request, response }: HttpContext) {
    const { firstname, lastname, username, email, password } =
      await request.validateUsing(registerUserValidator)
    try {
      const user = await User.create({ firstname, lastname, username, email, password })
      const token = await hash.verify(user.password, password)
      if (token) {
        const tokenValue = await User.accessTokens.create(user, ['*'], {})
        return {
          status: 200,
          message: 'Login success !',
          data: {
            token: tokenValue,
            user: {
              id: user.id,
              username: user.username,
              email: user.email,
            },
          },
        }
      }
    } catch {
      return { error: 'registration error' }
    }
  }

  async login({ request, response, auth }: HttpContext) {
    const { email, password } = await request.validateUsing(loginUserValidator)
    const user = await User.findBy('email', email)
    if (!user) {
      response.abort({ message: 'Login error' })
    } else {
      const token = await hash.verify(user.password, password)
      if (token) {
        const tokenValue = await User.accessTokens.create(user, ['*'], {})
        return {
          status: 200,
          message: 'Login success !',
          data: {
            token: tokenValue,
            user: {
              id: user.id,
              username: user.username,
              email: user.email,
            },
          },
        }
      } else response.abort({ message: 'Login error' })
    }
  }

  async logout({ auth, response }: HttpContext) {
    const user = auth.getUserOrFail()
    const token = auth.user?.currentAccessToken.identifier
    if (!token) {
      return response.badRequest({ message: 'Token not found' })
    }
    await User.accessTokens.delete(user, token)
    return response.ok({ message: 'Logged out' })
  }
}
