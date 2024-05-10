$(document).ready(function () {
    // $('[id^="navbutton"]').click(function(){
    //     // Mengambil ID tombol yang diklik
    //     var buttonId = $(this).attr('id');
    //     // Mengambil angka dari ID tombol
    //     var pageNum = buttonId.match(/\d+/)[0];
    //     // Menyembunyikan semua halaman
    //     $('.page').hide();
    //     // Menampilkan halaman yang sesuai dengan tombol yang diklik
    //     $('#page' + pageNum).fadeIn();
    //     // Menambahkan kelas 'z-2' ke halaman yang ditampilkan
    //     $('#page' + pageNum).addClass('z-2');
    //     $('#navbutton' + $(this).attr('id')).addClass('active');
    //   });
    $('[id^="navbutton"]').click(function(){
        var buttonId = $(this).attr('id');
        var pageNum = buttonId.match(/\d+/)[0];
        
        // Menambahkan kelas 'active' pada tombol yang diklik dan menghapusnya dari tombol lainnya
        $('.btn-outline-warning').removeClass('active');
        $(this).addClass('active');
        
        // Menambahkan kelas 'z-2' pada halaman yang ditampilkan dan menghapusnya dari halaman lainnya
        $('.page').removeClass('z-2').hide();
        $('#page' + pageNum).addClass('z-2').show();
      });
});