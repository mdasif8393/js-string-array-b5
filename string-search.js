const products = [
    'Dell hardcore i29 200GB laptop',
    'iphone 1TB camera flashlight phone',
    'yellow laptop with black camera',
    '1X59 Lenovo commercial yoga laptop',
    'LG supernova laptop',
    'HTC low price phone',
    'purple color phone with laptop'
];

const searchProduct = 'laptop'
const newProduct = [];

for(const product of products) {
    // if(product.toLocaleLowerCase().indexOf(searchProduct.toLocaleLowerCase()) !== -1) {
    //     newProduct.push(product);
    // }
    // if(product.toLocaleLowerCase().includes(searchProduct.toLocaleLowerCase())){
    //     newProduct.push(product);
    // }
//     if(product.toLocaleLowerCase().startsWith(searchProduct.toLocaleLowerCase())){
//             newProduct.push(product);
//         }
// }
    if(product.toLocaleLowerCase().endsWith(searchProduct.toLocaleLowerCase())){
            newProduct.push(product);
        }
}

console.log(newProduct);