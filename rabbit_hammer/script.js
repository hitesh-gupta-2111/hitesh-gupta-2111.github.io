var id = [];
for (let i = 0; i < 10; i++) {
    id.push("div" + i);
}

function put(id, content)
{
    document.getElementById(id).innerHTML = content;
}

function get(id)
{
    return document.getElementById(id).innerHTML;
}

function fillRandom(yy)
{   
    var x = Math.floor((Math.random() * 9) + 1);
    if(id[x]==yy)  x = x%9 + 1;
    put(id[x], "<img src='./rabbit2.gif' height='auto' width='100px'>");
}

function fill(mydiv)
{
    if(get(mydiv.id)=="") return;
    put(mydiv.id, "");
    fillRandom(mydiv.id); 
}

fillRandom(); 