import HEAD from "next/head";
export default function Blogs() {
  return (
    <>
      <HEAD>
        <title>Blog Posts | Rishabh.live | rishabh - live</title>
        <link rel="icon" href="/main-ico.png" />
        <link rel="stylesheet" href="/assets/blogs/css/style.css" />
      </HEAD>
      <section>
        <center>
          <nav>
            <div className="banner">
              <img src="/assets/images/Banner-Classy.png" alt="rishabh live classy style banner"/>
            </div>
          </nav>
        </center>
      </section>
    </>
  );
}
