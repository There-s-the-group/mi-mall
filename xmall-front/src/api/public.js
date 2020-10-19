import axios from 'axios'
axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/x-www=form-urlencoded'
export default {
  fetchGet (url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.get(url, params).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  fetchPost (url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.post(url, params).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  imgPost  (url, params) {
    return axios({
      method: 'post',
      url: url,
      data: params,
      // transformRequest: [function (data) {
      //   let ret = ''
      //   for (let it in data) {
      //     ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      //   }
      //   return ret
      // }],
      headers: {
        'Content-Type': 'multipart/form-data;charset=UTF-8'
      }
    })
  }
}
