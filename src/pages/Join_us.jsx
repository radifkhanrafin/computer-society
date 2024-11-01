import { TypeAnimation } from "react-type-animation";

const Join_us = () => {
  const wubcsFAQ = [
    {
      question:
        "What is the World University of Bangladesh Computer Society (WUBCS)?",
      answer:
        "WUBCS is a student-led organization that focuses on enhancing the skills and knowledge of students in the field of computer science and technology. We offer various workshops, f_qs, and projects that promote learning, collaboration, and professional development.",
    },
    {
      question: "Why should I join WUBCS?",
      answer:
        "Joining WUBCS provides numerous benefits, including skill development through hands-on projects, networking opportunities with peers and industry professionals, access to resources, and chances to participate in competitions. It’s a great way to enhance your resume and gain valuable experience.",
    },
    {
      question: "Do I need to have advanced programming skills to join?",
      answer:
        "Not at all! WUBCS welcomes students of all skill levels, from beginners to advanced programmers. We offer training sessions and workshops to help you improve your skills, so you can join regardless of your current level.",
    },
    {
      question: "How can WUBCS help with my career?",
      answer:
        "WUBCS provides networking opportunities with industry professionals, access to internships, and guidance from experienced members. Participation in club activities and projects also helps build your resume, making you a more competitive candidate in the job market.",
    },
    {
      question: "What types of activities does WUBCS organize?",
      answer:
        "We organize a variety of activities, including workshops, coding competitions, hackathons, guest lectures, and social events. These activities are designed to foster learning, collaboration, and community building among members.",
    },
    {
      question: "How can I get involved in WUBCS activities?",
      answer:
        "You can get involved by attending our meetings, signing up for workshops, participating in projects, and volunteering for events. Keep an eye on our announcements and social media for upcoming activities and opportunities.",
    },
    {
      question: "Will I have opportunities for leadership within the society?",
      answer:
        "Yes! WUBCS offers members the chance to take on leadership roles within the organization. This experience can help you develop management, organizational, and communication skills that are valuable in any career.",
    },
    {
      question: "Is there a membership fee to join WUBCS?",
      answer:
        "Membership fees may vary depending on the activities and resources offered each semester. We strive to keep fees affordable to ensure all interested students can participate. Please check with our membership coordinator for specific details.",
    },
    {
      question: "How can I stay updated on WUBCS events and activities?",
      answer:
        "You can stay updated by following our social media accounts, joining our mailing list, and attending regular meetings. We also have a dedicated platform where we share news, events, and announcements.",
    },
    {
      question:
        "Who can I contact if I have more questions about joining WUBCS?",
      answer:
        "If you have any further questions, feel free to reach out to our current members or contact the WUBCS leadership team through our official communication channels. We’re happy to help!",
    },
  ];

  return (
    <div className="container">
      <p className="h-32"></p>
      
      
      <p className="text-center mb-8 ">
      <TypeAnimation
          sequence={[
            "Some Common Question And Answer About Our WUB Computer Society",
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
      </p>
      

     
      {wubcsFAQ.length > 1 &&
        wubcsFAQ.map((f_q, index) => (
          <>
          
            <div 

            key={index}
             className="collapse collapse-plus bg-base-200 mb-5 "

             >
              <input type="radio" name="my-accordion-3" defaultChecked />
              <div className="collapse-title text-xl font-medium">
               {index+1}. {f_q.question}
              </div>
              <div className="collapse-content">
                <p>
                  {f_q.answer}
                </p>
              </div>
            </div>
          </>
        ))}
      

    </div>
  );
};

export default Join_us;
