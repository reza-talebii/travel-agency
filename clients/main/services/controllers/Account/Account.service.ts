import {} from './models/body.models'
import { apiCaller } from 'services/apiCaller'
import { AccountUrls } from './urls'
import {} from './models'
import { IUser } from '@/models'

export class AccountService {
  GetUserInfo() {
    return apiCaller.get<IUser>(AccountUrls.userInfo)
  }
}
