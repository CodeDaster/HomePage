
function createMainMenu() {		//create MainMenu
document.write(
'<div class="navbar navbar-inverse navbar-fixed-top" id="custom-nav" role="navigation">'+
   '<div class="navbar-header">'+
     ' <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#example-navbar-collapse">'+
         '<span class="sr-only">Toggle navigation</span>'+
         '<span class="icon-bar"></span>'+
         '<span class="icon-bar"></span>'+
         '<span class="icon-bar"></span>'+
      '</button>'+
      '<a class="pull-left" href="#"><img src="Pictures/MyILD_Black_Inverse_dark_mini.png" alt="Miss Pic" style="width:90px;height:50px;"></a>'+
   '</div>'+
   '<div class="collapse navbar-collapse" id="example-navbar-collapse">'+
      '<ul class="nav navbar-nav">'+
         '<li><a href="index.html">Home</a></li>'+
          '<li><a href="Impressum.html">About</a></li>'+
          '<li class="dropdown">'+
            '<a href="#" class="dropdown-toggle" data-toggle="dropdown">Music<b class="caret"></b></a>'+
            '<ul class="dropdown-menu">'+
              '<li><a href="Music1.html" title="Kompositionen-Canigou">Canigou</a></li>'+
              '<li><a href="Music2.html" title="Kompositionen-Happy">Happy</a></li>'+
              '<li><a href="Music3.html" title="Kompositionen-QuantumZibet">Quantum Zibet</a></li>'+
              '<li><a href="Music4.html" title="Kompositionen-Scavan">Scavan</a></li>'+
              '<li><a href="Music5.html" title="Kompositionen-Townslight">Townslight</a></li>'+
            '</ul>'+
          '</li><!-- dropdown -->'+
          '<li class="dropdown">'+
            '<a href="#" class="dropdown-toggle" data-toggle="dropdown">Games<b class="caret"></b></a>'+
            '<ul class="dropdown-menu">'+
				'<li role="separator" class="divider"></li>'+
				'<li><a href="GamesWeed.html" title="Spiel: Weedfighter">Weedfighter</a></li>'+
				'<li><a href="GamesCatlyn.html" title="Spiel: Catlyn">Catlyn</a></li>'+
				'<li><a href="colorGame.html" title="Spiel: Color Game">Color-Game</a></li>'+
            '</ul>'+
         ' </li><!-- dropdown -->'+
		  '<li class="dropdown">'+
            '<a href="#" class="dropdown-toggle" data-toggle="dropdown">Stories<b class="caret"></b></a>'+
            '<ul class="dropdown-menu">'+
           		'<li><a href="Writing.html" title="Ein Tag mit Gehbaer">Ein Tag mit Gehbaer</a></li>'+
		     '</ul>'+
         ' </li><!-- dropdown -->'+
		   '<li class="dropdown">'+
            '<a href="#" class="dropdown-toggle" data-toggle="dropdown">Pictures<b class="caret"></b></a>'+
            '<ul class="dropdown-menu">'+
           		'<li><a href="Pictures.html" title="Spectacular Pictures">sPICtacular</a></li>'+
		     '</ul>'+
         ' </li><!-- dropdown -->'+
		 	'<li class="dropdown">'+
            '<a href="#" class="dropdown-toggle" data-toggle="dropdown">Programs<b class="caret"></b></a>'+
            '<ul class="dropdown-menu">'+
           		'<li><a href="ProgramsAcousticMirror.html" title="Acoustic Mirror">Acoustic Mirror</a></li>'+
		     '</ul>'+
         ' </li><!-- dropdown -->'+
       ' </ul><!-- /.nav -->'+	
	   '<ul class="nav navbar-nav navbar-right">'+
			'<li class="dropdown">'+
				'<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" id="selectedLanguage">German<span class="caret"></span></a>'+
				'<ul class="dropdown-menu">' +
					'<li ><a href="#" id="selectGerman"><img src="http://www.nationalflaggen.de/zeige-flagge-38935.html">  Deutsch</a></li>'+
					'<li class="disabled"><a href="#" id="selectEnglish"><img src="http://www.nationalflaggen.de/zeige-flagge-63498.html">  English</a></li>'+
					'<li class="disabled"><a href="#" id="selectItalian"><img src="http://www.nationalflaggen.de/zeige-flagge-78667.html">  Italian</a></li>'+
				'</ul>'+
			'</li>'+
		 '</ul>'+
   '</div>'+
'</div>'
)};

function createFooter() {	 //create Footer and Year
document.write(
	'<footer><div></div>' +
	'<div class="footer-text"><div> IcyIce Media </div><div> | </div><a class="link" href="Impressum.html">Impressum</a></div>' +
	'<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">' +
	'<img alt="Creative Commons Lizenzvertrag" style="border-width:0;float:right; margin: 4px 3px 3px 3px;" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a>'+
	'</footer>'
)};

function createHead() {	 //create Footer and Year
document.write(
	'<title>IcyIce Media</title>'+
	'<meta content="text/html; charset=ISO-8859-1" http-equiv="content-type">	<!-- Darstellung von Umlauten aktivieren, manchmal auch <meta charset="utf-8">	-->' + 
	'<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">' +
	'<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>' +
	'<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>' +
	'<link rel="stylesheet" type="text/css" href="SiteStyle.css">'+
	'<link rel="stylesheet" type="text/css" href="Bildbearbeitung.css">'
)};

