// یه استانداده که باعث میشه رمم محصول به حالت استاندارد پول هر کشوری تبدیل بشه و کنارش علامت پول اون 
// کشور بیافته که کد پایینی برای دلار آمریکا نوشته شده و برای پول ایران هم فقط کافیست به جای یو اس کلمه اف ای رو بنویسیم
export const formatPrice = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number / 100);
};

export const getUniqueValues = () => {};
