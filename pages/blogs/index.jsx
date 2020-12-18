import HEAD from "next/head";
import LINK from "next/link";
export default function Blogs() {
  return (
    <>
      <HEAD>
        <title>Blog Posts | Rishabh.live | rishabh - live</title>
        <link rel="icon" href="/main-ico.png" />
        <link rel="stylesheet" href="/assets/blogs/css/style.css" />
      </HEAD>
      <section className="blogs-section-one">
        <center>
          <nav>
            <div className="banner">
              <img
                src="/assets/images/Banner-Classy.png"
                alt="rishabh live classy style banner"
              />
            </div>
          </nav>
        </center>
      </section>
      <section className="blogs-section-two">
        <center>
          <div className="mainCard">
            <div className="blogCard">
              <img
                src="/assets/images/Banner-Linkedin.png"
                alt="Banner Classy"
                className="mainImage"
              />
              <br />
              <br />
              <label htmlFor="title" id="title">
                An Awesome Title
              </label>
              <br />
              <label htmlFor="shorts" id="short">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem
                ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum
                dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor
                sit amet consectetur adipisicing elit.
              </label>
              <br />
              <center>
                <LINK href="/blogs/an-awesone-article" as="/blogs/an-awesone-article">
                  <a>
                    <button id="readMore">Read More</button>
                  </a>
                </LINK>
              </center>
            </div>
          </div>
        </center>
      </section>
    </>
  );
}
