export default {
    currentpage: 0,
    loggedin: false,
    pages: ['page0','page1','page2'],
    page0: {
        id: 0,
        title: 'log in',
        valid: false,
        username: {
            value: '',
            classnames: [],
            valid: false,
            type: 'text'
        },
        password: {
            value: '',
            classnames: [],
            valid: false,
            type: 'password'
        }
    },
    page1: {
        id: 1,
        title: 'collect email',
        validate: false,
        email: {
            value: '',
            classnames: [],
            valid: false,
            type: 'text'
        },
    },
    page2: {
        id: 2,
        title: 'contact',
        message: {
            value: '',
            classnames: [],
            valid: false,
            type: 'textfield'
        },
    },
}