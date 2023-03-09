import { Rule } from 'antd/es/form'
import validator from 'validator'

export const emailValidator: Rule = () => ({
  validator(_, value) {
    if (!value) return Promise.reject()

    if (!validator.isEmail(value)) Promise.reject(new Error('The email or phone number is incorrect'))

    return Promise.resolve()
  },
})
