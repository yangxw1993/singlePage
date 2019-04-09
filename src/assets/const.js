const domain = 'http://api.com';
const perfix = '/api'
const BASE_URL = 'http://localhost:8081'
exports.URL = {
  GETTABLELIST: `${domain}${perfix}/editTable.php`,
  BASE_URL: BASE_URL,
  LIST: `${BASE_URL}/api/list`,
  USER: `${BASE_URL}/user`,
  TEST_API: `${BASE_URL}/test_api`,
  SEND_DATA: `${BASE_URL}/sendData`,
  GET_DATA: `${BASE_URL}/getData`,
  REGISTER_POST: `${BASE_URL}/register`,
}
