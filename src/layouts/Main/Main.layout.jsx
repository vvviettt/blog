import Header from "~/components/Home/Header";

function MainLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default MainLayout;
