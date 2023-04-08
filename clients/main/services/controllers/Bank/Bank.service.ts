import { apiCaller } from 'services/apiCaller'
import { BankUrls } from './urls'
import { IBodyAddCard, ICard } from './models'

export const BankService = () => {
  function addCard(body: IBodyAddCard) {
    return apiCaller.post<void>(BankUrls.addCard, body)
  }
  function GetCards(token: string) {
    return apiCaller.get<ICard[]>(BankUrls.getCards, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
  }
  function deleteCards(id: number | string) {
    return apiCaller.delete<void>(BankUrls.route + '/' + id)
  }

  return {
    addCard,
    GetCards,
    deleteCards,
  }
}
