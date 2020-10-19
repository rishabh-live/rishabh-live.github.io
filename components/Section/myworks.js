import LINK from "next/link";

export default function Mywork() {
  return (
    <>
      <section>
        <center>
          <div class="headline">
            <div class="backTitle">Who M'I ?</div>
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
                  (JSP). I do have have developed and maintained a website for{" "}
                  <LINK href="https://languagenectar.com">
                    <a>
                      Gladiolus Langauge Nectar <sup>[!]</sup>
                    </a>
                  </LINK>
                </label>
              </div>
            </div>
          </div>
        </center>
      </section>
    </>
  );
}
