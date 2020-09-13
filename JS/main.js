$(document).ready(function () {

  new WOW().init();

  $(".bars").click(function () {
    $(".mobile-menu-ant").animate({
      top: "0px"
    });
    $(".bars").hide();
    $(".layer-mobile").fadeToggle();
  });

  $(".layer-mobile").click(function () {
    $(".mobile-menu-ant").animate({
      top: "-300px"
    });
    $(".layer-mobile").fadeToggle();
    $(".bars").fadeIn();
  });

  $(".times").click(function () {
    $(".mobile-menu-ant").animate({
      top: "-300px"
    });
    $(".bars").fadeIn();
    $(".layer-mobile").fadeToggle();
  });





  // FOR REGISTER INPUTS
  ! function ($) {

    $('input').keyup(function () {

      $val = $(this).val();
      if ($reg = $(this).attr('pattern')) {
        $reg = new RegExp($reg);
        if ($reg.test($val)) {
          $(this).closest('.form-group').addClass('form-success');
          $(this).closest('.form-group').removeClass('form-error');
        } else {
          $(this).closest('.form-group').removeClass('form-success');
          $(this).closest('.form-group').addClass('form-error');
        }
      }
    }) // end keyup\

  }(jQuery)


  // FOR ARROW BACK 
  window.onscroll = function () {
    scrollFunction()
  };

  function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
      document.getElementById("myBtn").style.display = "block";
    } else {
      document.getElementById("myBtn").style.display = "none";
    }
  }


  // FOR CONT CLICK USER
  // $(".for-click").hide();
  $(".cont-user-btn").click(function () {
    $(".for-click").toggle();
  });

  // FOR CONT BELL CLICK
  // $(".child-cont-bell-click").hide();
  $(".bell-btn").click(function () {
    $(".child-cont-bell-click").toggle();
  });



  // CONTRACT POP UP
  $(".btn-register").click(function () {
    $(".contract-pop-up").fadeToggle();
    $(".contract-pop-up-layer").fadeToggle();
  });

  $(".times-cont-register").click(function () {
    $(".contract-pop-up").fadeToggle();
    $(".contract-pop-up-layer").fadeToggle();
  });

  $(".contract-pop-up-layer").click(function () {
    $(".contract-pop-up").fadeToggle();
    $(".contract-pop-up-layer").fadeToggle();
  });




  // CONTRACT BUTTON CHECK
  $('#myCheckbox').click(function () {
    $('#myButton').prop("disabled", !$("#myCheckbox").prop("checked"));
  });

  $(".contract-go-btn").click(function () {
    $(".layer-select").fadeToggle();
    $(".select-work-a-item").fadeToggle();
    $(".contract-pop-up").fadeToggle();
    $(".contract-pop-up-layer").fadeToggle();
  });



  // SELECT WORK FUNCTION
  // $(".login-btn").click(function(){
  //   $(".layer-select").fadeToggle();
  //   $(".select-work-a-item").fadeToggle();
  // });

  $(".layer-select").click(function () {
    $(".layer-select").fadeToggle();
    $(".select-work-a-item").fadeToggle();
  });




  // WORK SECTION POP UP
  $(".work-send-pop-up-btn").click(function () {
    $(".work-section-pop-up").fadeToggle();
    setInterval(function () {
      $(".work-section-pop-up").fadeOut();
    }, 3000)
  });





  // CREATE WORK POP UP
  $(".create-work-pop-up-btn").click(function () {
    $(".toggler-nav-child").fadeToggle();
    $(".layer-create-work").fadeToggle();
    // $("body").css("overflow", "hidden");
  });


  $(".layer-create-work").click(function () {
    $(".toggler-nav-child").fadeToggle();
    $(".layer-create-work").fadeToggle();
    $(".toggler-nav-child-mobile").fadeToggle();
  });

  $(".times-create-work").click(function () {
    $(".toggler-nav-child").fadeToggle();
    $(".layer-create-work").fadeToggle();
    $(".toggler-nav-child-mobile").fadeToggle();
    $(".toggler-edit-profile-items-child").fadeToggle();
    $(".layer-edit-profile-items").fadeToggle();
    $(".toggler-edit-profile-items-child-mobile").fadeToggle();
  });


  // CREATE WORK POP UP MOBİLE
  $(".create-work-pop-up-btn").click(function () {
    $(".toggler-nav-child-mobile").fadeToggle();
  });


  // // EDİT PROFİLE İTEMS
  $(".edit-btn").click(function () {
    $(".toggler-edit-profile-items-child").fadeToggle();
    $(".layer-edit-profile-items").fadeToggle();
  });

  $(".layer-edit-profile-items").click(function () {
    $(".toggler-edit-profile-items-child").fadeToggle();
    $(".layer-edit-profile-items").fadeToggle();
    $(".toggler-edit-profile-items-child-mobile").fadeToggle();
  });


  // EDİT PROFİLE İTEMS MOBİLE
  $(".edit-btn").click(function () {
    $(".toggler-edit-profile-items-child-mobile").fadeToggle();
  });


  // CALENDAR
  $(function () {
    $("#datepicker").datepicker();
  });

  $(function () {
    $("#datepickers").datepicker();
  });


  // $("#workCategory").val(" ");
  // $("#priceCategory").val(" ");

});


