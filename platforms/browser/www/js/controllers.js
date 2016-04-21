angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: '1- Occupant Identification', id: 1 },
    { title: '2- Occupancy periods ', id: 2 },
    { title: '3- General thermal comfort', id: 3 },

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




