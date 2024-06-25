import HomePage from "@/components/home/HomePage";
import HeaderContainer from "./HeaderContainer";

interface dropDownArr {
  label: string;
  text: string;
}

const HomePageContainer: React.FC = () => {
  const dropDownArr: dropDownArr[] = [
    {
      label: "What does HHY offer?",
      text: "We offer preventive and curative solutions, including elderly care, pregnancy care, operative care, and medical astrology, prioritising your well-being.",
    },
    {
      label: "How does HHY function?",
      text: "We provide patient-engaged, personalised, and tech-progressive care, ensuring comfort, empathy, and comprehensive medical expertise for optimal outcome.",
    },
    {
      label: "How can I start your services?",
      text: "Contact us to begin your journey toward a healthier, happier you. Our team will guide you through the process.",
    },
    {
      label: "Why choose home health care?",
      text: "Home health care prioritises convenience, comfort, and personalised support, ensuring your unique needs are met with empathy and expertise.",
    },
    {
      label: "What all data does HHY store? Is it Safe?",
      text: "We store essential medical data securely, adhering to strict safety protocols to ensure confidentiality and peace of mind for our clients.",
    },
  ];
  return (
    <>
      <HeaderContainer />
      <HomePage dropDownArr={dropDownArr} />
    </>
  );
};

export default HomePageContainer;
