'use strict';

fetch('https://andrey-dok321.github.io/test4/')
.then((response) => {
    if (response.ok) {
        return response.json();
    } else {
        console.log("Произошла ошибка", response.status);
    }
})