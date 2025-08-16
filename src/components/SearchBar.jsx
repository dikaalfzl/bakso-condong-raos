import { Search, X } from 'lucide-react';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="relative max-w-md mx-auto mb-8">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Cari menu..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-12 pr-12 py-4 bg-white border border-gray-200 rounded-xl focus:ring-4 focus:ring-primary-200 focus:border-primary-500 text-gray-700 placeholder-gray-400"
        />
        {searchTerm && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;