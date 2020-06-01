
function Load_index () {window.location="index.html"}
function Load_a_view () {window.location="a.html"}
function Load_b_view () {window.location="b.html"}
function Load_c_view () {window.location="c.html"}
function Load_developer () {window.location="developer.html"}

function display_date ()
{
    let today = new Date ();
    let date = today.getDate() +'-0'+(today.getMonth()+1)+'-'+today.getFullYear ();
    document.getElementById("date-id").innerHTML = date;
    
}
