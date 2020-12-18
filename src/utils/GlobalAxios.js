axios.defaults.headers.common["Authorization"] = this.$store.state.token;

axios.interceptors.request.use(
    function(config) {
      // Request 보내기 전에 수행됨
      // config 자체에는 request의 정보가 다 들어있음. url, headers, data 등
      // config를 반환하거나, Promise.resolve(config)으로 반환하면 되는 듯
      console.log(config)
      return config
    },
    function(error) {
      // Request 수행 중 오류 발생 시 수행됨
      return Promise.reject(error);
    },
  )

axios.interceptors.response.use(
    function (response) {
//        http status가 200인 경우 응답 성공 직전 실행. 
//        .then()
        return response;
    },

    function (error) {
//        http status가 200이 아닌 경우 응답 에러 직전 실행.
//        .catch()
        return Promise.reject(error);
    }
);