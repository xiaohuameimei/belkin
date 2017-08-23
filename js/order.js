 $(function(){
      $(".time li").on("click",function(){
        $(".time li").removeClass('active');
        $(this).addClass('active');
      })

      $(".kind li").on("click",function(){
        $(".kind li").removeClass('active');
        $(this).addClass('active');
      })

      $(".status li").on("click",function(){
        $(".status li").removeClass('active');
        $(this).addClass('active');
      })

      $('.form_datetime').val("2017-07-29")
    });



