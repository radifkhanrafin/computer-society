import { FaFacebook, FaMailBulk } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Tooltip } from "react-tooltip";
// import { Tooltip as ReactTooltip } from 'react-tooltip'

const Team_member_card = ({ member }) => {
  // Destructuring the keys
  const {
    id,
    name,
    position,
    email,
    phone,
    department,
    year,
    batch,
    shift,
    semester,
    hobby,
    skill,
    linkedin,
    facebook,
    responsibilities,
    profile_picture,
  } = member;
  console.log(member);
  return (
    <div className="w-full shadow-slate-500 border-none  md:w-full border-4 rounded-xl shadow-md hover:shadow-black overflow-hidden hover:shadow-xl transform hover:scale-105  mx-auto p-6 transition-all duration-1000">
      {/* Profile Picture */}
      <div className="flex justify-center mt-16">
        <img
          className="w-48 h-48 object-cover  transition-all duration-200 rounded-full border-4 border-white shadow-lg"
          src={member.profile_picture}
          alt={member.name}
        />
      </div>

      {/* Name and Position */}
      <div className="text-center mt-2">
        <h2 className="text-2xl font-extrabold text-white tracking-wide">
          {member.name}{" "}
        </h2>
        <p className="text-lg font-medium text-white my-2">{member.position}</p>

        {/* Skill */}

        <div className="flex gap-4 h-44">
          <div className="w-1/2 text-lg bg-slate-700 py-2 rounded-lg shadow-md  hover:shadow-2xl hover:shadow-black transition-all duration-1000 shadow-white font-medium text-white mt-2">
            <p>Skill : </p>
            <p className="">
              {skill.map((sk, index) => (
                <span className="px-2 inline-block" key={index}>
                  {sk}
                  {index < hobby.length - 1 ? "," : ""}
                </span>
              ))}
            </p>
          </div>

          {/* Info */}
          <div className="w-1/2 text-lg bg-slate-700 py-2 rounded-lg shadow-md  hover:shadow-2xl hover:shadow-black transition-all duration-1000 shadow-white font-medium text-white mt-2">
            <p>Hobby : </p>
            <p className="">
              {hobby.map((sk, index) => (
                <span className="px-2 inline-block" key={index}>
                  {sk}
                  {index < hobby.length - 1 ? "," : ""}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>

      {/* More Information */}

      <div className="mt-8">
        <p className="text-xl text-center bg-slate-700 py-2 rounded-lg shadow-md  hover:shadow-2xl hover:shadow-black transition-all duration-1000 shadow-white font-medium text-white mt-2">
          Identity : {batch} | {semester} Semester | {year}
        </p>
      </div>
      {/* More Social Information */}

      <div className="mt-8">
        <div className="flex justify-evenly  text-xl text-center bg-slate-700 py-2 rounded-lg shadow-md  hover:shadow-2xl hover:shadow-black transition-all duration-1000 shadow-white font-medium text-white mt-2">
          <a
            href={facebook}
            target="_blank"
            className="bg-white p-1 rounded-md"
          >
            <FaFacebook className="text-blue-600 text-2xl" />
          </a>
          <a
            href={linkedin}
            target="_blank"
            className="bg-white p-1 rounded-md"
          >
            {" "}
            <FaLinkedin className="text-blue-600" />
          </a>
          <a
            href={`mailto:${email}`}
            target="_blank"
            rel="noopener noreferrer"
            data-tooltip-content={email}
            className="bg-white p-1 rounded-md"
          >
            <img
              className="h-6 w-6"
              src="https://i.ibb.co/4dM2Kkj/png-transparent-mail-google-gmail-google-s-logo-icon-thumbnail.png"
              alt="Email Icon"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Team_member_card;
