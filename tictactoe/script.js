var counter = 1;
var ch;
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

function isMatch(val, a, b, c)
{
    if(val[a]!="" && val[b]!="" && val[c]!="" && val[a] == val[b] && val[b]==val[c]) 
    {
        put(id[a], "<span class='highlight'>"  + val[a] + "</span>");
        put(id[b], "<span class='highlight'>"  + val[b] + "</span>");
        put(id[c], "<span class='highlight'>"  + val[c] + "</span>");
        return true;
    }
    return false;
}

function winCheck()
{
    var val = ['O'];
    for (let i = 1; i < 10; i++) {
        val.push(get(id[i]));
    }
    
    if(isMatch(val, 1,2,3) ||isMatch(val, 1,5,9) ||isMatch(val, 1,4,7) ||isMatch(val, 2,5,8) ||isMatch(val, 3,6,9) ||isMatch(val, 3,5,7) ||isMatch(val, 4,5,6) ||isMatch(val, 7,8,9)) return true;

    return false;
}

function reset()
{
    counter = 1;
    for (let i = 1; i < 10; i++) {
        put(id[i], "");
    }
}

function fill(mydiv)
{
    if(winCheck())
    {
        alert(ch + ' is Winner' );
        reset();
        return;
    } 
    if(counter == 10) 
    {
        alert('Game Draw');
        reset();
        return ;
    }
    if(get(mydiv.id)!="") return;
    if(counter%2==1) ch = 'X';
    else ch = 'O';
    put(mydiv.id, ch);
    winCheck();
    counter++;
}