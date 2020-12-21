import LINK from "next/link";

export default () => {
  return (
    <>
      <section className="footer">
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
