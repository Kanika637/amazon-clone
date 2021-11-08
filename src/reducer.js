 export const initialState={
     basket:[],
     user:null,
 };

 //Selector
 //For the summing up the total price
 export const getBasketTotal=(basket)=>
 
     basket?.reduce((amount,item)=>
         item.price+amount,0);
     
  
//This is we are pushing the items in the basket(data layer)
 const reducer=(state,action)=>{
     console.log(action);
      switch(action.type){
          case 'ADD_TO_BASKET':
              return {
                  ...state,
                  basket:[...state.basket,action.item],
              };

              case "REMOVE_FROM_BASKET":
                  const index=state.basket.findIndex(
                      (basketItem)=> basketItem.id===action.id
                  );
                  let newBasket=[...state.basket];
                  if(index>=0){
                      newBasket.splice(index,1);

                  }
                  else{
                      console.warn(
                          'Cant remove product (id: ${action.id}) as its not in basket!'
                      )
                  }
                  return{
                      ...state,
                      basket:newBasket
                  }


              

                  case 'SET_USER':
                      return{
                          ...state,
                          user:action.user
                      }

                      case 'EMPTY_BASKET':
                          return {
                              ...state,
                              basket:[]
                          }

              default:
                  return  state;
      }

 };

 export default reducer;