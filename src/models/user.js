

import {
    getListData
} from '../../service/list';
export default {
  namespace: 'user',
  state: {
    name:'lanveer',
      data:[
          {
             id:1,
             book:1,
             times:2010
          }
      ]
  },


    effects:{
      *getListAct({payload},{call,put}){
          console.log('playload is:', payload);
         const listData=  yield call(getListData);
         console.log('list data is:', listData);
      }
    }
};
