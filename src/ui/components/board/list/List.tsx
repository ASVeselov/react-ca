interface IProps {
  children: React.ReactNode[];
}

const List = ({ children }: Readonly<IProps>) => {
  return <div>{children}</div>;
};

export default List;
