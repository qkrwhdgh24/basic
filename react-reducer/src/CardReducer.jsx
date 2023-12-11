
export const init = {
    items: [],//카트에 담기는 상품을 배열로 받아오기 위해 초기값을 빈 배열로 선언
    totalItems: 0,//전체 선택 아이템의 갯수
    totalAmount: 0,//전체 아이템의 가격
}

export function cartReducer(state, action) {
    switch (action.type) {
        case 'add-item':
            const ownIndex = state.items.findIndex((item) => item.id === action.pay.id);
            if (ownIndex >= 0) {
                const updateItems = state.items.map((item, index) =>
                    index === ownIndex ? { ...item, quantity: (item.quantity || 1) + 1 } : item)
                return {
                    ...state,
                    items: updateItems,
                    totalAmount: state.totalAmount + action.pay.price
                }
            } else {
                return {
                    ...state,
                    items: [...state.items, { ...action.pay, quantity: 1 }],
                    totalItems: state.totalItems + 1,
                    totalAmount: state.totalAmount + action.pay.price
                }
            }


        case 'remove-item':

            const itemIndex = state.items.findIndex((item) => item.id === action.pay.id);
            if(itemIndex < 0){
                return state
            }
            const updateItem = state.items.filter((_, index) => index !== itemIndex);
            const removeItem = state.items[itemIndex];
            return {
                ...state,
                items: updateItem,
                totalItems: state.totalItems - 1,
                totalAmount: state.totalAmount - (removeItem.price * removeItem.quantity)
            }

        case 'update-item':
            const updateItemIndex = state.items.findIndex((item) => item.id === action.pay.id);
            if (updateItemIndex === -1) {

                return state;
            }


            const updatedItem = {
                ...state.items[updateItemIndex],
                quantity: action.pay.quantity
            };


            const updatedItems = state.items.map((item, index) =>
                index === updateItemIndex ? updatedItem : item
            );


            const newTotalAmount = updatedItems.reduce((total, item) =>
                total + item.price * (item.quantity || 1), 0
            );

            return {
                ...state,
                items: updatedItems,
                totalAmount: newTotalAmount
            };


    }
}

