import React  from "react"
import Progress from 'react-progressbar';
import Reveal from "react-reveal/Zoom"
import TextInlineAlign from "../TextInlineAlign"

const skills = [
    {
        name: "HTML",
        percentage: 90
    },
    {
        name: "CSS",
        percentage: 80
    },
    {
        name: "JavaScript",
        percentage: 80
    },
    {
        name: "React",
        percentage: 85
    },
    {
        name: "NodeJS",
        percentage: 70
    },
    {
        name: "Django",
        percentage: 70
    }
]

class Skills extends React.Component {
    render () {
        return (
            <div className="">
                {
                    skills.map((skill, index) => (
                        <div key={index}>
                            <Reveal>
                                <TextInlineAlign left={skill.name} right={`${skill.percentage}%`} />
                                <div style={{border: "1px solid grey", padding: "3px", borderRadius: "4px"}}>
                                    {/*<Progress color="grey" completed={skill.percentage}/>*/}
                                    <Progress color="grey" completed={skill.percentage}/>
                                </div>
                                <br />
                            </Reveal>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default Skills