import React from "react";
import { Link } from "react-router-dom";

const subTitle = "Choose Any Products";
const title = "Buy Everything with Us";
const btnText = "Get Started Now";

// const categoryList = [
//   {
//     imgUrl: "src/assets/images/category/01.jpg",
//     imgAlt: "category rajibraj91 rajibraj",
//     iconName: "icofont-brand-windows",
//     title: "DSLR Camera",
//   },
//   {
//     imgUrl: "src/assets/images/category/02.jpg",
//     imgAlt: "category rajibraj91 rajibraj",
//     iconName: "icofont-brand-windows",
//     title: "Shoes",
//   },
//   {
//     imgUrl: "src/assets/images/category/03.jpg",
//     imgAlt: "category rajibraj91 rajibraj",
//     iconName: "icofont-brand-windows",
//     title: "Photography",
//   },
//   {
//     imgUrl: "src/assets/images/category/04.jpg",
//     imgAlt: "category rajibraj91 rajibraj",
//     iconName: "icofont-brand-windows",
//     title: "Formal Dress",
//   },
//   {
//     imgUrl: "src/assets/images/category/05.jpg",
//     imgAlt: "category rajibraj91 rajibraj",
//     iconName: "icofont-brand-windows",
//     title: "Colorful Bags",
//   },
//   {
//     imgUrl: "src/assets/images/category/06.jpg",
//     imgAlt: "category rajibraj91 rajibraj",
//     iconName: "icofont-brand-windows",
//     title: "Home Decor",
//   },
// ];



const categoryList = [
    {
      imgUrl: "https://github.com/Bidyut-Sikder/frontEcommerce/blob/master/src/assets/images/category/01.jpg?raw=true",
      imgAlt: "category rajibraj91 rajibraj",
      iconName: "icofont-brand-windows",
      title: "DSLR Camera",
    },
    {
      imgUrl: "https://github.com/Bidyut-Sikder/frontEcommerce/blob/master/src/assets/images/category/02.jpg?raw=true",
      imgAlt: "category rajibraj91 rajibraj",
      iconName: "icofont-brand-windows",
      title: "Shoes",
    },
    {
      imgUrl: "https://github.com/Bidyut-Sikder/frontEcommerce/blob/master/src/assets/images/category/03.jpg?raw=true",
      imgAlt: "category rajibraj91 rajibraj",
      iconName: "icofont-brand-windows",
      title: "Photography",
    },
    {
      imgUrl: "https://github.com/Bidyut-Sikder/frontEcommerce/blob/master/src/assets/images/category/04.jpg?raw=true",
      imgAlt: "category rajibraj91 rajibraj",
      iconName: "icofont-brand-windows",
      title: "Formal Dress",
    },
    {
      imgUrl: "https://github.com/Bidyut-Sikder/frontEcommerce/blob/master/src/assets/images/category/05.jpg?raw=true",
      imgAlt: "category rajibraj91 rajibraj",
      iconName: "icofont-brand-windows",
      title: "Colorful Bags",
    },
    {
      imgUrl: "https://github.com/Bidyut-Sikder/frontEcommerce/blob/master/src/assets/images/category/06.jpg?raw=true",
      imgAlt: "category rajibraj91 rajibraj",
      iconName: "icofont-brand-windows",
      title: "Home Decor",
    },
  ];









const HomeCategory = () => {
  return (
    <div className="category-section style-4 padding-tb">
      <div className="container">
        {/* section header */}
        <div className="section-header text-center">
          <span className="title">{subTitle}</span>
        </div>
        {/* section card */}
        <div className="section-wrapper">
          <div className="row g-4 justify-content-center row-cols-md-3 rol-cols-sm-2 row-cols-1">
            {categoryList.map((vol, i) => {
              return (
                <div key={i} className="col">
                  <Link to={"/shop"} className="category-item">
                    <div className="category-inner">
                      {/* img thumb */}

                      <div className="category-thumb">
                        <img src={vol.imgUrl} alt="" />
                      </div>
                      {/* content */}

                      <div className="category-content">
                        <div className="cate-icon">
                          <i className={vol.iconName}></i>
                        </div>
                        <div to={"/shop"}>
                          <h6>{vol.title}</h6>
                        </div>
                      </div>
                    </div>
                  </Link>




                </div>
              );
            })}
          </div>
          {/* btn get started */}
          <div className="text-center mt-5">
            <Link to={"/shop"} className="lab-btn">
              {" "}
              <span>{btnText}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCategory;
