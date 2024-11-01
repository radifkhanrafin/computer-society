import { TypeAnimation } from "react-type-animation";
import PhotoAlbum from "react-photo-album";
import "react-photo-album/styles.css";

const Our_success = () => {
  const successStories = [
    {
      programName: "Code for Good",
      description:
        "The 'Code for Good' initiative is an annual coding competition designed to inspire students to develop technology solutions addressing real-world social challenges. Participants collaborate in teams to create applications that improve community services, enhance social welfare, or tackle pressing local issues. This program encourages students to apply their coding skills for a noble cause, fostering a sense of social responsibility within the tech community.",
      achievements: [
        "Developed a mobile app for tracking local volunteer opportunities, making it easier for community members to engage with non-profit organizations.",
        "Engaged over 200 participants from various universities, fostering collaboration and knowledge-sharing among aspiring developers.",
        "Secured sponsorship from local NGOs and tech companies, which provided resources and mentorship to participants.",
      ],
      notableOutcome:
        "The winning team received funding and mentorship from a local venture capital firm to further develop their app into a full-fledged platform, which is now actively used by several non-profits.",
    },
    {
      programName: "Hackathon 2023",
      description:
        "Hackathon 2023 was a 48-hour event that brought together coders, designers, and entrepreneurs to innovate and create tech solutions. Participants formed teams to work intensively on projects, guided by mentors from the tech industry. The hackathon aimed to promote creativity, teamwork, and technical skills, culminating in a showcase where teams presented their projects to a panel of judges.",
      achievements: [
        "Over 300 participants registered, making it one of the largest hackathons in the region, with students from various fields contributing diverse skill sets.",
        "80+ projects were submitted, focusing on themes such as artificial intelligence, sustainability, and community service.",
        "Provided mentorship from industry experts to all teams, ensuring that participants received valuable insights and guidance throughout the competition.",
      ],
      notableOutcome:
        "Several projects were adopted by local businesses for real-world implementation, leading to potential job offers for participants and opportunities for further development.",
    },
    {
      programName: "Tech Talks Series",
      description:
        "The Tech Talks Series features a lineup of guest lectures by industry leaders who share their experiences and insights with students. This initiative aims to bridge the gap between academia and the tech industry by providing students with knowledge about current trends, career paths, and the skills needed to succeed in the tech world. Each session encourages interaction and networking, helping students build connections in the industry.",
      achievements: [
        "Hosted 5 sessions with renowned speakers from Google, Microsoft, and innovative startups, who shared their journeys and advice on navigating the tech landscape.",
        "Achieved an average attendance of 150 students per session, demonstrating a strong interest in learning from industry experts.",
        "Provided networking opportunities, allowing students to connect with professionals for potential internships and job opportunities.",
      ],
      notableOutcome:
        "Many students secured internships and job offers as a result of networking during the events, significantly enhancing their career prospects.",
    },
    {
      programName: "Women in Tech Workshop",
      description:
        "The Women in Tech Workshop is a dedicated program aimed at empowering female students in technology fields. Through a series of hands-on workshops and seminars, participants gain skills in coding, leadership, and professional development. The program fosters a supportive community, encouraging women to pursue careers in tech and break down barriers in a traditionally male-dominated industry.",
      achievements: [
        "Conducted workshops on coding languages, leadership strategies, and career development, equipping participants with essential skills for the tech industry.",
        "Engaged over 100 female participants, providing a platform for women to connect, collaborate, and inspire each other.",
        "Collaborated with women-led tech organizations, ensuring that the content was relevant and tailored to the needs of participants.",
      ],
      notableOutcome:
        "Several participants went on to become leaders in tech clubs and communities, inspiring the next generation of female technologists.",
    },
    {
      programName: "Summer Coding Bootcamp",
      description:
        "The Summer Coding Bootcamp is an immersive program designed to enhance programming skills among students over the summer break. This intensive bootcamp covers various topics, including web development, data science, and software engineering, providing hands-on experience through real-world projects. Participants benefit from expert instruction and mentorship, preparing them for future internships and job opportunities.",
      achievements: [
        "Trained 50 students in key areas such as HTML, CSS, JavaScript, Python, and data analysis techniques, providing a comprehensive learning experience.",
        "Emphasized hands-on projects and real-world problem-solving scenarios, ensuring that participants could apply their skills effectively.",
        "Partnered with local companies for potential job placements, facilitating a direct pathway from education to employment.",
      ],
      notableOutcome:
        "Many participants gained skills that helped them secure internships in tech companies, significantly boosting their employability in the competitive job market.",
    },
  ];

  const imageUrls = [
    "https://i.ibb.co/gJfLTS1/451135814-978059537446879-8878298797427396100-n.jpg",
    "https://i.ibb.co/Wt6w86r/451173094-978061000780066-5344627043911805358-n.jpg",
    "https://i.ibb.co/9qKygwd/451206319-978060404113459-4664016590416643421-n.jpg",
    "https://i.ibb.co/WHjY6gS/451342505-978060047446828-5923192216252983746-n.jpg",
    "https://i.ibb.co/dJGQ3J6/451072617-978061657446667-3160345547057702842-n.jpg",
    "https://i.ibb.co/16FZggy/451194899-978063124113187-2710161011920127063-n.jpg",
    "https://i.ibb.co/VWmjXJp/451353867-978062794113220-4837839128608064363-n.jpg",
    "https://i.ibb.co/dB3njK6/335189615-878633369861467-686774853002991367-n.jpg",
    "https://i.ibb.co/kyLtF2n/335449737-3400827970229504-1491752788094209501-n.jpg",
    "https://i.ibb.co/k8YrjsD/335644776-1875707546131228-5948252459884211373-n.jpg",
    "https://i.ibb.co/SfNYStp/336358185-597342968924394-9051486360073061066-n.jpg",
    "https://i.ibb.co/thsgxz9/336649233-1651014208675462-7656829540550559379-n.jpg",
    "https://i.ibb.co/kXyH9wW/336657728-751632983137094-7869517581064025414-n.jpg",
    "https://i.ibb.co/w4G3JqJ/336744353-786742009026492-1141342320035468090-n.jpg",
    "https://i.ibb.co/HNBvH7T/336749380-3303508273247177-1717661795545276093-n.jpg",
    "https://i.ibb.co/f1rL7S0/336751709-878680663429983-8830302337594010268-n.jpg",
    "https://i.ibb.co/VCXdhGm/336788673-1247155852869966-6306032582636284933-n.jpg",
    "https://i.ibb.co/5htsfxW/336795464-652586369961073-2774449039672143795-n.jpg",
    "https://i.ibb.co/FwfQn4t/336860590-162864579961225-4758366293567786384-n.jpg",
    "https://i.ibb.co/cJ0C5Sf/336871935-910443633503126-780906090233728498-n.jpg",
    "https://i.ibb.co/gWKdfhp/336878660-922756482368093-8460569255377321785-n.jpg",
    "https://i.ibb.co/rm3srfg/336884517-752812586248710-4942105037887307718-n.jpg",
    "https://i.ibb.co/XtTvHDf/336887785-758856615770612-5971844265394963706-n.jpg",
    "https://i.ibb.co/NNg3cJN/336384582-1271322140259898-356623360249290588-n.jpg",
    "https://i.ibb.co/DMQLmnm/336727035-903013467690530-1043673515899375989-n.jpg",
    "https://i.ibb.co/j6nr53m/336753383-745464820559566-1085493244614214761-n.jpg",
    "https://i.ibb.co/R4gspXP/336783245-922387722338252-7043367711633536170-n.jpg",
    "https://i.ibb.co/9TTn9Kp/336795034-932893991291847-2234640977236943339-n.jpg",
    "https://i.ibb.co/WHDNRsq/336881937-964043758104110-4336948467094048301-n.jpg",
    "https://i.ibb.co/HnDXM7s/336901759-1646600195762595-5343416618247061771-n.jpg",
    "https://i.ibb.co/Zx2XbYy/336904716-203976208989539-3772242215024810804-n.jpg",
    "https://i.ibb.co/N7cKZy1/338392620-620164296108829-1149088968184949959-n.jpg",
    "https://i.ibb.co/rkVS4KP/341157151-1238211060151646-2331954582492221464-n.jpg",
    "https://i.ibb.co/0YkGGzt/346821657-784073769986189-8974001894751066672-n.jpg",
    "https://i.ibb.co/SKBCd06/347801699-1248031452557665-4846378705562978598-n.jpg",
    "https://i.ibb.co/gZSrxYB/283180485-3214215492142528-4852477481872378408-n-2.jpg",
    "https://i.ibb.co/Krq6ThY/346806090-785384919837906-5855477607838606988-n.jpg",
    "https://i.ibb.co/bKtwLMB/347449342-3611145819165748-7946741228296464687-n.jpg",
    "https://i.ibb.co/JRj0PSN/354042480-3508934889337252-6414115996764164009-n.jpg",
    "https://i.ibb.co/hL0Q6fT/360089038-770497268203108-5899303868737452683-n-2.jpg",
    "https://i.ibb.co/RvX3Fhy/362999158-781086033810898-2675820791965437798-n.jpg",
    "https://i.ibb.co/9h81JDj/364658978-778797470706421-604079989837841696-n.jpg",
    "https://i.ibb.co/k8tdqQX/365406056-781109820475186-4073312225179016941-n.jpg",
    "https://i.ibb.co/wwhxzm3/365441935-781085660477602-1236228203555332153-n.jpg",
    "https://i.ibb.co/gVg3XHS/365471234-781109500475218-2443501348902424767-n.jpg",
    "https://i.ibb.co/pwM8TGD/398328526-833499175236250-8530184252834780683-n.jpg",
    "https://i.ibb.co/grXSPry/362694137-781086070477561-85696783202901880-n.jpg",
    "https://i.ibb.co/M58kN2F/362966404-781110310475137-713972220985978677-n.jpg",
    "https://i.ibb.co/fC7LjyH/363003099-781110107141824-6975126771009219043-n.jpg",
    "https://i.ibb.co/23dvdRk/363828594-781085613810940-4804335401090265038-n.jpg",
    "https://i.ibb.co/FXf5F2Y/365388496-781110010475167-312902081381661013-n.jpg",
    "https://i.ibb.co/746GWZt/365412275-781110223808479-7423223731458708992-n.jpg",
    "https://i.ibb.co/F3qBfn6/374572174-805538754698959-6214824764800232955-n.jpg",
    "https://i.ibb.co/CJZCDKv/398312860-833498811902953-8860291108230866680-n.jpg",
    "https://i.ibb.co/HnYd6TL/398419853-833499108569590-2890927535055936161-n.jpg",
    "https://i.ibb.co/P6CJrWR/398486943-833498721902962-4915637060466205570-n.jpg",
    "https://i.ibb.co/sR6nLzG/438109162-934170088502491-6530526774824852551-n.jpg",
    "https://i.ibb.co/6vSNK5h/438231159-929174422335391-8906207005509014461-n.jpg",
  ];

  const getRandomSize = () => {
    const width = Math.floor(Math.random() * (300 - 150 + 1)) + 150;
    const height = Math.floor(Math.random() * (300 - 150 + 1)) + 150;
    return { width, height };
  };

  const photos = imageUrls.map((url) => {
    const { width, height } = getRandomSize();
    return {
      src: url,
      width: width,
      height: height,
    };
  });
  return (
    <div>
      <p className="h-24"></p>

      <div>
        <p className="text-center">
          <TypeAnimation
            sequence={["Success of Our WUB Computer Society", 500]}
            wrapper="span"
            speed={0.5}
            style={{
              fontSize: "2em",
              display: "inline-block",
              fontFamily: '"Permanent Marker", cursive',
            }}
            repeat={Infinity}
          />
        </p>

        {/* success Stories */}

        <div className="container mx-auto my-8 space-y-16">
          {successStories.map((event, index) => (
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
              <h3 className="text-2xl font-bold">
                {index + 1}.{event.programName}
              </h3>
              <p
                className="mt-2"
                style={{ fontFamily: '"Permanent Marker", cursive' }}
              >
                {event.description}
              </p>
              <p
                className="mt-2"
                style={{ fontFamily: '"Permanent Marker", cursive' }}
              > <span className="underline">Achievements </span> : 
                {event.achievements.map((ac, index) => (
                  <span key={index}> {''}{ac} <br /></span>
                ))}
              </p>

            
              <p className="mt-2 font-semibold">
                <span className="underline">Objective</span> : {event.notableOutcome}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Photo Gallery Title */}
      <p className="text-center">
        <TypeAnimation
          sequence={["Photo Gallery of Our WUB Computer Society", 500]}
          wrapper="span"
          speed={0.5}
          style={{
            fontSize: "2em",
            display: "inline-block",
            fontFamily: '"Permanent Marker", cursive',
          }}
          repeat={Infinity}
        />
      </p>

      {/* Photo Album */}
      <div
        style={{
          height: "70vh",
          //   border: "2px red solid",
        }}
        className="overflow-scroll w-[90%] mx-auto rounded-md"
      >
        <PhotoAlbum
          photos={photos}
          layout="rows" // Change layout if needed
          columns={3} // Number of columns
          gap={6} // Gap between images
          renderPhoto={({ photo }) => (
            <div className="zoom-container">
              <img
                src={photo.src}
                alt=""
                style={{
                  width: photo.width,
                  height: photo.height,
                  transition: "transform 0.3s ease", // Smooth transition
                }}
                className="zoom-image" // Apply the zoom effect class
              />
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default Our_success;
