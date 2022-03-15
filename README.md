## Тестовое задание RooX

Для запуска:

```npm
npm install
npm start
```

#### Список пользователей:

:heavy_check_mark: Вывести 10 пользователей соответственно макету. Данные взять с https://jsonplaceholder.typicode.com/users

:heavy_check_mark: Пока идет загрузка списка пользователей должен быть индикатор загрузки( дизайн любой на усмотрение исполнителя )

:heavy_check_mark: Вывести на карточку:

```
-name
-address.city
-company.name
```

:heavy_check_mark: Кнопка “Подробнее” должна вести на “Профиль пользователя”

:heavy_check_mark: Реализовать фильтрацию списка по признаку Name и City в алфавитном порядке

#### Профиль пользователя:

:heavy_check_mark: Вывести в профиле:

```
-name
-username
-email
-address.street
-address.city
-address.zipcode
-phone
-website
```

:heavy_check_mark: Все поля формы, кроме Comment, должны быть предзаполнены из https://jsonplaceholder.typicode.com/users

:heavy_check_mark: Реализовать кнопку изменить, изначально поля должны быть readonly, после нажатия на кнопку поля можно редактировать

:heavy_check_mark: Реализовать валидацию на клиенте

:heavy_check_mark: Все поля формы, кроме поля Comment, обязательны для заполнения

:heavy_check_mark: Из данных формы при отправке нужно сформировать JSON и вывести его в rонсоль.
