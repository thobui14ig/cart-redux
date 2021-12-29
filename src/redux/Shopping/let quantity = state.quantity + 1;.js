let quantity = state.quantity + 1;
            let pr =state.order[action.payload.item.id];
            let array = filterArray(state.product);
            pr = array[action.payload.item.id];
     
            console.log(state.order)
            let a = { 
                2 : "ádd"
            }
            
            return {
                ...state,
                quantity,
                order: [...state.order, pr]
            }


            function filterArray(arr) {
                var rv = {};
                for (var i = 0; i < arr.length; ++i)
                  if (arr[i] !== undefined) rv[arr[i].id] = arr[i];
                return rv;
            }