let initialState = {
    itemList: [],
    loading: false,
    selectedItem: null,
    event: 'add',
    uplodingData: false,
    openAddModal: false
}

export function itemsReducer(state = initialState, action) {
    let itemList = [];

    switch (action.type) {
        case 'GET_ITEMS_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'GET_ITEMS_SUCCESS':
            return {
                ...state,
                itemList: action.payload,
                loading: false
            }
        case 'ADD_ITEMS_REQUEST':
            return {
                ...state,
                uplodingData: true
            }
        case 'ADD_ITEMS_SUCCESS':
            itemList = state.itemList
            itemList.unshift(action.payload)
            return {
                ...state,
                itemList: itemList,
                uplodingData: false,
                openAddModal: false
            }

        case 'UPDATE_ITEMS_REQUEST':
            return {
                ...state,
                uplodingData: true
            }
        case 'UPDATE_ITEMS_SUCCESS':
            itemList = state.itemList.map(item => {
                if (item.id == action.payload.id) {
                    return action.payload
                }
                return item
            })
            
            return {
                ...state,
                itemList: itemList,
                uplodingData: false,
                openAddModal: false
            }
        case 'ADD_ITEM_CLICKED':
            return {
                ...state,
                event: 'add',
                openAddModal: true
            }
        case 'EDIT_ITEM_CLICKED':
            return {
                ...state,
                event: 'edit',
                selectedItem: action.item,
                openAddModal: true
            }
        default:
            return {
                ...state
            }
    }
}