var oTableVenta;
var handleDataTableDefaultVenta;
var Tbl_1;



function paginaAjaxVenta(idSeccion, data, url, method, preFunction, postFunction, cache, async) {
    //if ((typeof preFunction) == 'function') {
    //    preFunction();
    //}
    if (data != -1) {
        $.ajax(
        {
            url: url,
            type: method,
            data: data,
            cache: cache,
            async: async
        }).done(function (pagina) {
            CalcFechaPaq();
            $('#' + idSeccion).html(pagina);
            //if ((typeof postFunction) == 'function') {
            //    postFunction();
            //}
        }).fail(function () {
            $('#' + idSeccion).html('<div class="divAlertaRojo">Ocurrió un error inesperado. Por favor reporte esto a la plataforma o al correo "ovallesoft@gmail.com". Pedimos disculpas y damos gracias por su comprensión.</div>');
        });
    }
    else {
        $('#' + idSeccion).html('<div class="divAlertaRojo">Seleccione un paquete...!!!.</div>');
    }
}





sumaFecha = function (d, fecha) {
    var Fecha = new Date();
    var sFecha = fecha || (Fecha.getDate() + "/" + (Fecha.getMonth() + 1) + "/" + Fecha.getFullYear());
    var sep = sFecha.indexOf('/') != -1 ? '/' : '-';
    var aFecha = sFecha.split(sep);
    var fecha = aFecha[2] + '/' + aFecha[1] + '/' + aFecha[0];
    fecha = new Date(fecha);
    fecha.setDate(fecha.getDate() + parseInt(d));
    var anno = fecha.getFullYear();
    var mes = fecha.getMonth() + 1;
    var dia = fecha.getDate();
    mes = (mes < 10) ? ("0" + mes) : mes;
    dia = (dia < 10) ? ("0" + dia) : dia;
    //dia = dia - 1;
    var fechaFinal = dia + sep + mes + sep + anno;
    return (fechaFinal);
}






function CalcFechaPaq() {
    var fechac = document.getElementById("fechaIniciop").value;
    var diasc = document.getElementById("nDias").value;
    diasc = diasc - 1;
    document.getElementById("fechaFinp").value = sumaFecha(diasc, fechac);
}


handleDataTableDefaultVenta = function () {
    "use strict";
    oTableVenta = $('#data-table').dataTable({
        "language": {
            "sProcessing": "Procesando...",
            "sLengthMenu": "Mostrar _MENU_ registros",
            "sZeroRecords": "No se encontraron resultados",
            "sEmptyTable": "Ningún dato disponible en esta tabla",
            "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sInfoPostFix": "",
            "sSearch": "Buscar:",
            "sUrl": "",
            "sInfoThousands": ",",
            "sLoadingRecords": "Cargando...",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            },
            "oAria": {
                "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
            }
        },
        "aoColumns": [
         null,
         null,
         null,
         null,
        ],
        iDisplayLength: 5,
        deferRender: true,
        // scrollY: 325,
        //scrollCollapse: true,
        //  scroller: true,
        select: true,
        responsive: true,
        bDestroy: true
    });

    $('#data-table tbody').on("click", 'tr', function (e) {

    });
}
Tbl_1 = function () {
    "use strict";
    return {
        init: function () {
            handleDataTableDefaultVenta();
        }
    };
}();






//handleDataTableDefault_1 = function () {
//    "use strict";
//    oTable_1 = $('#data-table_wrapper').dataTable({
//        "language": {
//            "sProcessing": "Procesando...",
//            "sLengthMenu": "Mostrar _MENU_ registros",
//            "sZeroRecords": "No se encontraron resultados",
//            "sEmptyTable": "Ningún dato disponible en esta tabla",
//            "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
//            "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
//            "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
//            "sInfoPostFix": "",
//            "sSearch": "Buscar:",
//            "sUrl": "",
//            "sInfoThousands": ",",
//            "sLoadingRecords": "Cargando...",
//            "oPaginate": {
//                "sFirst": "Primero",
//                "sLast": "Último",
//                "sNext": "Siguiente",
//                "sPrevious": "Anterior"
//            },
//            "oAria": {
//                "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
//                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
//            }
//        },
//        "aoColumns": [
//         null,
//         null,
//        ],
//        iDisplayLength: 5,
//        deferRender: true,
//        // scrollY: 325,
//        //scrollCollapse: true,
//        //  scroller: true,
//        select: true,
//        responsive: true,
//        bDestroy: true
//    });

//    $('#data-table tbody').on("click", 'tr', function (e) {

//    });
//}
//Tbl_2 = function () {
//    "use strict";
//    return {
//        init: function () {
//            handleDataTableDefault_1();
//        }
//    };
//}();