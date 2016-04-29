angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: '1- Occupant Identification', id: 1 },
    { title: '2- Occupancy periods ', id: 2 },
    { title: '3- General thermal comfort', id: 3 },
    { title: 'STRATEGY', id: 4 }, 
    { title: 'ALL STRATEGIES', id: 5 }, 

  ];

})

.controller('PlaylistCtrl', function($scope, $stateParams) {
setValue1();
})



.controller('PlaylistCtrl2', function($scope, $stateParams) {
setValue2();
})



.controller('PlaylistCtrl3', function($scope, $stateParams) {
setValue3();
})

.controller('Submit', function($scope, $stateParams) {
})


.controller('PlaylistCtrl4', function($scope, $stateParams) {
setPreference();
})


.controller('PlaylistCtrl5', function($scope, $stateParams) {
changebarstatus();
subscriber();
})


function submit(){



  $(function(){
        var idade = localStorage.getItem('idade');
        var gender = localStorage.getItem('gender');
        var weight = localStorage.getItem('weight');
        var atime= localStorage.getItem('atime');
        var dtime= localStorage.getItem('dtime');
        var tcomfort=localStorage.getItem('tcomfort');
        var acept= localStorage.getItem('acept');
        var pref= localStorage.getItem('pref');
        var sens= localStorage.getItem('sens');
        var oba= localStorage.getItem('oba');
    $.ajax({
      type: "POST",
      url: 'http://52.89.105.19/insert_aci.php',
      data: ({idade: idade, gender: gender, weight: weight, atime: atime, dtime: dtime, tcomfort: tcomfort, acept: acept, pref: pref, sens: sens, oba: oba }),
      success: function(data) {
        alert(data);
      }

    });
  });

alert("Saved")

}


function save1(){

                    var idade= document.getElementById("idade").value;
                    localStorage.setItem('idade', idade);

                    var gender= document.getElementById("gender").value;
                    localStorage.setItem('gender', gender);

                    var weight= document.getElementById("weight").value;
                    localStorage.setItem('weight', weight);


                }



function save2(){


                    var atime= document.getElementById("atime").value;
                    localStorage.setItem('atime', atime);

                    var dtime= document.getElementById("dtime").value;
                    localStorage.setItem('dtime', dtime);



                }


function save3(){

                    var tcomfort= document.getElementById("tcomfort").value;
                    localStorage.setItem('tcomfort', tcomfort);

                    var acept= document.getElementById("acept").value;
                    localStorage.setItem('acept', acept);

                    var pref= document.getElementById("pref").value;
                    localStorage.setItem('pref', pref);

                     var sens= document.getElementById("sens").value;
                    localStorage.setItem('sens', sens);

                    var oba= document.getElementById("oba").value;
                    localStorage.setItem('oba', oba);

 


                    localStorage.setItem('coolit', pref);
                    localStorage.setItem('wormit', pref);


}



function setValue1(){


        var idade = localStorage.getItem('idade');
        var gender = localStorage.getItem('gender');
        var weight = localStorage.getItem('weight');



 document.getElementById("idade").value = idade;
        document.getElementById("gender").value = gender;
        document.getElementById("weight").value = weight;



}










function setValue2(){
        var atime= localStorage.getItem('atime');
        var dtime= localStorage.getItem('dtime');
         document.getElementById("atime").value = atime;
        document.getElementById("dtime").value = dtime;

}


function setValue3(){
        var tcomfort=localStorage.getItem('tcomfort');
        var acept= localStorage.getItem('acept');
        var pref= localStorage.getItem('pref');
        var sens= localStorage.getItem('sens');
        var oba= localStorage.getItem('oba');






        document.getElementById("tcomfort").value = tcomfort;
        document.getElementById("acept").value = acept;
        document.getElementById("pref").value = pref;
        document.getElementById("sens").value = sens;
        document.getElementById("oba").value = oba;

}



 function redirect1(){
           window.location.replace("#/app/playlists/2");
        }

function redirect2(){

           window.location.replace("#/app/playlists/3");
        }






function redirect3(){

           window.location.replace("#/app/playlists");
        }

function redirect4(){

           window.location.replace("#/app/submit");
        }

function remover(){

//localStorage.removeItem('RoomID');
//localStorage.removeItem('Pass');

        localStorage.removeItem('idade');
        localStorage.removeItem('gender');
        localStorage.removeItem('weight');
        localStorage.removeItem('atime');
        localStorage.removeItem('dtime');
        localStorage.removeItem('tcomfort');
        localStorage.removeItem('acept');
        localStorage.removeItem('pref');
        localStorage.removeItem('sens');
        localStorage.removeItem('oba');

           window.location.replace("#/app/search");


}


