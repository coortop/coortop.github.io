$(function(){var e=new APlayer({container:document.getElementById("aplayer-allPage-fixed"),lrcType:3,order:"random",fixed:!0});$.getJSON("https://api.fczbl.vip/163/?type=playlist&id=3034682013",function(t){e.list.add(t)})});