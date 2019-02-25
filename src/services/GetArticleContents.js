import $ from "jquery";
import {isEmpty} from "lodash";

export function ArticleContents(
    params = {}
  ) {
    return new Promise((resolve, reject) => {
        $.ajax( {
            url: "https://en.wikipedia.org/w/api.php",
            dataType: 'jsonp',
            data: params,
            jsonp: 'callback',
            success: function(data) {
                if (!isEmpty(data.parse)) {                    
                    let search = !isEmpty(data.parse.text) ? data.parse.text["*"] : [];
                    resolve(search);
                }else{
                    resolve([]);
                }
            }
        });        
    });
  }