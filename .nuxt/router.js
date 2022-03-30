import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7da1ecba = () => interopDefault(import('../pages/blog/blog-detail.vue' /* webpackChunkName: "pages/blog/blog-detail" */))
const _5a538ada = () => interopDefault(import('../pages/blog/blog-leftsidebar.vue' /* webpackChunkName: "pages/blog/blog-leftsidebar" */))
const _eb1343ce = () => interopDefault(import('../pages/blog/blog-nosidebar.vue' /* webpackChunkName: "pages/blog/blog-nosidebar" */))
const _4973c012 = () => interopDefault(import('../pages/blog/blog-rightsidebar.vue' /* webpackChunkName: "pages/blog/blog-rightsidebar" */))
const _45bb8c15 = () => interopDefault(import('../pages/collection/full-width.vue' /* webpackChunkName: "pages/collection/full-width" */))
const _86089812 = () => interopDefault(import('../pages/collection/list-view.vue' /* webpackChunkName: "pages/collection/list-view" */))
const _823f54c8 = () => interopDefault(import('../pages/collection/metro.vue' /* webpackChunkName: "pages/collection/metro" */))
const _0212d65d = () => interopDefault(import('../pages/collection/no-sidebar.vue' /* webpackChunkName: "pages/collection/no-sidebar" */))
const _6a8fc92e = () => interopDefault(import('../pages/collection/right-sidebar.vue' /* webpackChunkName: "pages/collection/right-sidebar" */))
const _056ee77e = () => interopDefault(import('../pages/collection/sidebar-popup.vue' /* webpackChunkName: "pages/collection/sidebar-popup" */))
const _e138edc4 = () => interopDefault(import('../pages/collection/six-grid.vue' /* webpackChunkName: "pages/collection/six-grid" */))
const _353e1aa2 = () => interopDefault(import('../pages/collection/three-grid.vue' /* webpackChunkName: "pages/collection/three-grid" */))
const _f39bfe28 = () => interopDefault(import('../pages/page/404.vue' /* webpackChunkName: "pages/page/404" */))
const _74995c7e = () => interopDefault(import('../pages/page/about.vue' /* webpackChunkName: "pages/page/about" */))
const _0fd7c99a = () => interopDefault(import('../pages/page/collection.vue' /* webpackChunkName: "pages/page/collection" */))
const _76aaee0a = () => interopDefault(import('../pages/page/coming-soon.vue' /* webpackChunkName: "pages/page/coming-soon" */))
const _3222a3ca = () => interopDefault(import('../pages/page/faq.vue' /* webpackChunkName: "pages/page/faq" */))
const _67990df8 = () => interopDefault(import('../pages/page/lookbook.vue' /* webpackChunkName: "pages/page/lookbook" */))
const _632b7b38 = () => interopDefault(import('../pages/page/order-success.vue' /* webpackChunkName: "pages/page/order-success" */))
const _2d0d7754 = () => interopDefault(import('../pages/page/review.vue' /* webpackChunkName: "pages/page/review" */))
const _73b93da4 = () => interopDefault(import('../pages/page/search.vue' /* webpackChunkName: "pages/page/search" */))
const _f00e40aa = () => interopDefault(import('../pages/page/typography.vue' /* webpackChunkName: "pages/page/typography" */))
const _11f9c7f8 = () => interopDefault(import('../pages/product/bundle-product.vue' /* webpackChunkName: "pages/product/bundle-product" */))
const _5fa8f548 = () => interopDefault(import('../pages/product/four-image.vue' /* webpackChunkName: "pages/product/four-image" */))
const _03813996 = () => interopDefault(import('../pages/shop/fashion/index.vue' /* webpackChunkName: "pages/shop/fashion/index" */))
const _4fff7552 = () => interopDefault(import('../pages/shop/home/index.vue' /* webpackChunkName: "pages/shop/home/index" */))
const _781e20e0 = () => interopDefault(import('../pages/blog/widgets/blog-list.vue' /* webpackChunkName: "pages/blog/widgets/blog-list" */))
const _6ca0a34c = () => interopDefault(import('../pages/blog/widgets/blog-sidebar.vue' /* webpackChunkName: "pages/blog/widgets/blog-sidebar" */))
const _ed519484 = () => interopDefault(import('../pages/page/account/cart.vue' /* webpackChunkName: "pages/page/account/cart" */))
const _1c6b11e4 = () => interopDefault(import('../pages/page/account/checkout.vue' /* webpackChunkName: "pages/page/account/checkout" */))
const _20142e1c = () => interopDefault(import('../pages/page/account/contact.vue' /* webpackChunkName: "pages/page/account/contact" */))
const _8acca234 = () => interopDefault(import('../pages/page/account/dashboard.vue' /* webpackChunkName: "pages/page/account/dashboard" */))
const _6bb90866 = () => interopDefault(import('../pages/page/account/forget-password.vue' /* webpackChunkName: "pages/page/account/forget-password" */))
const _31032e3b = () => interopDefault(import('../pages/page/account/login.vue' /* webpackChunkName: "pages/page/account/login" */))
const _45554cee = () => interopDefault(import('../pages/page/account/login-firebase.vue' /* webpackChunkName: "pages/page/account/login-firebase" */))
const _0fc53c0a = () => interopDefault(import('../pages/page/account/profile.vue' /* webpackChunkName: "pages/page/account/profile" */))
const _5f71fcc1 = () => interopDefault(import('../pages/page/account/register.vue' /* webpackChunkName: "pages/page/account/register" */))
const _98c5ba3a = () => interopDefault(import('../pages/page/account/wishlist.vue' /* webpackChunkName: "pages/page/account/wishlist" */))
const _12508fd3 = () => interopDefault(import('../pages/page/compare/compare-1.vue' /* webpackChunkName: "pages/page/compare/compare-1" */))
const _125ea754 = () => interopDefault(import('../pages/page/compare/compare-2.vue' /* webpackChunkName: "pages/page/compare/compare-2" */))
const _12ffe3ca = () => interopDefault(import('../pages/page/element/banner.vue' /* webpackChunkName: "pages/page/element/banner" */))
const _f24a4da6 = () => interopDefault(import('../pages/page/element/category.vue' /* webpackChunkName: "pages/page/element/category" */))
const _db7b28c8 = () => interopDefault(import('../pages/page/element/collection-banner.vue' /* webpackChunkName: "pages/page/element/collection-banner" */))
const _172f36a0 = () => interopDefault(import('../pages/page/element/home-slider.vue' /* webpackChunkName: "pages/page/element/home-slider" */))
const _11b45c64 = () => interopDefault(import('../pages/page/element/logo-slider.vue' /* webpackChunkName: "pages/page/element/logo-slider" */))
const _75491124 = () => interopDefault(import('../pages/page/element/multi-slider.vue' /* webpackChunkName: "pages/page/element/multi-slider" */))
const _38e461ee = () => interopDefault(import('../pages/page/element/product-slider.vue' /* webpackChunkName: "pages/page/element/product-slider" */))
const _4e7a816a = () => interopDefault(import('../pages/page/element/product-tabs.vue' /* webpackChunkName: "pages/page/element/product-tabs" */))
const _4a4de154 = () => interopDefault(import('../pages/page/element/service.vue' /* webpackChunkName: "pages/page/element/service" */))
const _69c06f52 = () => interopDefault(import('../pages/page/portfolio/masonary-fullwidth.vue' /* webpackChunkName: "pages/page/portfolio/masonary-fullwidth" */))
const _097c0d52 = () => interopDefault(import('../pages/page/portfolio/mesonary-grid-2.vue' /* webpackChunkName: "pages/page/portfolio/mesonary-grid-2" */))
const _095fde50 = () => interopDefault(import('../pages/page/portfolio/mesonary-grid-3.vue' /* webpackChunkName: "pages/page/portfolio/mesonary-grid-3" */))
const _0943af4e = () => interopDefault(import('../pages/page/portfolio/mesonary-grid-4.vue' /* webpackChunkName: "pages/page/portfolio/mesonary-grid-4" */))
const _fcd077e6 = () => interopDefault(import('../pages/page/portfolio/portfolio-2-col.vue' /* webpackChunkName: "pages/page/portfolio/portfolio-2-col" */))
const _15dc330e = () => interopDefault(import('../pages/page/portfolio/portfolio-3-col.vue' /* webpackChunkName: "pages/page/portfolio/portfolio-3-col" */))
const _abbebbe2 = () => interopDefault(import('../pages/page/portfolio/portfolio-4-col.vue' /* webpackChunkName: "pages/page/portfolio/portfolio-4-col" */))
const _8269d892 = () => interopDefault(import('../pages/product/sidebar/no-sidebar.vue' /* webpackChunkName: "pages/product/sidebar/no-sidebar" */))
const _a901d4d8 = () => interopDefault(import('../pages/product/sidebar/right-sidebarxx.vue' /* webpackChunkName: "pages/product/sidebar/right-sidebarxx" */))
const _1a53801c = () => interopDefault(import('../pages/product/three-column/thumbnail-bottom.vue' /* webpackChunkName: "pages/product/three-column/thumbnail-bottom" */))
const _fc3950e4 = () => interopDefault(import('../pages/product/three-column/thumbnail-left.vue' /* webpackChunkName: "pages/product/three-column/thumbnail-left" */))
const _106697b6 = () => interopDefault(import('../pages/product/three-column/thumbnail-right.vue' /* webpackChunkName: "pages/product/three-column/thumbnail-right" */))
const _dfd9530c = () => interopDefault(import('../pages/product/thumbnail-image/image-outside.vue' /* webpackChunkName: "pages/product/thumbnail-image/image-outside" */))
const _0560a45e = () => interopDefault(import('../pages/product/thumbnail-image/left-image.vue' /* webpackChunkName: "pages/product/thumbnail-image/left-image" */))
const _3c1ce5f1 = () => interopDefault(import('../pages/product/thumbnail-image/right-image.vue' /* webpackChunkName: "pages/product/thumbnail-image/right-image" */))
const _d5f79a24 = () => interopDefault(import('../pages/page/account/auth/auth.js' /* webpackChunkName: "pages/page/account/auth/auth" */))
const _1d67d4ee = () => interopDefault(import('../pages/shop/fashion/components/banner.vue' /* webpackChunkName: "pages/shop/fashion/components/banner" */))
const _78fd6f82 = () => interopDefault(import('../pages/shop/fashion/components/blog.vue' /* webpackChunkName: "pages/shop/fashion/components/blog" */))
const _5e7bfd20 = () => interopDefault(import('../pages/shop/fashion/components/collection_banner.vue' /* webpackChunkName: "pages/shop/fashion/components/collection_banner" */))
const _9c57b536 = () => interopDefault(import('../pages/shop/fashion/components/instagram.vue' /* webpackChunkName: "pages/shop/fashion/components/instagram" */))
const _8e969930 = () => interopDefault(import('../pages/shop/fashion/components/logo_slider.vue' /* webpackChunkName: "pages/shop/fashion/components/logo_slider" */))
const _50cc050e = () => interopDefault(import('../pages/shop/fashion/components/product_slider.vue' /* webpackChunkName: "pages/shop/fashion/components/product_slider" */))
const _4648adb8 = () => interopDefault(import('../pages/shop/fashion/components/product_tab.vue' /* webpackChunkName: "pages/shop/fashion/components/product_tab" */))
const _08473f0a = () => interopDefault(import('../pages/shop/fashion/components/services.vue' /* webpackChunkName: "pages/shop/fashion/components/services" */))
const _70b92cbe = () => interopDefault(import('../pages/shop/fashion/components/slider.vue' /* webpackChunkName: "pages/shop/fashion/components/slider" */))
const _367b42e6 = () => interopDefault(import('../pages/shop/home/components/collection-banner.vue' /* webpackChunkName: "pages/shop/home/components/collection-banner" */))
const _260486c6 = () => interopDefault(import('../pages/shop/home/components/product-slider.vue' /* webpackChunkName: "pages/shop/home/components/product-slider" */))
const _1e70c202 = () => interopDefault(import('../pages/shop/home/components/slider.vue' /* webpackChunkName: "pages/shop/home/components/slider" */))
const _572bb563 = () => interopDefault(import('../pages/collection/leftsidebar/_id.vue' /* webpackChunkName: "pages/collection/leftsidebar/_id" */))
const _62dd973a = () => interopDefault(import('../pages/product/sidebar/_id.vue' /* webpackChunkName: "pages/product/sidebar/_id" */))
const _7fcc074e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/mykids/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blog/blog-detail",
    component: _7da1ecba,
    name: "blog-blog-detail"
  }, {
    path: "/blog/blog-leftsidebar",
    component: _5a538ada,
    name: "blog-blog-leftsidebar"
  }, {
    path: "/blog/blog-nosidebar",
    component: _eb1343ce,
    name: "blog-blog-nosidebar"
  }, {
    path: "/blog/blog-rightsidebar",
    component: _4973c012,
    name: "blog-blog-rightsidebar"
  }, {
    path: "/collection/full-width",
    component: _45bb8c15,
    name: "collection-full-width"
  }, {
    path: "/collection/list-view",
    component: _86089812,
    name: "collection-list-view"
  }, {
    path: "/collection/metro",
    component: _823f54c8,
    name: "collection-metro"
  }, {
    path: "/collection/no-sidebar",
    component: _0212d65d,
    name: "collection-no-sidebar"
  }, {
    path: "/collection/right-sidebar",
    component: _6a8fc92e,
    name: "collection-right-sidebar"
  }, {
    path: "/collection/sidebar-popup",
    component: _056ee77e,
    name: "collection-sidebar-popup"
  }, {
    path: "/collection/six-grid",
    component: _e138edc4,
    name: "collection-six-grid"
  }, {
    path: "/collection/three-grid",
    component: _353e1aa2,
    name: "collection-three-grid"
  }, {
    path: "/page/404",
    component: _f39bfe28,
    name: "page-404"
  }, {
    path: "/page/about",
    component: _74995c7e,
    name: "page-about"
  }, {
    path: "/page/collection",
    component: _0fd7c99a,
    name: "page-collection"
  }, {
    path: "/page/coming-soon",
    component: _76aaee0a,
    name: "page-coming-soon"
  }, {
    path: "/page/faq",
    component: _3222a3ca,
    name: "page-faq"
  }, {
    path: "/page/lookbook",
    component: _67990df8,
    name: "page-lookbook"
  }, {
    path: "/page/order-success",
    component: _632b7b38,
    name: "page-order-success"
  }, {
    path: "/page/review",
    component: _2d0d7754,
    name: "page-review"
  }, {
    path: "/page/search",
    component: _73b93da4,
    name: "page-search"
  }, {
    path: "/page/typography",
    component: _f00e40aa,
    name: "page-typography"
  }, {
    path: "/product/bundle-product",
    component: _11f9c7f8,
    name: "product-bundle-product"
  }, {
    path: "/product/four-image",
    component: _5fa8f548,
    name: "product-four-image"
  }, {
    path: "/shop/fashion",
    component: _03813996,
    name: "shop-fashion"
  }, {
    path: "/shop/home",
    component: _4fff7552,
    name: "shop-home"
  }, {
    path: "/blog/widgets/blog-list",
    component: _781e20e0,
    name: "blog-widgets-blog-list"
  }, {
    path: "/blog/widgets/blog-sidebar",
    component: _6ca0a34c,
    name: "blog-widgets-blog-sidebar"
  }, {
    path: "/page/account/cart",
    component: _ed519484,
    name: "page-account-cart"
  }, {
    path: "/page/account/checkout",
    component: _1c6b11e4,
    name: "page-account-checkout"
  }, {
    path: "/page/account/contact",
    component: _20142e1c,
    name: "page-account-contact"
  }, {
    path: "/page/account/dashboard",
    component: _8acca234,
    name: "page-account-dashboard"
  }, {
    path: "/page/account/forget-password",
    component: _6bb90866,
    name: "page-account-forget-password"
  }, {
    path: "/page/account/login",
    component: _31032e3b,
    name: "page-account-login"
  }, {
    path: "/page/account/login-firebase",
    component: _45554cee,
    name: "page-account-login-firebase"
  }, {
    path: "/page/account/profile",
    component: _0fc53c0a,
    name: "page-account-profile"
  }, {
    path: "/page/account/register",
    component: _5f71fcc1,
    name: "page-account-register"
  }, {
    path: "/page/account/wishlist",
    component: _98c5ba3a,
    name: "page-account-wishlist"
  }, {
    path: "/page/compare/compare-1",
    component: _12508fd3,
    name: "page-compare-compare-1"
  }, {
    path: "/page/compare/compare-2",
    component: _125ea754,
    name: "page-compare-compare-2"
  }, {
    path: "/page/element/banner",
    component: _12ffe3ca,
    name: "page-element-banner"
  }, {
    path: "/page/element/category",
    component: _f24a4da6,
    name: "page-element-category"
  }, {
    path: "/page/element/collection-banner",
    component: _db7b28c8,
    name: "page-element-collection-banner"
  }, {
    path: "/page/element/home-slider",
    component: _172f36a0,
    name: "page-element-home-slider"
  }, {
    path: "/page/element/logo-slider",
    component: _11b45c64,
    name: "page-element-logo-slider"
  }, {
    path: "/page/element/multi-slider",
    component: _75491124,
    name: "page-element-multi-slider"
  }, {
    path: "/page/element/product-slider",
    component: _38e461ee,
    name: "page-element-product-slider"
  }, {
    path: "/page/element/product-tabs",
    component: _4e7a816a,
    name: "page-element-product-tabs"
  }, {
    path: "/page/element/service",
    component: _4a4de154,
    name: "page-element-service"
  }, {
    path: "/page/portfolio/masonary-fullwidth",
    component: _69c06f52,
    name: "page-portfolio-masonary-fullwidth"
  }, {
    path: "/page/portfolio/mesonary-grid-2",
    component: _097c0d52,
    name: "page-portfolio-mesonary-grid-2"
  }, {
    path: "/page/portfolio/mesonary-grid-3",
    component: _095fde50,
    name: "page-portfolio-mesonary-grid-3"
  }, {
    path: "/page/portfolio/mesonary-grid-4",
    component: _0943af4e,
    name: "page-portfolio-mesonary-grid-4"
  }, {
    path: "/page/portfolio/portfolio-2-col",
    component: _fcd077e6,
    name: "page-portfolio-portfolio-2-col"
  }, {
    path: "/page/portfolio/portfolio-3-col",
    component: _15dc330e,
    name: "page-portfolio-portfolio-3-col"
  }, {
    path: "/page/portfolio/portfolio-4-col",
    component: _abbebbe2,
    name: "page-portfolio-portfolio-4-col"
  }, {
    path: "/product/sidebar/no-sidebar",
    component: _8269d892,
    name: "product-sidebar-no-sidebar"
  }, {
    path: "/product/sidebar/right-sidebarxx",
    component: _a901d4d8,
    name: "product-sidebar-right-sidebarxx"
  }, {
    path: "/product/three-column/thumbnail-bottom",
    component: _1a53801c,
    name: "product-three-column-thumbnail-bottom"
  }, {
    path: "/product/three-column/thumbnail-left",
    component: _fc3950e4,
    name: "product-three-column-thumbnail-left"
  }, {
    path: "/product/three-column/thumbnail-right",
    component: _106697b6,
    name: "product-three-column-thumbnail-right"
  }, {
    path: "/product/thumbnail-image/image-outside",
    component: _dfd9530c,
    name: "product-thumbnail-image-image-outside"
  }, {
    path: "/product/thumbnail-image/left-image",
    component: _0560a45e,
    name: "product-thumbnail-image-left-image"
  }, {
    path: "/product/thumbnail-image/right-image",
    component: _3c1ce5f1,
    name: "product-thumbnail-image-right-image"
  }, {
    path: "/page/account/auth/auth",
    component: _d5f79a24,
    name: "page-account-auth-auth"
  }, {
    path: "/shop/fashion/components/banner",
    component: _1d67d4ee,
    name: "shop-fashion-components-banner"
  }, {
    path: "/shop/fashion/components/blog",
    component: _78fd6f82,
    name: "shop-fashion-components-blog"
  }, {
    path: "/shop/fashion/components/collection_banner",
    component: _5e7bfd20,
    name: "shop-fashion-components-collection_banner"
  }, {
    path: "/shop/fashion/components/instagram",
    component: _9c57b536,
    name: "shop-fashion-components-instagram"
  }, {
    path: "/shop/fashion/components/logo_slider",
    component: _8e969930,
    name: "shop-fashion-components-logo_slider"
  }, {
    path: "/shop/fashion/components/product_slider",
    component: _50cc050e,
    name: "shop-fashion-components-product_slider"
  }, {
    path: "/shop/fashion/components/product_tab",
    component: _4648adb8,
    name: "shop-fashion-components-product_tab"
  }, {
    path: "/shop/fashion/components/services",
    component: _08473f0a,
    name: "shop-fashion-components-services"
  }, {
    path: "/shop/fashion/components/slider",
    component: _70b92cbe,
    name: "shop-fashion-components-slider"
  }, {
    path: "/shop/home/components/collection-banner",
    component: _367b42e6,
    name: "shop-home-components-collection-banner"
  }, {
    path: "/shop/home/components/product-slider",
    component: _260486c6,
    name: "shop-home-components-product-slider"
  }, {
    path: "/shop/home/components/slider",
    component: _1e70c202,
    name: "shop-home-components-slider"
  }, {
    path: "/collection/leftsidebar/:id?",
    component: _572bb563,
    name: "collection-leftsidebar-id"
  }, {
    path: "/product/sidebar/:id?",
    component: _62dd973a,
    name: "product-sidebar-id"
  }, {
    path: "/",
    component: _7fcc074e,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
