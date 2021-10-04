function applyCashback (cashback, totalCashback, value) {
  if (cashback) {
      
    //- If valor cashback === valor compra
    if (value === totalCashback) {
      return 0;
    }

    //- if valor da compra maior que cashback
    else if (value > totalCashback) {
      return value - totalCashback;
    }

    //- if valor da compra inferior ao cashback
    else {
      return 0;
    }
  }

  return value;
}
