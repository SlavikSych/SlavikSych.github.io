<?php 

 
// define variables and set to empty values
$nameErr = $emailErr = $telErr = $cityErr = "";
$error=$good=false;
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
  session_start();

$name = htmlspecialchars($_POST["nameFF"]);
$city =htmlspecialchars($_POST["cityFF"]);
$tel =htmlspecialchars($_POST["messageFF"]);
$email = htmlspecialchars($_POST["contactFF"]);
$number = htmlspecialchars($_POST["number"]);
    
$_SESSION["EMAIL"]=$email;
  $_SESSION["NAME"]=$name;
     $_SESSION["CITY"]=$city;
     $_SESSION["TEL"]=$tel;
     $_SESSION["NUMBER"]=$number;
     
    
  if (empty($_POST["nameFF"])) {
    $nameErr = "Данные введены некорректно!";
      $error=true;
  } else {
    $name = test_input($_POST["nameFF"]);
    // check if name only contains letters and whitespace
  if (!preg_match("/^[а-яА-Яa-zA-Z ]{2}+[а-яА-Яa-zA-Z\/\\\\ ]+$/",$name)) {
      $nameErr = "Данные введены некорректно!"; 
       $error=true;
    }
  }

  if (!empty($_POST["contactFF"])) {

  
    $email = test_input($_POST["contactFF"]);
    // check if e-mail address is well-formed
      //preg_match('/[^(\w)|(\@)|)(\.)|(\-)]/',$email)
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $emailErr = "Данные введены некорректно!"; 
         $error=true;
    }
  }
     
if (empty($_POST["cityFF"])) {
    $cityErr = "Данные введены некорректно!";
     $error=true;
  } else {
    $city = test_input($_POST["cityFF"]);
    // check if name only contains letters and whitespace
  if (!preg_match("/^[а-яА-Яa-zA-Z ]{2}+[а-яА-Яa-zA-Z\-\ ]+$/",$city)) {
      $cityErr = "Данные введены некорректно!"; 
       $error=true;
    }
}

    if (!empty($_POST["number"])) {
  
 
    $number = test_input($_POST["number"]);
    // check if name only contains letters and whitespace
  if (!preg_match("/^[0-9]{0}+[0-9]+$/",$number)) {
      $numberErr = "Данные введены некорректно!"; 
       $error=true;
    }
}
  if (empty($_POST["messageFF"])) {
    $telErr = "Данные введены некорректно!";
       $error=true;
  } else {
    $tel = test_input($_POST["messageFF"]);
      $phone ="+7(495) 123-25-52";
      $pattern ="#^\+[0-9]{1,2}\s?\([0-9]{3}\)\s?[0-9]+\-[0-9]+\-[0-9]+$#";
      $pattern1='/((8|\+7)-?)?\(?\d{3,5}\)?-?\d{1}-?\d{1}-?\d{1}-?\d{1}-?\d{1}((-?\d{1})?-?\d{1})?/';
      if(!preg_match($pattern1, $tel))  {
            $telErr = "Данные введены некорректно!";  
           $error=true;
      }
    
  }
   
if($error!=true && !empty($_POST["nameFF"])){
 

 
// Проверка на общий размер всех файломю Многие почтовые сервисы не принимают вложения больше 10 МБ
    include('contacts.php');
    if($good==true){
    echo"<script>alert(\"Спасибо, Ваш запрос оправлен!В длижайшее время с Вами свяжется наш специалист.\");</script>";
          $name = $city = $email =$tel=$number ="";
     $_SESSION["EMAIL"]=$email;
      $_SESSION["NAME"]=$name;
     $_SESSION["CITY"]=$comp;
     $_SESSION["TEL"]=$tel;
       $_SESSION["NUMBER"]=$number;
  
      session_destroy();
      $_POST["nameFF"]="";
         $error = false; 
    }
    if($good==false){
        echo"<script>alert(\"Извините, письмо не отправлено. Размер всех файлов превышает 10 МБ.\");</script>";
       
    }
  
}
  
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

?>
<!doctype html>
<html lang="ru">
<head>
	<!-- Define Charset -->
	<!---<meta charset="UTF-8">
