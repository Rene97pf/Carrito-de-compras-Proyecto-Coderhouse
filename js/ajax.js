
const URLGET = "remeras.json"
$("#div1").prepend('<button id="btn">Inventario</button>');
$("#div1").prepend('<button id="btn1">Cerrar</button>');



$("#btn").click(() => { 
    $.get(URLGET, function (respuesta, estado) {
          if(estado === "success"){
            let misDatos = respuesta;
            for (const dato of misDatos) {
              $("#div2").prepend(`<div>
                                   <h3>${dato.title}</h3>
                                   <h4>${dato.precio}</h4>
                                   <h5>Stock:${dato.stock}</h5>
                                   <img src=${dato.url} style= "width:10%"></img>
                                   <hr>
                                  </div>`);
            }  
          }
    });
});

$("#btn1").on( "click", function() {
  $('#div2').hide();
  })

  $("#btn").on( "click", function() {
    $('#div2').show();
    })
  
