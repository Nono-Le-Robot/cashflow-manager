import vine from '@vinejs/vine'

export const registerUserValidator = vine.compile(
  vine.object({
    firstname: vine.string().trim(),
    lastname: vine.string().trim(),
    username: vine
      .string()
      .trim()
      .minLength(4)
      .unique(async (db, value) => {
        const users = await db.from('users').where('username', value).first()
        return !users
      }),
    email: vine
      .string()
      .email()
      .unique(async (db, value) => {
        const users = await db.from('users').where('email', value).first()
        return !users
      }),
    password: vine.string().minLength(8),
  })
)

export const loginUserValidator = vine.compile(
  vine.object({
    email: vine.string().email(),
    password: vine.string().minLength(8),
  })
)
