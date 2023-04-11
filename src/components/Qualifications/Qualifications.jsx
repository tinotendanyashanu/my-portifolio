import React from "react";
import "./Qualifications.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.png";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Earned a Graphics Design Certificate from Alison Online, covering principles, tools, and skills for creating visually appealing graphics. Proficient in Adobe Photoshop, Illustrator, and InDesign. Ready to create impactful visuals for diverse media platforms.",
    },
    {
      img: profilePic2,
      review:
        "Certified Spring Boot Developer from Amigoscode online, proficient in building modern web applications with Spring Boot framework. Expertise in RESTful APIs, Spring Data, security, and deployment. Equipped to create high-performance, scalable Java-based applications.",
    },
    // {
    //   img: profilePic3,
    //   review:
    //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    // },
    // {
    //   img: profilePic4,
    //   review:
    //     "Certified Spring Boot Developer from Amigoscode online, proficient in building modern web applications with Spring Boot framework. Expertise in RESTful APIs, Spring Data, security, and deployment. Equipped to create high-performance, scalable Java-based applications.",
    // },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>These are some of</span>
        <span>The certifications </span>
        <span>I have...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
