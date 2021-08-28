setTimeout(function () {
    document.getElementById("demo").innerHTML = "10";
    setTimeout(function () {
      document.getElementById("demo").innerHTML = "9";
      setTimeout(function () {
        document.getElementById("demo").innerHTML = "8";
        setTimeout(function () {
          document.getElementById("demo").innerHTML = "7";
          setTimeout(function () {
            document.getElementById("demo").innerHTML = "6";
            setTimeout(function () {
              document.getElementById("demo").innerHTML = "5";
              setTimeout(function () {
                document.getElementById("demo").innerHTML = "4";
                setTimeout(function () {
                  document.getElementById("demo").innerHTML = "3";
                  setTimeout(function () {
                    document.getElementById("demo").innerHTML = "2";
                    setTimeout(function () {
                      document.getElementById("demo").innerHTML = "1";
                      setTimeout(function () {
                        document.getElementById("demo").innerHTML = "";
                        setInterval(function () {
                          document.getElementById("demo").innerHTML = "Happy Independence Day";   
                        }, 1000);    
                      }, 2000);
                    }, 1000);  
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);