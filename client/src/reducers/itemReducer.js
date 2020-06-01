import {v1 as uuid} from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, UPDATE_ITEM } from '../actions/types';

const initialState = {
    items: [
        { id: uuid(), name: 'Eggs' },
        { id: uuid(), name: 'Milk' },
        { id: uuid(), name: 'Fruits' },
        { id: uuid(), name: 'Candy' }
    ]
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_ITEMS:
            return {
                ...state
            }
        case ADD_ITEM:
        case DELETE_ITEM:
        case UPDATE_ITEM:
        default:
            return state;
    }

}