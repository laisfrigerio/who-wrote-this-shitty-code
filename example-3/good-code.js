import brands from '@/const/brands'

const addMaskCardNumber = (brand) => {
  const { master, visa, elo } = brands
  if ([master, visa, elo].includes(brand)) {
    return '#### #### #### ####'
  }

  return '#### #### #### ####'
}

export default addMaskCardNumber
