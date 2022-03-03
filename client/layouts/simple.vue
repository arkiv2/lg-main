<template>
    <div class="main">
        <div class="social-nav mb-0 pt-5">
            <div class="container">
                <ul class="nav justify-content-end">

                    <li class="nav-item">
                        <a class="nav-link" href="https://www.facebook.com/lazygoatofc" target="_blank"><i
                                class="fa fa-facebook-square" aria-hidden="true"></i></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://twitter.com/lazygoatofc" target="_blank"><i
                                class="fa fa-twitter" aria-hidden="true"></i></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://instagram.com/lazygoatofficial" target="_blank"><i
                                class="fa fa-instagram" aria-hidden="true"></i></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://discord.gg/lazygoat" target="_blank"><i class="fa fa-discord"
                                aria-hidden="true"></i></a>
                    </li>
                </ul>
            </div>
        </div>
        <!-- <nav class="navbar navbar-expand-lg navbar-dark mb-2 py-0"> -->
        <b-navbar toggleable="lg" type="dark" class=" mb-2 py-0">
          <div class="container">
            <b-navbar-brand :to="{ name : 'welcome' }">LAZYGOAT</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav class="ml-auto ms-auto">
                <b-nav-item :to="{ name : 'welcome' }">
                    HOME
                </b-nav-item>
                <b-nav-item :to="this.$route.name != 'welcome' ? { path : '/', hash : '#about' } : { hash : '#about' }" >
                    ABOUT
                </b-nav-item>
                <b-nav-item :to="this.$route.name != 'welcome' ? { path : '/', hash : '#partners' } : { hash : '#partners' }">
                    PARTNERS
                </b-nav-item>
                <b-nav-item :to="this.$route.name != 'welcome' ? { path : '/', hash : '#outNFT' } : { hash : '#outNFT' }">
                    NFT
                </b-nav-item>
                <b-nav-item :to="this.$route.name != 'welcome' ? { path : '/', hash : '#roadmap' } : { hash : '#roadmap' }">
                    ROADMAP
                </b-nav-item>
                <b-nav-item :to="this.$route.name != 'welcome' ? { path : '/', hash : '#team' } : { hash : '#team' }">
                    TEAM
                </b-nav-item>
                <b-nav-item :to="{ name : 'whitepaper' }">
                    WHITEPAPER
                </b-nav-item>
                <b-nav-item :to="this.$route.name != 'welcome' ? { path : '/', hash : '#faqs' } : { hash : '#faqs' }">
                    FAQs
                </b-nav-item>
              </b-navbar-nav>
            </b-collapse>
          </div>
        </b-navbar>
        <!-- </nav> -->
        <nuxt />

        <!-- LGPH Footer -->
        <footer class="footer py-3">
            <div class="container">
                <div class="social-nav mb-0 pt-5">
                    <ul class="nav justify-content-center">

                        <li class="nav-item">
                            <a class="nav-link" href="https://www.facebook.com/lazygoatofc" target="_blank"><i
                                    class="fa fa-facebook-square" aria-hidden="true"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://twitter.com/lazygoatofc" target="_blank"><i
                                    class="fa fa-twitter" aria-hidden="true"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://instagram.com/lazygoatofficial" target="_blank"><i
                                    class="fa fa-instagram" aria-hidden="true"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://discord.gg/lazygoat" target="_blank"><i
                                    class="fa fa-discord" aria-hidden="true"></i></a>
                        </li>
                    </ul>
                </div>
                <div class="row">
                    <div class="col-md-12 text-center">
                        <p class="copyright">
                            Copyright &copy; 2022 Lazy Goat All rights reserved
                        </p>
                    </div>
                </div>
            </div>
            <div class="shine-wrap">
                <img src="../assets/images/bg_shine-03.png" loading="eager" alt="" class="shine-img">
            </div>
        </footer>
    </div>
</template>

<script>
export default {



}
</script>

<style lang="scss">

</style>
