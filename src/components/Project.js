import React from "react";
import { Link } from "react-router-dom";
import "./project.css";
const Project = () => {
  return (
    <div className="projectContainer container">
      <div className="projectHeading">
        <b>
          <u>Projects & Open Source</u>
        </b>
      </div>
      <div className="row justify-content-around">
        <div className="col-12 col-md-5">
          <div className="card text-center">
            <img
              src="https://images.unsplash.com/photo-1637247475270-f14f51510708?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="card-img"
              alt="..."
              style={{ opacity: "0.5" }}
            />
            <div className="card-img-overlay">
              <h4 className="card-title">
                <b>EduHub</b>{" "}
              </h4>
              <p className="card-text">
                <b>
                  This is a social newtwork created for a college on which
                  students & tichers can coordinate and can try to perform daily
                  college activities. The platform provides a common platform in
                  the form of forum where students can ask their doubts can it
                  can be answered by concered teacher or by any peers.
                </b>
              </p>
              <div className="techUsed">
                <div>
                  <button type="button" className="btn btn-secondary">
                    ReactJS
                  </button>
                </div>
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
              </div>
            </div>
            <div className="card-footer">
              <Link to="https://github.com/aniketjha1729/EduHub">
                https://github.com/aniketjha1729/EduHub
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5">
          <div className="card text-center">
            <img
              src="https://images.unsplash.com/photo-1637247475270-f14f51510708?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="card-img"
              alt="..."
              style={{ opacity: "0.5" }}
            />
            <div className="card-img-overlay">
              <h4 className="card-title">
                <b>SortMyMess</b>{" "}
              </h4>
              <p className="card-text">
                <b>
                  This is a platform for users who live in mess/pg. User can
                  signup with a common group id and all the users added in that
                  particular group can upload the common expences with their
                  bills, and at the end of each month they will get the
                  individual shares of bills which they own automatically on
                  their respective mailIds.
                </b>
              </p>
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
              </div>
            </div>
            <div className="card-footer">
              <Link to="https://github.com/aniketjha1729/SortMyMess">
                https://github.com/aniketjha1729/SortMyMess
              </Link>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="row justify-content-around">
        <div className="col-12 col-md-5">
          <div className="card text-center">
            <img
              src="https://images.unsplash.com/photo-1637247475270-f14f51510708?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="card-img"
              alt="..."
              style={{ opacity: "0.5" }}
            />
            <div className="card-img-overlay">
              <h4 className="card-title">
                <b>ReduxBuilder</b>{" "}
              </h4>
              <p className="card-text">
                <b>
                  This is open source npm package which creates boiler plate for
                  redux implementation. We all know how hectic is to setup the
                  redux intially as we have to add a number of files and folders
                  to get started. By using this package we can have all the
                  boiler plate ready to serve redux.
                </b>
              </p>
              <div className="techUsed">
                <div>
                  <button type="button" className="btn btn-secondary">
                    Javascript
                  </button>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <Link to="https://github.com/aniketjha1729/EduHub">
                https://github.com/aniketjha1729/EduHub
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5">
          <div className="card text-center">
            <img
              src="https://images.unsplash.com/photo-1637247475270-f14f51510708?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="card-img"
              alt="..."
              style={{ opacity: "0.5" }}
            />
            <div className="card-img-overlay">
              <h4 className="card-title">
                <b>StudentMangementSystem</b>{" "}
              </h4>
              <p className="card-text">
                <b>
                  This is a microservice rest-api developed in springboot.
                  Various features like crud and authentication are there which
                  are provided by this api.
                </b>
              </p>
              <div className="techUsed">
                <div>
                  <button type="button" className="btn btn-secondary">
                    Springboot
                  </button>
                </div>
                <div>
                  <button type="button" className="btn btn-secondary">
                    MySql
                  </button>
                </div>
                <div>
                  <button type="button" className="btn btn-secondary">
                    Hibernate
                  </button>
                </div>
                <div>
                  <button type="button" className="btn btn-secondary">
                    Eureka
                  </button>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
