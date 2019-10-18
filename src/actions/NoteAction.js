import { add_note, remove_note, json_product } from '../Const';

export const addNote = (text, date) => {
    const action = {
        type: add_note,
        text: text,
        date: date
    }
    console.log("Item added", action)
    return action;
}

export const removeNote = (id) => {
    const action = {
        type: remove_note,
        id //id:id yazmakla ayni
    }
    return action;
}

export const jsonList = () => {
    const action = {
        type: json_product
    }
    return action;
}