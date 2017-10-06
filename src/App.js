import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class Home extends Component {
  render() {
    return (
      <div className="main-content home">
        <h2>Front End Course Directory</h2>
        <p>
          This fun directory is a project for the <em>React Router Basics</em>{" "}
          course on Treehouse.
        </p>
        <p>
          Learn front end web development and much more! This simple directory
          app offers a preview of our course library. Choose from many hours of
          content, from HTML to CSS to JavaScript. Learn to code and get the
          skills you need to launch a new career in front end web development.
        </p>
        <p>
          We have thousands of videos created by expert teachers on web design
          and front end development. Our library is continually refreshed with
          the latest on web technology so you will never fall behind.
        </p>
        <hr />
      </div>
    );
  }
}

class About extends Component {
  render() {
    return (
      <div className="main-content">
        <h2>About</h2>
        <p>
          The front end course directory lists many of the courses we teach on
          HTML, CSS, JavaScript and more! Be sure to visit the Teachers section
          to view a list of our talented teachers. Or visit the Courses section
          and select a topic -- HTML, CSS, or JavaScript -- to see a list of our
          courses.
        </p>
      </div>
    );
  }
}

class Teachers extends Component {
  render() {
    return (
      <div className="main-content courses">
        <div className="course-header group">
          <h2>Teachers</h2>
          <ul className="group">
            <li className="teacher">
              <img
                className="teacher-img"
                src="http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/angie.png"
                alt="teacher"
              />
              <h3>Angie McAngular</h3>
              <p>
                Angie is a web developer and teacher who is passionate about
                building scalable, data driven web apps, especially ones that
                address old problems with new tech!
              </p>
            </li>
            <li className="teacher">
              <img
                className="teacher-img"
                src="http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/nodestradamus.png"
                alt="teacher"
              />
              <h3>NodeStradamus</h3>
              <p>
                'NodeStra' is a software engineer and philosopher trying to
                leave the world better than he found it. He codes for
                non-profits, eCommerce, and large-scale web apps.
              </p>
            </li>
            <li className="teacher">
              <img
                className="teacher-img"
                src="http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/geo.png"
                alt="teacher"
              />
              <h3>Geo 'Lo' Cation</h3>
              <p>
                Geo is a JavaScript developer working on large-scale
                applications. He's also a teacher who strives to support
                students in removing all barriers to learning code.
              </p>
            </li>
            <li className="teacher">
              <img
                className="teacher-img"
                src="http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/ecma.png"
                alt="teacher"
              />
              <h3>Ecma Scriptnstuff</h3>
              <p>
                Ecma found her passion for computers and programming over 15
                years ago. She is excited to introduce people to the wonderful
                world of JavaScript.
              </p>
            </li>
            <li className="teacher">
              <img
                className="teacher-img"
                src="http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/jay.png"
                alt="teacher"
              />
              <h3>Jay Query</h3>
              <p>
                Jay is a developer, author of CSS: The Missing Manual,
                JavaScript &amp; jQuery: The Missing Manual, and web development
                teacher.
              </p>
            </li>
            <li className="teacher">
              <img
                className="teacher-img"
                src="http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/json.png"
                alt="teacher"
              />
              <h3>Json Babel</h3>
              <p>
                All of his professional life, Json has worked with computers
                online; he is a polyglot programmer and likes using the right
                tools for the job.
              </p>
            </li>
          </ul>
        </div>

        {/* Write routes here... */}
      </div>
    );
  }
}

