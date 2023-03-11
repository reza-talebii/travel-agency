import { Rule } from 'antd/es/form'
import validator from 'validator'

export const emailValidator: Rule = () => ({
  validator(_, value) {
    if (!value || validator.isEmail(value)) {
      return Promise.resolve()
    }
    return Promise.reject(new Error('The email is not valid'))
  },
})

export const passwordConfirmValidator: Rule = ({ getFieldValue }) => ({
  validator(_, value) {
    if (!value || getFieldValue('password') === value) {
      return Promise.resolve()
    }
    return Promise.reject(new Error('The two passwords that you entered do not match!'))
  },
})
