export const actionType = {
    SET_USER : 'SET_USER',
    SET_TALENT_ITEMS : 'SET_TALENT_ITEMS'
  };
  
  const reducer = (state, action) => {
    switch(action.type){
      case actionType.SET_USER:
        return{
          ...state,
          user : action.user,
        };
  
      case actionType.SET_TALENT_ITEMS:
        return{
          ...state,
          talentitems : action.talentitems,
        };
      default:
        return state;
    }
  };
  
  export default reducer;