let array = filterArray(state.product);
        console.log(array)
        
            let quantity = state.quantity + 1;
            let pr = {};
            state.product.map((item) => {
                let itemId = item.id;
                if (itemId === action.payload.item.id) {
                    state.order[itemId] = item;
                    pr = state.order[itemId];
                    return {
                        ...state,
                        quantity,
                        order: {...state.order, pr}
                    }
                }
            })
            console.log(state.order)