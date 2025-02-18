// Inputs
import {
  headerDetails,
  summaryText,
  workExperience,
  seminars,
  education,
  contactMedia,
  skills,
  techStack,
  langugages,
} from "./inputs/inputs";
// Components
import { Section } from "./components/Section/Section";
import { TextWrapper } from "./components/TextWrapper/TextWrapper";
import { HeaderWrapper } from "./components/HeaderWrapper/HeaderWrapper";
import { ContactMedium } from "./components/ContactMedium/ContactMedium";
// Assets
import LanguageSVG from "./components/SVGComponents/LanguageSVG";
import SoftwareSVG from "./components/SVGComponents/SoftwareSVG";
import SkillsSVG from "./components/SVGComponents/SkillsSVG";
import ContactSVG from "./components/SVGComponents/ContactSVG";
import EducationSVG from "./components/SVGComponents/EducationSVG";
import CertificationSVG from "./components/SVGComponents/CertificationSVG";
import WorkExperienceSVG from "./components/SVGComponents/WorkExperienceSVG";
import AboutMeSVG from "./components/SVGComponents/AboutMeSVG";
// Helper Methods
import { ratingHelper } from "./HelperMethods/RatingsHelper";
// Styles
import "./App.css";

function App() {
  return (
    <div className="docWrapper">
      <div className="leftColumn">
        <HeaderWrapper
          initials={headerDetails.initials}
          name={headerDetails.name}
          profession={headerDetails.profession}
        />

        <Section title="Summary" icon={<AboutMeSVG absolute />}>
          <TextWrapper content={summaryText} />
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
          {education.map((edu) => (
            <TextWrapper
              key={edu.title}
              title={edu.title}
              dateStart={edu.dateStart}
              dateEnd={edu.dateEnd}
              content={edu.content}
              region={edu.region}
            />
          ))}
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
            <TextWrapper key={lang.name} alt content={lang.name}>
              {ratingHelper(lang.level)}
            </TextWrapper>
          ))}
        </Section>
      </div>
    </div>
  );
}

export default App;
