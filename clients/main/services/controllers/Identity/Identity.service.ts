import { apiCaller } from 'services/apiCaller'
import { IdentityUrls } from './urls'
import { IBodyLogin, IBodyRegister, IResponseAuth } from './models'

export class IdentityService {
  register(body: IBodyRegister) {
    return apiCaller.post<IResponseAuth>(IdentityUrls.register, body)
  }
  login(body: IBodyLogin) {
    return apiCaller.post<IResponseAuth>(IdentityUrls.login, body)
  }
}