---->
	<!-- Page Title -->
	<title>ПаллетТрейд - производство паллет, сушка поддонов</title>

	<!-- Responsive Metatag --> 
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!-- Favicon -->
       <link rel="shortcut icon" href="img/favicon.png">   
	<!-- Stylesheet
	===================================================================================================  -->
	<link rel="stylesheet" href="font/fontello.css">
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="css/media-queries.css">
	<!-- Google Tag Manager -->
	<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer','GTM-T63VH4');</script>
	<!-- End Google Tag Manager -->
</head>


<body>
	<!-- Google Tag Manager (noscript) -->
	<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T63VH4"
	height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
	<!-- End Google Tag Manager (noscript) -->
	<div id="loader">

		<section class="top-bar">
			<div class="container">
				<div class="row">
					<div class="col-sm-6 social-media">
						<a href="http://linkedin.com/groups/8468035" data-toggle="tooltip" class="tooltips" data-placement="bottom" title="Linkedin"><i class="icon-linkedin"></i></a>
						<a href="https://vk.com/club114134836" data-toggle="tooltip" class="tooltips" data-placement="bottom" title="Vkontakte"><i class="icon-vkontakte"></i></a>
						<a href="https://www.youtube.com/channel/UC-ko5jR2CulIA4qOyWQlOFQ" data-toggle="tooltip" class="tooltips" data-placement="bottom" title="Youtube"><i class="icon-play"></i></a>						
						<a href="https://www.facebook.com/groups/1553699498275598/" data-toggle="tooltip" class="tooltips" data-placement="bottom" title="Facebook"><i class="icon-facebook"></i></a>						
					</div>
					<div class="col-sm-6 data-info">
						<p><i class="icon-mail"></i><a href="mailto:sales@rupal.su"> sales@rupal.su</a>?</p>
						<p><i class="icon-mobile"></i><a href="tel:8 (800) 7777 017">8 (800) 77-77-017</a>
