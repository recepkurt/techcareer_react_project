import AddCustomer from "../views/customer/AddCustomer";
import CustomerDetail from "../views/customer/CustomerDetail";
import CustomerList from "../views/customer/CustomerList";
import CustomerUpdate from "../views/customer/CustomerUpdate";
import UpdateCustomer from "../views/customer/CustomerUpdate";

export const routeConfig = [
    {
        path:'/admin/CustomerList',
        element:<CustomerList/>
    },
    {
        path:'/admin/CustomerDetail',
        element:<CustomerDetail/>
    },
    {
        path:'/admin/CustomerUpdate/:id',
        element:<CustomerUpdate/>
    },
    {
        path:'/admin/AddCustomer',
        element:<AddCustomer/>
    }

]