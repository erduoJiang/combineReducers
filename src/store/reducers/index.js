const usres = {
    userName:'程冰',
    age:'20'
}

const proList = [
    {
        name:'篮球',
        price:'2000'
    },
    {
        name:'球鞋',
        price:'30000'
    },
    {
        name:'短袖',
        price:'200'
    }
]
export function rootReducer(state={},action){
    console.log('rootReducer:',action)

    switch (action.type){
        case 'get_users':
            return {
                ...usres
            }
        case 'get_proList':
            return {
                proList:[...proList]
            }
        default:
            return state
    }
    // return state
}