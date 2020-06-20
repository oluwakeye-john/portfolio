import React from "react"
import Progress from "react-progressbar"
import Reveal from "react-reveal/Zoom"
import TextInlineAlign from "../TextInlineAlign"

const skills = [
  {
    name: "HTML, CSS, JavaScript",
    percentage: 90,
  },
  {
    name: "React",
    percentage: 85,
  },
  {
    name: "NodeJS, Express",
    percentage: 70,
  },
  {
    name: "Django",
    percentage: 65,
  },
  {
    name: "Database",
    percentage: 70,
  },
]

const skillStatus = value => {
  if (value < 30) {
    return "Beginner"
  } else if (value < 50) {
    return "Average"
  } else if (value < 70) {
    return "Good"
  } else {
    return "Excellent"
  }
}

class Skills extends React.Component {
  render() {
    return (
      <div className="">
        {skills.map((skill, index) => (
          <div key={index}>
            <Reveal>
              <TextInlineAlign
                left={"🚀  " + skill.name}
                right={`${skillStatus(skill.percentage)}`}
              />
              <div
                style={{
                  border: "1px solid grey",
                  padding: "3px",
                  borderRadius: "4px",
                }}
              >
                <Progress color="grey" completed={skill.percentage} />
              </div>
              <br />
            </Reveal>
          </div>
        ))}
      </div>
    )
  }
}

export default Skills
