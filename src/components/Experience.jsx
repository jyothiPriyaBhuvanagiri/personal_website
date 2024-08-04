import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";
import {experienceData} from "../data/experience";

const Experience = () => {
    const {sectionName, work} = experienceData;

    return (
        <section id="experience" className="pb-5">
            <div className="col-md-12 mx-auto">
                <div className="col-md-12">
                    <h1 className="section-title" style={{color: "black"}}>
            <span className="text-black" style={{textAlign: "center"}}>
              {sectionName}
            </span>
                    </h1>
                </div>
            </div>
            <div className="col-md-8 mx-auto">
                <VerticalTimeline>
                    {work.map((job, i) => (
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date={job.years}
                            iconStyle={{
                                background: "purple",
                                color: "#fff",
                                textAlign: "center",
                            }}
                            icon={<i className="fab fa-angular experience-icon"></i>}
                            key={i}
                        >
                            <div style={{textAlign: "left", marginBottom: "4px"}}>
                                {job.mainTech.map((tech, i) => (
                                    <Badge pill className="main-badge mr-2 mb-2" key={i}>
                                        {tech}
                                    </Badge>
                                ))}
                            </div>

                            <h3
                                className="vertical-timeline-element-title"
                                style={{textAlign: "left"}}
                            >
                                {job.title}
                            </h3>
                            <h4
                                className="vertical-timeline-element-subtitle"
                                style={{textAlign: "left"}}
                            >
                                {job.company}
                            </h4>
                            <div style={{textAlign: "left", marginTop: "15px"}}>
                                {job.technologies.map((tech, i) => (
                                    <Badge pill className="experience-badge mr-2 mb-2" key={i}>
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </VerticalTimelineElement>
                    ))}
                    <VerticalTimelineElement
                        iconStyle={{
                            background: "purple",
                            color: "#fff",
                            textAlign: "center",
                        }}
                        icon={
                            <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
                        }
                    />
                </VerticalTimeline>
            </div>
        </section>
    );
};

export default Experience;
