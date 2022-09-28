// import os from 'os'


// console.log(os.platform())
// console.log(os.userInfo())
// console.log(os.cpus())
// console.log(os.uptime())
// console.log(os.networkInterfaces())
// console.log(os.freemem())
// console.log(os.homedir())


// console.log(`your uptime is ${os.uptime} seconds`)


// import path from 'path'

// console.log(path.sep)

// import http from "http"

// const server = http.createServer((req, res) => {
//     if(req.url==='/'){
//         res.end('welcome to our home page')
//     }else
//     if(req.url === '/about'){
//         res.end('this is our about page')
//     }
//     res.end(
//         `<h3>Oops..!</h3>
//         <p>page is under construction</p>
//         <a href='/'>back Home</a>`
//     )
// })

// server.listen(5000)

import lodash from "lodash"

const item = [1,[12,[22,[323]]]]
const newItem = lodash.flattenDeep(item)
console.log(newItem)

