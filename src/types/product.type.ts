interface Iproduct {
    id:number
    name:string
    price:number
    description:string
}
interface IActionGetProducts {
    type: "GET_PRODUCTS";
    payload: Iproduct[];
}
interface IActionCreateProduct {
    type: "CREATE_PRODUCT";
    payload: Iproduct;
}
interface IActionDeleteProduct {
    type: "DELETE_PRODUCT";
    payload: number;
}
interface IActionUpdateProduct {
    type: "UPDATE_PRODUCT";
    payload: Iproduct;
}

export type IActionProduct =
    | IActionGetProducts
    | IActionCreateProduct
    | IActionDeleteProduct
    | IActionUpdateProduct;

export default Iproduct