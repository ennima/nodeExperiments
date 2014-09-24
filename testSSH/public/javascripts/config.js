var addServerVisible = false;
      $(document).tooltip();
      $("#add-server").click(function(){
          if(addServerVisible == false)
          {
            addServerVisible = true;
            $("#addServer").show("slow");
          }else{
            addServerVisible = false;
            $("#addServer").hide("slow");
          }
      });
      $("#origin").selectmenu();
      $("#destination, #flow").selectmenu();
      $("#addBtn, #aceptBtn").button();







// *********************  TOOL TIPS *************************//
      $("#origen-Info").click(function(){
         $(this).attr("title","Servidor del cual se hará respaldo");
         $(this).tooltip().tooltip("open");
         //alert("click");
      });
      

      $("#destination-Info").click(function(){
         $(this).attr("title","Servidor en el que se guardará el respaldo");
         $(this).tooltip().tooltip("open");
         //alert("click");
      });
      
      $("#add-server-Info").click(function(){
         $(this).attr("title","Agregar un nuevo servidor");
         $(this).tooltip().tooltip("open");
         //alert("click");
      });

      $("#svr_name-Info").click(function(){
         $(this).attr("title","Identificador del servidor");
         $(this).tooltip().tooltip("open");
         //alert("click");
      });

      $("#svr_host-Info").click(function(){
         $(this).attr("title","Nombre o IP del servidor");
         $(this).tooltip().tooltip("open");
         //alert("click");
      });

      $("#svr_user-Info").click(function(){
         $(this).attr("title","Cuenta de usuario para acceder por FTP al servidor");
         $(this).tooltip().tooltip("open");
         //alert("click");
      });

      $("#flow-Info").click(function(){
         $(this).attr("title","Tipo de flujo de respaldo");
         $(this).tooltip().tooltip("open");
         //alert("click");
      });

       $("#svr_rootPath-Info").click(function(){
         $(this).attr("title","Directorio raíz ej.: win( V:/ ) linux( mnt/Noticias )");
         $(this).tooltip().tooltip("open");
         //alert("click");
      });

      $("#origen-Info,#destination-Info,#add-server-Info,#svr_name-Info,#svr_host-Info,#svr_rootPath-Info,#svr_user-Info,#flow-Info").mouseover (function(){
        $(this).attr("title","");
       // alert("leave")
      });



      


      //Agrega un nuevo servidor
      $("#addBtn").click(function(){
          var dataa ={};
                  dataa.svr_name=$("#svr_name").val();
                  dataa.svr_host=$("#svr_host").val();
                  dataa.svr_user=$("#svr_user").val();
                  dataa.svr_pass=$("#svr_pass").val();
                  dataa.svr_rootPath=$("#svr_rootPath").val();
                  dataa.svr_workDir=$("#svr_workDir").val();
                 
          $.ajax({
            type:"POST",
            url:"/configs/ajax",
            success: function(msg){
              alert(msg);
            },
            data:JSON.stringify(dataa),
            contentType:'application/json',
            error: function(msg){
              alert("ERROR: "+msg);
            }
          });

      });
      $(document).ready(function(){
        $("#addServer").hide();

        
      });