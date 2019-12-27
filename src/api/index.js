import ajax from './ajax'
let testURl3 = 'http://192.168.11.102:20021'



export const sendExel = (data, num) => ajax(testURl3 + '/ex2pdf/sendFile/' + num + '', data, "POST", 'from') //发送消息


