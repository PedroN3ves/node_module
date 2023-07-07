const path = require('path')

//* const customPath = '/relatorios/carlos/relatoriosemnal.pdf'

//? directory 
//! console.log(path.dirname(customPath))

//? archive name
//! console.log(path.basename(customPath))

//? type of archive
//! console.log(path.extname(customPath))

// console.log(path.resolve('teste.txt'))

const midfolder = 'relatorios'
const fileName = 'arquivo.txt'

const finalPath = path.join('/', 'arquivos', midfolder, fileName)

console.log(finalPath)