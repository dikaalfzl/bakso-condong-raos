import { motion } from 'framer-motion';

const CategoryFilters = ({ categories, activeCategory, onCategoryChange }) => {
  const allCategories = ['Semua', ...categories];

  return (
    <div className="flex flex-wrap gap-3 justify-center mb-8">
      {allCategories.map((category, index) => (
        <motion.button
          key={category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 focus:ring-4 focus:ring-primary-200 ${
            activeCategory === category
              ? 'bg-primary-600 text-white shadow-lg'
              : 'bg-white text-gray-700 hover:bg-primary-50 border border-gray-200'
          }`}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
};

export default CategoryFilters;