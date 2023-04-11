<template>
  <section class="vh-100">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">

          <div class="text-center">
            <img
              src="https://cdn.discordapp.com/attachments/964973959911211028/1094313261563904071/291964288_5968447443172599_510524243317264435_n.jpg"
              width="150" class="d-inline-block align-top" alt="">
            <h3 class="mb-5" style="margin-top: 3vh;">Sign in to Hong Fah</h3>
          </div>

          <div class="card shadow-2-strong" style="border-radius: 1rem; background-color: #FAFAFA;margin-top: 1vh;">
            <div class="card-body p-5 text-center">


              <div class="form-outline mb-4">
                <h5 class="d-flex justify-content-start">Email address</h5>
                <input type="email" id="typeEmailX-2" class="form-control form-control-lg"
                  placeholder="@it.kmitl.ac.th" style="background-color:#F0EEEE"/>

              </div>

              <div class="form-outline mb-4">
                <h5 class="d-flex justify-content-start">Password</h5>
                <input type="password" id="typePasswordX-2" class="form-control form-control-lg" placeholder="Password" style="background-color:#F0EEEE"/>

              </div>

              <!-- Checkbox -->
              <div class="form-check d-flex justify-content-start mb-4">
                <input class="form-check-input" type="checkbox" value="" id="form1Example3" />
                <label class="form-check-label" for="form1Example3">  Remember password </label>
              </div>

              <div >
                <button class="btn btn-primary btn-lg form-control" type="submit">Sign in</button>

              </div>
            </div>
          </div>
          <div >
                <button class="btn btn-light btn-lg btn-block mb-4 form-control" type="submit" style="margin-top: 2vh; color: #3433D1;">Create an account</button>

              </div>

          
        </div>
      </div>
    </div>
  </section>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Sarabun&display=swap');
*{
    font-family: 'Sarabun', sans-serif;


}
</style>