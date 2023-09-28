import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.jpg";
import projImg6 from "../assets/img/project-img6.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Insure It",
      description: "Database Management Systems",
      imgUrl: projImg1,
      projUrl: "https://github.com/SameerBramhecha/Insure_It",
    },
    {
      title: "CritiQ",
      description: "Design & Development",
      imgUrl: projImg2,
      projUrl: "https://github.com/orgs/tiaaHackathon/repositories",
    },
    {
      title: "SRI Management Systems",
      description: "Database Management Systems",
      imgUrl: projImg3, projUrl: "https://github.com/SameerBramhecha/SRIManagement_System",
    },
    {
      title: "Foodiee Go",
      description: "Design & Development",
      imgUrl: projImg4, projUrl: "https://foodiee-goo.onrender.com/",
    },
    {
      title: "Sentiment Analysis",
      description: "Data Science and Machine Learning",
      imgUrl: projImg5, projUrl: "https://sentiment-analysis-syzl.onrender.com",
    },

    {
      title: "Brain Stroke Prediction",
      description: "Data Science and Machine Learning",
      imgUrl: projImg6, projUrl: "https://github.com/SameerBramhecha/Brain-Stroke-Prediction",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2><br></br>

                  <Row>
                    {
                      projects.map((project, index) => (
                        <ProjectCard
                         
                          {...project} />
                      ))
                    }
                  </Row>

                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container >
    </section >
  )
}
