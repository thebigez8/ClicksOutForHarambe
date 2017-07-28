// hide the start menu
function closeStartMenu()
{
  document.getElementById("clickcounter").innerHTML = 0;
  var size = Number(document.getElementById("choosesize").value);
  if(size === 0)
  {
    return false;
  } else
  {
    for(var i = 0; i < size; i++)
    {
      var newrow = document.createElement("DIV");
      newrow.id = "row" + i;
      newrow.className = "row row" + size;
      for(var j = 0; j < size; j++)
      {
        var newcol = document.createElement("SPAN");
        newcol.id = "row" + i + "-col" + j;
        newcol.className = "col col" + size;
        newrow.appendChild(newcol);
      }
      document.getElementById("gameboard").appendChild(newrow);
    }
  }
  document.getElementById("clicker").focus();
  document.getElementById("startmenu").style.height = "0%";
}

function keepgame()
{
  document.getElementById("clicker").focus();
  document.getElementById("wonmenu").style.height = "0%";
}

function newgame()
{
  document.getElementById("wonmenu").style.height = "0%";
  document.getElementById("startmenu").style.height = "100%";
  document.getElementById("start").disabled = true;
  document.getElementById("choosesize").value = 0;
  
  var board = document.getElementById("gameboard");
  while (board.firstChild)
  {
    board.removeChild(board.firstChild);
  }

  document.getElementById("start").disabled = false;
}

function clickdat()
{
  document.getElementById("clicker").disabled = true;
  var numclks = Number(document.getElementById("clickcounter").innerHTML);
  var size = Number(document.getElementById("choosesize").value);
  
  var cols = document.getElementsByClassName("col");
  // count the ones who are not transparent
  var n = [];
  for(var i = 0; i < cols.length; i++)
  {
    if(cols[i].className.search("trsnp") === -1)
    {
      n.push(i);
    }
  }
  if(n.length > 0)
  {
    var which = Math.floor(Math.random()*n.length);
    var whichrow = Math.floor(n[which] / size);
    var whichcol = n[which] - whichrow*size;
    document.getElementById("row" + whichrow + "-col" + whichcol).className = "col col" + size + " trsnp";
  }
  
  document.getElementById("clickcounter").innerHTML = numclks + 1;
  document.getElementById("clicker").disabled = false;
  if(numclks + 1 == size*size)
  {
    document.getElementById("wonmenu").style.height = "100%";
  }
}

