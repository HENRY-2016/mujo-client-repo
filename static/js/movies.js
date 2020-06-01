var src_url = "http://192.168.43.140:6060/";
// var src_url = "http://127.0.0.1:6060/";


function Get_Movie_Price ( html_id, endpoint)
{
    let prices_req = new XMLHttpRequest ();
    prices_req.open('get',src_url+ endpoint,true);
    prices_req.onload = function ()
        {
            let price =  this.responseText;
            document.getElementById(html_id).innerHTML = price;
        }
        prices_req.send();
}



// Menu Gallery
function Add_Movies_Gallery_Iframe (endpoint)
{
    document.getElementById("offline-label-div").style.display = "none";
    let MenuGalleryDiv = document.getElementById("menu-pics-div");
    let MenuIframe = document.createElement("iframe");
    MenuIframe.className = "menu-iframe";
    MenuIframe.setAttribute("src",  src_url + endpoint);
    MenuGalleryDiv.appendChild(MenuIframe);
}

function Create_Offline_Label ()
{
    let offline_label_div = document.getElementById("offline-label-div");
    let label = document.createElement("label");
    label.innerHTML = "Your Are Offline <br> Please <br>Connect To Network"
    label.className = "Offline-Label"
    offline_label_div.appendChild(label)
}

function Load_Movie_Names ( html_id, options_endpoint)
{
    let menu_options_req = new XMLHttpRequest ();
    menu_options_req.open('post' ,src_url + options_endpoint,true);
    menu_options_req.onload = function ()
        {
            let names = JSON.parse(this.responseText);
            let html_select_input = document.getElementById(html_id);
            for (index in names)
                {html_select_input.options[html_select_input.options.length] = new Option(names[index],index);}
        }
    let selecte_names = document.getElementById(html_id);
    menu_options_req.send(selecte_names);
}