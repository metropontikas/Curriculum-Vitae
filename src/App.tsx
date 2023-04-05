// Components
import { Section } from "./components/Section/Section";
import { TextWrapper } from "./components/TextWrapper/TextWrapper";
import { HeaderWrapper } from "./components/HeaderWrapper/HeaderWrapper";
import { ContactMedium } from "./components/ContactMedium/ContactMedium";
import { BasicRating } from "./components/Ratings/BasicRating";
import { ExcellentRating } from "./components/Ratings/ExcellentRating";
// Assets
import LanguageSVG from "./assets/svgComponents/LanguageSVG";
import SoftwareSVG from "./assets/svgComponents/SoftwareSVG";
import SkillsSVG from "./assets/svgComponents/SkillsSVG";
import ContactSVG from "./assets/svgComponents/ContactSVG";
import EducationSVG from "./assets/svgComponents/EducationSVG";
import CertificationSVG from "./assets/svgComponents/CertificationSVG";
import WorkExperienceSVG from "./assets/svgComponents/WorkExperienceSVG";
import AboutMeSVG from "./assets/svgComponents/AboutMeSVG";
// Styles
import "./App.css";
import { ratingHelper } from "./HelperMethods/RatingsHelper";

const workExperience = [
  {
    title: "React Developer",
    dateStart: "11/2022",
    isPresent: true,
    href: "https://codedlines.com/",
    linkText: "CodedLines",
    styledContent: `Developing mobile apps for the company's clients with React Native's CLI.\nStyling with Styled Components and managing state with Redux Toolkit.\nCI/CD through CircleCI and Fastlane.`,
    region: "Athens, Greece",
  },
  {
    title: "Junior Frontend Developer",
    dateStart: "06/2022",
    dateEnd: "11/2022",
    isPresent: false,
    href: "https://www.bearinmind.gr/",
    linkText: "Bear In Mind",
    styledContent: `Created e-commerce sites and used Docker for cross-platform development.\nDeveloped re-usable components for the company's projects with React.js.`,
    region: "Thessaloniki, Greece",
  },
  {
    title: "Intern Frontend Developer",
    dateStart: "01/2022",
    dateEnd: "06/2022",
    isPresent: false,
    styledContent: `Improved and broadened coding fundamentals.\nWorked on React.js demo projects, using useContext and Redux toolkit, learned GitHub.`,
    href: "https://www.bearinmind.gr/",
    linkText: "Bear In Mind",
    region: "Thessaloniki, Greece",
  },
  {
    title: "Career Transition",
    dateStart: "07/2021",
    dateEnd: " 12/2021",
    isPresent: false,
    styledContent: `Decided to switch careers and jump into web development after failing to find exciting challenges at work.\nLearned HTML, CSS, JavaScript through online courses.`,
  },
  {
    title: "Caregiver",
    dateStart: "05/2020",
    dateEnd: "06/2021",
    isPresent: false,
    href: "https://tdh.gr/el",
    linkText: "Terre Des Hommes Hellas",
    styledContent: `Organised and facilitated the everyday life of 30 underage beneficiaries of various origins.\nSolved unexpected events and tensions, worked under extreme pressure while keeping a cool head and took initiatives to improve the facility's operational status.`,
    region: "Veroia, Greece",
  },
  {
    title: "French Interpreter",
    dateStart: "11/2019",
    dateEnd: "02/2020",
    isPresent: false,
    href: "https://www.bearinmind.gr/",
    linkText: "Bear In Mind",
    styledContent: `Assisted colleagues in their interactions or sessions with the beneficiaries.\nWorked under pressure and assisted colleagues in solving situations that required our attention.`,
    region: "Thessaloniki, Greece",
  },
  {
    title: "Caregiver",
    dateStart: "03/2019",
    dateEnd: "11/2019",
    isPresent: false,
    href: "https://arsis.gr/to-spiti-tis-arsis/",
    linkText: " ARSIS - Association for the Social Support of Youth",
    styledContent: `Responsible for organising and facilitating the everyday life of 12 to 18 underage beneficiaries, age 4 to 18, of mixed origins.\nWorked constantly under pressure, learnt to think creatively, while keeping the quality of work.`,
    region: "Oraiokastro, Greece<",
  },
];

