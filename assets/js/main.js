$(".zoomImage").mouseover(function () {
    $(this).css("transform", "scale(1.2)");
    $(this).css("transition", "0.2s");
});
$(".zoomImage").mouseout(function () {
    $(this).css("transform", "scale(1.0)");
    $(this).css("transition", "0.2s");
});
$("#pacoteUm").click(function () {
    var url = "https://www.mercadopago.com.br/checkout/v1/redirect?preference-id=374288851-4479eb71-c64b-4f5d-8a0b-16c71b18fc12";
    document.location.href = url;
});
$("#pacoteDois").click(function () {
    var url2 = "https://www.mercadopago.com.br/checkout/v1/redirect?preference-id=374288851-86106f5a-9a49-4b11-8596-411e6e048366";
    document.location.href = url2;
});
$("#pacoteTres").click(function () {
    var url3 = "https://www.mercadopago.com.br/checkout/v1/redirect?preference-id=374288851-fdf8897e-939c-4460-9fe7-854ccdbdda0e";
    document.location.href = url3;
});
$("#pacoteQuatro").click(function () {
    var url4 = "https://www.mercadopago.com.br/checkout/v1/redirect?preference-id=374288851-608c9f75-5e41-42cb-bdf1-bad0e80127cb";
    document.location.href = url4;
});
$("#download").click(function () {
    var url5 = "http://www.mediafire.com/file/9db2dbmacb62fb6/RF_Atena.rar/file ";
    document.location.href = url5;
});
$("#registro").click(function () {
    var url6 = "https://newwoods.gamecp.net/register.php";
    document.location.href = url6;
});
$('#dataForm').submit(function (e) {
    e.preventDefault();
    $('.main-modal-content').addClass('d-none');
    $('.secondary-modal-content').removeClass('d-none');
    var formulario = $(this);
    var retorno = sendData(formulario);
});

$('#dataForm2').submit(function (e) {
    e.preventDefault();
    $('.main-modal-kit-2').addClass('d-none');
    $('.secondary-modal-2').removeClass('d-none');
    var formulario = $(this);
    var retorno = sendData(formulario);
});

$('#dataForm3').submit(function (e) {
    e.preventDefault();
    $('.main-modal-kit-3').addClass('d-none');
    $('.secondary-modal-3').removeClass('d-none');
    var formulario = $(this);
    console.log("form data: " + formulario);
    var retorno = sendData(formulario);
});

function sendData(dados) {
    console.log("dados: " + dados.serialize());
    $.ajax({
        type: "POST",
        data: dados.serialize(),
        url: "banco/postForm.php",
        async: false
    }).done(function (data) {
        console.log("Sucesso!");
        console.log(dados.serialize());
    }).fail(function () {
        console.log("Ops! Algo errado aconteceu.");
        console.log(dados.serialize());
    })
}