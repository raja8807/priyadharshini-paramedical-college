import Header from "./header/header";

const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout
