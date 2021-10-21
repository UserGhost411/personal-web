/*
Ghost JS

ndak bisa basa engres | maap kalo ndak ada penjelasan.....
*/

var container = $('.content-container');
var card_items = $('.content');
var animation_in = container.data('animation-in');
var animation_out = container.data('animation-out');
$('.list-menu').on('click', 'a', function () {

    var width = $(window).width();
    var id = $(this).attr('href');
    var h = parseFloat($(id).offset().top);
    var card_item = $(id);
    var menu_items = $('.list-menu a');
    var menu_item = $(this).closest('a');
    //if ((width >= 1024)) { // tampilan dekstop
        if (!menu_item.hasClass('active')) {
            menu_items.removeClass('active');
            container.find(card_items).removeClass('animated ' + animation_in);
            if ($(container).hasClass('opened'))  container.find(card_items).addClass('animated ' + animation_out);
            menu_item.addClass('active');
            container.addClass('opened');
            container.find(card_item).removeClass('animated ' + animation_out);
            container.find(card_item).addClass('animated ' + animation_in);
            $(card_items).addClass('hidden');
            $(card_items).removeClass('active');
            $(card_item).removeClass('hidden');
            $(card_item).addClass('active');
            
        }
    //}
    return false;
});
$('.project-item-click').click(function(e) {  
    var id = e.currentTarget.id;
    var modal = $("#projectmodal");
    var title = $("#modal-title");
    var isi = $("#modal-body");
    modal.modal('show');
    if(id=="infinityid"){
        title.text("Project InfinityID");
        isi.html(' <img class="img-fluid" src="https://cdn.statically.io/screenshot/infinityid.my.id"><hr><p style="color:black">Project InfinityID adalah project minecraft server yang berfokus pada gameplay minecraft yang dikombinasikan dengan Semi RPG</p>');
    }else if(id=="campus-expo"){
        title.text("Project Campus Expo IT Telkom Surabaya");
        isi.html('<center><iframe src="https://www.youtube.com/embed/57BBq1IunOE?autoplay=1&mute=1" width="700" height="394"></iframe></center><hr><p style="color:black">Project Campus Expo adalah project minecraft server yang bekerja sama dengan IT Telkom Surabaya dalam membuat gedung campus IT Telkom surabaya.</p>');
    }else if(id=="listtu"){
        title.text("Project ListTU");
        isi.html(' <img class="img-fluid" src="img/ss_listtu.png"><hr><p style="color:black">Project ListTU adalah project aplikasi management berbasis website yang dikembangkan dengan tujuan membantu mahasiswa dalam mengelolah tugas dan jadwal kuliah mereka.</p>');
    }else if(id=="cycoctf"){
        title.text("Project Cycology CTF");
        isi.html(' <img class="img-fluid" src="img/ss_cyco.png"><hr><p style="color:black">Project Cycology CTF adalah sebuah project kerja sama dengan UKM <a href="https://cycologyittelkomsby.com" target="_blank">Cycology</a> dalam rangka menghadirkan tingkat edukasi cyber security bagi mahasiswa IT Telkom Surabaya.</p>');
    }else if(id=="wioip"){
        title.text("Project WIOIP");
        isi.html(' <img class="img-fluid" src="https://cdn.statically.io/screenshot/github.com/UserGhost411/WIOIP"><hr><p style="color:black">Project WIOIP atau kependakan dari Weather Information over Internet Protocol merupakan project yang berfokus untuk mendapatkan data cuaca dari internet dan ditulis dalam bahasa Java dengan library JavaFX.</p>');
    
    }else{
        title.text("Project Tidak dikenali");
        isi.html('?????');
    }
    return false;
});