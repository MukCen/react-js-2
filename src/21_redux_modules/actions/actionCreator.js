import ADD_TASK from "../../constants";

const addTask= (id, text,isComleted)=>({ 
type: ADD_TASK,
id,
text,

isComleted
});
export default addTask;