import axios from 'axios';
const APP_URL = 'http://localhost:8080/api'

class ApiService {
  constructor(appUrl) {
    this.appUrl = appUrl;
    this.http = axios.create({
      baseURL: appUrl
    })

    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
    this.setToken = this.setToken.bind(this);
  }

  setToken(token) {
    console.log('setting token ', token);
    this.http = axios.create({
      baseURL: this.appUrl,
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
  }

  login(email, password) {
    return this.http.post('/auth/login/', {email, password})
  }

  signup(email, password) {
    return this.http.post('/auth/register/', {email, password})
  }
}

export default new ApiService(APP_URL);