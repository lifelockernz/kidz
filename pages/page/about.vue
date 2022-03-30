<template>
  <div>
    <Header />
    <Breadcrumbs title="About" />
    <!-- about section start -->
    <section class="about-page section-b-space text-center">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="banner-section">
              <img :src="aboutbanner" class="img-fluid" alt />
            </div>
          </div>
          <div class="col-sm-12">
            <h4>{{aboutTitle}}</h4>
            <p>{{aboutText}}</p>
          </div>
        </div>
      </div>
    </section>
    <!-- about section end -->

    <Footer />
  </div>
</template>
<script>
import Header from '../../components/header/header2'
import Footer from '../../components/footer/footer1'
import Breadcrumbs from '../../components/widgets/breadcrumbs'
export default {
  components: {
    Header,
    Footer,
    Breadcrumbs
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 20,
        breakpoints: {
          991: {
            slidesPerView: 1,
            spaceBetween: 20
          }
        }
      },
      swiperOption2: {
        slidesPerView: 4,
        spaceBetween: 20,
        breakpoints: {
          1199: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          991: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          420: {
            slidesPerView: 1,
            spaceBetween: 20
          }
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      aboutbanner: require('@/assets/images/about/about.gif'),
      aboutTitle:
        'About Us',
      aboutText:
        'Above all, Stuck On You is a business run by parents for parents. Like you, we are in the thick of the joyful chaos that is raising children. We are also hiding vegetables in ‘special juice’, single-handedly attacking laundry piles the size of Mount Kosciuszko and scrambling to find just one pair of matching socks. We get it. In this way, not much has changed from 1995 when a young Mum, Carrie Felton, went to a local printer and requested a set of name labels for her son. To organise his belongings and save her future sanity. Her son was too young to read his name, so Carrie had the idea of including an aeroplane like his Dad flew — a familiar and loved icon. It was the moment that gave birth to Stuck On You. We’ve heard the stories of Bentos passed from generation to generation. Tales of labels going through 450 washes with football boots and remaining — reminding us of moments in time. We create our products because we also live these products. This understanding guides us to create solutions that make modern-day parenting a little bit easier and a tad more organised (lol) So join our Stuck On You family as we continue to strive to positively impact your life, the life of your littles.'
    }
  }
}
</script>
