<template>
  <div>
    <section class="pt-0 banner-6 pet-collection-banner ratio2_1 mt-5">
      <div class="container">
        <div class="title1">
          <h4>Playground tested</h4>
          <h2 class="title-inner1">kids approve</h2>
          <hr role="tournament6" />
      </div>
        <div class="row partition3">
          <div class="col-md-4" v-for="(item, index) in items" :key="index">
            <a href="">
              <div class="collection-banner" :class="item.alignclass">
                <div class="img-part">
                  <img :src="item.imagepath" class="img-fluid" alt="banner" />
                </div>
                <div class="contain-banner banner-3">
                  <div class="banner-content">
                    <h2>{{item.title}}</h2>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      items: [
        {
          imagepath: require('@/assets/images/labels/1-name.jpg'),
          title: 'Lunch Box Labels',
          alignclass: 'p-left',
        },
        {
          imagepath: require('@/assets/images/labels/1-name.jpg'),
          title: 'Vinyl Name Labels',
          alignclass: 'p-right'
        },
        {
          imagepath: require('@/assets/images/labels/1-name.jpg'),
          title: 'Value Packs',
          alignclass: 'p-left'
        }
      ]
    }
  }
}
</script>
