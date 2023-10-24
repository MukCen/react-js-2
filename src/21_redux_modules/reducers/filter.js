import { CHANGE_FILTER } from "../../constants";

const FILTER_B =  'all';
// [
  //   {
  //     text: 'All',
  //     id: 'all',
  //     activeFilter: true
  //   },
  //   {
  //     text: 'Active',
  //     id: 'active',
  //     activeFilter: false
  //   },
  //   {
  //     text: 'Completed',
  //     id: 'completed',
  //     activeFilter: false
  //   }
  // ];
  

 const filters=(state=FILTER_B, { activeFilter,type})=>{
    switch (type) {
        case CHANGE_FILTER :
           return activeFilter;
         

           
    default:
        return state;
    }   
};
export  default filters;