const seminars = [
  {
    title: "React Native - The Practical Guide",
    dateStart: "03/2023",
    href: "https://www.udemy.com/certificate/UC-11d544f8-9dd6-453d-b5c3-8c7e6f3f2825/",
    linkText: "Udemy",
  },
  {
    title: "Become a WordPress Developer: Unlocking Power With Code",
    dateStart: "05/2022",
    href: "https://www.udemy.com/course/become-a-wordpress-developer-php-javascript/",
    linkText: "Udemy",
  },
  {
    title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
    dateStart: "02/2022",
    dateEnd: "04/2022",
    href: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
    linkText: "Udemy",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    dateStart: "12/2021",
    dateEnd: "01/2022",
    href: "https://www.freecodecamp.org/certification/metropon/responsive-web-design",
    linkText: "FreeCodeCamp Foundation",
  },
  {
    title: "Responsive Web Design",
    dateStart: "11/2021",
    dateEnd: "02/2021",
    href: "https://www.freecodecamp.org/certification/metropon/responsive-web-design",
    linkText: "FreeCodeCamp Foundation",
  },
];

const contactMedia = [
  {
    title: "Phone",
    link: "00306947662164",
    type: "tel:",
    placeholder: "+30-6947-6621-64",
  },
  {
    title: "E-mail",
    link: "pontikav@protonmail.com",
    type: "mailto:",
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/vasilis-pontikakis-30874653",
    placeholder: "Vasilis Pontikakis",
  },
  {
    title: "GitHub",
    link: "https://github.com/metropontikas",
    placeholder: "Vasilis Pontikakis",
  },
];

const skills = [
  "Sense of duty",
  "Team Player",
  "Creative thinker",
  "Work under pressure",
  "Communicational skills",
  "Organisational skills",
  "Problem solver",
];

const techStack = [
  "React.js",
  "React Native",
  "Typescript",
  "JavaScript",
  "Redux.js",
  "Styled Components",
  "REST APIs",
  "SASS",
  "WordPress",
  "WooCommerce",
  "Bash",
  "Git",
  "HTML",
  "CSS",
];

const langugages = [
  { name: "Greek", level: "nativeSpeaker" },
  { name: "French", level: "excellent" },
  { name: "English", level: "excellent" },
  { name: "Spanish", level: "basic" },
];

function App() {
  return (
    <div className="docWrapper">
      <div className="leftColumn">
        <HeaderWrapper
          initials="VP"
          name="Vasilis Pontikakis"
          profession="React developer"
        />

        <Section title="Summary" icon={<AboutMeSVG absolute />}>
          <TextWrapper content="JavaScript enthusiast, avid learner of anything computer-related with strong desire to contribute." />
        </Section>

        <Section title="Experience" icon={<WorkExperienceSVG absolute />}>
          {workExperience.map((exp) => (
            <TextWrapper
              key={exp.title + exp.dateStart}
              title={exp.title}
              dateStart={exp.dateStart}
              dateEnd={exp.dateEnd}
              isPresent={exp.isPresent}
              href={exp.href}
              linkText={exp.linkText}
              styledContent={exp.styledContent}
              region={exp.region}
            />
          ))}
        </Section>

        <Section title="Seminars" icon={<CertificationSVG absolute />}>
          {seminars.map((seminar) => (
            <TextWrapper
              key={seminar.title}
              title={seminar.title}
              dateStart={seminar.dateStart}
              dateEnd={seminar.dateEnd}
              href={seminar.href}
              linkText={seminar.linkText}
            />
          ))}
        </Section>

        <Section title="Education" icon={<EducationSVG absolute />}>
          <TextWrapper
            title="French Language and Literature"
            dateStart="2011"
            dateEnd="2017"
            content="Aristotle University of Thessaloniki"
            region="Thessaloniki, Greece"
          />
          <TextWrapper
            title="Erasmus+ Exchange Program"
            dateStart="2014"
            dateEnd="2015"
            content="Universite Stendhal-Grenoble 3"
            region="Grenoble, France"
          />
        </Section>
      </div>

      <div className="RightColumn">
        <Section alt altHeading icon={<ContactSVG />} title="Contact">
          {contactMedia.map((medium) => (
            <ContactMedium
              key={medium.title}
              title={medium.title}
              link={medium.link}
              type={medium.type}
              placeholder={medium.placeholder}
            />
          ))}
        </Section>

        <Section alt altHeading icon={<SkillsSVG />} title="Skills">
          {skills.map((skill) => (
            <TextWrapper alt key={skill} content={skill} />
          ))}
        </Section>

        <Section alt altHeading icon={<SoftwareSVG />} title="Tech Stack">
          {techStack.map((tech) => (
            <TextWrapper alt key={tech} content={tech} />
          ))}
        </Section>

        <Section alt altHeading icon={<LanguageSVG />} title="Languages">
          {langugages.map((lang) => (
            <TextWrapper alt content={lang.name}>
              {ratingHelper(lang.level)}
            </TextWrapper>
          ))}
        </Section>
      </div>
    </div>
  );
}

export default App;
