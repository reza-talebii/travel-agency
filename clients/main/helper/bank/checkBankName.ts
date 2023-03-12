export const getBankName = (binNumber: string) => {
  switch (binNumber) {
    case '603799':
    case '۶۰۳۷۹۹':
      return { bankName: 'بانک ملی', logo: '/assets/images/banksIcon/meli.png' }
    case '621986':
    case '۶۲۱۹۸۶':
      return { bankName: 'بانک سامان', logo: '/assets/images/banksIcon/saman.png' }
    case '589210':
    case '۵۸۹۲۱۰':
      return { bankName: 'بانک سپه', logo: '/assets/images/banksIcon/sepah.png' }
    case '639346':
    case '۶۳۹۳۴۶':
      return { bankName: 'بانک سینا', logo: '/assets/images/banksIcon/sina.png' }
    case '627648':
    case '۶۲۷۶۴۸':
      return { bankName: 'بانک توسعه صادرات', logo: '/assets/images/banksIcon/toseeSaderat.png' }
    case '639607':
    case '۶۳۹۶۰۷':
      return { bankName: 'بانک سرمایه', logo: '/assets/images/banksIcon/sarmaye.png' }
    case '627961':
    case '۶۲۷۹۶۱':
      return { bankName: 'بانک صنعت و معدن', logo: '/assets/images/banksIcon/sanaat.png' }
    case '504706':
    case '۵۰۴۷۰۶':
      return { bankName: 'بانک شهر', logo: '/assets/images/banksIcon/shahr.png' }
    case '502806':
    case '۵۰۲۸۰۶':
      return { bankName: 'بانک شهر', logo: '/assets/images/banksIcon/shahr.png' }
    case '603770':
    case '۶۰۳۷۷۰':
      return { bankName: 'بانک کشاورزی', logo: '/assets/images/banksIcon/agribank.png' }
    case '502938':
    case '۵۰۲۹۳۸':
      return { bankName: 'بانک دی', logo: '/assets/images/banksIcon/dey.png' }

    case '628023':
    case '۶۲۸۰۲۳':
      return { bankName: 'بانک مسکن', logo: '/assets/images/banksIcon/maskan.png' }

    case '603769':
    case '۶۰۳۷۶۹':
      return { bankName: 'بانک صادرات', logo: '/assets/images/banksIcon/saderat.png' }

    case '627760':
    case '۶۲۷۷۶۰':
      return { bankName: 'پست بانک', logo: '/assets/images/banksIcon/postBank.png' }

    case '610433':
    case '۶۱۰۴۳۳':
      return { bankName: 'بانک ملت', logo: '/assets/images/banksIcon/mellat.png' }

    case '502908':
    case '۵۰۲۹۰۸':
      return { bankName: 'بانک توسعه تعاون', logo: '/assets/images/banksIcon/tosee.png' }

    case '627353':
    case '۶۲۷۳۵۳':
      return { bankName: 'بانک تجارت', logo: '/assets/images/banksIcon/tejarat.png' }

    case '627412':
    case '۶۲۷۴۱۲':
      return { bankName: 'بانک اقتصاد نوین', logo: '/assets/images/banksIcon/eghtesad.png' }

    case '589463':
    case '۵۸۹۴۶۳':
      return { bankName: 'بانک رفاه', logo: '/assets/images/banksIcon/refah.png' }

    case '622106':
    case '۶۲۲۱۰۶':
      return { bankName: 'بانک پارسیان', logo: '/assets/images/banksIcon/parsian.png' }

    case '507677':
    case '۵۰۷۶۷۷':
      return { bankName: 'موسسه نور', logo: '/assets/images/banksIcon/noor.png' }

    case '502229':
    case '۵۰۲۲۲۹':
      return { bankName: 'بانک پاسارگاد', logo: '/assets/images/banksIcon/pasargad.png' }

    case '606256':
    case '۶۰۶۲۵۶':
      return { bankName: 'موسسه ملل', logo: '/assets/images/banksIcon/mellal.png' }

    case '639599':
    case '۶۳۹۵۹۹':
      return { bankName: 'بانک قوامین', logo: '/assets/images/banksIcon/ghavamin.png' }

    case '606373':
    case '۶۰۶۳۷۳':
      return { bankName: 'بانک قرض الحسنه مهر ایرانیان', logo: '/assets/images/banksIcon/mehr.png' }

    case '627488':
    case '۶۲۷۴۸۸':
      return { bankName: 'بانک کارآفرین', logo: '/assets/images/banksIcon/bankKarAfarin.png' }

    case '505416':
    case '۵۰۵۴۱۶':
      return { bankName: 'بانک گردشگری', logo: '/assets/images/banksIcon/gardeshgari.png' }

    default:
      return { bankName: 'بانک ؟؟', logo: '' }
  }
}
