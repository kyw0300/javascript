'use strict';

// Callback Hell => Promise 로...
class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === 'admin' && password === '1234') ||
                    (id === 'student' && password === '0000')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            }, 2000);
        });
    }

    getRoles(user) {
        // console.log('getRoles', user);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'admin') {
                    resolve({ name: '관리자', role: 'admin' });
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        });
    }
}

const userStorage = new UserStorage();
const id = prompt('Enter your id');
const password = prompt('Enter your password');

userStorage
    .loginUser(id, password)
    // .then((user) => {userStorage.getRoles(user)})    // 아래 두 경우 왜 에러??
    // .then(function(user) {
    //     console.log('user', user);
    //     userStorage.getRoles(user);
    // })
    .then((user) => userStorage.getRoles(user))
    .then((user) => {
        // console.log('user', user);
        alert(`Hello ${user.name}, you have a ${user.role} role`)
    })
    .catch((error) => { console.log(error) });

/*
userStorage.loginUser(
    id,
    password,
    (user) => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error => {
                console.log(error);
            }
        );
    },
    (error) => {
        console.log(error);
    }
);
*/
