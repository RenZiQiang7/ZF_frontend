import goodsorder from  "@/views/goodsorder/goodsorder";
import allorders from  "@/views/goodsorder/allorders";
import daifahuo from  "@/views/goodsorder/daifahuo";
import daifukuan from "@/views/goodsorder/daifukuan";
import daishouhuo from "@/views/goodsorder/daishouhuo";
var goodsOrderRouter={ 
    path: '/goodsorder', 
    component: goodsorder ,
    redirect: '/goodsorder/allorders',
    children:[
        { path: 'allorders', component: allorders },
        { path: 'daifahuo', component: daifahuo },
        { path: 'daifukuan', component: daifukuan },
        { path: 'daishouhuo', component: daishouhuo }

    ]
}

export default goodsOrderRouter