<template>
  <div>
    <doc-header></doc-header>
    <doc-nav></doc-nav>
    <div class="doc-content">
      <div class="doc-content-document">
        <div class="doc-content-tabs single">
          <div class="tab-item cur">
            {{ isShowTaroDoc ? "vue / taro" : "vue" }}
          </div>
        </div>
        <router-view />
      </div>
      <doc-demo-preview :url="demoUrl"></doc-demo-preview>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, computed } from "vue";
import { nav } from "@/config.json";
import {
  onBeforeRouteUpdate,
  RouteLocationNormalized,
  useRoute,
  useRouter,
} from "vue-router";
import Header from "@/sites/doc/components/Header.vue";
import Nav from "@/sites/doc/components/Nav.vue";
import Footer from "@/sites/doc/components/Footer.vue";
import DemoPreview from "@/sites/doc/components/DemoPreview.vue";
import { RefData } from "@/sites/assets/util/ref";
export default defineComponent({
  name: "doc",
  components: {
    [Header.name]: Header,
    [Nav.name]: Nav,
    [Footer.name]: Footer,
    [DemoPreview.name]: DemoPreview,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const excludeTaro = ["/intro", "/start", "/theme", "/joinus", "/starttaro"];
    const data = reactive({
      demoUrl: "demo.html",
      curKey: "vue",
      tabs: [
        {
          key: "vue",
          text: "vue",
        },
        {
          key: "taro",
          text: "taro",
        },
      ],
    });

    const configNav = computed(() => {
      const tarodocs = [] as string[];
      nav.map((item) => {
        // item.packages.forEach((element) => {
        //   let { tarodoc, name } = element;
        //   if (tarodoc) {
        //     tarodocs.push(name.toLowerCase());
        //     tarodocs.push(`${name.toLowerCase()}-taro`);
        //   }
        // });
        const { tarodoc, name } = item;
        if (tarodoc) {
          tarodocs.push(name.toLowerCase());
          tarodocs.push(`${name.toLowerCase()}-taro`);
        }
      });
      return tarodocs;
    });

    const isTaro = (router: RouteLocationNormalized) => {
      return router.path.indexOf("taro") > -1;
    };

    const isShow = () => {
      return !excludeTaro.includes(route.path);
    };

    // const isShowTaroDoc = computed(() => {
    //   return (
    //     configNav.value.findIndex((item) => item === route.path.substr(1)) > -1
    //   );
    // });
    const isShowTaroDoc = computed(() => {
      const routename = route.path.toLocaleLowerCase().split("/").pop() || "";
      return configNav.value.findIndex((item) => item === routename) > -1;
    });

    const watchDemoUrl = (router: RouteLocationNormalized) => {
      const { origin, pathname } = window.location;
      RefData.getInstance().currentRoute.value = router.name as string;
      data.demoUrl = `${origin}${pathname.replace("index.html", "")}demo.html#${
        router.path
      }`;
    };

    const watchDocMd = () => {
      const path = route.path;
      router.replace(
        isTaro(route) ? path.substr(0, path.length - 5) : `${path}-taro`
      );
    };

    const handleTabs = (curKey: string) => {
      data.curKey = curKey;
      watchDocMd();
    };

    onMounted(() => {
      watchDemoUrl(route);
      data.curKey = isTaro(route) ? "taro" : "vue";
    });

    onBeforeRouteUpdate((to) => {
      watchDemoUrl(to);
      data.curKey = isTaro(to) ? "taro" : "vue";
    });

    return {
      ...toRefs(data),
      handleTabs,
      isShow,
      isShowTaroDoc,
    };
  },
});
</script>

<style lang="scss" scoped>
.doc {
  &-content {
    margin-left: 290px;
    display: flex;
    flex-direction: column;

    &-document {
      min-height: 800px;
    }
    &-tabs {
      position: absolute;
      right: 475px;
      top: 225px;
      display: flex;
      height: 40px;
      align-items: center;
      justify-content: space-between;
      z-index: 1;
      padding: 2px;
      box-sizing: border-box;

      border-radius: 2px;
      background: #eee;
      box-shadow: rgb(0 0 0 / 15%) 0px 2px 4px;
      &.single {
        padding: 0;
        .tab-item {
          line-height: 40px;
          cursor: auto;
        }
      }
      .tab-item {
        position: relative;
        padding: 0 10px;
        line-height: 36px;
        cursor: pointer;
        font-size: 16px;
        color: #323232;
        text-align: center;
        border-radius: 2px;
        background: #eee;
        &.cur {
          font-weight: bold;
          color: #323232;
          background: #fff;
        }
      }
    }
  }
}
</style>
