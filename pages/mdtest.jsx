import Showdown from "showdown"


 function M2H(resp){
    var converter = new Showdown.Converter({metadata: true});
    converter.setFlavor('github');
    var text      = resp;
    var html      = converter.makeHtml(text);

    return html;
}


export default function Arpp({ res }) {

    var html =  M2H(res);

     // var html = "<p> Shit </p>"


  return (
    <div dangerouslySetInnerHTML={{ __html: html }} />
  );
}

Arpp.getInitialProps = async (ctx) => {
  const res = await fetch(
    "https://raw.githubusercontent.com/rishabh-live/rishabh-live/master/README.md"
  ).then((x) => x.text());
  // const todos = await res.json();
  
  return { res };
};
