/* eslint-disable no-undef */
export class ServiceApi {
  constructor (url) {
    this.url = url;
    this.headers = new Headers({
      'content-type': 'application/json'
    });
  }

  buscarEmail () {
    return fetch(`${this.url}/api/email`, {
      headers: this.headers
    });
  }

  async login (body) {
    const url = `${this.url}/user/login`;
    const res = await fetch(url, {
      headers: this.headers,
      method: 'POST',
      body: JSON.stringify(body)
    });
    return res;
  }

  buscarEmailById (idEmail) {
    return fetch(`${this.url}/api/email/${idEmail}`, {
      headers: this.headers
    });
  }

  buscarSms () {
    return fetch(`${this.url}/sms/reports`, {
      headers: this.headers
    });
  }

  sendSms (body) {
    const url = `${this.url}/sms/send`;
    return fetch(url, {
      headers: this.headers,
      method: 'POST',
      body: JSON.stringify(body)
    });
  }
}
