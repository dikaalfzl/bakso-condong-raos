import MenuCard from './MenuCard';

const MenuGrid = ({ items, brand, phone }) => {
  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">Tidak ada menu yang ditemukan</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {items.map((item) => (
        <MenuCard
          key={item.id}
          item={item}
          brand={brand}
          phone={phone}
        />
      ))}
    </div>
  );
};

export default MenuGrid;