class Courses extends Component {
  render() {
    return (
      <div className="main-content courses">
        <div className="course-header group">
          <h2 className="col-md-7">Courses</h2>
          <ul className="course-nav col-md-4">
            <li>
              <a aria-current="false" href="/courses/html" className="active">
                HTML
              </a>
            </li>
            <li>
              <a aria-current="false" href="/courses/css">
                CSS
              </a>
            </li>
            <li>
              <a aria-current="false" href="/courses/javascript">
                JavaScript
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="course media group">
              <img
                className="course-img"
                src="https://achievement-images.teamtreehouse.com/bagdes_html_howtobuildawebsite_stage02.png"
                alt="course"
              />
              <div>
                <h3>How to Make a Website</h3>
                <p>
                  If you’ve never built a website before and you have no coding
                  or design experience, this is the place to start. In this
                  project, we learn how to build a modern portfolio website for
                  desktops, tablets, and mobile devices. We start with basic
                  HTML and CSS syntax. Next, we learn how to build custom web
                  pages with an image gallery and contact page. Finally, we walk
                  through how to share a website live on the web.
                </p>
              </div>
            </li>
            <li className="course media group">
              <img
                className="course-img"
                src="https://achievement-images.teamtreehouse.com/badges_html_forms_stage1.png"
                alt="course"
              />
              <div>
                <h3>HTML Forms</h3>
                <p>
                  The web is a two-way communication medium. There’s lots of
                  HTML elements for displaying data and producing output, and
                  conversely, there’s also lots of HTML elements for accepting
                  input. Accepting input from the user means creating web forms.
                  In this course, we’ll learn about all the most important form
                  elements that web professionals use on a daily basis.
                </p>
              </div>
            </li>
            <li className="course media group">
              <img
                className="course-img"
                src="https://achievement-images.teamtreehouse.com/badges-html-videoaudio-stage1.png"
                alt="course"
              />
              <div>
                <h3>HTML Video and Audio</h3>
                <p>
                  Text and images have always been the foundation of web
                  content, but more than ever, video and audio are also a part
                  of that content mix. Fortunately, we can now create
                  standards-based video and audio players that don't require the
                  use of plugins. Adding video and audio to a webpage is almost
                  as easy as adding an image or formatting some text.
                </p>
              </div>
            </li>
            <li className="course media group">
              <img
                className="course-img"
                src="https://achievement-images.teamtreehouse.com/badges-html-svg-stage1.png"
                alt="course"
              />
              <div>
                <h3>SVG Basics</h3>
                <p>
                  Scalable Vector Graphics (SVG) is an XML markup language for
                  creating two-dimensional images using vectors. This is
                  different from traditional raster-based image formats that use
                  pixels, like JPEG and PNG. When used on web pages, SVG images
                  provide an infinite level of detail, so they look sharp
                  regardless of screen size or pixel density.
                </p>
              </div>
            </li>
            <li className="course media group">
              <img
                className="course-img"
                src="https://achievement-images.teamtreehouse.com/badges_html_respimages_stage2.png"
                alt="course"
              />
              <div>
                <h3>Responsive Images</h3>
                <p>
                  Using the new source-set and sizes attributes, and the new
                  picture element, it's possible to create images that behave
                  better in a responsive design. These new pieces of markup
                  allow us to deliver the right image to the right device, based
                  on resolution, pixel density, and other factors we define.
                  This will help web pages load faster and look better, and the
                  most capable devices will get the best looking images
                  possible.
                </p>
              </div>
            </li>
            <li className="course media group">
              <img
                className="course-img"
                src="https://achievement-images.teamtreehouse.com/badges_intro_to_html_css_stage-01.png"
                alt="course"
              />
              <div>
                <h3>Introduction to HTML and CSS</h3>
                <p>
                  Get started creating web pages with HTML and CSS, the basic
                  building blocks of web development. HTML, or Hypertext Markup
                  Language, is a standard set of tags you will use to tell the
                  web browser how the content of your web pages and applications
                  are structured. Use CSS, or Cascading Style Sheets, to select
                  HTML tags and tell the browser what your content should look
                  like.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: window.location.hash.substr(1)
    };
  }
  componentDidMount() {
    window.addEventListener("hashchange", () => {
      this.setState({
        route: window.location.hash.substr(1)
      });
    });
  }
  render() {
    let Child;
    switch (this.state.route) {
      case "/about":
        Child = About;
        break;
      case "/teachers":
        Child = Teachers;
        break;
      case "/courses":
        Child = Courses;
        break;
      default:
        Child = Home;
    }
    return (
      <div className="container">
        <header>
          <span className="icn-logo">
            <i className="material-icons">code</i>
          </span>
          <ul className="main-nav">
            <li>
              <a aria-current="false" href="#/Home">
                Home
              </a>
            </li>
            <li>
              <a aria-current="false" href="#/about">
                {" "}
                About
              </a>
            </li>
            <li>
              <a aria-current="false" href="#/teachers">
                Teachers
              </a>
            </li>
            <li>
              <a aria-current="false" href="#/courses">
                Courses{" "}
              </a>
            </li>
          </ul>
        </header>{" "}
        <div className="main-content">
          <Child />{" "}
        </div>
      </div>
    );
  }
}

export default App;
