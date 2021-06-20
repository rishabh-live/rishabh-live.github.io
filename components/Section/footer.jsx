import LINK from "next/link";

export default () => {
  const baseLink = {
    url: "https://rishabh.live",
    smitWhatsMyDp: "https://whatsmydp.rishabh.live",
    aws: "https://aws.rishabh.live",
    blogs: "https://blogs.rishabh.live",
    anchalakirasoi: "https://anchalakirasoi.rishabh.live/",
  };
  const img = {
    facebook:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEU8Wpn///8jSpHx8/c5WJhQaaLX3OgoTZLu8PUwUpU0VJahrMiGlLp8jLU2VpceR5Da3umxutFIY567w9eQnsBacaXl6PBne6tzhbH3+PpRaqGbp8UAO4umsMvg4+yLmr1uga7M0uFedKevuNDnQpi/AAAEN0lEQVR4nO3d7XaiMBSFYcAIBpVUxa86itr7v8dp62itteZIOIST2e//ruZZgCiEEMWhF/keAHv/n7AnvwfCtJqaJICm5ctdYdpPchWFkNLJfPdTWJrC98gaTJntrXCc+R5UwyXVd2EZGvCduL0Wpsb3eBgyiythP6Rj8Fyx/BKmie/RsHTaiJ/CKvc9GJb08CKchnEevE0tL8IQP2eijzP/WdgL8zB8P2FAKD4I5Qeh/CCUH4Tyg1B+EMoPQvlBKD8IO1BR5KeKvChUoaLnLgp2WahynSUmmu/Ho6qqRqPxeLVfzqdRZkySZFmmdV7YtZ0V6sy8VpN0EN9r3VvsDrPJsFq9WomdFCqdROVhfRd3m/VSfQeFKsu+3aF+3EicUGXTGZknUPjuOzzjEycssslzPmnCZE/7dJEqVOapA1CesFCLGkBBwvz1+T1UlFAfa/nkCPN5TaAUoZrWBUoR6tvZkqEJTVobKEOoN/WBIoQOB6EQodlZENKF+cgFKEGY1PsuI0eYl05AAUJT/1QoQ+h4FAoQJvRrTjKFbudCCUK9tQDEC5Nav+sFCd130q4LtePJsPvC7OAs7Ph9i+SJ0306G5aj8Y+sN588H4dE3frtaDL9cb8wv63bd9eKFQ24SXT9h0G8Cmk/7ntT7fJPvAozymX8nnZ74syvkHIF6tXxkTqvQso3monrY59+hYSf90/OLbnzT7wK7UD3pyJ9ClVuF26cn4r0ug0J37uPzk9Fet2GBKH7qLwK+1bgOnjhInjhzn0RhI4LX4IXphDag5AzCCGkBSFnEEJIC0LOIISQFoScQQghLQg5C0Sof18I19hXaE7/WBbT9f+UrN70Br9nFa4f/PFH6773+/inhRn5su/FwoWEUQsXEq4YCxceghe+2SeiCBeW9lvEwoV7+1QU4ULC0sDChYRByxYOghdSvpjLFs6CFw4J8zJlC63T2MULl4QZU7KFlClhsoWUMYsWkmZMiRYSfjsJF84ok/hFCzfBC8eUafyihfPghaRnhSQLaROIJQtpE4glC0mnQ9HCCemZNslCwqVE4cJV8EL7nbU2hDmjkHZ/WPI9YNoAcB+fMwghpAUhZxBCSAtCziCEkBaEnEEIIS0IOYMQQloQcgYhhLQg5AxCCGlByBmEENKCkDMIIaQFIWcQQkgLQs4ghJAWhJxBCCEtCDmDEEJaEHIGIYS0IOQMQghpQcgZhBDSgpAzCCGkBSFnEEJI6yJs4I2fz9aK8PTC2k8hbZWJJmtFWCwvwtLpDeZ1akWotxfhS+u7aStCM7gI43nbu2kbwmIVfwl3ppFx02tDeNqE/4TxtuX9tAWhmcXXwrhql8gvNOf1fy4r4WwNZZ2+puIWFucteCWMF0ujVVufOJxCVWiz+nrLy/VqRovh8cHCR43WxJt0fitfbq/fYmP/T9KDUH7hC/8CYjpgljRwcJIAAAAASUVORK5CYII=",
    instagram:
      "https://www.freepnglogos.com/uploads/new-instagram-logo-with-transparent-background-9.png",
    linkedin: "/linkedin.png",
    github:
      "https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png",
  };
  const social = {
    facebook: "https://www.facebook.com/rishabh.live.official/",
    instagram: "https://www.instagram.com/rishabh.live/",
    linkedin: "https://www.linkedin.com/in/rishabh0508/",
    github: "https://github.com/rishabh-live/",
  };
  return (
    <>
      <section className="secFooter">
        <div className="footer">
          <div className="contain">
            <div className="col">
              <h1>This Site</h1>
              <ul>
                <li>
                  <LINK href={baseLink.url + "#about"}>
                    <a href={baseLink.url + "#about"}>About Me</a>
                  </LINK>
                </li>
                <li>
                  <LINK href={baseLink.url + "#projects"}>
                    <a href={baseLink.url + "#projects"}>My Projects</a>
                  </LINK>
                </li>
              </ul>
            </div>
            <div className="col">
              <h1>Sub Domains</h1>
              <ul>
                <li>
                  <LINK href={baseLink.smitWhatsMyDp}>
                    <a href={baseLink.smitWhatsMyDp}>SMIT WHATSMYDP</a>
                  </LINK>
                </li>
                <li>
                  <LINK href={baseLink.aws}>
                    <a href={baseLink.aws}>AWS EC2</a>
                  </LINK>
                </li>
                <li>
                  <LINK href={baseLink.blogs}>
                    <a href={baseLink.blogs}>Blogs</a>
                  </LINK>
                </li>
                <li>
                  <LINK href={baseLink.anchalakirasoi}>
                    <a href={baseLink.anchalakirasoi}>Anchala Ki Rasoi</a>
                  </LINK>
                </li>
              </ul>
            </div>
            <div className="col">
              <h1>PDFs</h1>
              <ul>
                <li>
                  <LINK href={baseLink.url + "/pdfs/Rishabh_Resume.pdf"}>
                    <a href={baseLink.url + "/pdfs/Rishabh_Resume.pdf"} target="_blank">
                      My Resume
                    </a>
                  </LINK>
                </li>
                
              </ul>
            </div>

            <div className="col social">
              <h1>Social</h1>
              <ul>
                <li>
                  <LINK href={social.facebook}>
                    <a href={social.facebook} target="_blank">
                      <img
                        src={img.facebook}
                        width={32}
                        style={{ width: 32 }}
                      />
                    </a>
                  </LINK>
                </li>
                <li>
                  <LINK href={social.instagram}>
                    <a href={social.instagram} target="_blank">
                      <img
                        src={img.instagram}
                        width={32}
                        style={{ width: 32 }}
                      />
                    </a>
                  </LINK>
                </li>
                <li>
                  <LINK href={social.linkedin}>
                    <a href={social.linkedin} target="_blank">
                      <img
                        src={img.linkedin}
                        width={32}
                        style={{ width: 32 }}
                      />
                    </a>
                  </LINK>
                </li>
                <li>
                  <LINK href={social.github}>
                    <a href={social.github} target="_blank">
                      <img src={img.github} width={32} style={{ width: 32 }} />
                    </a>
                  </LINK>
                </li>
              </ul>
            </div>
            <div className="clearfix" />
          </div>
        </div>
        <div class="fotter">
          <center>
            <label>
              Made with <span class="heart">❤</span> by{" "}
              <LINK href="/">Rishabh</LINK>
            </label>
          </center>
        </div>
      </section>
    </>
  );
};
