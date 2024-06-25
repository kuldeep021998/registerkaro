import Header from "@/components/header/Header";

interface options {
  title: string;
}

const HeaderContainer: React.FC = () => {
  const options: options[] = [
    { title: "Home" },
    { title: "Our Services" },
    { title: "Blog" },
    { title: "Contact Us" },
    { title: "About Us" },
  ];
  return (
    <>
      <Header options={options} />
    </>
  );
};

export default HeaderContainer;
