import brands from '@/const/brands'

const addMaskCardNumber = (value) => {
  if (value === brands.master || value === brands.visa || value === brands.elo) {
    return '#### #### #### ####'
  }

  return '#### #### #### ####'
}

export default addMaskCardNumber
