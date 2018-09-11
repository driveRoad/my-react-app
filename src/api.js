import axios from 'axios';
import { Feedback } from '@icedesign/base';

const Toast = Feedback.toast;

function dealWithResult(response, resolve, reject) {
  Toast.hide();
  if (response.data && parseInt(response.data.code, 10) === 200) {
    Toast.success('获取数据成功');
    resolve(response.data.data);
  } else {
    // TODO 未授权 跳转到登录页
    Toast.success(`获取数据失败:${response.data.msg}`);
    reject(response.data.msg);
  }
}

function dealWithError(response, resolve, reject) {
  Toast.hide();
  Toast.error(`获取数据失败:${response.statusText}`);
  reject(response.statusText);
}

function post(url, body, param) {
  Toast.loading('加载数据中');
  return new Promise((resolve, reject) => {
    axios.post(url, body, { params: param, headers: { locale: 'zh_CN', Authorization: localStorage.getItem('token') } }).then((response) => {
      dealWithResult(response, resolve, reject);
    }, (response) => {
      dealWithError(response, resolve, reject);
    });
  });
}

export default {
  //测试跨站脚本攻击
  xssPost: (url, param) => {
    this.post(url,param);
  }
};
