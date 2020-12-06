const add = (items, addedItem) => {
  const isExist = items.find((item) => item.id == addedItem.id);
  if (isExist) {
    return items.map((item) => {
      if (item.id === addedItem.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
  }
  return [...items, { ...addedItem, quantity: 1 }];
};

const remove = (items, removeItem) => {
  const isExist = items.find((item) => item.id === removeItem.id);
  if (isExist.quantity === 1) {
    return items.filter((item) => item.id !== removeItem.id);
  }
  return items.map((item) => {
    if (item.id === removeItem.id) {
      return { ...item, quantity: item.quantity - 1 };
    }
    return item;
  });
};

const deleteItem = (items, deletedItems) => {
  return items.filter((item) => item.id !== deletedItems.id);
};

export { add, remove, deleteItem };
