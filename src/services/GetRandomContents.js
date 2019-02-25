import $ from "jquery";
import {isEmpty} from "lodash";

export function RandomContents(
    params = {}
  ) {
    return new Promise((resolve, reject) => {
        $.ajax( {
            url: "https://en.wikipedia.org/w/api.php",
            dataType: 'jsonp',
            data: params,
            jsonp: 'callback',
            success: function(data) {
                if (!isEmpty(data.query)) {
                    let search = !isEmpty(data.query.pages) ? data.query.pages[Object.keys(data.query.pages)[0]] : [];
                    resolve(search);
                }else{
                    resolve([]);
                }
            }
        });        
    });
  }