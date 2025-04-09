export type ItemType = {
  id: string;
  title: string;
};

export type ReactSetState<T> = React.Dispatch<React.SetStateAction<T>>;

export type ItemListProps = {
  items: ItemType[];
  setItems: ReactSetState<ItemType[]>;
};
