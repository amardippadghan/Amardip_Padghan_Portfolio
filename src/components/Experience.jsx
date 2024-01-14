import React from "react";

const Experience = () => {
  return (
    <div className="mt-5 p-10">
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic">Feb - April 2023</time>
            <div className="text-lg font-black">Oasis Infobyte</div>
            <div className="text-lg font-black">Web Development</div>I have I
            have successfully completed 1 month internship in oasis infobyte , I
            made landing page , about page and contact form for them and
            successful completed all tasks
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">June 2023 - Current </time>
            <div className="text-lg font-black">VirtueByte Pvt. Ltd</div>
            MERN Stack Developer
            <br /> RESTful API Integration
            <br />
            Redux js , Context Api
            <br /> Frontend and Backend Development
            <br />
            Node js , Express js
            <br />
            React Native Development <br /> Problem-solving and Analytical
            Thinking
          </div>
          <hr />
        </li>
      </ul>
    </div>
  );
};

export default Experience;
