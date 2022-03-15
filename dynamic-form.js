var data =
{
   "Jet Tempur": 10,
   "Nuklir Hiroshima": 1,
   "Infinity Stone": 6,
   "Burj Khalifa": 5,
   "Rudal Hipersonik": 3
}

var dataSelect = {};
var tmp;

$(document).ready(function () {

   var addrow = `<div class="form-group baru-data">  
   <form method="POST" action="">
       <div class="row" id="dynamic_form">
           <div class="form-group baru-data">
               <div class="col-md-3">
               <label>Produk</label>
                   <select id="p" class="form-control">
                       <option value="">- Pilih Kategori -</option>
                       ${Object.keys(data).map((hasil, i) => {
      //   console.log(data[hasil])
      return (
         ` <option value=${data[hasil]}>${hasil}</option>`
      )
   })

      }
                   </select>
               </div>
               <div class="col-md-2">
               <label>Jumlah</label>
                   <input id="j" type="number" name="jumlah_produk[]" placeholder="Jumlah Produk" class="form-control">
               </div>
               
               <div class="button-group">
                   <button type="button" class="btn btn-success btn-tambah" style='margin-top: 22px;display:none'><i class="fa fa-plus"></i></button>
                   <button type="button" class="btn btn-danger btn-hapus" style="display:none;margin-top: 22px;"><i class="fa fa-times"></i></button>
               </div>
           </div>`
   $("#dynamic_form").html(addrow);

});

function addForm() {
   var addrow = `<div class="form-group baru-data">  
<form method="POST" action="">
    <div class="row" id="dynamic_form">
        <div class="form-group baru-data">
            <div class="col-md-3">
            <label>Produk</label>
                <select id="p"  class="form-control">
                    <option value="">- Pilih Kategori -</option>
                    ${Object.keys(data).map((hasil, i) => {
                     //   console.log(data[hasil])
                     return (
                        ` <option value=${data[hasil]}>${hasil}</option>`
                     )
                  })}
                </select>
            </div>
            <div class="col-md-2">
            <label>Jumlah</label>
                <input id="j" type="number" name="jumlah_produk[]" placeholder="Jumlah Produk" class="form-control">
            </div>
            
            <div class="button-group">
                <button type="button" class="btn btn-success btn-tambah" style='margin-top: 22px;display:none'><i class="fa fa-plus"></i></button>
                <button type="button" class="btn btn-danger btn-hapus" style="display:none;margin-top: 22px;"><i class="fa fa-times"></i></button>
            </div>
        </div>`
   $("#dynamic_form").append(addrow);
}



$("#dynamic_form").on("change", "#p", function () {
   const value = $(this).val();
   tmp = value;
   console.log(value)
   // const data = $('.baru-data').last().find('.btn-tambah')
   // console.log('data :', data)
//    dataSelect =  Object.keys(data).filter((hasil) => {
//    return data[hasil] != value
// }).map(hasil => {
//   return {hasile: data[hasil]}
// })

// console.log(dataSelect)

Object.filter = (obj, predicate) => 
    Object.keys(obj)
          .filter( key => predicate(obj[key]) )
          .reduce( (res, key) => (res[key] = obj[key], res), {} );

          data = Object.filter(data, score => score != value); 
// console.log(dataSelect);

   if(value != ""){
      $(".btn-tambah").css("display", "");
   }else{
      $(".btn-tambah").css("display", "none");
   }
      
})

$("#dynamic_form").on("keyup", "#j", function () {
   const value = $(this).val();
   if(value < 5 && parseInt(value) <= parseInt(tmp)){
      $(".btn-tambah").css("display", "");
   }else{
      $(".btn-tambah").css("display", "none");
   }
      
})

$("#dynamic_form").on("click", ".btn-tambah", function () {
   addForm()
   $(this).css("display", "none")
   var valtes = $(this).parent().find(".btn-hapus").css("display", "");
})

$("#dynamic_form").on("click", ".btn-hapus", function () {
   $(this).parent().parent('.baru-data').remove();
   var bykrow = $(".baru-data").length;
   if (bykrow == 1) {
      $(".btn-hapus").css("display", "none")
      $(".btn-tambah").css("display", "");
   } else {
      $('.baru-data').last().find('.btn-tambah').css("display", "");
   }
});

$('.btn-simpan').on('click', function () {
   $('#dynamic_form').find('input[type="text"], input[type="number"], select, textarea').each(function () {
      if ($(this).val() == "") {
         event.preventDefault()
         $(this).css('border-color', 'red');

         $(this).on('focus', function () {
            $(this).css('border-color', '#ccc');
         });
      }
   })
})