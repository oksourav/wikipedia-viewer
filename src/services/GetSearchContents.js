import $ from "jquery";
import {isEmpty} from "lodash";

export function SearchContents(
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
                    let search = !isEmpty(data.query.search) ? data.query.search : [];
                    resolve(search);
                }else{
                    resolve([]);
                }
            }
        });        
    });
  }