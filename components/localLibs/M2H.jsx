
import Showdown from "showdown"



 function M2H(resp){
    var converter = new Showdown.Converter(),
    text      = resp,
    html      = converter.makeHtml(text);

    return html;
}