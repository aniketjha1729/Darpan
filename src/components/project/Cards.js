import React from "react";
import Eduhub from "../../static/eduhub.png";
import SortMyMess from "../../static/sortmymess.png";
import ReduxBuilder from "../../static/reduxbui.png";
import "./project.css";

const Cards = () => {
  return (
    <>
      <div className="row justify-content-around projectdec">
        <div className="col-12 col-md-5">
          <div className="projectTitle text-center">
            <b>EduHub</b>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={Eduhub}
                  alt="Avatar"
                  style={{
                    width: "100%",
                    height: "300px",
                    borderRadius: "5px",
                  }}
                />
              </div>
              <div className="flip-card-back">
                <b>
                  This is a social newtwork created for a college on which
                  students & tichers can coordinate and can try to perform daily
                  college activities. The platform provides a common platform in
                  the form of forum where students can ask their doubts can it
                  can be answered by concered teacher or by any peers.
                </b>
                <div className="gitgubLink">
                  <a href="https://github.com/aniketjha1729/EduHub">
                    https://github.com/aniketjha1729/EduHub
                  </a>
                </div>
                <div className="techUsed">
                  <div>
                    <button type="button" className="btn btn-secondary">
                      NodeJS
                    </button>
                  </div>
                  <div>
                    <button type="button" className="btn btn-secondary">
                      Mongo
                    </button>
                  </div>
                  <div>
                    <button type="button" className="btn btn-secondary">
                      Express
                    </button>
                  </div>
                  <div>
                    <button type="button" className="btn btn-secondary">
                      Socket
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5">
          <div className="projectTitle text-center">
            <b>SortMyMess</b>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={SortMyMess}
                  alt="Avatar"
                  style={{
                    width: "100%",
                    height: "300px",
                    borderRadius: "5px",
                  }}
                />
              </div>
              <div className="flip-card-back">
                <b>
                  This is a platform for users who live in mess/pg. User can
                  signup with a common group id and all the users added in that
                  particular group can upload the common expences with their
                  bills, and at the end of each month they will get the
                  individual shares of bills which they own automatically on
                  their respective mailIds.
                </b>
                <div className="gitgubLink">
                  <a href="https://github.com/aniketjha1729/SortMyMess">
                    https://github.com/aniketjha1729/SortMyMess
                  </a>
                </div>
                <div className="techUsed">
                  <div>
                    <button type="button" className="btn btn-secondary">
                      NodeJS
                    </button>
                  </div>
                  <div>
                    <button type="button" className="btn btn-secondary">
                      Mongo
                    </button>
                  </div>
                  <div>
                    <button type="button" className="btn btn-secondary">
                      Material Ui
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="row justify-content-around projectdec">
        <div className="col-12 col-md-5">
          <div className="projectTitle text-center">
            <b>ReduxBuilder</b>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={ReduxBuilder}
                  alt="Avatar"
                  style={{
                    width: "100%",
                    height: "300px",
                    borderRadius: "5px",
                  }}
                />
              </div>
              <div className="flip-card-back">
                <b>
                  This is open source npm package which creates boiler plate for
                  redux implementation. We all know how hectic is to setup the
                  redux intially as we have to add a number of files and folders
                  to get started. By using this package we can have all the
                  boiler plate ready to serve redux.
                </b>
                <div className="gitgubLink">
                  <a href="https://github.com/aniketjha1729/EduHub">
                    https://github.com/aniketjha1729/EduHub
                  </a>
                </div>
                <div className="techUsed">
                  <div>
                    <button type="button" className="btn btn-secondary">
                      Javacsript
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5">
          <div className="projectTitle text-center">
            <b>RestApi&nbsp;(MicroService)</b>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src="https://miro.medium.com/max/702/1*rDDUaNlx2uJT_DWCSa_o1Q.png"
                  alt="Avatar"
                  style={{
                    width: "100%",
                    height: "300px",
                    borderRadius: "5px",
                  }}
                />
              </div>
              <div className="flip-card-back">
                <b>
                  This is a microservice rest-api developed in springboot.
                  Various features like crud and authentication are there which
                  are provided by this api. All the apis are served as
                  microservices and and synced wiht the help of Edureka.
                  Hibernate ORM has been used for managing the Myswl database.
                </b>
                <div className="techUsed">
                  <div>
                    <button
                      type="button"
                      className="btn btn-secondary springtech"
                    >
                      Springboot
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="btn btn-secondary springtech"
                    >
                      MySql
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="btn btn-secondary springtech"
                    >
                      Hibernate
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="btn btn-secondary springtech"
                    >
                      Eureka
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
