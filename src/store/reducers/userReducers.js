const usres = {
    userName:'程冰',
    age:'20'
}
export function userReducers(state={},action){
    
    switch (action.type){
        case 'get_users':
            return {
                ...usres
            }
       
        default:
            return state
    }
}