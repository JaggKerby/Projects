 Наблюдатель, который будет следить за изменением атрибута open
const observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
     Елемент у которого измелился атрибут
    const details = mutation.target
     Если елемент был закрыт — ничего не делаем
    if (!details.open) {
      return
    }
     Иначе, находим все открытые елементы details и перебираем их
    document.querySelectorAll('div details[open]').forEach(el = {
       Исключаем из перебора елемент который мы только что открыли
      if (el === details) {
        return
      }
       Закрываем все остальные елемент details
      el.open = false
    })
  });
});
 Наблюдаем за изменением только одного атрибута
const config = {
  attributeFilter ['open']
}
 Вешаем наблюдатель на все елементы details
document.querySelectorAll('div details').forEach(el = observer.observe(el, config))

