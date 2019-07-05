

import {
    getListData
} from '../../service/list';
export default {
  namespace: 'user',
  state: {
    name:'lanveer',
    list:[],
    pList:[],
      author:'lanveer'
  },
    effects:{

      *getAuthor({payload, callback }, {call, put}){
          callback({cb:'this is cb'});
          yield put({
              type:'getAuthors',
              payload:{
                  author:payload.author
              }
          })
      },
      *getListAct({payload, callback},{call,put}){
         const listData=  yield call(getListData);
         callback(listData.result.data);
          yield put({
              type: 'saveList',
              payload: {
                  name: 'fanlang',
                  // list:listData.result.data
                  list:['1111', '22222']
              }
          });
      },

        *passwordAct({payload},{call,put}){
            yield put({
                type: 'savePList',
                payload: {
                    name: 'pwd-lanveer',
                    list:[1,2,3,4]
                }
            });
        }
    },
    reducers: {

        getAuthors(state,{payload:{author}}){
          return {
              ...state,
              author
          }
      },
        saveList(state, {payload:{list}}) {
            return {
                ...state,
                list
            }
        },
        savePList(state, {payload:{list, name}}) {
            return {
                ...state,
                pList:list,
                name
            }
        }
    },

    // do something when router change
    subscriptions: {
        setup({ dispatch, history }) {

            return history.listen( ({pathname, query}) => {
                if(pathname === '/counter') {
                    // dispatch({
                    //     type: 'user/getListAct'
                    // })
                }else if(pathname === '/password'){
                    dispatch({
                        type: 'user/passwordAct',
                    })
                }
            })
        },
    },

};
