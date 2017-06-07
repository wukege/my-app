/**
 * Created by kege on 2017/6/7.
 */
import axios from 'axios';
let urlPho = '/test/';
/**
 *@description 找到待我已审核的文章
 *@method getUnAuditArticles
 */
const getUnAuditArticles = (obj, cb)=> {
  axios.post(urlPho + 'sysUser/getAuditedArticles', obj)
      .then(function (response) {
        if (response.status >= 200 && response.status < 300) {
          cb(response.data);
        }
      })
      .catch(function (error) {
        return Promise.reject(error);
      });
};

export{
    getUnAuditArticles
}