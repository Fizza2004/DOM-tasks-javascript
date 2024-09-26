// Tapşırıq 1: Element Yarat və DOM-a Əlavə Et
// Bir JavaScript funksiyası yazın ki, o yeni bir <div> elementi yaratsın və bu elementə mətn əlavə etsin. Funksiya yeni yaradılan elementi səhifənin body hissəsinə əlavə etməlidir.
const myElement = document.querySelector('.myFirstElement');
myElement.innerText = "Hello World!";
document.querySelector('body').append(myElement);
