import LINK from "next/link";
import Gitdata from "../components/database/gitrepos.json";
import HEAD from "next/head";

function Indexpage({ todos }) {
  var key = 0;

  return (
    <>
      <HEAD>
        <title> Rishabh - live | Rishabh | rishabh.live </title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Righteous&family=Chilanka&family=Sansita+Swashed&family=Dancing+Script:wght@500&family=Ubuntu:ital@1&display=swap"
        />
        <link rel="icon" href="/main-ico.png" />

        <link rel="stylesheet" href="/assets/main/css/homeIndexPage.css" />
        <link rel="stylesheet" href="/assets/blogs/css/style.css" />
        <meta name="title" content="Rishabh | rishabh-live | rishabh.live" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=6.0"
        />
        <meta
          name="keywords"
          content="rishabh, student, smit, sikkim, manipal, institute, technology, it ,information technology,"
        />
        <meta
          name="description"
          content="I am Rishabh. Student of Information Technology at Sikkim Manipal Institute of Technology aka SMIT. Also a Web Developer at Gladiolus Langauge Nectar"
        />
      </HEAD>
      <section className="main-page-section-one">
        <center>
          <div class="line">
            <label>Hi, I am Rishabh. </label>
          </div>
          <div class="holder">
            <div class="menu">
              <p>
                {" "}
                <LINK href="#about">
                  <a href="#about">About Me</a>
                </LINK>
              </p>{" "}
              <p>
                {" "}
                <LINK href="#projects">
                  <a href="#projects">My Works</a>
                </LINK>{" "}
              </p>
              <p>
                {" "}
                <LINK href="https://github.com/rishabh-live/" target="_blank">
                  <a href="https://github.com/rishabh-live/" target="_blank">
                    My Github
                  </a>
                </LINK>{" "}
              </p>{" "}
              <p>
                {" "}
                <LINK href="mailto:rishabh0508@hotmail.com?subject=I%20am%20an%20Angel&body=Hey%20Rishabh%2C%0D%0A%0D%0AI%20am%20Angel.%20And%20wanted%20to%20say%20that%20...%0D%0A%0D%0A%0D%0ARegards%2C%0D%0AAngel.">
                  <a>Email Me</a>
                </LINK>{" "}
              </p>
            </div>
            <div class="dp">
              <img
                src="/rishabh.png"
                alt="Rishabh-Live | Rishabh"
                class="w3-card-4 shadow"
                align="center"
              />
            </div>
          </div>
        </center>
      </section>
      <section id="about" className="main-page-section-two">
        <center>
          <div class="headline">
            <div class="backTitle">About</div>
            <div class="frontTitle">Who M'I ?</div>
          </div>
          <div class="aboutCardHolder w3-card-4 shadow">
            <div class="w3-card-4 aboutCard shadow">
              <div class="mypic">
                <img src="/about-dp.jpg" alt="Rishabh" />
              </div>
              <div class="aboutme">
                <br />
                <label class="paragraph">
                  I am Rishabh. I am a Web Developer and I have worked with
                  HyperText Preproccesor (PHP), NodeJS and Java Server Pages
                  (JSP). I do have developed and maintained a website for{" "}
                  <LINK href="https://languagenectar.com" target="_blank">
                    <a>
                      Gladiolus Langauge Nectar <sup>[!]</sup>
                    </a>
                  </LINK>
                </label>
              </div>
            </div>
            <label class="paragraphMobile">
              I am Rishabh. I am a Web Developer and I have worked with
              HyperText Preproccesor (PHP), NodeJS and Java Server Pages (JSP).
              I do have developed and maintained a website for{" "}
              <LINK href="https://languagenectar.com">
                <a>
                  Gladiolus Langauge Nectar <sup>[!]</sup>
                </a>
              </LINK>
            </label>
          </div>
        </center>
      </section>
      <section id="projects" className="main-page-section-three secThree">
        <center>
          <div class="headline">
            <div class="backTitle">Projects</div>
            <div class="frontTitle">My Works</div>
          </div>
          <div class="gitCardHolder">
            <div class="gitCard">
              {Gitdata.map((gitDetail) => {
                return (
                  <div key={gitDetail.id} class="projCards w3-card-4 shadow">
                    <div>
                      <img
                        src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_326384.png&f=1&nofb=1"
                        alt="Github Icon"
                      />
                      <LINK href={gitDetail.html_url}>
                        <label class="nameOfTheProject">{gitDetail.name}</label>
                      </LINK>
                      <label class="w3-tag w3-yellow w3-card-2 w3-margin">
                        {gitDetail.language}
                      </label>
                      <p class="prjDesc">{gitDetail.description}</p>
                      <p>
                        {/* <label class="w3-tag w3-green w3-card-2 w3-margin">
                          Created on : {gitDetail.created_at.substring(0, 10)}
                        </label> */}
                        <label class="w3-tag w3-green w3-card-2 w3-margin">
                          Last Updated : {gitDetail.updated_at.substring(0, 10)}
                        </label>
                        <LINK href={gitDetail.html_url}>
                          <label class="w3-tag w3-black w3-card-2 w3-margin">
                            Open on Github
                          </label>
                        </LINK>
                      </p>
                    </div>
                  </div>
                );
              })}

              <div className="projCards w3-card-4 shadow">
                <div>
                  <div align="center">
                    <img
                      class="dipstats"
                      src="https://github-readme-stats.vercel.app/api?username=rishabh-live&show_icons=true&count_private=true"
                      align="center"
                      alt="Github Stats"
                    />
                  </div>
                </div>
              </div>

              <div className="projCards w3-card-4 shadow">
                <div>
                  <div align="center">
                    <img
                      class="dipstats"
                      src="https://github-readme-streak-stats.herokuapp.com/?user=rishabh-live"
                      align="center"
                      alt="Github Language Stats"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </center>
      </section>
      {/* <section class="secThree">
        <center>
          <div class="headline">
            <div class="backTitle">Blogs</div>
            <div class="frontTitle">My Writtings</div>
          </div>
          <div class="gitCardHolder">
            <div class="gitCard">
              {todos.objects.map(({  slug, title, metadata }) => {
                key = key +1
                if (key <= 4) {
                  return (
                    <div key={key} class="projCards w3-card-4">
                      <div>
                        <img src="/main-ico.png" alt="Website Main Icon" />
                        <LINK href={"/blogs/" + slug}>
                          <label class="nameOfTheProject">{title}</label>
                        </LINK>{" "}
                        <p class="prjDesc">{metadata.excerpt}</p>
                        <p>
                          <label class="w3-tag w3-green w3-card-2 w3-margin">
                            Author : {metadata.author.title}
                          </label>
                          <label class="w3-tag w3-green w3-card-2 w3-margin">
                            Posted on :{" "}
                            <i>{metadata.author.created.substring(0, 10)}</i>
                          </label>

                          <LINK href={"/blogs/" + slug}>
                            <label class="w3-tag w3-blue w3-card-2 w3-margin">
                              Read More...
                            </label>
                          </LINK>
                        </p>
                      </div>
                    </div>
                  )
                  }
              })}
            </div>
          </div>
        </center>
      </section> */}
    </>
  );
}

// Indexpage.getInitialProps = async (ctx) => {
//   const res = await fetch(
//     "https://api.cosmicjs.com/v1/d8818620-13a9-11eb-b41c-a731de31859b/objects?pretty=true&limit=4&hide_metafields=true&type=posts&read_key=SYezoDh1zt67yCHo3UyBA6hgs4oJcH6QQdWrDx2qodo9zv936d&limit=20&props=slug,title,content,metadata,"
//   );
//   const todos = await res.json();

//   return { todos };
// };

export default Indexpage;