function msg(){
    document.getElementById('msg').value="To edit before submit, click in one of the options"
}
function clearmsg(){
    document.getElementById('msg').value=""
}







function startbar(){
 waitingDialog.show('Custom message');
}


function enviar(){


  $(function(){
 var preference1 = document.getElementById("preference").value;

    $.ajax({
      type: "POST",
      url: 'http://172.26.50.120/comfort_adjust.php',
      data: ({preference: preference1, }),

      success: function(data) {
      }
    });
  });
alert(preference1);

}


function setPreference(){
        var preferen= localStorage.getItem('pref');
        var coolit = localStorage.getItem('coolit');
        var wormit = localStorage.getItem('wormit');
        document.getElementById("coolit").value = coolit;
        document.getElementById("wormit").value = wormit;


        document.getElementById("preference").value = preferen;
        //document.getElementById("preference").style.visibility = "hidden";

}

function wormit(){

 var wormit= localStorage.getItem('wormit');

  $(function(){
  if (wormit == localStorage.getItem('pref')){

   wormit1 = parseInt(document.getElementById("preference").value) - parseInt("10");
        localStorage.setItem('wormit', wormit1);
    }      
  else{
 var wormit1 = parseInt(document.getElementById("wormit").value) - parseInt("10");
                    localStorage.setItem('wormit', wormit1);
        }
    $.ajax({
      type: "POST",
      url: 'http://172.26.50.120/comfort_adjust.php',
      data: ({preference: wormit1, }),

      success: function(data) {
      }
    });
  });

}






var coolit1;

function coolit(){
 
 var coolit= localStorage.getItem('coolit');
  
  $(function(){
  if (coolit == localStorage.getItem('pref')){

   coolit1 = parseInt(document.getElementById("preference").value) + parseInt("10");
        localStorage.setItem('coolit', coolit1);

    }      
  else{
  coolit1 = parseInt(document.getElementById("coolit").value) + parseInt("10");
                    localStorage.setItem('coolit', coolit1);

        }
    $.ajax({
      type: "POST",
      url: 'http://172.26.50.120/comfort_adjust.php',
      data: ({preference: coolit1, }),

      success: function(data) {
      }
    });
  });
}

function clearworm(){

//localStorage.removeItem('RoomID');
//localStorage.removeItem('Pass');
        localStorage.setItem('coolit', document.getElementById("preference").value);
        localStorage.setItem('wormit', document.getElementById("preference").value);
     

}








//PROGRESS BAR
var progressbar_value = "35%";


function changebarstatus(){

         document.getElementById("myBar").style.width = progressbar_value;
         document.getElementById("label").innerHTML = progressbar_value;



}

function strategy1(){

        //Only perform tasks if this condition is fulfilled
        if (progressbar_value == "100%"){

        }
        else{
        alert("Please wait. The system is setting up the initial temperature");
        }



}

function strategy2(){

        //Only perform tasks if this condition is fulfilled
        if (progressbar_value == "100%"){

        }
        else{
        alert("Please wait. The system is setting up the initial temperature");
        }



}

function strategy3(){

        //Only perform tasks if this condition is fulfilled
        if (progressbar_value == "100%"){

        }
        else{
        alert("Please wait. The system is setting up the initial temperature");
        }



}

function strategy4(){

        //Only perform tasks if this condition is fulfilled
        if (progressbar_value == "100%"){

        }
        else{
        alert("Please wait. The system is setting up the initial temperature");
        }



}


//PUBLISHER AND SUBSCRIBER JAVASCRIPT

#!/usr/bin/env node

function publish(){

msg="'Hello World!'";
channel = "loading"



var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(err, conn) {
  conn.createChannel(function(err, ch) {
    var q = channel;

    //ch.assertQueue(q, {durable: false});
    ch.sendToQueue(q, new Buffer(msg));
    console.log(" [x] Sent 'Hello World!'");
  });
  setTimeout(function() { conn.close(); process.exit(0) }, 500);
});



}


function subscriber(){

channel = "loading"

  //#!/usr/bin/env node

var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(err, conn) {
  conn.createChannel(function(err, ch) {
    var q = channel;

    ch.assertQueue(q, {durable: false});
    //console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q);
    ch.consume(q, function(msg) {
      alert(" [x] Received %s", msg.content.toString());
    }, {noAck: true});
  });
});


}



