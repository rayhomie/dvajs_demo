import request from '../utils/request';

export function query() {
  return request('/api/users');
}

export function topics() {
  return request('/api/v1/topics')
}
