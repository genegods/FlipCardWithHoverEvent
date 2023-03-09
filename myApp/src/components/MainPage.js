import React from "react";
import img1 from "../asserts/13.png";
import img2 from "../asserts/back.png";

const MainPage = () => {
  return (
    <React.Fragment>
      <main>
        <div class="h-screen centered">
          <div class="card relative">
            <div class="front">
              <img src={img2} alt="image" className="w-60 h-96" />
            </div>

            <div class="back absolute top-0">
              <img src={img1} alt="image" className="w-60 h-96" />
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default MainPage;