<!-- <a href="tel:(812)332 23 32">(812) 332-23-32</a> --></p>
					</div>
				</div>
			</div>
		</section>

	 	<header>
		    <div class="navbar navbar-default" role="navigation">
		      <div class="container">
		        <div class="navbar-header" style="float: left;">
		          <a class="navbar-brand" href="#"><img src="img/logo.png" alt="logo brand"></a>
		        </div>
		        <div class="navbar-collapse collapse">
		          <ul class="nav navbar-nav navbar-right">
					<h2>Проверенный <span style="color: #f47a20;">российский</span> стандарт <br><center>производства поддонов</center></h2>
				  </ul>
		        </div>
		      </div>
		    </div>
	    </header>

		<section class="slider" id="menu-slider">
			<div class="container">
				<div class="row">
					<div class="col-sm-6">
						<h3 style="margin-top: -4px;">ВСЕГДА ВОВРЕМЯ!</h3>
						<h2>Наших поддонов хватит на всех!</h2>
						<h4>Мы — сообщество крупнейших производителей паллет</h4>
					</div>
					<div class="col-sm-6">
						<form enctype="multipart/form-data" method="post" id="feedback-form"  class="row suscribe">
						<div class="col-sm-12">
                            
							<input type="text" name="nameFF" value="<?=$_SESSION["NAME"]?>" id="nameFF" placeholder="Ваше имя / название компании*" x-autocompletetype="name" class="form-control">
                             <span class="error"><?php echo $nameErr;?></span><br>
                            
							<input type="text" name="cityFF" value="<?=$_SESSION["CITY"]?>"id="cityFF" placeholder="Ваш город*" class="form-control">
                             <span class="error"> <?php echo $cityErr;?></span><br>
                            
							<input name="messageFF"value="<?=$_SESSION["TEL"]?>" id="messageFF" placeholder="Ваш контактный телефон для связи*" class="form-control">
                              <span class="error"> <?php echo $telErr;?></span><br>
                            
							<input  name="contactFF" value="<?=$_SESSION["EMAIL"]?>"id="contactFF"  placeholder="Ваш email для связи*" class="form-control">
                             <span class="error"><?php echo $emailErr;?> </span><br>
                            
							<input type="text" name="number" value="<?=$_SESSION["NUMBER"]?>" placeholder="Количество новых поддонов, шт." class="form-control">
                            <span class="error"><?php echo $numberErr;?> </span><br>
                            
							<span style="color: #FEFEFE;">Нужны сухие поддоны? &nbsp;&nbsp;</span><p class="popup" data-popup="При необходимости отметьте" style="color: #FEFEFE;" ><input type="checkbox" name="a" id="a"value="сухие"></p>
							<p style="color: #FEFEFE;"><label>Ваша спецификация или ТУ на поддоны</label>
							<input type="file" name="fileFF[]" multiple id="fileFF" class="w100"></p>
						</div>
						<div class="text-center">
								<button type="submit" id="submitFF" class="btn btn-default text-center">ЗАКАЗАТЬ НОВЫЕ ПОДДОНЫ</button>
						</div>
						</form>
					</div>
					
				</div>
			</div>
		</section>				
	</div>

		<section class="upcoming generic">
			<div class="container">
				<div class="row title">
					<div class="col-sm-12">
						<h3>Соблюдаем <span style="color: #f47a20;">стандарт!</span></h3>
					</div>
				</div>
				<div class="row">
					<div class="col-sm-6">
						<div class="panel-body">
							Мы контролируем соблюдение своего 
							Стандарта производства поддонов, а потому гарантируем 
							Вам стабильное качество продукции. Соблюдаем ГОСТы.
						</div>
					</div>
					<div class="col-sm-6">
						<div class="panel-body">
						    Стандартная конструкция нашего поддона 
							используется в таких отраслях, как производство 
							товаров народного потребления, продуктов питания, напитков, в грузоперевозках и в логистических комплексах.
						</div>					
					</div>
				</div>
				<div class="row title">
					<div class="col-sm-12">
						<h3>«ПаллетТрейд» - <b><span style="color: #f47a20;">надежный</span></b> поставщик поддонов, подтвержденный системами Sedex и DUNS</h3>
					</div>
				</div>
				<div class="row">
					<div class="col-sm-6">
						<div class="panel-body">
								Наши поддоны проверены и одобрены покупателями.<br>
						        Крупнейшие торговые сети, производители продуктов питания, напитков, упаковки, 
								а также грузоперевозчики и многие другие — переходят на наши <b><a style="color: #f47a20;" href="https://www.poddon.ru/products/poddony-derevyannye/1200x800-tipovoj">Типовые поддоны</a></b> стандартных размеров 1200х800мм. 
								Рост продаж этих поддонов составил более 30% за последний год!
						</div>
					</div>
					<div class="col-sm-6">
						<div class="panel-body">
								Также производим широкие поддоны 1200х1000, 1200х1200 мм  или любые другие деревянные поддоны в соответствии по вашими ТУ.
								<br><br>
							 	Сухие поддоны от «ПаллетТрейд» – это санитарная безопасность вашей продукции. <b><a style="color: #f47a20; text-transform: uppercase;" href="/suhie-poddony.html ">Узнайте больше о том, когда нужны сухие поддоны!</a></b>
						</div>					
					</div>
				</div>
			</div>
		</section>

		<section class="teachers generic" id="menu-teachers">
			<div class="container">
		
			</div>
		</section>
		
		<section class="testimonials generic" id="menu-testimonials">
		
			<div class="container">
				<div class="row title">
					<div class="col-sm-12">
						<h3>«ПаллетТрейд» — сообщество крупнейших <span style="color: #f47a20;">российских</span> <br>производителей паллет</h3>
					</div>
				</div>
				<div class="row">
					<div class="col-sm-6">
						<div class="panel-body">
						        Наших поддонов хватит на всех! 
								Обеспечиваем стабильные и своевременные поставки любых партий поддонов в разные регионы России!<br><br> 
								Общая производственная мощность сообщества «ПаллетТрейд» —  около 300 000 поддонов ежемесячно.<br><br>
								Современное оборудование и ПО наших сушильных комплексов позволяет гарантированно обеспечивать 
								<b><a style="color: #f47a20;" href="/suhie-poddony.html ">требуемый уровень влажности</a></b> паллет, а также выполнять фумигацию в соответствии с требованиями ISPM-15.
						</div>
					</div>
					<div class="col-sm-6">
						<div class="panel-body">     
						</div>					
					</div>
				</div>
				<div class="row">
					<div class="col-sm-12">
						<h3>Поддоны от «ПаллетТрейд» прошли испытания <br>в соответствии с ISO 8611</h3>
					</div>
					<div class="col-sm-6">
						<div class="panel-body">
						        Вы можете быть уверены в стабильном и высоком качестве наших поддонов, 
								так как мы проводим их <b><a style="color: #f47a20;" href="https://www.youtube.com/watch?v=1_Z54ch019o&amp;t=4s">испытания в соответствии с международным стандартом ISO 8611</a></b>
								на базе собственной тестовой лаборатории.
								Мы контролируем качество нашей продукции на каждом этапе производства. 
								Свои лесопилки обеспечивают нам гарантированное качество древесины.
						</div>
					</div>
					<div class="col-sm-6">
						<div class="panel-body">						     
						</div>					
					</div>
				</div>			
		</section>

		<section class="cta generic">
			<div class="container">
				<div class="row">
					<div class="col-sm-8" style="text-align: left;">
						<p style="font-size: 24px; margin-top: -12px; color: #fff;"><i class="icon-mail"></i><a href="mailto:sales@rupal.su">sales@rupal.su</a></p>
						<p style="font-size: 24px; color: #fff;"><i class="icon-phone"></i><a href="tel:8 (800) 7777 017">8 (800) 77-77-017</a>
