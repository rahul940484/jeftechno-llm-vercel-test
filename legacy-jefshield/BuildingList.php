  <?php include 'header.php';
    ?>
  <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"> -->
  <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script> -->

  <script type="text/javascript" src="vendor/jquery/jquery-3.2.1.min.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
  <script type="text/javascript" src="assets/scripts/main.js"></script>
  <script src="js/buildingmanagement12.js"></script>

  <script type="text/javascript">
      var LocalData;
      var ref;
      $(document).ready(function() {

          console.log("In Buildings Management page.........");
          LocalData = JSON.parse(localStorage.getItem("MobileNumber"));
          if (LocalData == null || LocalData == 'undefined') {
              window.location.href = "login.php";
          } else {

              loadbuilding();

              console.log("test");
          }

      });


      async function loadbuilding() {

          var tid = await getListBuildings(LocalData.mobileNumber);
          console.log(tid);




      }

      function load() {

          //  var ref1 = document.getElementById("ref").value;
          ref = JSON.parse(localStorage.getItem("RefCheck"));
          console.log(ref);
          //  console.log(ref1);
          // if(ref == null)
          //{
          //  setInterval('window.location.reload()', 5000);
          // clearInterval();
          // ref = {"ref": 2};
          // localStorage.setItem("RefCheck",JSON.stringify(ref));

          //}
          clearInterval();
          if (ref.ref == 0) {
              clearInterval();
              setInterval('window.location.reload()', 40000);

          }
      }


      async function timeout() {

          var ref1 = document.getElementById("ref").value;
          ref = JSON.parse(localStorage.getItem("RefCheck"));
          console.log(ref);
          console.log(ref1);
          if (ref == 0) {
              setInterval('window.location.reload()', 40000);

          }

      }

      async function RequestAPI(Info) {
          // console.log(Info);
          var resp_state = 0;
          var urlapi = Info.urlapi;
          var ResponseData;
          await fetch(urlapi, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(Info.Data)
          }).then(function(response) {
              console.log(response);
              return response.json().catch(function(error) {
                  console.log(error)
              });
          }).then(function(resp_data) {
              resp_state = 1;
              ResponseData = resp_data;
          }).catch(function(error) {
              resp_state = 0;
              errorMessage = error.message;
          });
          if (resp_state == 1) {
              return (ResponseData);
          } else {
              var Response = {
                  respCode: 4,
                  respText: errorMessage,
              }
              return (Response);
          }
      }

      async function Logout() {
          var Data = {
              mobileNumber: LocalData.mobileNumber
          }
          var Request = {
              urlapi: "https://dev.telibrahma.in/jefshield/jefShieldLogout",
              Data: Data
          }
          var Response = await RequestAPI(Request)
          console.log(Response);
          if (Response.respCode != 2) {
              alert(Response.errorMessage)
          } else {
              localStorage.removeItem("MobileNumber");
              window.location.href = "login.php";
          }
      }
  </script>


  <div class="app-main">
      <div class="app-main__outer">
          <div class="app-main__inner">
              <div class="app-page-title">
                  <div class="page-title-wrapper">
                      <div class="page-title-heading">
                          <div class="page-title-icon">
                              <i class="pe-7s-home icon-gradient bg-mean-fruit">
                              </i>
                          </div>
                          <div>Jef-Techno Dashboard
                              <div class="page-title-subheading">Buildings Dashbord with Details
                              </div>
                          </div>
                      </div>
                      <div class="page-title-actions">
                          <div class="d-inline-block dropdown">
                              <a href="jefshield.php">
                                  <button aria-haspopup="true" aria-expanded="false" class="btn-shadow  btn btn-info">
                                      <span class="btn-icon-wrapper pr-2 opacity-7">
                                          <i class="fa fa-plus fa-w-20"></i>
                                      </span>
                                      Create New
                                  </button>
                              </a>
                          </div>
                          <div class="d-inline-block dropdown">
                              <a onclick="Logout();">
                                  <button aria-haspopup="true" aria-expanded="false" class="btn-shadow  btn btn-info">
                                      <span class="btn-icon-wrapper pr-2 opacity-7">
                                          <i class="fa fa-plus fa-w-20"></i>
                                      </span>
                                      Logout
                                  </button>
                              </a>
                          </div>
                          <div class="d-inline-block dropdown">
                              <a href="profile.php">
                                  <button aria-haspopup="true" aria-expanded="false" class="btn-shadow  btn btn-info">
                                      <span class="btn-icon-wrapper pr-2 opacity-7">
                                          <i class="fa fa-plus fa-w-20"></i>
                                      </span>
                                      Profile
                                  </button>
                              </a>
                          </div>
                      </div>
                  </div>
                  <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                      <div class="modal-dialog modal-lg">
                          <div class="modal-content">
                              element may be officially deprecated, but as of Sep 2019 it's still got "green across the board" for browser support. It was literally intended for showing HTML code as text, so for temporary internal/debugging use (not customer facing), it's the perfect choice. – Daryn Sep 30 '19 at 9:17
                          </div>
                      </div>
                  </div>

              </div>

              <div class="progress">
                  <div class="progress-bar progress-bar-striped progress-bar-animated" id="FileUploadprogress" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width:0%"></div>
              </div>

              <div class="row">
                  <div class="col-md-12">
                      <div class="main-card mb-3 card">
                          <div class="table-responsive">
                              <table class="align-middle mb-0 table table-borderless table-striped table-hover" id="building_list">
                              </table>
                              <input type="hidden" id="ref" value=""></input>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <?php echo include "footer.php"; ?>