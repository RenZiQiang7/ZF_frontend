import Bill from "@/views/Bill/Bill";
import Prepaid from "@/views/Bill/Prepaid";
import Consume from "@/views/Bill/Consume";

var BillRouter =[
    {
        path:"/Bill",
        component:Bill
    },
    {
        path:"/Prepaid",
        component:Prepaid
    },
    {
        path:"/Consume",
        component:Consume
    },
    
]
export default BillRouter