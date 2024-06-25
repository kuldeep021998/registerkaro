import React from "react";
import bgImg from "@/app/assets/hompageImages/Section.svg";
import Image from "next/image";
interface dropDownArr {
  label: string;
}

interface HomePageProps {
  dropDownArr: dropDownArr[];
}

const HomePage: React.FC<HomePageProps> = (props) => {
  const { dropDownArr } = props;
  return (
    <React.Fragment>
      <div>
        <Image
          src={bgImg}
          alt="logo"
          // className="headerContainer-searchImg"
        />
      </div>
    </React.Fragment>
  );
};

export default HomePage;
