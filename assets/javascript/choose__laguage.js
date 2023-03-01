$(document).ready(function() {
    $('#choose-enlish').click(function() {
        $(this).toggleClass('chose');
        if ($(this).hasClass('chose')) {
            $('#continue-step1').removeClass('no-active');
            $('#continue-step1').addClass('btn-continue');
        } else {
            $('#continue-step1').addClass('no-active');
            $('#continue-step1').removeClass('btn-continue');
        }
        if ($(this).hasClass('chose')) {
            $('#choose-japan').removeClass('chose');
        }
        $('#continue-step1').click(function() {
            $('#selection').css("display", "none");
            $('#step-1').addClass('no-active');
            $('#step-2').removeClass('no-active');
            $('#targer').css("display", "flex");
        })
        $('#targer__choose-1').click(function() {
            $(this).toggleClass('targer-chose');
            $('#targer__choose-2').removeClass('targer-chose');
            $('#targer__choose-3').removeClass('targer-chose');
            $('#targer__choose-4').removeClass('targer-chose');
            if ($(this).hasClass('targer-chose')) {
                $('#continue-step2').removeClass('no-active');
                $('#continue-step2').addClass('btn-continue');
            } else {
                $('#continue-step2').addClass('no-active');
                $('#continue-step2').removeClass('btn-continue');
            }
            $('#continue-step2').click(function() {
                $('#targer').css("display", "none");
                $('#step-2').addClass('no-active');
                $('#step-3').removeClass('no-active');
                $('#loading').css("display", "flex");
                setTimeout(function() {
                    window.location.href = "home_page.html";
                }, 2000)
            })
        })
        $('#targer__choose-2').click(function() {
            $(this).toggleClass('targer-chose');
            $('#targer__choose-1').removeClass('targer-chose');
            $('#targer__choose-3').removeClass('targer-chose');
            $('#targer__choose-4').removeClass('targer-chose');
            if ($(this).hasClass('targer-chose')) {
                $('#continue-step2').removeClass('no-active');
                $('#continue-step2').addClass('btn-continue');
            } else {
                $('#continue-step2').addClass('no-active');
                $('#continue-step2').removeClass('btn-continue');
            }
            $('#continue-step2').click(function() {
                $('#targer').css("display", "none");
                $('#step-2').addClass('no-active');
                $('#step-3').removeClass('no-active');
                $('#loading').css("display", "flex");
                setTimeout(function() {
                    window.location.href = "home_page.html";
                }, 2000)
            })
        })
        $('#targer__choose-3').click(function() {
            $(this).toggleClass('targer-chose');
            $('#targer__choose-2').removeClass('targer-chose');
            $('#targer__choose-1').removeClass('targer-chose');
            $('#targer__choose-4').removeClass('targer-chose');
            if ($(this).hasClass('targer-chose')) {
                $('#continue-step2').removeClass('no-active');
                $('#continue-step2').addClass('btn-continue');
            } else {
                $('#continue-step2').addClass('no-active');
                $('#continue-step2').removeClass('btn-continue');
            }
            $('#continue-step2').click(function() {
                $('#targer').css("display", "none");
                $('#step-2').addClass('no-active');
                $('#step-3').removeClass('no-active');
                $('#loading').css("display", "flex");
                setTimeout(function() {
                    window.location.href = "home_page.html";
                }, 2000)
            })
        })
        $('#targer__choose-4').click(function() {
            $(this).toggleClass('targer-chose');
            $('#targer__choose-2').removeClass('targer-chose');
            $('#targer__choose-3').removeClass('targer-chose');
            $('#targer__choose-1').removeClass('targer-chose');
            if ($(this).hasClass('targer-chose')) {
                $('#continue-step2').removeClass('no-active');
                $('#continue-step2').addClass('btn-continue');
            } else {
                $('#continue-step2').addClass('no-active');
                $('#continue-step2').removeClass('btn-continue');
            }
            $('#continue-step2').click(function() {
                $('#targer').css("display", "none");
                $('#step-2').addClass('no-active');
                $('#step-3').removeClass('no-active');
                $('#loading').css("display", "flex");
                setTimeout(function() {
                    window.location.href = "home_page.html";
                }, 2000)
            })
        })
    })
    $('#choose-japan').click(function() {
        $(this).toggleClass('chose');
        if ($(this).hasClass('chose')) {
            $('#continue-step1').removeClass('no-active');
            $('#continue-step1').addClass('btn-continue');
        } else {
            $('#continue-step1').addClass('no-active');
            $('#continue-step1').removeClass('btn-continue');
        }
        if ($(this).hasClass('chose')) {
            $('#choose-enlish').removeClass('chose');
        }
        $('#continue-step1').click(function() {
            $('#selection').css("display", "none");
            $('#step-1').addClass('no-active');
            $('#step-2').removeClass('no-active');
            $('#targer').css("display", "flex");
        })
        $('#targer__choose-1').click(function() {
            $(this).toggleClass('targer-chose');
            $('#targer__choose-2').removeClass('targer-chose');
            $('#targer__choose-3').removeClass('targer-chose');
            $('#targer__choose-4').removeClass('targer-chose');
            if ($(this).hasClass('targer-chose')) {
                $('#continue-step2').removeClass('no-active');
                $('#continue-step2').addClass('btn-continue');
            } else {
                $('#continue-step2').addClass('no-active');
                $('#continue-step2').removeClass('btn-continue');
            }
            $('#continue-step2').click(function() {
                $('#targer').css("display", "none");
                $('#step-2').addClass('no-active');
                $('#step-3').removeClass('no-active');
                $('#loading').css("display", "flex");
                setTimeout(function() {
                    window.location.href = "home_page.html";
                }, 2000)
            })
        })
        $('#targer__choose-2').click(function() {
            $(this).toggleClass('targer-chose');
            $('#targer__choose-1').removeClass('targer-chose');
            $('#targer__choose-3').removeClass('targer-chose');
            $('#targer__choose-4').removeClass('targer-chose');
            if ($(this).hasClass('targer-chose')) {
                $('#continue-step2').removeClass('no-active');
                $('#continue-step2').addClass('btn-continue');
            } else {
                $('#continue-step2').addClass('no-active');
                $('#continue-step2').removeClass('btn-continue');
            }
            $('#continue-step2').click(function() {
                $('#targer').css("display", "none");
                $('#step-2').addClass('no-active');
                $('#step-3').removeClass('no-active');
                $('#loading').css("display", "flex");
                setTimeout(function() {
                    window.location.href = "home_page.html";
                }, 2000)
            })
        })
        $('#targer__choose-3').click(function() {
            $(this).toggleClass('targer-chose');
            $('#targer__choose-2').removeClass('targer-chose');
            $('#targer__choose-1').removeClass('targer-chose');
            $('#targer__choose-4').removeClass('targer-chose');
            if ($(this).hasClass('targer-chose')) {
                $('#continue-step2').removeClass('no-active');
                $('#continue-step2').addClass('btn-continue');
            } else {
                $('#continue-step2').addClass('no-active');
                $('#continue-step2').removeClass('btn-continue');
            }
            $('#continue-step2').click(function() {
                $('#targer').css("display", "none");
                $('#step-2').addClass('no-active');
                $('#step-3').removeClass('no-active');
                $('#loading').css("display", "flex");
                setTimeout(function() {
                    window.location.href = "home_page.html";
                }, 2000)
            })
        })
        $('#targer__choose-4').click(function() {
            $(this).toggleClass('targer-chose');
            $('#targer__choose-2').removeClass('targer-chose');
            $('#targer__choose-3').removeClass('targer-chose');
            $('#targer__choose-1').removeClass('targer-chose');
            if ($(this).hasClass('targer-chose')) {
                $('#continue-step2').removeClass('no-active');
                $('#continue-step2').addClass('btn-continue');
            } else {
                $('#continue-step2').addClass('no-active');
                $('#continue-step2').removeClass('btn-continue');
            }
            $('#continue-step2').click(function() {
                $('#targer').css("display", "none");
                $('#step-2').addClass('no-active');
                $('#step-3').removeClass('no-active');
                $('#loading').css("display", "flex");
                setTimeout(function() {
                    window.location.href = "home_page.html";
                }, 2000)
            })
        })

    })
})