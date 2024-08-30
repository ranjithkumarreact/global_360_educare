import React from "react";

const Whatwedo = () => {
  const Material = [
    {
      id: 1,
      img: require("../../assets/new-images/home-material/Study-Smarter-Not-Harder-icon-1.png"),
      tittle: "Study Smarter, Not Harder",
      phara:
        "Lifelong learners by showcasing stationery items optimized for studying and note-taking.",
    },
    {
      id: 2,
      img: require("../../assets/new-images/home-material/Study-Essentials-icon-2.png"),
      tittle: "Study Essentials",
      phara:
        "Stay ahead of the curve with our comprehensive collection of study essentials.",
    },
    {
      id: 3,
      img: require("../../assets/new-images/home-material/Desk-Organization-icon-3.png"),
      tittle: "Desk Organization",
      phara:
        "Transform your workspace into a model of efficiency with our desk organization solutions.",
    },
    {
      id: 4,
      img: require("../../assets/new-images/home-material/Personalized-Gifts-icon-4.png"),
      tittle: "Personalized Gifts",
      phara:
        "Make every occasion extra special with our personalized stationery gifts.",
    },
    {
      id: 5,
      img: require("../../assets/new-images/home-material/Crafting-Supplies-icon-5.png"),
      tittle: "Crafting Supplies",
      phara:
        "Dive into the world of crafting with our extensive range of supplies.",
    },
  ];
  return (
    <section className="full-row pt-5 pb-5 what_we_do_section">
        <div className="container">
          <div className="row row-cols-lg-5 row-cols-sm-2 row-cols-1 g-0 gy-3 gy-lg-0">
            {Material.map((item) => {
              return (
                <div className="col">
                  <div className="gray-right-line-one px-3 d-flex flex-column material-sec-img">
                    <div className="material-sec-img">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="mt-10">
                      <h5  className="mb-1 text-dark hover-text-primary transation-this">
                        
                          {item.tittle}
                       
                      </h5>
                      <p>{item.phara}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
    </section>
  );
};
export default Whatwedo;
