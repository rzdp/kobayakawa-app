interface ProductModel {
    id: number;
    name: string;
    description: string,
    price: number,
    imageUrl: string,
    createdBy: string,
    createdDate: Date,
    modifiedBy: string,
    modifiedDate: Date
}

export default ProductModel;