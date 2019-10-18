import { add_note, remove_note, json_product } from '../Const';
import json from "../data.json";

//add
const noteList = (action) => {
    let { text, date } = action;
    return {
        id: Math.random(),
        text,
        date
    }
}

//delete

const deleteNoteId = (state = [], id) => {
    const deleteItem = state.filter(ntd => ntd.id !== id)
    console.log("yeni deger istendi", noteList)
    return deleteItem;
}

// add - delete

export const noteFnc = ( state = [], action) => {

    let obj = null;
    switch (action.type) {
        case add_note:
            obj = [...state, noteList(action)]
            return obj;

        case remove_note:
            obj = deleteNoteId(state, action.id)
            return obj;
        
        case json_product:
            obj = json;
            return obj;
        default:
            return state
    }

}
