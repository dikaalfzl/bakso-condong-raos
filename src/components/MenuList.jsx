import MenuCard from './MenuCard';

const MenuList = ({ items, onItemClick }) => {
  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">Tidak ada menu yang ditemukan</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <MenuCard
          key={item.id}
          item={item}
          onItemClick={onItemClick}
          isList={true}
        />
      ))}
    </div>
  );
};

export default MenuList;