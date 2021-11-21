import React, { useRef } from "react";
import "./resume.css";
import { useReactToPrint } from "react-to-print";
import * as FaIcons from "react-icons/fa";


const Resume = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div className="resume-container container" ref={componentRef}>
      <div className="resume-print">
        <button onClick={handlePrint}><FaIcons.FaPrint/></button>
      </div>
      <div className="resume-header">
        <div className="row">
          <div
            className="col resume-header-name"
            style={{ fontWeight: "500", fontSize: "30px" }}
          >
            <span>Aniket Kumar</span>
          </div>
        </div>

        <div className="row">
          <div className="col">kumaraniket1729@gmail.com</div>
        </div>
        <div className="row">
          <div className="col">Mob: 7449849564</div>
        </div>
        <div className="row">
          <div className="col">Final Year Undergraduate at NSEC</div>
        </div>
      </div>
      <br />
      <div className="resume-education">
        <div className="resume-education-header">
          <ul>
            <li>Education</li>
          </ul>
        </div>
        <div className="resume-education-details">
          <div className="row">
            <div className="col-9">
              <div>
                <b>Netaji Subhash Engineering College, Kolkata (NSEC)</b>
              </div>
              <div className="resume-education-degree">
                B. Tech in Computer Science and Engineering
              </div>
              <div className="resume-education-degree">CGPA - 8.16</div>
              <div className="resume-education-degree">
                Expected Graduation –2021
              </div>
            </div>
            <div className="col-3">
              <b>2017 – Present</b>
            </div>
          </div>
          <div className="row">
            <div className="col-9">
              <div>
                <b>St.Karen’s High School,Patna</b>
              </div>
              <div className="resume-education-degree">
                Class 12th - Central Board of Secondary Education (CBSE)
              </div>
              <div className="resume-education-degree">Percentage – 77</div>
            </div>
            <div className="col-3">
              <b>2014 – 2016</b>{" "}
            </div>
          </div>
          <div className="row">
            <div className="col-9">
              <div>
                <b>St.Karen’s High School,Patna</b>
              </div>
              <div className="resume-education-degree">
                Class 10th - Central Board of Secondary Education (CBSE)
              </div>
              <div className="resume-education-degree">CGPA – 9.4</div>
            </div>
            <div className="col-3">
              <b>2013 – 2014</b>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="resume-experience">
        <div className="resume-experience-header">
          <ul>
            <li>Work Experience</li>
          </ul>
        </div>
        <div className="resume-experience-details">
          <div className="row">
            <div className="col-9">
              <div>
                <b>Encubate Tech Pvt.Ltd</b>
              </div>
            </div>
            <div className="col-3">
              <b>August 2020 – November 2020</b>
            </div>
          </div>
          <div className="row">
            <div className="col experience-briefing">
              Here I worked on a project , which can be used by user to find
              job/internship as per their requirements. In this project I got
              the chance to use technologies like ReactJs,NodeJs and mongodb. I
              also worked with sockets which can be used for real time data
              change and manipulation.
            </div>
          </div>
        </div>
        <br />
        <div className="resume-experience-details">
          <div className="row">
            <div className="col-9">
              <div>
                <b>GiveMeFive</b>
              </div>
            </div>
            <div className="col-3">
              <b> April 2020 – August 2020</b>
            </div>
          </div>
          <div className="row">
            <div className="col experience-briefing">
              Here I worked on a number of projects which were dedicated to
              students around age 8-18years. I created many webpages and games
              through which programming can be made easier. I worked on
              technologies like PyGame, ReactJs and TensorFlow to deliver the
              final product.
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="resume-experience">
        <div className="resume-experience-header">
          <ul>
            <li>Positions of Responsibility</li>
          </ul>
        </div>
        <div className="resume-experience-details">
          <div className="row">
            <div className="col-9">
              <div>
                <b>Lead Web Developer (DSC –NSEC)</b>{" "}
              </div>
            </div>
            <div className="col-3">
              <b> 2019 – 2020</b>
            </div>
          </div>
          <div className="row">
            <div className="col experience-briefing">
              Served as lead web developer in the core committee of DSC
              (officially recognized by Google)
            </div>
          </div>
        </div>
        <br />
        <div className="resume-experience-details">
          <div className="row">
            <div className="col-9">
              <div>
                <b>On Ground Event Organiser (GDG-Kolkata)</b>{" "}
              </div>
            </div>
            <div className="col-3">
              <b> 2018 – 2020</b>
            </div>
          </div>
          <div className="row">
            <div className="col experience-briefing">
              Successfully hosted Google I/O extended across the city. Also
              served as event organizer for Dev-Fest (2018 && 2019).
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="resume-experience">
        <div className="resume-experience-header">
          <ul>
            <li>Projects</li>
          </ul>
        </div>
        <div className="resume-experience-details">
          <div className="row">
            <div className="col-9">
              <div>
                <b>Sarthi</b>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col experience-briefing">
              This is a web app with a chatbot embedded into it. We can ask any
              query form this bot and it will response with the real time
              information. This bot is also supported with 24*7 helpline number
              which can be used in case internet is not available and it will
              reply over phone call.
              <p>
                <u>Link:https://github.com/aniketjha1729/saathi-1</u>{" "}
              </p>
            </div>
          </div>
        </div>
        <br />
        <div className="resume-experience-details">
          <div className="row">
            <div className="col-9">
              <div>
                <b>SortMyMess</b>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col experience-briefing">
              This is a web based application which helps students living in
              mess/hostel to manages and keep track of their expenses with their
              partner/roommate. A user has to give data when and where he/she
              has contributed to the expense and at the end of the month this
              website will mail them the individual share of the expenses of the
              entire month.
              <p>
                <u>Link: https://github.com/aniketjha1729/SortMyMess</u>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="resume-experience">
        <div className="resume-experience-header">
          <ul>
            <li>Skills</li>
          </ul>
        </div>
        <div className="resume-skill-sets">
          <div className="row">
            <div className="col-5">
              <b>Expertise Area</b>{" "}
            </div>
            <div className="col-5">
              <b>Programming Languages</b>{" "}
            </div>
          </div>
          <div className="row resume-skills">
            <div className="col-5">Web Development </div>
            <div className="col-5">Java, Python, JavaScript</div>
          </div>
          <br />
          <div className="row">
            <div className="col-5">
              <b>Tools and Technologies</b>{" "}
            </div>
            <div className="col-5">
              <b>Frameworks and Libraries</b>{" "}
            </div>
          </div>
          <div className="row resume-skills">
            <div className="col-5">
              Firebase, MongoDb, NodeJs, ReactJs ,
              <p>MySql, GitHub, AWS(basic)</p>
            </div>
            <div className="col-5">NodeJs, ReactJs</div>
          </div>
        </div>
      </div>
      <br />
      <div className="resume-experience">
        <div className="resume-experience-header">
          <ul>
            <li>Awards and Achievements</li>
          </ul>
        </div>
        <div className="resume-skill-sets">
          <div className="row">
            <div className="col-6">
              <b>Smart India Hackathon(Kerala):</b> 2019 Runner Up.
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <b>NASA Space App Challenge(NIT Durgapur):</b> Secured 1st
              Position.
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Resume;
