// pages/Projects.jsx
import ProjectSection from "../components/ProjectSection";

export default function Projects() {
  return (
    <>
      <ProjectSection
        number="01"
        title="FreelancerOS"
        subtitle="Operating System For Modern Freelancers"
        image="FOS.jpeg"
        tech={["React", "Node.js", "Express", "MongoDB"]}
        github="#"
      />

      <ProjectSection
        number="02"
        title="Real Estate AI"
        subtitle="AI Powered Property Platform"
        image="REST.jpg"
        tech={["ASP.NET", "SQL Server", "AI"]}
        github="https://github.com/MuhammadShazil7/Real-Estate-"
      />

      <ProjectSection
        number="03"
        title="SRS Lab Automation"
        subtitle="Smart Laboratory Workflow System"
        image="LAB.webp"
        tech={["PHP", "MySQL"]}
        github="https://github.com/MuhammadShazil7/Lab-Test"
      />

      <ProjectSection
        number="04"
        title="Bookly"
        subtitle="Book Management System - Buy, Sell & Review Books"
        image="bookly.jpg"
        tech={["PHP", "MySQL", "HTML", "CSS"]}
        github="https://github.com/MuhammadShazil7/Bookly"
      />

      <ProjectSection
        number="05"
        title="Job Finder"
        subtitle="Flutter Mobile App for Job Searching & Recruitment"
        image="jobfinder.jpg"
        tech={["Flutter", "Dart"]}
        github="https://github.com/MuhammadShazil7/Job_finder"
      />

      <ProjectSection
        number="06"
        title="BooksBound"
        subtitle="Book Discovery & Reading App for Book Lovers"
        image="booksbound.jpg"
        tech={["Flutter", "Dart"]}
        github="https://github.com/MuhammadShazil7/BooksBound"
      />

      <ProjectSection
        number="07"
        title="Expense Tracker"
        subtitle="Track Every Rupee Efficiently"
        image="EXP.png"
        tech={["Flutter", "Dart"]}
        github="#"
      />

      <ProjectSection
        number="08"
        title="Jewellery Store"
        subtitle="Luxury Jewellery E-Commerce Experience"
        image="JRY.jpg"
        tech={["HTML", "CSS", "JavaScript", "Bootstrap"]}
        github="#"
      />
    </>
  );
}