import calqlogicImage from "../../images/Acmegrade.png";
import prudentialImage from "../../images/Z.jpeg";
import codeNinjasImage from "../../images/CEHv12.jpeg";

const experience = [
  {
    id: 1,
    image: calqlogicImage,
    name: "Acmegrade",
    location: "Remote",
    duration: "March 2023 - April 2023",
    title: "Student Intern",
    quote: (
      <ul>
        <li>
        • Garnered hands-on expertise in threat detection, vulnerability assessment, and security protocols through a focused 3-month cybersecurity internship.
        </li>
        <li>
        • Performed Vulnerbility Assessment & Penetration Testing on the company's website and made a VAPT Report.
        </li>
        <li>
        • Learned about the various types of cyber attacks and how to prevent them.
        </li>
      </ul>
    ),
  },
  {
    id: 2,
    image: prudentialImage,
    name: "Ziroh Labs",
    location: "Remote",
    duration: "January 2022 - March 2022",
    title: "Development Intern",
    quote:
    (
      <ul>
        <li>
        • Worked with an aim to develop a "Bing on the day" Widget using java.
        </li>
        <li>
        • Interacted with client frequesntly to understand the requirements and to provide the best possible solution.
        </li>
        <li>
        • Showcased adaptability as a contributing member of the team
        </li>
      </ul>
    ),
  },
  {
    id: 3,
    image: codeNinjasImage,
    name: "CEHv12",
    location: "Online",
    duration: "June 2023 - Present",
    title: "CEHv12 Trainee",
    quote:
    (
      <ul>
        <li>
        • Attended a training program on CEHv12
        </li>
        <li>
        • Currently working on the CEHv12 course to get certified.
        </li>
      </ul>
    ),
  },
];

export default experience;
