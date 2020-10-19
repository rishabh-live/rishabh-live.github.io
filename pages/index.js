import Github from "../components/Section/github";
import LINK from "next/link";

function Indexpage() {
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
                <label>About Me</label>
                <label>About Me</label>
                <br />
                <label class="paragraph">
                  I am Rishabh. I am a Web Developer and I have worked with
                  HyperText Preproccesor (PHP), NodeJS and Java Server Pages
                  (JSP). I do have developed and maintained a website for
                  <LINK href="https://languagenectar.com">
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
      <Github />
      
    </>
  );
}

// Indexpage.getInitialProps = async (ctx) => {
//     const res = await fetch('https://api.github.com/users/rishabh-live')
//     const json = await res.json()
//     return { stars: json.login}
// }
  


export default Indexpage;
