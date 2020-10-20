import LINK from "next/link";
import Gitdata from '../components/database/gitrepos.json'
import Contact from '../components/Section/contact'

export default function Indexpage() {

  return (

    <>
      <section>
        <center>
          <div class="line">
            <label>Hi, I am Rishabh. </label>
          </div>
          <div class="holder">
            <div class="menu">
              <p> Read My Blogs </p> <p> View My Slides </p> <p> Email me </p>
            </div>
            <div class="dp">
              <img src="/rishabh.jpg" alt="Rishabh-Live | Rishabh" class="w3-card-4" />
            </div>
          </div>
        </center>
      </section>
      <section>
        <center>
          <div class="headline">
            <div class="backTitle">About</div>
            <div class="frontTitle">Who M'I ?</div>
          </div>
          <div class="aboutCardHolder w3-card-4">
            <div class="w3-card-4 aboutCard">
              <div class="mypic">
                <img src="/about-dp.jpg" alt="Rishabh" />
              </div>
              <div class="aboutme">
                {/*  */}
                <br />
                <label class="paragraph">
                  I am Rishabh. I am a Web Developer and I have worked with
                  HyperText Preproccesor (PHP), NodeJS and Java Server Pages
                  (JSP). I do have developed and maintained a website for
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
              I do have developed and maintained a website for
              <LINK href="https://languagenectar.com">
                <a>
                  Gladiolus Langauge Nectar <sup>[!]</sup>
                </a>
              </LINK>
            </label>
          </div>
        </center>
      </section>
      <section class="secThree">
        <center>
          <div class="headline">
            <div class="backTitle">Projects</div>
            <div class="frontTitle">My Works</div>
          </div>
          <div class="gitCardHolder">
            <div class="gitCard">

              {Gitdata.map((gitDetail) => {
                return <div class="projCards w3-card-4">
                  <div>
                    <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_326384.png&f=1&nofb=1" alt="Github Icon" />
                    <LINK href={gitDetail.html_url}><label class="nameOfTheProject"> {gitDetail.name} </label></LINK> <label class="w3-tag w3-yellow w3-card-2 w3-margin">
                      {gitDetail.language}
                    </label>
                    <p class="prjDesc">
                      {gitDetail.description}
                    </p>
                    <p>
                      <label class="w3-tag w3-green w3-card-2 w3-margin">
                        Created on : {gitDetail.created_at}
                      </label>
                      <label class="w3-tag w3-green w3-card-2 w3-margin">
                        Updated on : {gitDetail.updated_at}
                      </label>

                      <LINK href={gitDetail.html_url}>
                        <label class="w3-tag w3-black w3-card-2 w3-margin">
                          Open in Github
                          </label>
                      </LINK>

                    </p>
                  </div>
                </div>

              })}

              <div class="projCards w3-card-4">
                <div>
                  <div align="center"><img class="dipstats" src="https://github-readme-stats.vercel.app/api?username=rishabh-live&show_icons=true&count_private=true" align="center" /></div>
                </div>
              </div>

              <div class="projCards w3-card-4">
                <div>
                  <div align="center"><img class="dipstats" src="https://github-readme-stats.vercel.app/api/top-langs/?username=rishabh-live" align="center" /></div>
                </div>
              </div>
            </div>
          </div>
        </center>
      </section>
      <section>
        <center>
          <div class="headline">
            <div class="backTitle">Let's Talk</div>
            <div class="frontTitle">Contact</div>
          </div>
          <div class="aboutCardHolder w3-card-4">

          </div>
        </center>
      </section>

    </>
  );
}

// Indexpage.getInitialProps = async (ctx) => {
//     const res = await fetch('https://api.github.com/users/rishabh-live')
//     const json = await res.json()
//     return { stars: json.login}
// }

// Indexpage.getInitialProps = async (ctx) => {
//   const res = await fetch('/database/gitrepos.json')
//   const json = await res.json()
//   return { reslt: { repos: json.name } }
// }


