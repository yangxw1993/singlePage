const domain = 'http://api.com';
const perfix = '/api'
const BASE_URL = 'http://localhost:8888'
exports.URL = {
  GETTABLELIST: `${domain}${perfix}/editTable.php`,
  BASE_URL: BASE_URL,
  LIST: `${BASE_URL}/api/list`,
  USER: `${BASE_URL}/user`,
  TEST_API: `${BASE_URL}/test/hello`,
  SEND_DATA: `${BASE_URL}/test/sendData`,
  GET_DATA: `${BASE_URL}/test/getData`,
  REGISTER_POST: `${BASE_URL}/register`,
}
