import {UserService} from '@/services/user.service'
import {TokenService} from '@/services/storage.service'
import router from '@/router'

import {defineStore} from "pinia";

export const auth = defineStore("auth", {
    state: () => {
        return {
            authenticating: false,
            accessToken: '',
            /* casl rules from json
            [
              {
                action: actionName,
                subject: subjectName
              }
             ]
             */
            rules: TokenService.getRules() ?? [],
            authenticationErrorCode: 0,
            authenticationError: '',
            refreshTokenPromise: null, // Holds the promise of the refresh token
            UserInfo: TokenService.getUserInfo(),
            localSessionId: null,
            authorizedUser:!!TokenService.getToken()
        }
    },
    // state: () => ({
    //
    // }),
    getters: {
        _loggedIn: (state) => {
            return state.accessToken ? true : false
        },

        _authenticationErrorCode: (state) => {
            return state.authenticationErrorCode
        },

        _authenticationError: (state) => {
            return state.authenticationError
        },

        _authenticating: (state) => {
            return state.authenticating
        }
    },
    actions: {

        async login({username, password}) {
            loginRequest(this);

            try {
                const data = await UserService.login(username, password);
                loginSuccess(this, data)
                // Redirect the user to the page he first tried to visit or to the home view
                //router.push(router.history.current.query.redirect || '/');
                router.push('/');
                return true
            } catch (e) {
                console.log(e)
                // if (e instanceof AuthenticationError) {
                //     mutations.loginError({
                //         errorCode: e.errorCode,
                //         errorMessage: e.message,
                //         arrayOfMessage: e.arrayOfMessage
                //     }).bind(this)
                // }

                return false
            }
        },


        async logout() {
            logoutSuccess(this);
        }
    },
});

const loginRequest = (vm) => {
    vm.authenticating = true;
    vm.authenticationError = '';
    vm.authenticationErrorCode = 0
};
const loginSuccess = (vm, data) => {
    vm.accessToken = data.data.token;
    vm.UserInfo = data.data.username;
    vm.rules = data.data.permissions.map(el => {
        return {
            action: el,
            subject: "permissions"
        }
    });
    vm.authorizedUser = true;
    // vm.rules = [
    //     {
    //         action: "canUpdatePost",
    //         subject: "perm"
    //     },
    //     {
    //         action: "canUpdateComment",
    //         subject: "perm"
    //     }
    // ];
    vm.authenticating = false;
};
const logoutSuccess = async (vm) => {
    await UserService.logout();
    vm.accessToken = "";
    vm.rules = [];
    vm.UserInfo = null;
    vm.authorizedUser = false;
    await router.push('/login')
};

