import { TypeAnimation } from "react-type-animation";
import Team_member_card from "../../Components/Team_member_card/Team_member_card";

const members = [
  {
    
    name: "Tawfiq Hassan Nayem",
    position: "President",
    email: "0322603586@student.wub.edu.bd",
    phone: "01518671646",
    department: "Computer Science and Engineering",
    year: "3rd Year",
    batch: "60C",
    shift: "Day",
    semester: "9th ",
    hobby: ['Riding', 'Tour', 'Gaming', 'Cycling', 'Learning'],
    skill: ['Leadership' , 'Communication', 'Creativity', 'Project management'],
    facebook: "https://www.facebook.com/TAWFIQ.HASSAN.NAYEM.0/",
    linkedin: "https://www.linkedin.com/in/tawfiqhassannayem/",
    responsibilities: "Oversees all club activities and manages meetings.",
    profile_picture: "https://i.ibb.co.com/qk1SVmD/IMG-20240312-WA0091-cop-Tawfiq-Hassan-Nayem.png",
  },
  {
    
    name: "Rafat Hoque Joy",
    position: "Vice President",
    email: "0322613650@student.wub.edu.bd",
    phone: "01705552524",
    department: "Computer Science and Engineering",
    year: "3rd Year",
    batch: "61B",
    shift: "Evening",
    semester: "8th ",
    hobby: ['Learning new technology '],

    skill: ['Networking', 'Computer Hardware', 'Graphics', 'Planning', 'Leadership' ],
    facebook: "https://www.facebook.com/rafat9x",
    linkedin: "https://www.linkedin.com/in/rafat-hoque-joy",
    responsibilities: "Oversees all club activities and manages meetings.",
    profile_picture: "https://i.ibb.co.com/tCFjmgL/IMG-9501-copy-RAFAT-MD-SHAHRIAR-HOQUE-JOY.jpg",
  },
 
  {
    
    name: "Rafat Hoque Joy",
    position: "Vice President",
    email: "0322613650@student.wub.edu.bd",
    phone: "01705552524",
    department: "Computer Science and Engineering",
    year: "3rd Year",
    batch: "61B",
    shift: "Evening",
    semester: "8th ",
    hobby: ['Learning new technology '],

    skill: ['Networking', 'Computer Hardware', 'Graphics', 'Planning', 'Leadership' ],
    facebook: "https://www.facebook.com/rafat9x",
    linkedin: "https://www.linkedin.com/in/rafat-hoque-joy",
    responsibilities: "Oversees all club activities and manages meetings.",
    profile_picture: "https://i.ibb.co.com/tCFjmgL/IMG-9501-copy-RAFAT-MD-SHAHRIAR-HOQUE-JOY.jpg",
  },
 
  {
    
    name: "Md Mahfuz Hossain",
    position: "Executive Member",
    email: "0324664005@student.wub.edu.bd",
    phone: "01621961907",
    department: "Computer Science and Engineering",
    year: "1rd Year",
    batch: "66A",
    shift: "Day",
    semester: "3rd ",
    hobby: ['Programming Contest','Create Website','Ride Bike'],

    skill: ['C', 'CPP', 'DSA','Web Development (MERN Stack)', 'Leadership' ],
    facebook: "https://www.facebook.com/radifbro01621961907",

    linkedin: "https://www.linkedin.com/in/md-mahfuz-hossain-314188284/",
    responsibilities: "Oversees all club activities and manages meetings.",
    profile_picture: "https://i.ibb.co.com/XSgdQwy/profile.jpg",
  },
 
];
// members.map(mem=>console.log(mem) )
const Team_info = () => {
  return (
    <div className="">
      <p className="h-20"></p>
      <h2 className="mt-20 mb-16 text-3xl px-2  md:text-4xl font-semibold  text-center">
      <TypeAnimation
          sequence={[
            "About Our Executive Committee 2024-2025",
            500,
          ]}
          wrapper="span"
          speed={0.5}
          style={{
            display: "inline-block",
            fontFamily: '"Rubik Wet Paint", system-ui',
          }}
          repeat={Infinity}
        />

         </h2>
      <div className="mx-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:::grid-cols-4 gap-8">
        {members.map((member) => (
          <Team_member_card key={member.id} member={member}></Team_member_card>
        ))}
      </div>
    </div>
  );
};

export default Team_info;
