import React from 'react';
import { skillsData } from "../data/skills";
import { skillsImage } from "../utils/skill-image";
import { Container, Row, Col } from 'react-bootstrap';

function Skills() {
    return (
        <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
            <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

            <Container className="w-full my-12">
                <Row>
                    {skillsData.map((skill, id) => (
                        <Col xs={6} sm={4} md={3} lg={2} className="d-flex justify-content-center mb-4" key={id}>
                            <div
                                className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
                            >
                                <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                                    <div className="flex -translate-y-[1px] justify-center">
                                        <div className="w-3/4">
                                            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center justify-center gap-3 p-6">
                                        <div className="h-8 sm:h-10">
                                            <img
                                                src={skillsImage(skill)}
                                                alt={skill}
                                                width={20}
                                                height={20}
                                                className="h-full w-auto rounded-lg"
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
