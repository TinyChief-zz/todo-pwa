import iziToast from 'izitoast'

export default {
  iziToast,
  registerEmailError: function () {
    iziToast.show({
      layout: 1,
      theme: 'light',
      title: 'Введите валидный адрес электронной почты.',
      position: 'topLeft',
      titleColor: 'red',
      titleSize: '16px',
      titleLineHeight: '2',
      icon: 'fas fa-exclamation',
      iconColor: 'red',
      overlay: true,
      overlayClose: true
    })
  },
  registerPasswordError: function () {
    iziToast.show({
      layout: 1,
      theme: 'light',
      title: 'Не валидный пароль',
      message: 'Пароль должен состоять минимум из 6 символов и содержать только цифры или буквы.',
      position: 'topLeft',
      titleColor: 'red',
      titleSize: '16px',
      titleLineHeight: '2',
      icon: 'fas fa-exclamation',
      iconColor: 'red',
      overlay: true,
      overlayClose: true
    })
  },
  registerEmailRepeat: function () {
    iziToast.show({
      layout: 1,
      theme: 'light',
      title: 'Аккаунт с таким адресом электронной почты уже существует.',
      position: 'topLeft',
      titleColor: 'red',
      titleSize: '16px',
      titleLineHeight: '1',
      icon: 'fas fa-exclamation',
      iconColor: 'red',
      overlay: true,
      overlayClose: true
    })
  },
  registerSuccess: function () {
    iziToast.show({
      layout: 1,
      theme: 'dark',
      position: 'topLeft',
      color: 'green',
      title: 'Регистрация прошла удачно.',
      message: 'Войдите в свой аккаунт.',
      titleLineHeight: '2',
      titleSize: '16px',
      icon: 'fas fa-check',
      overlay: true,
      overlayClose: true
    })
  },
  loginError: function () {
    iziToast.show({
      layout: 1,
      theme: 'light',
      title: 'Нет пользователя с такими данными.',
      position: 'topLeft',
      titleColor: 'red',
      titleSize: '18px',
      icon: 'far fa-user-circle',
      iconColor: 'red',
      overlay: true,
      overlayClose: true
    })
  },
  loginSuccess: function (name) {
    iziToast.show({
      layout: 1,
      theme: 'dark',
      position: 'topLeft',
      color: 'green',
      title: 'Добрый день, ' + name,
      titleSize: '18px',
      icon: 'far fa-user-circle',
      overlay: true,
      overlayClose: true
    })
  },
  taskError: function () {
    iziToast.show({
      layout: 1,
      theme: 'light',
      title: 'Не удалось создать запись.',
      message: 'Проверьте соединение с интернетом.',
      position: 'topLeft',
      titleColor: 'red',
      messageColor: 'red',
      titleSize: '18px',
      icon: 'far fa-user-circle',
      iconColor: 'red',
      overlay: true,
      overlayClose: true
    })
  },
  taskSuccess: function (name) {
    iziToast.show({
      layout: 1,
      theme: 'dark',
      position: 'topLeft',
      color: 'green',
      title: 'Запись успешно создана.',
      titleSize: '18px',
      icon: 'far fa-user-circle',
      overlay: true,
      overlayClose: true
    })
  },
  logoutUser: function (agree) {
    iziToast.question({
      timeout: false,
      layout: 1,
      theme: 'light',
      position: 'center',
      color: 'red',
      title: 'Вы действительно хотите выйти?',
      titleSize: '16px',
      icon: 'far fa-user-circle',
      overlay: true,
      overlayClose: true,
      class: 'test',
      buttons: [
        ['<button class="logout">ВЫЙТИ</button>', function (instance, toast) {
          instance.hide({
            transitionOut: 'fadeOutUp',
            onClosing: function (instance, toast, closedBy) {
              return true // The return will be: 'closedBy: buttonName'
            }
          }, toast, 'Yes')
        }, true], // true to focus
        ['<button class="cancel-logout">ОТМЕНА</button>', function (instance, toast) {
          instance.hide({
            transitionOut: 'fadeOutUp',
            onClosing: function (instance, toast, closedBy) {
              return false // The return will be: 'closedBy: buttonName'
            }
          }, toast, 'No')
        }]
      ]
    })
  }
}
