<?php include 'header.php';?>

<!DOCTYPE html>

<html>

<head>

	<title>User profile</title>

  <link rel="stylesheet" type="text/css" href="profile.css">

  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet">

  <script src="js/buildingmanagement.js"></script>

  <script type="text/javascript" src="vendor/jquery/jquery-3.2.1.min.js"></script>

  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>

  <script type="text/javascript" src="assets/scripts/main.js"></script>

</head>



<body>

  <div class="app-main">

    <div class="app-main__outer">

      <div class="app-main__inner">

        <div class="app-page-title">

          <div class="row">

            <div class="col-11">

              <div class="page-title-heading">

                <div class="page-title-icon">

                    <i class="pe-7s-user icon-gradient bg-mean-fruit">

                    </i>

                </div>

                <div>User Profile

                    <div class="page-title-subheading">User Profile Information</div>

                </div>

              </div>

            </div>

            <div class="col-1">

              <div class="page-title-actions">

                <div class="d-inline-block dropdown">

                  <a href="BuildingList.php">

                    <button  aria-haspopup="true" aria-expanded="false" class="btn-shadow  btn btn-primary">

                      <span class="btn-icon-wrapper pr-2 opacity-7">

                        <i class="fa fa-plus fa-w-20"></i>

                      </span>

                      Home

                    </button>

                  </a>

                </div>

              </div>

            </div>

          </div>

        </div> 

        <div class="row">

          <div class="col-md-12">

            <div class="main-card mb-3 card bg-secondary shadow">

              <div class="card-header bg-white border-0">

                <div class="row align-items-center">

                  <div class="col-12">

                    <h3 class="mb-0">My account</h3>

                  </div>

                  <!-- <div class="col-4 text-right">

                    <a href="BuildingList.php"><button type="button" class="btn btn-primary">Home</button></a>

                  </div> -->

                </div>

              </div>

              <div class="card-body">

                <form>

                  <h6 class="heading-small text-muted mb-4">User information</h6>

                  <div class="pl-lg-4">

                    <div class="row">

                      <div class="col-lg-6">

                        <div class="form-group focused">

                          <label class="form-control-label" for="input-username">Username</label>

                          <input type="text" class="form-control form-control-alternative" placeholder="Username" value="" id="user_name" disabled>

                        </div>

                      </div>

                      <div class="col-lg-6">

                        <div class="form-group">

                          <label class="form-control-label" for="input-email">mobile Number</label>

                          <input type="number" min="1" maxlength="10" class="form-control form-control-alternative" placeholder="Mobile Number" id="mobile_number" disabled>

                        </div>

                      </div>

                    </div>

                    <div class="row">

                      <div class="col-lg-6">

                        <div class="form-group focused">

                          <label class="form-control-label" for="input-first-name">Company Name</label>

                          <input type="text" class="form-control form-control-alternative" placeholder="Company Name" value="" id="company_name">

                        </div>

                      </div>

                      <div class="col-lg-6">

                        <div class="form-group focused">

                          <label class="form-control-label" for="input-last-name">Email</label>

                          <input type="email" class="form-control form-control-alternative" placeholder="Email" value="" id="email">

                        </div>

                      </div>

                    </div>

                  </div>

                  <hr class="my-4">



                  <!-- Address -->

                  <h6 class="heading-small text-muted mb-4">Contact information</h6>

                  <div class="pl-lg-4">

                    <div class="row">

                      <div class="col-md-12">

                        <div class="form-group focused">

                          <label class="form-control-label" for="input-address">Address</label>

                          <input id="address" class="form-control form-control-alternative" placeholder="Address" value="Address" type="text">

                        </div>

                      </div>

                    </div>

                    <div class="row">

                      <div class="col-lg-4">

                        <div class="form-group focused">

                          <label class="form-control-label" for="input-city">City</label>

                          <input type="text" id="city" class="form-control form-control-alternative" placeholder="City" disabled>

                        </div>

                      </div>

                      <div class="col-lg-4">

                        <div class="form-group">

                          <label class="form-control-label" for="input-country">State</label>

                          <input type="text" id="state" class="form-control form-control-alternative" placeholder="State" disabled>

                        </div>

                      </div>

                      <div class="col-lg-4">

                        <div class="form-group focused">

                          <label class="form-control-label" for="input-country">Country</label>

                          <input type="text" id="country" class="form-control form-control-alternative" placeholder="Country" disabled>

                        </div>

                      </div>

                    </div>

                  </div>

                  <hr class="my-4">



                  <!-- Description -->

                  <!-- <h6 class="heading-small text-muted mb-4">About me</h6> -->

                  <div class="pl-lg-4">

                    <div class="form-group focused">

                      <button type="button" class="btn btn-primary" style="float: right;" onclick="UpdateData();">Update</button>

                      <!-- <label>About Me</label>

                      <textarea rows="4" class="form-control form-control-alternative" placeholder="A few words about you ...">A beautiful Dashboard for Bootstrap 4. It is Free and Open Source.</textarea> -->

                    </div>

                  </div>

                </form>

              </div>

    

              <!-- <div class="table-responsive">

                <table class="align-middle mb-0 table table-borderless table-striped table-hover" id="building_list">

                </table>

              </div> -->

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

  <!-- <div class="main-content">

    <div class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center" style="min-height: 600px; background-image: url(https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/profile-cover.jpg); background-size: cover; background-position: center top;">

    <span class="mask bg-gradient-default opacity-8"></span>

    <div class="container-fluid mt--7">

      <div class="row">

        <div class="col-md-12 order-xl-1">

          <div class="card bg-secondary shadow">

            <div class="card-header bg-white border-0">

              <div class="row align-items-center">

                <div class="col-8">

                  <h3 class="mb-0">My account</h3>

                </div>

                <div class="col-4 text-right">

                  <a href="BuildingList.php"><button type="button" class="btn btn-primary">Home</button></a>

                </div>

              </div>

            </div>



            <div class="card-body">

              <form>

                <h6 class="heading-small text-muted mb-4">User information</h6>

                <div class="pl-lg-4">

                  <div class="row">

                    <div class="col-lg-6">

                      <div class="form-group focused">

                        <label class="form-control-label" for="input-username">Username</label>

                        <input type="text" class="form-control form-control-alternative" placeholder="Username" value="" id="user_name" disabled>

                      </div>

                    </div>

                    <div class="col-lg-6">

                      <div class="form-group">

                        <label class="form-control-label" for="input-email">mobile Number</label>

                        <input type="number" min="1" maxlength="10" class="form-control form-control-alternative" placeholder="Mobile Number" id="mobile_number" disabled>

                      </div>

                    </div>

                  </div>

                  <div class="row">

                    <div class="col-lg-6">

                      <div class="form-group focused">

                        <label class="form-control-label" for="input-first-name">Company Name</label>

                        <input type="text" class="form-control form-control-alternative" placeholder="Company Name" value="" id="company_name">

                      </div>

                    </div>

                    <div class="col-lg-6">

                      <div class="form-group focused">

                        <label class="form-control-label" for="input-last-name">Email</label>

                        <input type="email" class="form-control form-control-alternative" placeholder="Email" value="" id="email">

                      </div>

                    </div>

                  </div>

                </div>

                <hr class="my-4">



                <h6 class="heading-small text-muted mb-4">Contact information</h6>

                <div class="pl-lg-4">

                  <div class="row">

                    <div class="col-md-12">

                      <div class="form-group focused">

                        <label class="form-control-label" for="input-address">Address</label>

                        <input id="address" class="form-control form-control-alternative" placeholder="Address" value="Address" type="text">

                      </div>

                    </div>

                  </div>

                  <div class="row">

                    <div class="col-lg-4">

                      <div class="form-group focused">

                        <label class="form-control-label" for="input-city">City</label>

                        <input type="text" id="city" class="form-control form-control-alternative" placeholder="City" disabled>

                      </div>

                    </div>

                    <div class="col-lg-4">

                      <div class="form-group">

                        <label class="form-control-label" for="input-country">State</label>

                        <input type="text" id="state" class="form-control form-control-alternative" placeholder="State" disabled>

                      </div>

                    </div>

                    <div class="col-lg-4">

                      <div class="form-group focused">

                        <label class="form-control-label" for="input-country">Country</label>

                        <input type="text" id="country" class="form-control form-control-alternative" placeholder="Country" disabled>

                      </div>

                    </div>

                  </div>

                </div>

                <hr class="my-4">

                <div class="pl-lg-4">

                  <div class="form-group focused">

                    <button type="button" class="btn btn-primary" style="float: right;" onclick="UpdateData();">Update</button>

                  </div>

                </div>

              </form>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div> -->

  <!-- <footer class="footer">

    <div class="row align-items-center justify-content-xl-between">

      <div class="col-xl-6 m-auto text-center">

      </div>

    </div>

  </footer> -->

</body>

<script type="text/javascript">

    var LocalData;

    $(document).ready(function() {

        LocalData = JSON.parse(localStorage.getItem("MobileNumber"));

        if(LocalData == null || LocalData == undefined){

            window.location.href="login.php";

        }else{

            getProfile(LocalData.mobileNumber);

        }

    });



    function UpdateData(){

        UpdateProfile(LocalData.mobileNumber);

    }

</script>

</html>