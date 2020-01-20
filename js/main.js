
$(document).ready(function(){
  VanillaTilt.init(document.querySelector(".tilting"), {
  		max: 25,
  		speed: 400,
      gyroscope: true,
	});

  VanillaTilt.init(document.querySelectorAll(".tilting"));


    // Hide and show footnotes:

    $('#footRef').click(function(){
      $(".redBox").toggle();
    });
    $('#footRef1').click(function(){
      $(".redBox1").toggle();
    });
    $('#footRef2').click(function(){
      $(".redBox2").toggle();
    });
    $('#footRef3').click(function(){
      $(".redBox3").toggle();
    });
    $('#footRef4').click(function(){
      $(".redBox4").toggle();
    });
    $('#footRef5').click(function(){
      $(".redBox5").toggle();
    });
    $('#footRef6').click(function(){
      $(".redBox6").toggle();
    });
    $('#footRef7').click(function(){
      $(".redBox7").toggle();
    });
    $('#footRef8').click(function(){
      $(".redBox8").toggle();
    });
    $('#footRef9').click(function(){
      $(".redBox9").toggle();
    });
    $('#footRef10').click(function(){
      $(".redBox10").toggle();
    });
    $('#footRef11').click(function(){
      $(".redBox11").toggle();
    });
    $('#footRef12').click(function(){
      $(".redBox12").toggle();
    });
    $('#footRef13').click(function(){
      $(".redBox13").toggle();
    });
    $('#footRef14').click(function(){
      $(".redBox14").toggle();
    });
    $('#footRef15').click(function(){
      $(".redBox15").toggle();
    });
    $('#footRef16').click(function(){
      $(".redBox16").toggle();
    });
    $('#footRef17').click(function(){
      $(".redBox17").toggle();
    });
    $('#footRef18').click(function(){
      $(".redBox18").toggle();
    });
    $('#footRef19').click(function(){
      $(".redBox19").toggle();
    });
    $('#footRef20').click(function(){
      $(".redBox20").toggle();
    });
    $('#footRef21').click(function(){
      $(".redBox21").toggle();
    });
    $('#footRef22').click(function(){
      $(".redBox22").toggle();
    });
    $('#footRef23').click(function(){
      $(".redBox23").toggle();
    });
    $('#footRef24').click(function(){
      $(".redBox24").toggle();
    });
    $('#footRef25').click(function(){
      $(".redBox25").toggle();
    });
    $('#footRef26').click(function(){
      $(".redBox26").toggle();
    });
    $('#footRef27').click(function(){
      $(".redBox27").toggle();
    });
    $('#footRef28').click(function(){
      $(".redBox28").toggle();
    });
    $('#footRef29').click(function(){
      $(".redBox29").toggle();
    });
    $('#footRef30').click(function(){
      $(".redBox30").toggle();
    });
    $('#footRef31').click(function(){
      $(".redBox31").toggle();
    });
    $('#footRef32').click(function(){
      $(".redBox32").toggle();
    });
    $('#footRef33').click(function(){
      $(".redBox33").toggle();
    });
    $('#footRef34').click(function(){
      $(".redBox34").toggle();
    });
    $('#footRef35').click(function(){
      $(".redBox35").toggle();
    });
    $('#footRef36').click(function(){
      $(".redBox36").toggle();
    });
    $('#footRef37').click(function(){
      $(".redBox37").toggle();
    });
    $('#footRef38').click(function(){
      $(".redBox38").toggle();
    });
    $('#footRef39').click(function(){
      $(".redBox39").toggle();
    });
    $('#footRef40').click(function(){
      $(".redBox40").toggle();
    });
    $('#footRef41').click(function(){
      $(".redBox41").toggle();
    });
    $('#footRef42').click(function(){
      $(".redBox42").toggle();
    });
    $('#footRef43').click(function(){
      $(".redBox43").toggle();
    });
    $('#footRef44').click(function(){
      $(".redBox44").toggle();
    });
    $('#footRef45').click(function(){
      $(".redBox45").toggle();
    });
    $('#footRef46').click(function(){
      $(".redBox46").toggle();
    });
    $('#footRef47').click(function(){
      $(".redBox47").toggle();
    });
    $('#footRef48').click(function(){
      $(".redBox48").toggle();
    });
    $('#footRef49').click(function(){
      $(".redBox49").toggle();
    });
    $('#footRef50').click(function(){
      $(".redBox50").toggle();
    });
    $('#footRef51').click(function(){
      $(".redBox51").toggle();
    });
    $('#footRef52').click(function(){
      $(".redBox52").toggle();
    });
    $('#footRef53').click(function(){
      $(".redBox53").toggle();
    });
    $('#footRef54').click(function(){
      $(".redBox54").toggle();
    });
    $('#footRef55').click(function(){
      $(".redBox55").toggle();
    });
    $('#footRef56').click(function(){
      $(".redBox56").toggle();
    });
    $('#footRef57').click(function(){
      $(".redBox57").toggle();
    });
    $('#footRef58').click(function(){
      $(".redBox58").toggle();
    });
    $('#footRef59').click(function(){
      $(".redBox59").toggle();
    });
    $('#footRef60').click(function(){
      $(".redBox60").toggle();
    });
    $('#footRef61').click(function(){
      $(".redBox61").toggle();
    });
    $('#footRef62').click(function(){
      $(".redBox62").toggle();
    });
    $('#footRef63').click(function(){
      $(".redBox63").toggle();
    });


    // Calucation for centering footnotes:

    const screenW = $(window).width();

    const redBox = $(".redBox").width();
    const redBox1 = $(".redBox1").width();
    const redBox2 = $(".redBox2").width();
    const redBox3 = $(".redBox3").width();
    const redBox4 = $(".redBox4").width();
    const redBox5 = $(".redBox5").width();
    const redBox6 = $(".redBox6").width();
    const redBox7 = $(".redBox7").width();
    const redBox8 = $(".redBox8").width();
    const redBox9 = $(".redBox9").width();
    const redBox10 = $(".redBox10").width();
    const redBox11 = $(".redBox11").width();
    const redBox12 = $(".redBox12").width();
    const redBox13 = $(".redBox13").width();
    const redBox14 = $(".redBox14").width();
    const redBox15 = $(".redBox15").width();
    const redBox16 = $(".redBox16").width();
    const redBox17 = $(".redBox17").width();
    const redBox18 = $(".redBox18").width();
    const redBox19 = $(".redBox19").width();
    const redBox20 = $(".redBox20").width();
    const redBox21 = $(".redBox21").width();
    const redBox22 = $(".redBox22").width();
    const redBox23 = $(".redBox23").width();
    const redBox24 = $(".redBox24").width();
    const redBox25 = $(".redBox25").width();
    const redBox26 = $(".redBox26").width();
    const redBox27 = $(".redBox27").width();
    const redBox28 = $(".redBox28").width();
    const redBox29 = $(".redBox29").width();
    const redBox30 = $(".redBox30").width();
    const redBox31 = $(".redBox31").width();
    const redBox32 = $(".redBox32").width();
    const redBox33 = $(".redBox33").width();
    const redBox34 = $(".redBox34").width();
    const redBox35 = $(".redBox35").width();
    const redBox36 = $(".redBox36").width();
    const redBox37 = $(".redBox37").width();
    const redBox38 = $(".redBox38").width();
    const redBox39 = $(".redBox39").width();
    const redBox40 = $(".redBox40").width();
    const redBox41 = $(".redBox41").width();
    const redBox42 = $(".redBox42").width();
    const redBox43 = $(".redBox43").width();
    const redBox44 = $(".redBox44").width();
    const redBox45 = $(".redBox45").width();
    const redBox46 = $(".redBox46").width();
    const redBox47 = $(".redBox47").width();
    const redBox48 = $(".redBox48").width();
    const redBox49 = $(".redBox49").width();
    const redBox50 = $(".redBox50").width();
    const redBox51 = $(".redBox51").width();
    const redBox52 = $(".redBox52").width();
    const redBox53 = $(".redBox53").width();
    const redBox54 = $(".redBox54").width();
    const redBox55 = $(".redBox55").width();
    const redBox56 = $(".redBox56").width();
    const redBox57 = $(".redBox57").width();
    const redBox58 = $(".redBox58").width();
    const redBox59 = $(".redBox59").width();
    const redBox60 = $(".redBox60").width();
    const redBox61 = $(".redBox61").width();
    const redBox62 = $(".redBox62").width();
    const redBox63 = $(".redBox63").width();

    const offSetfoot = (screenW - redBox)/2;
    const offSetfoot1 = (screenW - redBox1)/2;
    const offSetfoot2 = (screenW - redBox2)/2;
    const offSetfoot3 = (screenW - redBox3)/2;
    const offSetfoot4 = (screenW - redBox4)/2;
    const offSetfoot5 = (screenW - redBox5)/2;
    const offSetfoot6 = (screenW - redBox6)/2;
    const offSetfoot7 = (screenW - redBox7)/2;
    const offSetfoot8 = (screenW - redBox8)/2;
    const offSetfoot9 = (screenW - redBox9)/2;
    const offSetfoot10 = (screenW - redBox10)/2;
    const offSetfoot11 = (screenW - redBox11)/2;
    const offSetfoot12 = (screenW - redBox12)/2;
    const offSetfoot13 = (screenW - redBox13)/2;
    const offSetfoot14 = (screenW - redBox14)/2;
    const offSetfoot15 = (screenW - redBox15)/2;
    const offSetfoot16 = (screenW - redBox16)/2;
    const offSetfoot17 = (screenW - redBox17)/2;
    const offSetfoot18 = (screenW - redBox18)/2;
    const offSetfoot19 = (screenW - redBox19)/2;
    const offSetfoot20 = (screenW - redBox20)/2;
    const offSetfoot21 = (screenW - redBox21)/2;
    const offSetfoot22 = (screenW - redBox22)/2;
    const offSetfoot23 = (screenW - redBox23)/2;
    const offSetfoot24 = (screenW - redBox24)/2;
    const offSetfoot25 = (screenW - redBox25)/2;
    const offSetfoot26 = (screenW - redBox26)/2;
    const offSetfoot27 = (screenW - redBox27)/2;
    const offSetfoot28 = (screenW - redBox28)/2;
    const offSetfoot29 = (screenW - redBox29)/2;
    const offSetfoot30 = (screenW - redBox30)/2;
    const offSetfoot31 = (screenW - redBox31)/2;
    const offSetfoot32 = (screenW - redBox32)/2;
    const offSetfoot33 = (screenW - redBox33)/2;
    const offSetfoot34 = (screenW - redBox34)/2;
    const offSetfoot35 = (screenW - redBox35)/2;
    const offSetfoot36 = (screenW - redBox36)/2;
    const offSetfoot37 = (screenW - redBox37)/2;
    const offSetfoot38 = (screenW - redBox38)/2;
    const offSetfoot39 = (screenW - redBox39)/2;
    const offSetfoot40 = (screenW - redBox40)/2;
    const offSetfoot41 = (screenW - redBox41)/2;
    const offSetfoot42 = (screenW - redBox42)/2;
    const offSetfoot43 = (screenW - redBox43)/2;
    const offSetfoot44 = (screenW - redBox44)/2;
    const offSetfoot45 = (screenW - redBox45)/2;
    const offSetfoot46 = (screenW - redBox46)/2;
    const offSetfoot47 = (screenW - redBox47)/2;
    const offSetfoot48 = (screenW - redBox48)/2;
    const offSetfoot49 = (screenW - redBox49)/2;
    const offSetfoot50 = (screenW - redBox50)/2;
    const offSetfoot51 = (screenW - redBox51)/2;
    const offSetfoot52 = (screenW - redBox52)/2;
    const offSetfoot53 = (screenW - redBox53)/2;
    const offSetfoot54 = (screenW - redBox54)/2;
    const offSetfoot55 = (screenW - redBox55)/2;
    const offSetfoot56 = (screenW - redBox56)/2;
    const offSetfoot57 = (screenW - redBox57)/2;
    const offSetfoot58 = (screenW - redBox58)/2;
    const offSetfoot59 = (screenW - redBox59)/2;
    const offSetfoot60 = (screenW - redBox60)/2;
    const offSetfoot61 = (screenW - redBox61)/2;
    const offSetfoot62 = (screenW - redBox62)/2;
    const offSetfoot63 = (screenW - redBox63)/2;


    $('.redBox').css({
      "margin-left" : offSetfoot,
    });
    $('.redBox1').css({
      "margin-left" : offSetfoot1,
    });
    $('.redBox2').css({
      "margin-left" : offSetfoot2,
    });
    $('.redBox3').css({
      "margin-left" : offSetfoot3,
    });
    $('.redBox4').css({
      "margin-left" : offSetfoot4,
    });
    $('.redBox5').css({
      "margin-left" : offSetfoot5,
    });
    $('.redBox6').css({
      "margin-left" : offSetfoot6,
    });
    $('.redBox7').css({
      "margin-left" : offSetfoot7,
    });
    $('.redBox8').css({
      "margin-left" : offSetfoot8,
    });
    $('.redBox9').css({
      "margin-left" : offSetfoot9,
    });
    $('.redBox10').css({
      "margin-left" : offSetfoot10,
    });
    $('.redBox11').css({
      "margin-left" : offSetfoot11,
    });
    $('.redBox12').css({
      "margin-left" : offSetfoot12,
    });
    $('.redBox13').css({
      "margin-left" : offSetfoot13,
    });
    $('.redBox14').css({
      "margin-left" : offSetfoot14,
    });
    $('.redBox15').css({
      "margin-left" : offSetfoot15,
    });
    $('.redBox16').css({
      "margin-left" : offSetfoot16,
    });
    $('.redBox17').css({
      "margin-left" : offSetfoot17,
    });
    $('.redBox18').css({
      "margin-left" : offSetfoot18,
    });
    $('.redBox19').css({
      "margin-left" : offSetfoot19,
    });
    $('.redBox20').css({
      "margin-left" : offSetfoot20,
    });
    $('.redBox21').css({
      "margin-left" : offSetfoot21,
    });
    $('.redBox22').css({
      "margin-left" : offSetfoot22,
    });
    $('.redBox23').css({
      "margin-left" : offSetfoot23,
    });
    $('.redBox24').css({
      "margin-left" : offSetfoot24,
    });
    $('.redBox25').css({
      "margin-left" : offSetfoot25,
    });
    $('.redBox26').css({
      "margin-left" : offSetfoot26,
    });
    $('.redBox27').css({
      "margin-left" : offSetfoot27,
    });
    $('.redBox28').css({
      "margin-left" : offSetfoot28,
    });
    $('.redBox29').css({
      "margin-left" : offSetfoot29,
    });
    $('.redBox30').css({
      "margin-left" : offSetfoot30,
    });
    $('.redBox31').css({
      "margin-left" : offSetfoot31,
    });
    $('.redBox32').css({
      "margin-left" : offSetfoot32,
    });
    $('.redBox33').css({
      "margin-left" : offSetfoot33,
    });
    $('.redBox34').css({
      "margin-left" : offSetfoot34,
    });
    $('.redBox35').css({
      "margin-left" : offSetfoot35,
    });
    $('.redBox36').css({
      "margin-left" : offSetfoot36,
    });
    $('.redBox37').css({
      "margin-left" : offSetfoot37,
    });
    $('.redBox38').css({
      "margin-left" : offSetfoot38,
    });
    $('.redBox39').css({
      "margin-left" : offSetfoot39,
    });
    $('.redBox40').css({
      "margin-left" : offSetfoot40,
    });
    $('.redBox41').css({
      "margin-left" : offSetfoot41,
    });
    $('.redBox42').css({
      "margin-left" : offSetfoot42,
    });
    $('.redBox43').css({
      "margin-left" : offSetfoot43,
    });
    $('.redBox44').css({
      "margin-left" : offSetfoot44,
    });
    $('.redBox45').css({
      "margin-left" : offSetfoot45,
    });
    $('.redBox46').css({
      "margin-left" : offSetfoot46,
    });
    $('.redBox47').css({
      "margin-left" : offSetfoot47,
    });
    $('.redBox48').css({
      "margin-left" : offSetfoot48,
    });
    $('.redBox49').css({
      "margin-left" : offSetfoot49,
    });
    $('.redBox50').css({
      "margin-left" : offSetfoot50,
    });
    $('.redBox51').css({
      "margin-left" : offSetfoot51,
    });
    $('.redBox52').css({
      "margin-left" : offSetfoot52,
    });
    $('.redBox53').css({
      "margin-left" : offSetfoot53,
    });
    $('.redBox54').css({
      "margin-left" : offSetfoot54,
    });
    $('.redBox55').css({
      "margin-left" : offSetfoot55,
    });
    $('.redBox56').css({
      "margin-left" : offSetfoot56,
    });
    $('.redBox57').css({
      "margin-left" : offSetfoot57,
    });
    $('.redBox58').css({
      "margin-left" : offSetfoot58,
    });
    $('.redBox59').css({
      "margin-left" : offSetfoot59,
    });
    $('.redBox60').css({
      "margin-left" : offSetfoot60,
    });
    $('.redBox61').css({
      "margin-left" : offSetfoot61,
    });
    $('.redBox62').css({
      "margin-left" : offSetfoot62,
    });
    $('.redBox63').css({
      "margin-left" : offSetfoot63,
    });


    // Calucation for positioning footnotes to their anchors:

    const offSetAnchor = $("#footRef").offset().top;
    const footW = $(".redBox").height()/2;
    const posFootn = offSetAnchor - footW;

    const offSetAnchor1 = $("#footRef1").offset().top;
    const footW1 = $(".redBox1").height()/2;
    const posFootn1 = offSetAnchor1 - footW1;

    const offSetAnchor2 = $("#footRef2").offset().top;
    const footW2 = $(".redBox2").height()/2;
    const posFootn2 = offSetAnchor2 - footW2;

    const offSetAnchor3 = $("#footRef3").offset().top;
    const footW3 = $(".redBox3").height()/2;
    const posFootn3 = offSetAnchor3 - footW3;

    const offSetAnchor4 = $("#footRef4").offset().top;
    const footW4 = $(".redBox4").height()/2;
    const posFootn4 = offSetAnchor4 - footW4;

    const offSetAnchor5 = $("#footRef5").offset().top;
    const footW5 = $(".redBox5").height()/2;
    const posFootn5 = offSetAnchor5 - footW5;

    const offSetAnchor6 = $("#footRef6").offset().top;
    const footW6 = $(".redBox6").height()/2;
    const posFootn6 = offSetAnchor6 - footW6;

    const offSetAnchor7 = $("#footRef7").offset().top;
    const footW7 = $(".redBox7").height()/2;
    const posFootn7 = offSetAnchor7 - footW7;

    const offSetAnchor8 = $("#footRef8").offset().top;
    const footW8 = $(".redBox8").height()/2;
    const posFootn8 = offSetAnchor8 - footW8;

    const offSetAnchor9 = $("#footRef9").offset().top;
    const footW9 = $(".redBox9").height()/2;
    const posFootn9 = offSetAnchor9 - footW9;

    const offSetAnchor10 = $("#footRef10").offset().top;
    const footW10 = $(".redBox10").height()/2;
    const posFootn10 = offSetAnchor10 - footW10;

    const offSetAnchor11 = $("#footRef11").offset().top;
    const footW11 = $(".redBox11").height()/2;
    const posFootn11 = offSetAnchor11 - footW11;

    const offSetAnchor12 = $("#footRef12").offset().top;
    const footW12 = $(".redBox12").height()/2;
    const posFootn12 = offSetAnchor12 - footW12;

    const offSetAnchor13 = $("#footRef13").offset().top;
    const footW13 = $(".redBox13").height()/2;
    const posFootn13 = offSetAnchor13 - footW13;

    const offSetAnchor14 = $("#footRef14").offset().top;
    const footW14 = $(".redBox14").height()/2;
    const posFootn14 = offSetAnchor14 - footW14;

    const offSetAnchor15 = $("#footRef15").offset().top;
    const footW15 = $(".redBox15").height()/2;
    const posFootn15 = offSetAnchor15 - footW15;

    const offSetAnchor16 = $("#footRef16").offset().top;
    const footW16 = $(".redBox16").height()/2;
    const posFootn16 = offSetAnchor16 - footW16;

    const offSetAnchor17 = $("#footRef17").offset().top;
    const footW17 = $(".redBox17").height()/2;
    const posFootn17 = offSetAnchor17 - footW17;

    const offSetAnchor18 = $("#footRef18").offset().top;
    const footW18 = $(".redBox18").height()/2;
    const posFootn18 = offSetAnchor18 - footW18;

    const offSetAnchor19 = $("#footRef19").offset().top;
    const footW19 = $(".redBox19").height()/2;
    const posFootn19 = offSetAnchor19 - footW19;

    const offSetAnchor20 = $("#footRef20").offset().top;
    const footW20 = $(".redBox20").height()/2;
    const posFootn20 = offSetAnchor20 - footW20;

    const offSetAnchor21 = $("#footRef21").offset().top;
    const footW21 = $(".redBox21").height()/2;
    const posFootn21 = offSetAnchor21 - footW21;

    const offSetAnchor22 = $("#footRef22").offset().top;
    const footW22 = $(".redBox22").height()/2;
    const posFootn22 = offSetAnchor22 - footW22;

    const offSetAnchor23 = $("#footRef23").offset().top;
    const footW23 = $(".redBox23").height()/2;
    const posFootn23 = offSetAnchor23 - footW23;

    const offSetAnchor24 = $("#footRef24").offset().top;
    const footW24 = $(".redBox24").height()/2;
    const posFootn24 = offSetAnchor24 - footW24;

    const offSetAnchor25 = $("#footRef25").offset().top;
    const footW25 = $(".redBox25").height()/2;
    const posFootn25 = offSetAnchor25 - footW25;

    const offSetAnchor26 = $("#footRef26").offset().top;
    const footW26 = $(".redBox26").height()/2;
    const posFootn26 = offSetAnchor26 - footW26;

    const offSetAnchor27 = $("#footRef27").offset().top;
    const footW27 = $(".redBox27").height()/2;
    const posFootn27 = offSetAnchor27 - footW27;

    const offSetAnchor28 = $("#footRef28").offset().top;
    const footW28 = $(".redBox28").height()/2;
    const posFootn28 = offSetAnchor28 - footW28;

    const offSetAnchor29 = $("#footRef29").offset().top;
    const footW29 = $(".redBox29").height()/2;
    const posFootn29 = offSetAnchor29 - footW29;

    const offSetAnchor30 = $("#footRef30").offset().top;
    const footW30 = $(".redBox30").height()/2;
    const posFootn30 = offSetAnchor30 - footW30;

    const offSetAnchor31 = $("#footRef31").offset().top;
    const footW31 = $(".redBox31").height()/2;
    const posFootn31 = offSetAnchor31 - footW31;

    const offSetAnchor32 = $("#footRef32").offset().top;
    const footW32 = $(".redBox32").height()/2;
    const posFootn32 = offSetAnchor32 - footW32;

    const offSetAnchor33 = $("#footRef33").offset().top;
    const footW33 = $(".redBox33").height()/2;
    const posFootn33 = offSetAnchor33 - footW33;

    const offSetAnchor34 = $("#footRef34").offset().top;
    const footW34 = $(".redBox34").height()/2;
    const posFootn34 = offSetAnchor34 - footW34;

    const offSetAnchor35 = $("#footRef35").offset().top;
    const footW35 = $(".redBox35").height()/2;
    const posFootn35 = offSetAnchor35 - footW35;

    const offSetAnchor36 = $("#footRef36").offset().top;
    const footW36 = $(".redBox36").height()/2;
    const posFootn36 = offSetAnchor36 - footW36;

    const offSetAnchor37 = $("#footRef37").offset().top;
    const footW37 = $(".redBox37").height()/2;
    const posFootn37 = offSetAnchor37 - footW37;

    const offSetAnchor38 = $("#footRef38").offset().top;
    const footW38 = $(".redBox38").height()/2;
    const posFootn38 = offSetAnchor38 - footW38;

    const offSetAnchor39 = $("#footRef39").offset().top;
    const footW39 = $(".redBox39").height()/2;
    const posFootn39 = offSetAnchor39 - footW39;

    const offSetAnchor40 = $("#footRef40").offset().top;
    const footW40 = $(".redBox40").height()/2;
    const posFootn40 = offSetAnchor40 - footW40;

    const offSetAnchor41 = $("#footRef41").offset().top;
    const footW41 = $(".redBox41").height()/2;
    const posFootn41 = offSetAnchor41 - footW41;

    const offSetAnchor42 = $("#footRef42").offset().top;
    const footW42 = $(".redBox42").height()/2;
    const posFootn42 = offSetAnchor42 - footW42;

    const offSetAnchor43 = $("#footRef43").offset().top;
    const footW43 = $(".redBox43").height()/2;
    const posFootn43 = offSetAnchor43 - footW43;

    const offSetAnchor44 = $("#footRef44").offset().top;
    const footW44 = $(".redBox44").height()/2;
    const posFootn44 = offSetAnchor44 - footW44;

    const offSetAnchor45 = $("#footRef45").offset().top;
    const footW45 = $(".redBox45").height()/2;
    const posFootn45 = offSetAnchor45 - footW45;

    const offSetAnchor46 = $("#footRef46").offset().top;
    const footW46 = $(".redBox46").height()/2;
    const posFootn46 = offSetAnchor46 - footW46;

    const offSetAnchor47 = $("#footRef47").offset().top;
    const footW47 = $(".redBox47").height()/2;
    const posFootn47 = offSetAnchor47 - footW47;

    const offSetAnchor48 = $("#footRef48").offset().top;
    const footW48 = $(".redBox48").height()/2;
    const posFootn48 = offSetAnchor48 - footW48;

    const offSetAnchor49 = $("#footRef49").offset().top;
    const footW49 = $(".redBox49").height()/2;
    const posFootn49 = offSetAnchor49 - footW49;

    const offSetAnchor50 = $("#footRef50").offset().top;
    const footW50 = $(".redBox50").height()/2;
    const posFootn50 = offSetAnchor50 - footW50;

    const offSetAnchor51 = $("#footRef51").offset().top;
    const footW51 = $(".redBox51").height()/2;
    const posFootn51 = offSetAnchor51 - footW51;

    const offSetAnchor52 = $("#footRef52").offset().top;
    const footW52 = $(".redBox52").height()/2;
    const posFootn52 = offSetAnchor52 - footW52;

    const offSetAnchor53 = $("#footRef53").offset().top;
    const footW53 = $(".redBox53").height()/2;
    const posFootn53 = offSetAnchor53 - footW53;

    const offSetAnchor54 = $("#footRef54").offset().top;
    const footW54 = $(".redBox54").height()/2;
    const posFootn54 = offSetAnchor54 - footW54;

    const offSetAnchor55 = $("#footRef55").offset().top;
    const footW55 = $(".redBox55").height()/2;
    const posFootn55 = offSetAnchor55 - footW55;

    const offSetAnchor56 = $("#footRef56").offset().top;
    const footW56 = $(".redBox56").height()/2;
    const posFootn56 = offSetAnchor56 - footW56;

    const offSetAnchor57 = $("#footRef57").offset().top;
    const footW57 = $(".redBox57").height()/2;
    const posFootn57 = offSetAnchor57 - footW57;

    const offSetAnchor58 = $("#footRef58").offset().top;
    const footW58 = $(".redBox58").height()/2;
    const posFootn58 = offSetAnchor58 - footW58;

    const offSetAnchor59 = $("#footRef59").offset().top;
    const footW59 = $(".redBox59").height()/2;
    const posFootn59 = offSetAnchor59 - footW59;

    const offSetAnchor60 = $("#footRef60").offset().top;
    const footW60 = $(".redBox60").height()/2;
    const posFootn60 = offSetAnchor60 - footW60;

    const offSetAnchor61 = $("#footRef61").offset().top;
    const footW61 = $(".redBox61").height()/2;
    const posFootn61 = offSetAnchor61 - footW61;

    const offSetAnchor62 = $("#footRef62").offset().top;
    const footW62 = $(".redBox62").height()/2;
    const posFootn62 = offSetAnchor62 - footW62;

    const offSetAnchor63 = $("#footRef63").offset().top;
    const footW63 = $(".redBox63").height()/2;
    const posFootn63 = offSetAnchor63 - footW63;

    $(".redBox").css({
      'margin-top' : posFootn,
    });
    $(".redBox1").css({
      'margin-top' : posFootn1,
    });
    $(".redBox2").css({
      'margin-top' : posFootn2,
    });
    $(".redBox3").css({
      'margin-top' : posFootn3,
    });
    $(".redBox4").css({
      'margin-top' : posFootn4,
    });
    $(".redBox5").css({
      'margin-top' : posFootn5,
    });
    $(".redBox6").css({
      'margin-top' : posFootn6,
    });
    $(".redBox7").css({
      'margin-top' : posFootn7,
    });
    $(".redBox8").css({
      'margin-top' : posFootn8,
    });
    $(".redBox9").css({
      'margin-top' : posFootn9,
    });
    $(".redBox10").css({
      'margin-top' : posFootn10,
    });
    $(".redBox11").css({
      'margin-top' : posFootn11,
    });
    $(".redBox12").css({
      'margin-top' : posFootn12,
    });
    $(".redBox13").css({
      'margin-top' : posFootn13,
    });
    $(".redBox14").css({
      'margin-top' : posFootn14,
    });
    $(".redBox15").css({
      'margin-top' : posFootn15,
    });
    $(".redBox16").css({
      'margin-top' : posFootn16,
    });
    $(".redBox17").css({
      'margin-top' : posFootn17,
    });
    $(".redBox18").css({
      'margin-top' : posFootn18,
    });
    $(".redBox19").css({
      'margin-top' : posFootn19,
    });
    $(".redBox20").css({
      'margin-top' : posFootn20,
    });
    $(".redBox21").css({
      'margin-top' : posFootn21,
    });
    $(".redBox22").css({
      'margin-top' : posFootn22,
    });
    $(".redBox23").css({
      'margin-top' : posFootn23,
    });
    $(".redBox24").css({
      'margin-top' : posFootn24,
    });
    $(".redBox25").css({
      'margin-top' : posFootn25,
    });
    $(".redBox26").css({
      'margin-top' : posFootn26,
    });
    $(".redBox27").css({
      'margin-top' : posFootn27,
    });
    $(".redBox28").css({
      'margin-top' : posFootn28,
    });
    $(".redBox29").css({
      'margin-top' : posFootn29,
    });
    $(".redBox30").css({
      'margin-top' : posFootn30,
    });
    $(".redBox31").css({
      'margin-top' : posFootn31,
    });
    $(".redBox32").css({
      'margin-top' : posFootn32,
    });
    $(".redBox33").css({
      'margin-top' : posFootn33,
    });
    $(".redBox34").css({
      'margin-top' : posFootn34,
    });
    $(".redBox35").css({
      'margin-top' : posFootn35,
    });
    $(".redBox36").css({
      'margin-top' : posFootn36,
    });
    $(".redBox37").css({
      'margin-top' : posFootn37,
    });
    $(".redBox38").css({
      'margin-top' : posFootn38,
    });
    $(".redBox39").css({
      'margin-top' : posFootn39,
    });
    $(".redBox40").css({
      'margin-top' : posFootn40,
    });
    $(".redBox41").css({
      'margin-top' : posFootn41,
    });
    $(".redBox42").css({
      'margin-top' : posFootn42,
    });
    $(".redBox43").css({
      'margin-top' : posFootn43,
    });
    $(".redBox44").css({
      'margin-top' : posFootn44,
    });
    $(".redBox45").css({
      'margin-top' : posFootn45,
    });
    $(".redBox46").css({
      'margin-top' : posFootn46,
    });
    $(".redBox47").css({
      'margin-top' : posFootn47,
    });
    $(".redBox48").css({
      'margin-top' : posFootn48,
    });
    $(".redBox49").css({
      'margin-top' : posFootn49,
    });
    $(".redBox50").css({
      'margin-top' : posFootn50,
    });
    $(".redBox51").css({
      'margin-top' : posFootn51,
    });
    $(".redBox52").css({
      'margin-top' : posFootn52,
    });
    $(".redBox53").css({
      'margin-top' : posFootn53,
    });
    $(".redBox54").css({
      'margin-top' : posFootn54,
    });
    $(".redBox55").css({
      'margin-top' : posFootn55,
    });
    $(".redBox56").css({
      'margin-top' : posFootn56,
    });
    $(".redBox57").css({
      'margin-top' : posFootn57,
    });
    $(".redBox58").css({
      'margin-top' : posFootn58,
    });
    $(".redBox59").css({
      'margin-top' : posFootn59,
    });
    $(".redBox60").css({
      'margin-top' : posFootn60,
    });
    $(".redBox61").css({
      'margin-top' : posFootn61,
    });
    $(".redBox62").css({
      'margin-top' : posFootn62,
    });
    $(".redBox63").css({
      'margin-top' : posFootn63,
    });

});

