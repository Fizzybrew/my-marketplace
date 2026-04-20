const CategoryItem = ({ category }) => {
  return (
    <button className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-md">
      <i className={`${category.svgUrl} text-3xl text-mauve-500/70 mb-2`}></i>
      <span className="text-sm font-medium text-gray-700">{category.name}</span>
    </button>
  );
};

export default CategoryItem;