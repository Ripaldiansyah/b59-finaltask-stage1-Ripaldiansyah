const voucher = [
  {
    codeVoucher: "DumbWaysJos",
    minShopping: 50000,
    discount: 21.1,
    maxDiscount: 20000,
  },
  {
    codeVoucher: "DumbWaysMantap",
    minShopping: 80000,
    discount: 30,
    maxDiscount: 40000,
  },
];

hitungVoucher = (codeVoucher, totalShopping) => {
  const isVoucherFinded = voucher.find(
    (v) => v.codeVoucher.toLowerCase() === codeVoucher.toLowerCase()
  );

  if (isVoucherFinded) {
    const isMinPaymentValid = totalShopping >= isVoucherFinded.minShopping;
    const discount = isMinPaymentValid ? isVoucherFinded.discount : 0;
    const totalDiscount =
      (totalShopping * discount) / 100 > isVoucherFinded.maxDiscount
        ? isVoucherFinded.maxDiscount
        : (totalShopping * discount) / 100;

    const payment = totalShopping - totalDiscount;

    console.log("Uang yang harus dibayar : ", payment);
    console.log("Diskon : ", totalDiscount);
    console.log("Kembalian : ", totalShopping - payment);
  } else {
    console.log("Voucher tidak ditemukan");
  }
};

hitungVoucher("DumbWaysMantap", 100000);
