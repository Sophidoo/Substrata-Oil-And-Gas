import factory from "../assets/images/factory.jpg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/Careers.css";

const Careers = () => {
  return (
    <>
      <Navbar />
      <div className="careersHero">
        <h1>CAREERS</h1>
      </div>
      <div className="careersContent">
        <h3>Careers at Substrata</h3>
        <p>
          Substrata commenced operations in 2006 and we have grown exponentially
          to a major service provider in the Oil & Gas industry in Nigeria and
          the West Africa sub region. We work hard to create a dynamic company
          culture that reflects the values of our employees and what motivates
          them individually and as a team. We continue to make efforts to
          integrate team spirit across our business and want to celebrate the
          many moments our employees have supported that make Substrata a great
          place to work.
        </p>
        <p>
          Tell us about yourself by sending your comprehensive curriculum vitae
          and we'll keep you informed about upcoming opportunities that match
          your interests.
        </p>
        <p>
          At Substrata, we understand the value each individual brings to the
          table. We celebrate diversity in all its forms and are immensely proud
          of our workforce.
        </p>
        <p>
          We are focused on providing our employees a challenging and enriching
          career path, with a healthy balance of structure and flexibility to
          chart their own course. Our robust training review process is linked
          to defined leadership competencies. This allows us to match employee’s
          aspirations with career opportunities via a career path that is
          supported with comprehensive technical and non-technical training. In
          Substrata there is opportunity for wide-ranging, career-enhancing
          talent rotations.
        </p>
        <p>
          Our structured career paths will ensure when you join our Company, you
          know what it takes to build your ideal career.
        </p>
        <p>
          Our employees, their Competence, Confidence, Motivation and Welfare,
          matter a lot us. We mentor our new hires until they become the “best
          in class” in their career path of choice.
        </p>
        <p>
          Substrata employees don’t see boundaries, they see opportunity. We
          don’t believe in excuse we believe in results. We provide continued
          investment in our employee’s development by offering resources,
          supporting professional development and encouraging mentorship to hone
          and better our employee’s skills.
        </p>
        <p>
          We have a strong belief that Together Everyone Achieves More – TEAM,
          that’s why we preach TEAMWORK
        </p>
        <h3>Job Openings</h3>
        <p>There is no current job opening.</p>
      </div>
      <Footer />
    </>
  );
};

export default Careers;
