import React from 'react';
import { skillsData } from "../data/skills";
import { skillsImage } from "../utils/skill-image";
import { Container, Row, Col } from 'react-bootstrap';

const sectionName = "Skills";
const iconSize = { width: 90, height: 90 };

function Skills() {
    return (
        <div id="skills" className="relative z-50" style={{
            background: 'linear-gradient(9.21deg, #AA367C -2.91%, #4A2FBD 111.58%)',
            minHeight: '200px',
            width: '100%',
            overflow: 'hidden',
            paddingBottom: '10%',
        }}>
            <Container className="w-full my-12">
                <div className="col-md-12 mx-auto text-center">
                    <h1 className="section-title" style={{
                        paddingTop: '5%',
                        paddingBottom: '5%',
                        font: '18px/24px \'opensans-bold\', sans-serif',
                        textTransform: 'uppercase',
                        letterSpacing: '3px',
                        color: '#fff',
                        textAlign: 'center'
                    }}>
                        {sectionName}
                    </h1>
                </div>

                <Row className="justify-content-center">
                    {skillsData.map((skill, id) => (
                        <Col xs={6} sm={4} md={3} lg={2} className="d-flex justify-content-center mb-4" key={id}>
                            <div
                                className="d-flex flex-column align-items-center justify-content-center transition-transform transform hover:scale-110 cursor-pointer rounded-lg"
                                style={{
                                    width: '150px', // Adjust size if needed
                                    minWidth: 'fit-content',
                                }}
                            >
                                <div className="d-flex align-items-center justify-content-center rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 hover:border-violet-500 transition-all duration-500">
                                    <div className="d-flex align-items-center justify-content-center w-3/4">
                                        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                                    </div>
                                    <div className="d-flex flex-column align-items-center justify-content-center gap-3 p-3">
                                        <div className="h-8">
                                            <img
                                                src={skillsImage(skill)}
                                                alt={skill}
                                                width={iconSize.width}
                                                height={iconSize.height}
                                                className="rounded-lg"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default Skills;
