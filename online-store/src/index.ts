import './global.scss';
import Page from './components/Page';

new Page().createPage();

// eslint-disable-next-line no-console
// console.log(`1. Главная страница содержит все товары магазина а также фильтры, строку поиска, поле для сортировки. Выполняются требования к вёрстке +10 \n
// 2. Карточка товара содержит его изображение, название, количество данного товара на складе, год выхода на рынок, цвет, производитель и т.д., находится ли товар в корзине +10 \n
// 3. Добавление товаров в корзину +20 \n
// кликая по карточке с товаром или по кнопке на нем, товар можно добавлять в корзину или удалять. Карточки добавленных в корзину товаров внешне отличаются от остальных +10 \n
// на странице отображается количество добавленных в корзину товаров. При попытке добавить в корзину больше 20 товаров, выводится всплывающее уведомление с текстом "Извините, все слоты заполнены" +10 \n
// 4. Сортировка +20 \n
// сортировка товаров по названию в возрастающем и убывающем порядке +10 \n
// сортировка товаров по цене в возрастающем и убывающем порядке +10
// 5. Фильтры в указанном диапазоне от и до +30 \n
// фильтры по цене +10 \n
// фильтры по году выпуска +10 \n
// для фильтрации в указанном диапазоне используется range slider с двумя ползунками. При перемещении ползунков отображается их текущее значение, разный цвет слайдера до и после ползунка +10 \n
// 6. Фильтры по значению +30 \n
// Выбранные фильтры выделяются стилем. \n
// фильтры виду украшения +5 \n
// фильтры виду вставки +5 \n
// фильтры виду металла +5 \n
// можно отобразить только популярные товары или новинки +5 \n
// можно отфильтровать товары по нескольким фильтрам одного типа +10 \n
// 7. Можно отфильтровать товары по нескольким фильтрам разного типа +20 \n
// Для нескольких фильтров разного типа отображаются только те товары, которые соответствуют всем выбранным фильтрам. \n
// Например, можно отобразить только кольца. Или новинки колец и заколок поступившие на рынок в 2010-2022 годах. \n
// Если товаров, соответствующих всем выбранным фильтрам нет, на странице выводится уведомление в человекочитаемом формате, например, "Извините, совпадений не обнаружено" \n
// 8. Сброс фильтров +20 \n
// есть кнопка reset для сброса фильтров +10 \n
// Кнопка reset сбрасывает только фильтры, не влияя на порядок сортировки или товары, добавленные в корзину. \n
// После использования кнопки reset фильтры остаются работоспособными \n
// при сбросе фильтров кнопкой reset, ползунки range slider сдвигаются к краям, значения ползунков возвращаются к первоначальным, range slider закрашивается одним цветом +10 \n
// 9. Сохранение настроек в local storage +30 \n
// выбранные пользователем фильтры, порядок сортировки, добавленные в избранное товары сохраняются при перезагрузке страницы. Есть кнопка сброса настроек, которая очищает local storage +10 \n
// 10. Поиск +30 \n
// при открытии приложения курсор находится в поле поиска +2 \n
// автозаполнение поля поиска отключено (нет выпадающего списка с предыдущими запросами) +2 \n
// есть placeholder +2 \n
// в поле поиска есть крестик, позволяющий очистить поле поиска +2 \n
// если нет совпадения последовательности букв в поисковом запросе с названием товара, выводится уведомление в человекочитаемом формате, например "Извините, совпадений не обнаружено" +2 \n
// при вводе поискового запроса на странице остаются только те товары, в которых есть указанные в поиске буквы в указанном порядке. При этом не обязательно, чтобы буквы были в начале слова. Регистр символов при поиске не учитывается +10 \n
// Поиск ведётся только среди товаров, которые в данный момент отображаются на странице. \n
// если очистить поле поиска, на странице отображаются товары, соответствующие всем выбранным фильтрам и настройкам сортировки +10\n
// Score: 220/220\n`); 