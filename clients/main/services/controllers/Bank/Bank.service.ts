import { apiCaller } from 'services/apiCaller'
import { BankUrls } from './urls'
import { IBodyAddCard, ICard } from './models'

export class BankService {
  addCard(body: IBodyAddCard) {
    return apiCaller.post<void>(BankUrls.addCard, body)
  }
  GetCards() {
    return apiCaller.get<ICard[]>(BankUrls.getCards)
  }
  deleteCards(id: number | string) {
    return apiCaller.delete<void>(BankUrls.route + '/' + id)
  }
}
