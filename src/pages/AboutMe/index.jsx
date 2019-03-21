import React from "react";

const styles = {
    imageStyles: {
        height: "150px",
        width: '150px',
    }
}

function AboutMe() {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-md-1"></div>
                <div className="shadow col-md bg-white border p-5 m-3">
                    <h2 className="m-3" >About Me</h2>
                    <hr />
                    <div className="">
                        <img className="img-thumbnail float-left mr-4 text-wrap" style={styles.imageStyles} src="assets/images/profilepic-portfolio.jpg" alt="Alejandro Loja" />
                        <p className="p-4">Welcome to my portfolio website. Here you will find projects I worked on.
                            I have experience with JavaScript, Node.Js, React.JS, Express.js, CSS, HTML, MySQL, and MongoDB. I have also developed MERN applications.
            On my portfolio page, I have a list of my most recent projects.</p>
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>
            <div className="row text-center mb-4">
                <div className="col-md-4"></div>
                <div className="shadow col-md bg-white p-5 m-3">
                <a href="https://github.com/alejandro-loja" className="btn btn-dark btn-lg text-white m-1">GitHub <i className="fab fa-github-square"></i></a>
                <a href="https://www.linkedin.com/in/alejandro-loja/" className="btn btn-dark btn-lg text-white m-1">Linkedin <i className="fab fa-linkedin"></i>   </a>
                </div>
                <div className="col-md-4"></div>
            </div>
        </React.Fragment>
    )
}

export default AboutMe;