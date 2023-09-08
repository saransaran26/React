async function foo(){
    var res = await fetch("https://data.covid19india.org/v4/min/timeseries.min.json")
    var result = await res.json();
    console.log(result);
    document.querySelector(".card1 .date1").innerHTML = "Confirmed patient on 2020-03-26 : " + result.AN.dates["2020-03-26"].total.confirmed
    document.querySelector(".card1 .date2").innerHTML = "Confirmed patient on 2020-04-26 : " + result.AN.dates["2020-04-26"].total.confirmed
    document.querySelector(".card1 .date3").innerHTML = "Confirmed patient on 2020-05-26 : " + result.AN.dates["2020-05-26"].total.confirmed
    document.querySelector(".card1 .date4").innerHTML = "Confirmed patient on 2020-06-26 : " + result.AN.dates["2020-06-26"].total.confirmed
    document.querySelector(".card1 .date5").innerHTML = "Confirmed patient on 2020-07-26 : " + result.AN.dates["2020-07-26"].total.confirmed
    document.querySelector(".card1 .date6").innerHTML = "Confirmed patient on 2020-08-26 : " + result.AN.dates["2020-08-26"].total.confirmed
    document.querySelector(".card1 .date7").innerHTML = "Confirmed patient on 2020-09-26 : " + result.AN.dates["2020-09-26"].total.confirmed
    document.querySelector(".card1 .date8").innerHTML = "Confirmed patient on 2020-10-11 : " + result.AN.dates["2020-10-11"].total.confirmed

    // card 2

    document.querySelector(".card2 .date1").innerHTML = "Confirmed patient on 2020-03-26 : " + result.AP.dates["2020-03-26"].total.confirmed
    document.querySelector(".card2 .date2").innerHTML = "Confirmed patient on 2020-04-26 : " + result.AP.dates["2020-04-26"].total.confirmed
    document.querySelector(".card2 .date3").innerHTML = "Confirmed patient on 2020-05-26 : " + result.AP.dates["2020-05-26"].total.confirmed
    document.querySelector(".card2 .date4").innerHTML = "Confirmed patient on 2020-06-26 : " + result.AP.dates["2020-06-26"].total.confirmed
    document.querySelector(".card2 .date5").innerHTML = "Confirmed patient on 2020-07-26 : " + result.AP.dates["2020-07-26"].total.confirmed
    document.querySelector(".card2 .date6").innerHTML = "Confirmed patient on 2020-08-26 : " + result.AP.dates["2020-08-26"].total.confirmed
    document.querySelector(".card2 .date7").innerHTML = "Confirmed patient on 2020-09-26 : " + result.AP.dates["2020-09-26"].total.confirmed
    document.querySelector(".card2 .date8").innerHTML = "Confirmed patient on 2020-10-11 : " + result.AP.dates["2020-10-11"].total.confirmed

    //card 3

    document.querySelector(".card3 .date1").innerHTML = "Confirmed patient on 2020-03-26 : " + result.KA.dates["2020-03-26"].total.confirmed
    document.querySelector(".card3 .date2").innerHTML = "Confirmed patient on 2020-04-26 : " + result.KA.dates["2020-04-26"].total.confirmed
    document.querySelector(".card3 .date3").innerHTML = "Confirmed patient on 2020-05-26 : " + result.KA.dates["2020-05-26"].total.confirmed
    document.querySelector(".card3 .date4").innerHTML = "Confirmed patient on 2020-06-26 : " + result.KA.dates["2020-06-26"].total.confirmed
    document.querySelector(".card3 .date5").innerHTML = "Confirmed patient on 2020-07-26 : " + result.KA.dates["2020-07-26"].total.confirmed
    document.querySelector(".card3 .date6").innerHTML = "Confirmed patient on 2020-08-26 : " + result.KA.dates["2020-08-26"].total.confirmed
    document.querySelector(".card3 .date7").innerHTML = "Confirmed patient on 2020-09-26 : " + result.KA.dates["2020-09-26"].total.confirmed
    document.querySelector(".card3 .date8").innerHTML = "Confirmed patient on 2020-10-11 : " + result.KA.dates["2020-10-11"].total.confirmed


    //card 4

    document.querySelector(".card4 .date1").innerHTML = "Confirmed patient on 2020-03-26 : " + result.KL.dates["2020-03-26"].total.confirmed
    document.querySelector(".card4 .date2").innerHTML = "Confirmed patient on 2020-04-26 : " + result.KL.dates["2020-04-26"].total.confirmed
    document.querySelector(".card4 .date3").innerHTML = "Confirmed patient on 2020-05-26 : " + result.KL.dates["2020-05-26"].total.confirmed
    document.querySelector(".card4 .date4").innerHTML = "Confirmed patient on 2020-06-26 : " + result.KL.dates["2020-06-26"].total.confirmed
    document.querySelector(".card4 .date5").innerHTML = "Confirmed patient on 2020-07-26 : " + result.KL.dates["2020-07-26"].total.confirmed
    document.querySelector(".card4 .date6").innerHTML = "Confirmed patient on 2020-08-26 : " + result.KL.dates["2020-08-26"].total.confirmed
    document.querySelector(".card4 .date7").innerHTML = "Confirmed patient on 2020-09-26 : " + result.KL.dates["2020-09-26"].total.confirmed
    document.querySelector(".card4 .date8").innerHTML = "Confirmed patient on 2020-10-11 : " + result.KL.dates["2020-10-11"].total.confirmed


    //card 5

    document.querySelector(".card5 .date1").innerHTML = "Confirmed patient on 2020-03-26 : " + result.MP.dates["2020-03-26"].total.confirmed
    document.querySelector(".card5 .date2").innerHTML = "Confirmed patient on 2020-04-26 : " + result.MP.dates["2020-04-26"].total.confirmed
    document.querySelector(".card5 .date3").innerHTML = "Confirmed patient on 2020-05-26 : " + result.MP.dates["2020-05-26"].total.confirmed
    document.querySelector(".card5 .date4").innerHTML = "Confirmed patient on 2020-06-26 : " + result.MP.dates["2020-06-26"].total.confirmed
    document.querySelector(".card5 .date5").innerHTML = "Confirmed patient on 2020-07-26 : " + result.MP.dates["2020-07-26"].total.confirmed
    document.querySelector(".card5 .date6").innerHTML = "Confirmed patient on 2020-08-26 : " + result.MP.dates["2020-08-26"].total.confirmed
    document.querySelector(".card5 .date7").innerHTML = "Confirmed patient on 2020-09-26 : " + result.MP.dates["2020-09-26"].total.confirmed
    document.querySelector(".card5 .date8").innerHTML = "Confirmed patient on 2020-10-11 : " + result.MP.dates["2020-10-11"].total.confirmed


    //card 6

    document.querySelector(".card6 .date1").innerHTML = "Confirmed patient on 2020-03-26 : " + result.PY.dates["2020-03-26"].total.confirmed
    document.querySelector(".card6 .date2").innerHTML = "Confirmed patient on 2020-04-26 : " + result.PY.dates["2020-04-26"].total.confirmed
    document.querySelector(".card6 .date3").innerHTML = "Confirmed patient on 2020-05-26 : " + result.PY.dates["2020-05-26"].total.confirmed
    document.querySelector(".card6 .date4").innerHTML = "Confirmed patient on 2020-06-26 : " + result.PY.dates["2020-06-26"].total.confirmed
    document.querySelector(".card6 .date5").innerHTML = "Confirmed patient on 2020-07-26 : " + result.PY.dates["2020-07-26"].total.confirmed
    document.querySelector(".card6 .date6").innerHTML = "Confirmed patient on 2020-08-26 : " + result.PY.dates["2020-08-26"].total.confirmed
    document.querySelector(".card6 .date7").innerHTML = "Confirmed patient on 2020-09-26 : " + result.PY.dates["2020-09-26"].total.confirmed
    document.querySelector(".card6 .date8").innerHTML = "Confirmed patient on 2020-10-11 : " + result.PY.dates["2020-10-11"].total.confirmed


    //card 7

    document.querySelector(".card7 .date1").innerHTML = "Confirmed patient on 2020-03-26 : " + result.RJ.dates["2020-03-26"].total.confirmed
    document.querySelector(".card7 .date2").innerHTML = "Confirmed patient on 2020-04-26 : " + result.RJ.dates["2020-04-26"].total.confirmed
    document.querySelector(".card7 .date3").innerHTML = "Confirmed patient on 2020-05-26 : " + result.RJ.dates["2020-05-26"].total.confirmed
    document.querySelector(".card7 .date4").innerHTML = "Confirmed patient on 2020-06-26 : " + result.RJ.dates["2020-06-26"].total.confirmed
    document.querySelector(".card7 .date5").innerHTML = "Confirmed patient on 2020-07-26 : " + result.RJ.dates["2020-07-26"].total.confirmed
    document.querySelector(".card7 .date6").innerHTML = "Confirmed patient on 2020-08-26 : " + result.RJ.dates["2020-08-26"].total.confirmed
    document.querySelector(".card7 .date7").innerHTML = "Confirmed patient on 2020-09-26 : " + result.RJ.dates["2020-09-26"].total.confirmed
    document.querySelector(".card7 .date8").innerHTML = "Confirmed patient on 2020-10-11 : " + result.RJ.dates["2020-10-11"].total.confirmed

    //card 8

    document.querySelector(".card8 .date1").innerHTML = "Confirmed patient on 2020-03-26 : " + result.TN.dates["2020-03-26"].total.confirmed
    document.querySelector(".card8 .date2").innerHTML = "Confirmed patient on 2020-04-26 : " + result.TN.dates["2020-04-26"].total.confirmed
    document.querySelector(".card8 .date3").innerHTML = "Confirmed patient on 2020-05-26 : " + result.TN.dates["2020-05-26"].total.confirmed
    document.querySelector(".card8 .date4").innerHTML = "Confirmed patient on 2020-06-26 : " + result.TN.dates["2020-06-26"].total.confirmed
    document.querySelector(".card8 .date5").innerHTML = "Confirmed patient on 2020-07-26 : " + result.TN.dates["2020-07-26"].total.confirmed
    document.querySelector(".card8 .date6").innerHTML = "Confirmed patient on 2020-08-26 : " + result.TN.dates["2020-08-26"].total.confirmed
    document.querySelector(".card8 .date7").innerHTML = "Confirmed patient on 2020-09-26 : " + result.TN.dates["2020-09-26"].total.confirmed
    document.querySelector(".card8 .date8").innerHTML = "Confirmed patient on 2020-10-11 : " + result.TN.dates["2020-10-11"].total.confirmed


    //card 9

    document.querySelector(".card9 .date1").innerHTML = "Confirmed patient on 2020-03-26 : " + result.UP.dates["2020-03-26"].total.confirmed
    document.querySelector(".card9 .date2").innerHTML = "Confirmed patient on 2020-04-26 : " + result.UP.dates["2020-04-26"].total.confirmed
    document.querySelector(".card9 .date3").innerHTML = "Confirmed patient on 2020-05-26 : " + result.UP.dates["2020-05-26"].total.confirmed
    document.querySelector(".card9 .date4").innerHTML = "Confirmed patient on 2020-06-26 : " + result.UP.dates["2020-06-26"].total.confirmed
    document.querySelector(".card9 .date5").innerHTML = "Confirmed patient on 2020-07-26 : " + result.UP.dates["2020-07-26"].total.confirmed
    document.querySelector(".card9 .date6").innerHTML = "Confirmed patient on 2020-08-26 : " + result.UP.dates["2020-08-26"].total.confirmed
    document.querySelector(".card9 .date7").innerHTML = "Confirmed patient on 2020-09-26 : " + result.UP.dates["2020-09-26"].total.confirmed
    document.querySelector(".card9 .date8").innerHTML = "Confirmed patient on 2020-10-11 : " + result.UP.dates["2020-10-11"].total.confirmed

}
foo()






