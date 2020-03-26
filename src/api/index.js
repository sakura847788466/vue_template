import ajax from './ajax'
let testURl3 = 'http://127.0.0.1:20003'


// export const sendExel = (data, num) => ajax(testURl3 + '/ex2pdf/sendFile/' + num + '', data, "POST", 'from') 

export const getMessage = (num) => ajax(testURl3 + '/v2.0/readConfig?number=' + num + '') //发送消息


