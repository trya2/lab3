function previous()
{
let alt = parseInt(document.getElementById("photo").alt);
alt = alt - 1;
alt = alt.toString();
 if(alt == 0)
 {
 alt = '5';
 document.getElementById("photo").src = alt + ".jpg";
 document.getElementById("photo").alt = alt;
 }
 else
 {
 document.getElementById("photo").src = alt + ".jpg";
 document.getElementById("photo").alt = alt;
 }
}

function next()
{
let alt = parseInt(document.getElementById("photo").alt);
alt = alt + 1;
alt = alt.toString();
 if(alt == 6)
 {
 alt = '1';
 document.getElementById("photo").src = alt + ".jpg";
 document.getElementById("photo").alt = alt;
 }
 else
 {
 document.getElementById("photo").src = alt + ".jpg";
 document.getElementById("photo").alt = alt;
 }

}
