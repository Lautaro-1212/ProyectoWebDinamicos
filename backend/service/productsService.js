import { findAll, findById, findByCode, create, updateById, deleteById} from '../repository/productsRepository.js';

export function getProdutcs(){
    return findAll()
}

export function getProductById(id){
    return findById(id)
}

export function getProductByCode(code){
    return findByCode(code)
}

export function saveProduct(product){
    return create(product)
}

export function updateProduct(id, product){
    return updateById(id, product)
}

export function deleteProduct(id){
    return deleteById(id);
}