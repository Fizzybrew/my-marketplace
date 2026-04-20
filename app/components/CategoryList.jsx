import CategoryItem from './CategoryItem';

const CategoryList = ({ categories }) => {
  return (
    <div className="px-5 py-4 pb-15">
      <h1 className="text-xl font-bold mb-4">Категории</h1>
      <div className="grid grid-cols-3 gap-4">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;