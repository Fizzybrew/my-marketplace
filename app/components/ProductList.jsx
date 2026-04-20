import ProductCard from "./ProductCard";

const ProductList = () => {
  const products = [
  { id: 1, title: 'Товар 1', price: 100, imageUrl: '...', seller: '', category: '' },
  { id: 2, title: 'Товар 2', price: 200, imageUrl: '...', seller: '', category: '' },
  { id: 3, title: 'Товар 3', price: 300, imageUrl: '...', seller: '', category: '' },
  { id: 4, title: 'Товар 4', price: 400, imageUrl: '...', seller: '', category: '' },
  { id: 5, title: 'Товар 5', price: 500, imageUrl: '...', seller: '', category: '' },
  { id: 6, title: 'Товар 6', price: 600, imageUrl: '...', seller: '', category: '' },
  { id: 7, title: 'Товар 7', price: 700, imageUrl: '...', seller: '', category: '' },
  { id: 8, title: 'Товар 8', price: 800, imageUrl: '...', seller: '', category: '' },
  { id: 9, title: 'Товар 9', price: 900, imageUrl: '...', seller: '', category: '' },
  { id: 10, title: 'Товар 10', price: 1000, imageUrl: '...', seller: '', category: '' },
];


  return (
    <div className="grid grid-cols-2 gap-1 pb-20">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          imageUrl={product.imageUrl}
          seller={product.seller}
        />
      ))}
    </div>
  );
};

export default ProductList;
