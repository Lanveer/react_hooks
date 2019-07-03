

import { routerRedux } from 'dva/router';

export default {
  namespace: 'user',
  state: {
    currentUser: {
      isLoading: false,
      info: {}
    },
    loading: false,
  },
  effects: {
    *loginAct({ payload }, { put, call, select }) {
      // yield put(routerRedux.replace('/dashboard'));
      yield put({
        type: 'changeLoading',
        payload: true
      });


      console.log('dva data is:', payload)

      try {
        // const uniauthLoginRes = yield call(
        //   unniAuthlogin,
        //   payload.identity,
        //   payload.password,
        //   payload.captcha
        // );
        //
        // if (
        //   uniauthLoginRes.result.code &&
        //   uniauthLoginRes.result.code === 200
        // ) {
        //   console.log('unniAuthlogin data is:', uniauthLoginRes);
        //   // get ticket from uniauth
          yield put(routerRedux.push('/search'));
          // yield put({
          //   type: 'changeNeedVerifyCode',
          //   payload: false
          // });
        // } else {
        //   const needVerifyCode = yield select(
        //     ({ user }) => user.needVerifyCode
        //   );
        //
        //   if (needVerifyCode) {
        //     payload.reloadVerify && payload.reloadVerify();
        //   }
        //
        //   yield put({
        //     type: 'LoginPreAct'
        //   });
        // }
      } finally {
        // yield put({
        //   type: 'changeLoading',
        //   payload: false
        // });
        //
        // payload.onError && payload.onError();
      }
    },
    *geyMyUserInfo(_, { put, call }) {
      // yield put({
      //   type: 'changeMyInfoLoging',
      //   payload: true
      // });

      try {
        // const userInfoRes = yield call(getUserInfo);
        // yield put({
        //   type: 'changeMyInfo',
        //   payload: userInfoRes.result
        // });
      } catch (e) {
        // put(routerRedux.replace('/user/login'));
        throw e;
      } finally {
        // yield put({
        //   type: 'changeMyInfoLoging',
        //   payload: false
        // });
      }
    },
    *logoutAct(_, { call, put, all }) {
      sessionStorage.clear();
      try {
      } finally {
        yield all([
          put({
            type: 'logoutSuccess'
          }),
          put(routerRedux.replace('/user/login'))
        ]);
      }
    }
  },

  reducers: {
    changeLoading(state, action) {
      return {
        ...state,
        loading: action.payload
      };
    },
    changeNeedVerifyCode(state, action) {
      return {
        ...state,
        needVerifyCode: action.payload
      };
    },
    logoutSuccess(state) {
      return {
        ...state,
        currentUser: {
          info: null
        }
      };
    },
    changeMyInfo(state, action) {
      return {
        ...state,
        currentUser: {
          isLoading: false,
          info: action.payload
        }
      };
    },
    changeMyInfoLoging(state, action) {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          isLoading: action.payload
        }
      };
    }
  }
};
