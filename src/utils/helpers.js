// یه استانداده که باعث میشه رمم محصول به حالت استاندارد پول هر کشوری تبدیل بشه و کنارش علامت پول اون
// کشور بیافته که کد پایینی برای دلار آمریکا نوشته شده و برای پول ایران هم فقط کافیست به جای یو اس کلمه اف ای رو بنویسیم
export const formatPrice = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number / 100);
};


// این تابع دیتایی که لازم داریم رو برامون از کامپوننت میگیره  و مقادیر تکراری رو پاک میکنه تااز هر لیست یک نام در فیلتر نمایش داده بشه
export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);

  if(type === 'colors') {
    unique = unique.flat()
  }
  return ['all', ...new Set(unique)]
};
