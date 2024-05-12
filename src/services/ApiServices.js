// Sse axios or ajax to fetch data from server here
// Example if use axios

// import axios from "axios"
// const ApiService = {
//   request(options, done){
//     //some config like set header default, etc...
//     axios(options).then(result => {
//       return done(null, result)
//     }).catch(error => {
//       return done(true, error.response);
//     })
//   }
//   getDataToday(params, done) {
//     const options = {
//       url: "",
//       method: "get", //post...
//       data: params,
//       headers: {}
//     }
//     ApiService.request(options, done)
//   }
// }