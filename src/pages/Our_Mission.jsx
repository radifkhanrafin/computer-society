import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Font, {Text} from 'react-font'
const Our_Mission = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const topText = ` At the World University of Bangladesh’s Computer Club, we believe that
        technology has the power to transform lives and unlock boundless
        potential. Our mission is rooted in empowering students to explore,
        innovate, and develop the technical skills necessary to excel in the
        ever-evolving tech landscape. By fostering a culture of curiosity,
        collaboration, and continuous learning, we aim to prepare our members
        not only for successful careers but also to be drivers of change and
        innovation. Our club is more than just a gathering of tech enthusiasts;
        it is a supportive community where ideas are nurtured, projects are
        realized, and personal growth is prioritized. We are dedicated to
        building an inclusive environment that welcomes students from all
        backgrounds, whether they are beginners or advanced learners in
        technology. We believe that everyone can make a meaningful contribution
        to the field of technology, and we strive to provide the resources,
        mentorship, and encouragement they need to reach their full potential.
        To achieve this, we have designed a dynamic, year-long agenda that
        encompasses a wide range of activities focused on professional growth,
        practical experience, and technological exploration. Our carefully
        curated events aim to engage students through hands-on workshops,
        competitions, seminars, and networking opportunities with industry
        professionals. From building essential career skills to exploring
        emerging fields such as IoT, mobile app development, and cybersecurity,
        we have something for everyone  `;

  const clubEvents = [
    {
      title: "Tech Career Fair",
      description:
        "This fair will connect students with representatives from renowned tech companies, startups, and government organizations. Attendees will have the chance to explore internship and job opportunities, engage in networking, and attend short sessions on career growth and industry trends.",
      objective:
        "To help students bridge the gap between academia and the tech industry, giving them exposure to real-world careers and insights into different career paths.",
    },
    {
      title: "Digital Marketing Workshop",
      description:
        "This workshop will provide a practical introduction to digital marketing, focusing on content creation, SEO, and social media strategy. It will cover trending topics like influencer marketing, data-driven decision-making, and how to leverage platforms like Google Analytics.",
      objective:
        "Equip students with foundational marketing skills that are highly valuable across tech and business fields, preparing them for diverse career opportunities.",
    },
    {
      title: "Project Showcase",
      description:
        "This event offers students a platform to present their tech projects, including those developed in classes, personal projects, or hackathon entries. Peers, mentors, and judges will review and provide feedback on each project.",
      objective:
        "Encourage peer learning and recognize student achievements, inspiring others to work on hands-on projects and enhance their practical knowledge.",
    },
    {
      title: "Tech Quiz Competition",
      description:
        "A fun, knowledge-based competition that covers a wide array of tech topics such as programming, hardware, current tech trends, and foundational computer science concepts. This quiz will be open to all club members, with prizes for top performers.",
      objective:
        "Engage students in a light-hearted way to test and improve their tech knowledge, build teamwork skills, and promote a culture of continuous learning.",
    },
    {
      title: "Women in Tech Panel Discussion",
      description:
        "This panel will feature accomplished women in tech who will discuss their career journeys, share insights on overcoming challenges, and provide advice to aspiring female tech professionals. Attendees will have an opportunity to ask questions and network.",
      objective:
        "Foster an inclusive environment within our club, inspiring all members, especially women, to pursue and thrive in technology-related careers.",
    },
    {
      title: "Resume and Interview Preparation Workshop",
      description:
        "In this workshop, students will learn how to craft effective resumes, tailor applications for specific roles, and develop strong interviewing skills. Participants will receive tips on personal branding and may have the chance for one-on-one resume reviews.",
      objective:
        "Prepare students to confidently approach the job search process and enhance their prospects of securing internships and full-time roles.",
    },
    {
      title: "Career Opportunities in Web Development and UX/UI Design",
      description:
        "This seminar will provide a deep dive into web development and UX/UI design, covering the skills required, the different roles available (e.g., front-end vs. back-end development), and the importance of user experience. A guest speaker from the industry may join to offer firsthand insights.",
      objective:
        "Guide students interested in web and UX/UI fields, helping them understand the career landscape and identify the skills they need to focus on.",
    },
    {
      title: "Virtual Internship Fair",
      description:
        "In response to the rise of remote work, this event will connect students with companies offering virtual internships. Students can learn about roles in software development, digital marketing, data analysis, and more.",
      objective:
        "Provide students with access to valuable remote internships, allowing them to gain practical experience while balancing academic commitments.",
    },
    {
      title: "Data Privacy and Security Seminar",
      description:
        "This seminar will address the fundamentals of data privacy and cybersecurity, highlighting topics like encryption, data breaches, and personal data protection. Industry professionals will discuss current threats and the importance of ethical data management.",
      objective:
        "Educate members on the critical importance of data privacy, equipping them with skills to protect themselves and others in an increasingly connected world.",
    },
    {
      title: "Robotics Competition",
      description:
        "Teams will design and program robots to complete specified tasks or compete in challenges like maze navigation, object detection, or obstacle avoidance. The competition will culminate with a live showcase.",
      objective:
        "Encourage practical applications of programming and electronics, fostering creativity and technical problem-solving.",
    },
    {
      title: "Career Opportunities in Mobile App Development",
      description:
        "This seminar will explore career paths in mobile development, from Android and iOS development to cross-platform frameworks like Flutter and React Native. It will include a discussion on the skills needed and emerging trends in the field.",
      objective:
        "Provide guidance for students interested in mobile app development, introducing them to the latest tools and technologies to get started.",
    },
    {
      title: "IoT (Internet of Things) Seminar",
      description:
        "This seminar will introduce the Internet of Things, covering topics like sensor integration, data communication, and smart devices. Students will learn about IoT applications in fields like healthcare, agriculture, and urban planning.",
      objective:
        "Spark interest in IoT technology, providing foundational knowledge and potential career avenues in this expanding field.",
    },
  ];

  return (
    <div>
      <p className="h-28"></p>
      <div className=" flex flex-col gap-5" style={{ textAlign: "center" }}>
        <TypeAnimation
          sequence={[
            "Empowering Students Through Innovation and Growth in Technology",
            500,
          ]}
          wrapper="span"
          speed={0.5}
          style={{
            fontSize: "2em",
            display: "inline-block",
            fontFamily: '"Rubik Wet Paint", system-ui',
          }}
          repeat={Infinity}
        />

        <p className="text-xl text-justify  w-4/5 mx-auto">
          <div className="text-container ">
            <p
              style={{
                // border:"2px red solid",
                maxHeight: isExpanded ? "500px" : "60px",
                overflow: "hidden",
                transition: "all 1s ease",
                opacity: isExpanded ? 1 : 0.8,
              }}
              className=" inline"
            >
              {isExpanded ? topText : `${topText.slice(0, 450)}...`}
            </p>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className=" inline underline mt-2"
            >
              {isExpanded ? "see less." : "see more."}
            </button>
          </div>
        </p>
      </div>

      {/* One year plan */}

      <div className="container mx-auto my-8 space-y-16">
        {clubEvents.map((event, index) => (
          <div
            key={index}
            className={`py-8 px-5  w-full mb-5 rounded-lg shadow-md hover:shadow-xl hover:shadow-blue-950 transition-all duration-500 shadow-white  ${
              index % 2 === 0 ? "text-left" : "text-right"
            }`}
            style={{
              margin: index % 2 === 0 ? "0 auto 5 0" : "0 0 0 auto",
              maxWidth: "60%",
            }}
          >
            <h3 className="text-2xl font-bold" >{index+1}.{event.title}</h3>
            <p className="mt-2" style={{ fontFamily: '"Permanent Marker", cursive'}}>{event.description}</p>
            <p className="mt-2 font-semibold">Objective: {event.objective}</p>
          </div>
        ))}
      </div>

     



    </div>
  );
};

export default Our_Mission;