// ==================================JS=================
//SEND WORK POP UP VALIDATE
function validateForWork() {
  let category = document.querySelectorAll(".vali");
  // console.log(category.length);
  for (let i = 0; i < category.length; i++) {
    // console.log(category[i].value)
    if (category[i].value == "") {
      $(document).ready(function () {
        $(".category").addClass("intro");
        $(".danger-p-item").fadeIn();
      });
      // alert("Xanalar boşdur!")
      return false;
    } else {
      true;
      $(document).ready(function () {
        $(".category").addClass("introOne");
        $(".danger-p-item").fadeOut();
        $(".child-send-work-pop-up").toggle();
        $(".toggler-nav-child-mobile").fadeToggle();
        $(".layer-create-work").fadeToggle();
        $(".toggler-nav-child").fadeToggle();
        setInterval(function () {
          $(".child-send-work-pop-up").fadeOut();
        }, 2000)

        // setInterval(function () {
        //   $(".price").hide();
        //   $(".fake-price").fadeIn();
        // }, 1000)

      //   let priceValue = $("#priceCategory").val();
      //   let title = $("#titleTextarea").val();


      //   $(".appendElements").append(` <div class="col-lg-3 col-md-6 col-sm-12"> <div class="third-box-elements elements px-3 py-2">
      //   <h5 class="mt-3 price">
          
      //   </h5>
      //   <h3 class="price">
      //   ${priceValue}
      //   </h3>
      //   <p class="price">
      //   ${priceValue}
      //   </p>
      //   <a href="">
      //       <button class="btn-elems px-5 py-2 my-3">
             
      //       </button>
      //   </a>
      //   </div></div>`)

      });
      // let newWork = document.createElement("BUTTON");
      // document.body.appendChild(newWork);
      return;
    }
  }
};



// VALIDATION SEND MESSAGE
function validationSendMesage() {
  let valiSendMessage = document.querySelectorAll(".valiSendMessage");

  for (let i = 0; i < valiSendMessage.length; i++) {
    console.log(valiSendMessage[i].value)
    if (valiSendMessage[i].value == "") {
      $(document).ready(function () {
        $(".valiSendMessage").addClass("intro");
      });
      return false;
    } else {
      true;
      $(document).ready(function () {
        $(".valiSendMessage").addClass("introOne");
        $(".child-pop-up-message").fadeIn();
        setInterval(function () {
          $(".child-pop-up-message").fadeOut();
        }, 3000)
      });
      return;
    }
  }
}



// REGISTER VALIDATION
function validationSendMesage() {
  let registerValidate = document.querySelectorAll(".registerValidate");

  for (let i = 0; i < registerValidate.length; i++) {
    console.log(registerValidate[i].value)
    if (registerValidate[i].value == "") {
      $(document).ready(function () {
        $(".registerValidate").addClass("intro");
      });
      return false;
    } else {
      true;
      $(document).ready(function () {
        $(".registerValidate").addClass("introOne");

      });
      return;
    }
  }
}



// });


// // LOGIN SECTION VALIDATION
// function validateLogin(){
//   let category = document.querySelectorAll(".vali");
//   console.log(category.length);
//   for (let i = 0; i < category.length; i++) {
//     console.log(category[i].value)
//     if (category[i].value == "") {
//       $(document).ready(function () {
//         $(".category").addClass("intro");
//         $(".danger-p-item").fadeIn();
//       });
//       // alert("Xanalar boşdur!")
//       return false;
//     } else {
//       true;
//       $(document).ready(function () {
//         $(".category").addClass("introOne");
//         $(".child-send-work-pop-up").toggle();
//         $(".toggler-nav-child-mobile").fadeToggle();
//         $(".layer-create-work").fadeToggle();
//         $(".toggler-nav-child").fadeToggle();
//         setInterval(function () {
//           $(".child-send-work-pop-up").fadeOut();
//         }, 2000)
//         setInterval(function () {
//          $(".price").hide();
//          $(".fake-price").fadeIn();
//         }, 1000)
//       });
//       return;
//     }
//   }
// }