'use strict';

fetch('https://andrey-dok321.github.io/test4/')
.then((response) => {
    if (response.ok) {
        console.log("Все хорошо");
    } else {
        console.log("Произошла ошибка", response.status);
    }

})
