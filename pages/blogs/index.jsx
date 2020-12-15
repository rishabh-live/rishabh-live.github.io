import HEAD from "next/head";
export default function Blogs() {
  return (
    <>
      <HEAD>
        <title>Blog Posts | Rishabh.live | rishabh - live</title>
        <link rel="icon" href="/main-ico.png" />
        <link rel="stylesheet" href="/assets/global/css/w3.min.css" />
        <link rel="stylesheet" href="/assets/blogs/css/style.css" />
      </HEAD>
      <section>
        <center>
          <nav>
            <div className="banner">
              <img src="/assets/images/Banner-Linkedin.png" />
            </div>
          </nav>
        </center>
      </section>
    </>
  );
}
