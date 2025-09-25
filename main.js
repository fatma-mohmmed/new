// كود بسيط جدا للمشروع
$(function(){

  // زر المساعدة (في الرئيسية)
  $("#btn1").click(function(){
    var m = new bootstrap.Modal("#mdl1");
    $("#mdlBody").text("تم تحميل المحتوى");
    m.show();
  });

  // نموذج التواصل
  $("#cForm").submit(function(e){
    e.preventDefault();
    alert("تم إرسال الرسالة (تجريبي)");
    this.reset();
  });

  // نموذج الدخول
  $("#lForm").submit(function(e){
    e.preventDefault();
    alert("تم تسجيل الدخول (تجريبي)");
  });

  // نموذج التسجيل
  $("#rForm").submit(function(e){
    e.preventDefault();
    var p1 = $("#p1").val();
    var p2 = $("#p2").val();
    if(p1 !== p2){
      alert("كلمة المرور غير متطابقة");
    } else {
      alert("تم إنشاء الحساب (تجريبي)");
    }
  });

});
