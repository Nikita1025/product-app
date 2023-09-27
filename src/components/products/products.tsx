import {useProducts} from "@/hooks/useProducts";
import {Product} from "@/components/products/product/product";
import Link from "next/link";

export const Products = () => {
    const {products} = useProducts()
    return (<div >
            <Link href={'/products/new_product'}>Create product</Link>

            {products?.map(el => (
                <div key={el.id}>
                    <Product image={el.image}
                             price={el.price}
                             title={el.title}
                             category={el.category}
                             description={el.description}
                             id={el.id}
                    />
                </div>
            ))}
        </div>
    );
};

