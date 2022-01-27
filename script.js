'use strict'

function getDate() {

    function declOfNum(number, titles) {
        const cases = [2, 0, 1, 1, 1, 2];
        return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
    }

    const now = new Date();
    const nowDay=now.getDate()
    
    const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
        day = days[now.getDay()];

    const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Ноября', 'Декабря'],
        month = months[now.getMonth()];

    const year = now.getFullYear();

    const hours = ['час', 'часа', 'часов'],
        hour = now.getHours(),
        declinationH = declOfNum(hour, hours);

    const minutes = ['минута', 'минуты', 'минут'],
        minute = now.getMinutes(),
        declinationM = declOfNum(minute, minutes);

    const seconds = ['секунда', 'секунды', 'секунд'],
        second = now.getSeconds(),
        declinationS = declOfNum(second, seconds);

    const h2 = document.createElement('h2');
    h2.textContent = `Сегодня ${day}, ${nowDay} ${month} ${year} года, ${hour} ${declinationH} ${minute} ${declinationM} ${second} ${declinationS}`;
    document.body.appendChild(h2);
};
getDate()

function getDateShort() {
    const now = new Date();
    
    function getZero(number) {
        if (number > 0 && number < 10) {
            return '0' + number;
        } else {
            return number;
        }
    }

    const h2 = document.createElement('h2');
    h2.textContent=getZero(now.getDate()) + '.' + getZero(now.getMonth()+1) + '.' + now.getFullYear() + '-' + getZero(now.getHours()) + ':' + getZero(now.getMinutes()) + ':' + getZero(now.getSeconds());
    document.body.appendChild(h2);
};
getDateShort()

