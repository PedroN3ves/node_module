const url = require('url')
var utf8 = require('utf8')

const adress = 'https://www.meusite,=.com.br/catalog?produtos=cadeira'

const parseUrl = new url.URL(adress)

console.log(parseUrl.host)
console.log(parseUrl.pathname)
console.log(parseUrl.search)
console.log(parseUrl.searchParams)
console.log(parseUrl.searchParams.get('produtos'))