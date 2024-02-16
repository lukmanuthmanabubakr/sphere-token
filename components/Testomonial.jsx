import React from "react";
import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

const Testomonial = () => {
  return(
    <section className="testimonial">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 text-center wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
              <div className="section-head">
                <h4 className="lasthead">
                  Testimonials
                </h4>
                <h2 className="title">
                  Don't just take our word for it!
                </h2>
                <p className="text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime fugiat animi magnam corrupti, harum.
                </p>
              </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
            <div className="about-testimonial">
              <img src="assets/img/world-map.png" alt="" />
              <div className="client one">
                <div className="img one" style={{backgroundImage: "url(assets/img/testi34.png)"}}>
                <div className="popover popover-default mypopover" id="myPopover">
                  <div className="client-review">
                    <div className="stars">
                      {[1,2,3,4,5].map((item,index) => (<i className="fas">
                        <FaStar/>
                      </i>))}
                    </div>
                    <p className="bottom-text">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div className="client-info">
                      <h4 className="name">Anate Ibrahim</h4>
                      <p className="position">
                        CEO & Founder
                      </p>
                    </div>
                  </div>
                </div>

                </div>
              </div>
              <div className="client two">
                <div className="img one" style={{backgroundImage: "url(assets/img/testi35.png)"}}>
                <div className="popover popover-default mypopover" id="myPopover2">
                  <div className="client-review">
                    <div className="stars">
                      {[1,2,3,4,5].map((item,index) => (<i className="fas ">
                        <FaStar/>
                      </i>))}
                    </div>
                    <p className="bottom-text">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div className="client-info">
                      <h4 className="name">Azeez Tijani</h4>
                      <p className="position">
                       Investor
                      </p>
                    </div>
                  </div>
                </div>

                </div>
              </div>
              <div className="client three">
                <div className="img one" style={{backgroundImage: "url(assets/img/testi3.png)"}}>
                <div className="popover popover-default mypopover" id="myPopover3">
                  <div className="client-review">
                    <div className="stars">
                      {[1,2,3,4,5].map((item,index) => (<i className="fas">
                        <FaStar/>
                      </i>))}
                    </div>
                    <p className="bottom-text">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div className="client-info">
                      <h4 className="name">Anate Ibrahim</h4>
                      <p className="position">
                        CEO & Founder
                      </p>
                    </div>
                  </div>
                </div>

                </div>
              </div>
              <div className="client four">
                <div className="img one" style={{backgroundImage: "url(assets/img/testi4.png)"}}>
                <div className="popover popover-default mypopover" id="myPopover4">
                  <div className="client-review">
                    <div className="stars">
                      {[1,2,3,4,5].map((item,index) => (<i className="fas">
                        <FaStar/>
                      </i>))}
                    </div>
                    <p className="bottom-text">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div className="client-info">
                      <h4 className="name">Anate Ibrahim</h4>
                      <p className="position">
                        CEO & Founder
                      </p>
                    </div>
                  </div>
                </div>

                </div>
              </div>
              <div className="client five">
                <div className="img one" style={{backgroundImage: "url(assets/img/testi5.png)"}}>
                <div className="popover popover-default mypopover" id="myPopover5">
                  <div className="client-review">
                    <div className="stars">
                      {[1,2,3,4,5].map((item,index) => (<i className="fas ">
                        <FaStar/>
                      </i>))}
                    </div>
                    <p className="bottom-text">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div className="client-info">
                      <h4 className="name">Anate Ibrahim</h4>
                      <p className="position">
                        CEO & Founder
                      </p>
                    </div>
                  </div>
                </div>

                </div>
              </div>
              <div className="client six">
                <div className="img one" style={{backgroundImage: "url(assets/img/testi6.png)"}}>
                <div className="popover popover-default mypopover" id="myPopover6">
                  <div className="client-review">
                    <div className="stars">
                      {[1,2,3,4,5].map((item,index) => (<i className="fas ">
                        <FaStar/>
                      </i>))}
                    </div>
                    <p className="bottom-text">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div className="client-info">
                      <h4 className="name">Anate Ibrahim</h4>
                      <p className="position">
                        CEO & Founder
                      </p>
                    </div>
                  </div>
                </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testomonial;
