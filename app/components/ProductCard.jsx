import Image from 'next/image';

const ProductCard = ({ title, price, imageUrl, seller }) => {
  return (
    <div className="flex flex-col gap-1 bg-white cursor-pointer">
      <Image
        src="/product1.jpg"
        alt={title}
        width={300}
        height={440}
        className="h-60 border border-black/30 rounded-xl"
        loading="lazy"
      />
      <div className="p-2">
        <p className="text-pink-600">{price} ₽</p>
        <h3>{seller}/{title}</h3>
        <button className="bg-purple-600 p-1 w-full flex flex-row gap-2 items-center justify-center rounded-xl text-white hover:bg-purple-700 cursor-pointer">
          <i className="fi fi-sr-shopping-cart flex items-center"></i>
          <span>Завтра</span>
        </button>
      </div>
    </div>
  );
};
export default ProductCard;
