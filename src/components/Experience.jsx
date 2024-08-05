import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";
import { experienceData } from "../data/experience";


const Experience = () => {
    const { sectionName, work } = experienceData;

    return (
        <section id="experience" className="experience-section">
            <div className="container experience-container" style={{ color: "black" }} >  {/* Custom container class */}
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="section-title">
                            <span className="text-black" style={{ textAlign: "center" }}>
                                {sectionName}
                            </span>
                        </h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <VerticalTimeline>
                            {work.map((job, i) => (
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    date={job.years}
                                    iconStyle={{
                                        background: "purple",
                                        color: "#black",
                                        textAlign: "center",
                                    }}
                                    icon={<i className="fab fa-angular experience-icon"></i>}
                                    key={i}
                                >
                                    <div className="card">
                                        <h3>
                                            {job.title}
                                        </h3>
                                        <h4>
                                            {job.company}
                                        </h4>
                                    </div>
                                    <div style={{textAlign: "left", marginTop: "14px"}}>
                                        {job.ProjectName.map((tech, i) => (
                                            <Badge pill className="experience-badge mr-2 mb-2" key={i}>
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                    <div style={{textAlign: "left", marginBottom: "3px"}}>
                                        {job.mainTech.map((tech, i) => (
                                            <Badge pill className="main-badge mr-2 mb-2" key={i}>
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>

                                </VerticalTimelineElement>
                            ))}
                        </VerticalTimeline>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
