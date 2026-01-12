import { createClient } from 'redis'
import 'dotenv/config'

const redis_url = process.env.REDIS_URL

const rclient = await createClient({url: redis_url}).connect()
await rclient.set('time', 'sd', {EX: 10})
console.log(await rclient.get('time'))
console.log(await rclient.ttl('time'))
await new Promise(resolve => setTimeout(resolve, 10000))
console.log(await rclient.get('time'))

// // await rclient.set('asd','asd')
// let value = await rclient.get('asd')
// console.log(value)

// // await rclient.del('cars')
// await rclient.rPush('cars', 'opel')
// await rclient.rPush('cars', '10')
// await rclient.rPush('cars', '12')
// value = await rclient.lRange('cars',0,-1)
// console.log(value)

// // await rclient.del('fff')
// // if (!rclient.exists('fff')) {
// //     await rclient.set('fff', '0')
// // }

// for (let i = 0; i < 10; i++) {
//     await rclient.incr('fff')
// }
// value = await rclient.get('fff')
// console.log(value)


// // await rclient.hSet('asd1', 'asd111', 'ddd')
// // await rclient.hSet('asd1', '222', '333')
// value = await rclient.hGetAll('asd1')
// console.log(value)
// value = await rclient.hKeys('asd1')
// console.log(value)
// value = await rclient.hVals('asd1')
// console.log(value)

rclient.destroy()