const ADD_POST = "add-post"
const POST_CHANGE = "post-change"
let profileReduser = (state,action )=>{
    if(action.type === ADD_POST){
        let newPost = {name:state.name, text:state.text, img:"img", numberLikes:"11230"}
        // state.postsUser.unshift(newPost)
        state.text = ""
        // console.log(this._state.postsUser);
    }else if (action.type === POST_CHANGE){
        state.text = action.text
        state.name = action.name
    } 
    return state
}
export default profileReduser
export let addPostAC = ()=>{
    return{type: "add-post", id:1}
}
export let postChangeAC = (text, name)=>{
    return{type: "post-change", text:text, name:name}
}