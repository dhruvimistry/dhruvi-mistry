import './QualificationStyles.css'
import QualificationElements from "./QualificationElements";
import schoolIcon from "../../assets/school.svg";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Qualifications() {

  return (
    <div>
      <h1 className="title">Qualifications</h1>
      <VerticalTimeline>
        {QualificationElements.map((element) => {
            return(
                <VerticalTimelineElement
                lineColor={ '#2196f3' }
                contentArrowStyle={{ borderRight: '7px solid  #f3c8d7' }}
                contentStyle={{ background: '#f3c8d7' }}
                key={element.id}
                date={element.date}
                dateClassName="date"
                iconStyle={{ background: 'var(--btn-color)' }}
                icon={<img src={schoolIcon} alt="School Icon" />}
                >
                <h3 className="vertical-timeline-element-title">{element.title}</h3>
                <h5 className="vertical-timeline-element-subtitle">
                {element.location}
                </h5>
                <h5 className="vertical-timeline-element-extra">{element.score}</h5>
            </VerticalTimelineElement>
            )
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Qualifications;