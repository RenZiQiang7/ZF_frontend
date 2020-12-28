import Address from "@/views/Address/Address";
import Delivery from "@/views/Address/Delivery";
import Amend from "@/views/Address/Amend";

var AddressRouter =[
    {
        path:"/Address",
        component:Address
    },
    {
        path:"/Delivery",
        component:Delivery
    },
    {
        path:"/Amend",
        component:Amend
    },


    
]
export default AddressRouter