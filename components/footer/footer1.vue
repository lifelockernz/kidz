<template>
  <div>
    <footer class="footer-light">
      <div class="light-layout">
        <div class="container">
          <section class="small-section border-section border-top-0">
            <div class="row">
              <div class="col-lg-6">
                <div class="subscribe">
                  <div>
                    <h4>Get all the details</h4>
                    <p>Get all our latest specials and freebees when you sign up to our newsletter.</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <form
                  class="form-inline subscribe-form auth-form needs-validation"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  target="_blank"
                >
                  <div class="form-group mx-sm-3">
                    <input
                      type="text"
                      class="form-control"
                      name="EMAIL"
                      id="mce-EMAIL"
                      placeholder="Enter your email"
                      required="required"
                    />
                  </div>
                  <button type="submit" class="btn btn-solid" id="mc-submit">subscribe</button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
      <section class="section-b-space light-layout">
        <div class="container">
          <div class="row footer-theme partition-f">
            <div class="col-lg-4 col-md-6">
              <div class="footer-title footer-mobile-title">
                <h4>about</h4>
              </div>
              <div class="footer-contant">
                <div class="footer-logo">
                  <img :src='"@/assets/images/icon/logo.png"' alt="logo" />
                </div>
                <p>Above all, Stuck On You is a business run by parents for parents. Like you, we are in the thick of the joyful chaos that is raising children. </p>
                <div class="footer-social">
                  <ul>
                    <li>
                      <a href="#">
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col offset-xl-1">
              <div class="sub-title">
                <div class="footer-title">
                  <h4>Help & general info</h4>
                </div>
                <div class="footer-contant">
                  <ul>
                    <li>
                      <a href="#">Delivery Information</a>
                    </li>
                    <li>
                      <a href="#">Returns</a>
                    </li>
                    <li>
                      <a href="#">Help & FAQ</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="sub-title">
                <div class="footer-title">
                  <h4>About Us</h4>
                </div>
                <div class="footer-contant">
                  <ul>
                    <li>
                      <a href="#">Our Story</a>
                    </li>
                    <li>
                      <a href="#">Terms & Conditions</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="sub-title">
                <div class="footer-title">
                  <h4>store information</h4>
                </div>
                <div class="footer-contant">
                  <ul class="contact-list">
                    <li>
                      <i class="fa fa-map-marker"></i>New Zealand
                    </li>
                    <li>
                      <i class="fa fa-phone"></i>Call Us: 021 925 682
                    </li>
                    <li>
                      <i class="fa fa-envelope-o"></i>Email Us:
                      <a href="#">info@storename.com</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="sub-footer">
        <div class="container">
          <div class="row">
            <div class="col-xl-6 col-md-6 col-sm-12">
              <div class="footer-end">
                <p>
                  <i class="fa fa-copyright" aria-hidden="true"></i> 2022 Mykids powered by nelsonite
                </p>
              </div>
            </div>
            <div class="col-xl-6 col-md-6 col-sm-12">
              <div class="payment-card-bottom">
                <ul>
                  <li>
                    <a href="#">
                      <img :src='"@/assets/images/icon/visa.png"' alt />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img :src='"@/assets/images/icon/mastercard.png"' alt />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img :src='"@/assets/images/icon/paypal.png"' alt />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img :src='"@/assets/images/icon/american-express.png"' alt />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img :src='"@/assets/images/icon/discover.png"' alt />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
}
</script>