//
// $(window).resize(function(){
//   //hide and show footnotes
//   $('#footRef').click(function(){
//     $(".redBox").toggle();
//   });
//   $('#footRef1').click(function(){
//     $(".redBox1").toggle();
//   });
//   $('#footRef2').click(function(){
//     $(".redBox2").toggle();
//   });
//   $('#footRef3').click(function(){
//     $(".redBox3").toggle();
//   });
//   $('#footRef4').click(function(){
//     $(".redBox4").toggle();
//   });
//
//   //calucation for centering footnote
//   const screenW = $(window).width();
//   const redBox = $(".redBox").width();
//   const redBox1 = $(".redBox1").width();
//   const redBox2 = $(".redBox2").width();
//   const redBox3 = $(".redBox3").width();
//   const redBox4 = $(".redBox4").width();
//
//   const offSetfoot = (screenW - redBox)/2;
//   const offSetfoot1 = (screenW - redBox1)/2;
//   const offSetfoot2 = (screenW - redBox2)/2;
//   const offSetfoot3 = (screenW - redBox3)/2;
//   const offSetfoot4 = (screenW - redBox4)/2;
//
//
//   $('.redBox').css({
//     "margin-left" : offSetfoot,
//   });
//   $('.redBox1').css({
//     "margin-left" : offSetfoot1,
//   });
//   $('.redBox2').css({
//     "margin-left" : offSetfoot2,
//   });
//   $('.redBox3').css({
//     "margin-left" : offSetfoot3,
//   });
//   $('.redBox4').css({
//     "margin-left" : offSetfoot4,
//   });
//
//   //calucation for positioning footnote to the ball
//   const offSetAnchor = $("#footRef").offset().top;
//   const footW = $(".redBox").height()/2;
//   const posFootn = offSetAnchor - footW;
//
//   const offSetAnchor1 = $("#footRef1").offset().top;
//   const footW1 = $(".redBox1").height()/2;
//   const posFootn1 = offSetAnchor1 - footW1;
//
//   const offSetAnchor2 = $("#footRef2").offset().top;
//   const footW2 = $(".redBox2").height()/2;
//   const posFootn2 = offSetAnchor2 - footW2;
//
//   const offSetAnchor3 = $("#footRef3").offset().top;
//   const footW3 = $(".redBox3").height()/2;
//   const posFootn3 = offSetAnchor3 - footW3;
//
//   const offSetAnchor4 = $("#footRef4").offset().top;
//   const footW4 = $(".redBox4").height()/2;
//   const posFootn4 = offSetAnchor4 - footW4;
//
//   $(".redBox").css({
//     'margin-top' : posFootn,
//   });
//   $(".redBox1").css({
//     'margin-top' : posFootn1,
//   });
//   $(".redBox2").css({
//     'margin-top' : posFootn2,
//   });
//   $(".redBox3").css({
//     'margin-top' : posFootn3,
//   });
//   $(".redBox4").css({
//     'margin-top' : posFootn4,
//   });
// });
