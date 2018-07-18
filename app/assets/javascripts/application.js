// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//= require jquery
//= require rails-ujs
//= require turbolinks
//= require_tree .
$(function(){
    var btn=$('#btn-ajax')
    btn.on('click',function(){
        var body=$('tbody');
        var fname=$('#fname').val();
        var lname=$('#lname').val();
        var age=$('#age').val();
        body.empty();
        $.ajax({
            url:"/users/webservice.json",
            type:"post",
            data:{prenom:fname,nom:lname,age:age},
            success:function(data){
                var taille=data.length;
                var corps=""; 
                // alert(data[0].lname);
                for(var i=0;i<taille;i++){
                    corps +="<tr>";
                    corps +="<td>"+data[i].lname+"</td>";
                    corps +="<td>"+data[i].fname+"</td>";
                    corps +="<td>"+data[i].age+"</td>";
                    corps +="</tr>";
                }
                body.append(corps);
            }
        })
    });

    var search=$('#search');
    search.on('input',function(e){
        var chaine=$(this).val();
        var body=$('tbody');
        body.empty();
        $.ajax({
            url:"/users/search.json",
            type:"post",
            data:{chaine:chaine},
            success:function(data){
                var taille=data.length;
                var corps=""; 
                // alert(data[0].lname);
                for(var i=0;i<taille;i++){
                    corps +="<tr>";
                    corps +="<td>"+data[i].lname+"</td>";
                    corps +="<td>"+data[i].fname+"</td>";
                    corps +="<td>"+data[i].age+"</td>";
                    corps +="</tr>";
                }
                body.append(corps);
            }
        })
    });
});