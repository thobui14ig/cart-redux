const INIT_STATE = {
    product: [
        {id: 1, name: 'Iphone', price: 1000, qty:1, image: './images/iphone.jpg'},
        {id: 2, name: 'SamSung', price: 1500, qty:1, image: './images/samsung.jpg'},
        {id: 3, name: 'Oppo', price: 2000, qty:1, image: './images/oppo.jpg'}
    ],
    order: {},
    quantity: 0
}
// "1":{id: 1, name: 'Iphone', price: 1000, qty:1, image: './images/iphone.jpg'},
//         "2":{id: 2, name: 'SamSung', price: 1500, qty:1, image: './images/samsung.jpg'},
//         "3": {id: 3, name: 'Oppo', price: 2000, qty:1, image: './images/oppo.jpg'}

function filterArray(arr) {
    var rv = {};
    for (var i = 0; i < arr.length; ++i)
      if (arr[i] !== undefined) rv[arr[i].id] = arr[i];
    return rv;
}


const shopReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "ADD_PRODUCT":
            let quantity = state.quantity + 1;
            let itemOrder =state.order[action.payload.item.id];
            let objProduct = filterArray(state.product);

            

            itemOrder = objProduct[action.payload.item.id];

            if (itemOrder) {
                console.log
            }
            let newpr = state.order;
            newpr[action.payload.item.id] = itemOrder;
           
            console.log(state.order)
            return {
                ...state,
                quantity,
                order: newpr 
            }
          



            // console.log(action.payload.item) 
            // let quantity = state.quantity + 1;
            // let addProduct = action.payload.item;
            
            // const item = state.product.find(
            //     (product) => product.id === addProduct.id
            // );
            // console.log(item);

            // kiểm tra item có tồn tại không 
            // const inCart = state.order.find((item) =>
            //     item.id === addProduct.id ? true : false
            // );

            // return {
            //     ...state,
            //     quantity,
            //     order: inCart
            //       ? state.order.map((item) =>
            //           item.id === addProduct.id
            //             ? { ...item, qty: item.qty + 1 }
            //             : item
            //         )
            //       : [...state.order, { ...item, qty: 1 }],
            //   };
        // case 'REMOVE_ITEM': 
        //     let removeProduct = action.payload.item;
        //     let quantitys = state.quantity - removeProduct.qty;
        //     const check =  state.order.filter(item => item.id != removeProduct.id);
        //     return {
        //         ...state,
        //         quantity: quantitys,
        //         order: [...check]
        //     }
        
        // case 'SET_QUANTITY':
        //     let itemP = action.payload.item;
        //     let convertNumber = action.payload.value;
        //     let object = {};
        //     state.order.hasOwnProperty();
            

        //     case TypeAction.INCREMENT_QUANTITY:
        //   let item = state.carts.find(item => item.id === action.payload.id);
        //   if (item) {
        //     return {
        //       ...state,
        //       carts: state.carts.map(item => item.id === action.payload.id
        //         ? {
        //           ...item,
        //           quantity: action.payload.quantity,
        //           totalprice: action.payload.quantity * item.price
        //         }
        //         : item
        //       ),
        //       totalCartPrice: state.totalCartPrice + item.price,
        //     };
            
        //   }
            // state.order.map((item, i) => {
            //     object[i] = item;
            //     if (itemp.id === object[i].id) {
            //         object[i]
            //     }
            // })
            // console.log(object);


           
            // convertNumber = Number(convertNumber);
            // let updateQty = state.quantity + convertNumber - itemP.qty;
            // const updateQ = state.order.filter(item => item.id !== itemP.id);
            // state.order[i].qty=convertNumber
        
            // console.log(tam)
            // let cart = tam.reduce((a, b) => {
         
            //     return {qty: Number(a.qty) + Number(b.qty)};
            // })
            // console.log(cart)
            // return {
            //     ...state,
            //     quantity: total,
            //     order: [...updateQ, itemP]
            // }

        // default:
        //     break;
    }
    return state;
}

export default shopReducer;