<!-- <a href="tel:(812)332 23 32">(812) 332-23-32</a> --></p>
					</div>	
					<div class="col-sm-4">
						<a href="#" class="btn btn-default">ЗАКАЗАТЬ НОВЫЕ ПОДДОНЫ</a>
					</div>
					
				</div>
			</div>
		</section>

		<footer>
			<div class="container">
				<div class="row">
				<a style="color: rgb(51, 51, 51);">© 1996-2017 ПаллетТрейд — Производство и продажа поддонов. </a>
				</div>
			</div>
		</footer>

		<a href="#" class="scrollup"><i class="icon-up-open"></i></a>      

	</div>
	
	<div id='siteLoader'> 
    </div> 
<!-- Yandex.Metrika counter -->
<script type="text/javascript">
    (function (d, w, c) {
        (w[c] = w[c] || []).push(function() {
            try {
                w.yaCounter40525820 = new Ya.Metrika({
                    id:40525820,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true,
                    ecommerce:"dataLayer"
                });
            } catch(e) { }
        });

        var n = d.getElementsByTagName("script")[0],
            s = d.createElement("script"),
            f = function () { n.parentNode.insertBefore(s, n); };
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://mc.yandex.ru/metrika/watch.js";

        if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
        } else { f(); }
    })(document, window, "yandex_metrika_callbacks");
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/40525820" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
  <!-- ======================= JQuery libs =========================== -->
    <!-- jQuery -->
    <script src="js/jquery-1.9.1.min.js"></script>
    
<!-- MAsk -->
    <script src="js/jquery.maskedinput.min.js"></script>
    
    <!-- Bootstrap -->
    <script src="js/bootstrap.min.js"></script>

    <!--Scroll To-->         
    <script src="js/nav/jquery.scrollTo.js"></script> 
    <script src="js/nav/jquery.nav.js"></script> 

	<!-- Responsive Video -->
    <script src="js/jquery.fitvids.min.js"></script>
    <script src="js/jquery.placeholder.min.js"></script>

	<!-- Fixed menu -->
    <script src="js/jquery-scrolltofixed.js"></script> 

	<!-- Video -->
    <script src="js/jquery.mb.YTPlayer.js"></script> 

	<!-- Custom -->
    <script src="js/script.js" type="text/javascript"></script>
	<!-- Custom2 --> 
	<script src="js/jquery.validate.min.js" type="text/javascript"></script>
  <!-- ======================= End JQuery libs ======================= -->
</body>
</html>