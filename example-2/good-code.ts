interface IOrder {
  canApplyCashback: boolean
  total: number
  totalAvailableCashback: number
}

function calculateTotalPriceOrder (order: IOrder) {
  const { canApplyCashback, total } = order

  if (canApplyCashback) {
    return applyCashback(order)
  }

  return total
}

function applyCashback (order: IOrder) {
  const { total, totalAvailableCashback } = order

  if (total <= totalAvailableCashback) {
    return 0
  }

  return total - totalAvailableCashback
}