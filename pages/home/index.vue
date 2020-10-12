<template>
  <view class="home ios_scorll">
    <view class="head">
      <view class="head_bar">
        <view class="head_bar_search">
          <input type="text" placeholder="搜索关键词" />
        </view>
        <view class="head_bar_icon">
          <img @click="$router.push('/scan')" src="@/static/images/scan.png" alt />
          <img src="@/static/images/notice.png" alt />
        </view>
      </view>
    </view>
    <view class="nav">
      <view class="ul">
        <view class="li" @click="$router.push(item.path)" v-for="item in navList" :key="item.id">
          <img :src="item.icon" alt />
          <span>{{ item.name }}</span>
        </view>
      </view>
    </view>
    <view class="s_banner">
      <img src="@/static/images/s_banner.png" alt />
    </view>
    <view class="list">
      <h5>载体推荐</h5>
      <view class="item" v-for="item in comList" :key="item.id" @click="goInfo(item.id)">
        <img src="@/static/images/default_company_icon.png" alt />
        <view class="item_text">
          <p>{{ item.carrierName || '-' }}</p>
          <span>{{ item.addressInfo || '-' }}</span>
          <span>{{ item.carrierRegDate | datafmt('YYYY-MM-DD') }}</span>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { getZtList } from "@/api/zt";
export default {
  name: 'home',
  data () {
    return {
      value: '',
      navList: [
        {
          id: 0,
          name: '双创政策',
          icon: require('@/static/images/nav_01.png'),
          path: '/home/policy'
        },
        {
          id: 1,
          name: '科技载体',
          icon: require('@/static/images/nav_02.png'),
          path: '/home/zt/list'
        },
        {
          id: 2,
          name: '新型研发机构',
          icon: require('@/static/images/nav_03.png'),
          path: '/home/new_dev/list'
        },
        {
          id: 3,
          name: '人才匹配',
          icon: require('@/static/images/nav_04.png'),
          path: '/home/talent'
        },
        {
          id: 4,
          name: '场地预约',
          icon: require('@/static/images/nav_05.png'),
          path: '/home/site/list/0'
        },
        {
          id: 5,
          name: '高企培育',
          icon: require('@/static/images/nav_06.png'),
          path: '/'
        },
        {
          id: 6,
          name: '认证服务机构',
          icon: require('@/static/images/nav_07.png'),
          path: '/home/auth_service/list'
        },
        {
          id: 7,
          name: '双创活动',
          icon: require('@/static/images/nav_08.png'),
          path: '/home/activity'
        }
      ],
      comList: [
        {
          id: 0,
          name: '苏州纳米城西北区厂房',
          image: require('@/static/images/default_company_icon.png'),
          info:
            '厂房位于【苏州纳米城西北区】，由【苏州纳米科技发展有限公司】管理由【苏州纳米科技发展有限公司】管理',
          time: '2020-06-17'
        },
        {
          id: 1,
          name: '苏州纳米城西北区厂房',
          image: require('@/static/images/default_company_icon.png'),
          info:
            '厂房位于【苏州纳米城西北区】，由【苏州纳米科技发展有限公司】管理由【苏州纳米科技发展有限公司】管理',
          time: '2020-06-17'
        },
        {
          id: 2,
          name: '苏州纳米城西北区厂房',
          image: require('@/static/images/default_company_icon.png'),
          info:
            '厂房位于【苏州纳米城西北区】，由【苏州纳米科技发展有限公司】管理由【苏州纳米科技发展有限公司】管理',
          time: '2020-06-17'
        },
        {
          id: 3,
          name: '苏州纳米城西北区厂房',
          image: require('@/static/images/default_company_icon.png'),
          info:
            '厂房位于【苏州纳米城西北区】，由【苏州纳米科技发展有限公司】管理由【苏州纳米科技发展有限公司】管理',
          time: '2020-06-17'
        },
        {
          id: 4,
          name: '苏州纳米城西北区厂房',
          image: require('@/static/images/default_company_icon.png'),
          info:
            '厂房位于【苏州纳米城西北区】，由【苏州纳米科技发展有限公司】管理由【苏州纳米科技发展有限公司】管理',
          time: '2020-06-17'
        },
        {
          id: 5,
          name: '苏州纳米城西北区厂房',
          image: require('@/static/images/default_company_icon.png'),
          info:
            '厂房位于【苏州纳米城西北区】，由【苏州纳米科技发展有限公司】管理由【苏州纳米科技发展有限公司】管理',
          time: '2020-06-17'
        }
      ]
    }
  },
  created () { 
    this.getList({pagingParam: {pageSize: 10, pageNumber: 8}, param: { carrierType: "2"}})
  },
  methods: {
    getList(pagingParam) {
      getZtList({ pagingParam }).then((res) => {
		  console.log(res)
        this.comList = res.result.itemList
      })
    },
    goInfo(id) {
      this.$router.push({ path: `/home/zt/info/${id}` });
    },
  }
}
</script>

<style lang="less" scoped>
.home {
  height: calc(100vh - 50px);
  overflow-y: scroll;
  background-color: #fff;
  .head {
    width: 100%;
    height: 176px;
    background: url(https://rjgsc-dev-h5.kjj.51kjdata.com/uploads/h5/f_banner.png) no-repeat center;
    background-size: 100% 100%;
    padding: 15px 10px;
    .head_bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .head_bar_search {
      position: relative;
      width: 288.5px;
      height: 27px;
      border-radius: 18px;
      overflow: hidden;
      padding-left: 40px;
      background-color: #70c2fe;
	  input {
		  width: 100%;
		  height: 100%;
	  }
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 15px;
        transform: translateY(-50%);
        width: 24px;
        height: 24px;
        background: url(https://rjgsc-dev-h5.kjj.51kjdata.com/uploads/h5/search_icon.png) no-repeat center;
        background-size: 100% 100%;
      }
      input {
        width: 100%;
        line-height: 27px;
        border: none;
        background-color: transparent;
        font-size: 13px;
        color: #fff;
        padding: 0;
        &::-webkit-input-placeholder {
          color: #fff;
        }
      }
    }
    .head_bar_icon {
      display: flex;
      justify-content: space-between;
      img {
        width: 24px;
        height: 24px;
        margin-left: 8px;
      }
    }
  }
  .nav {
    color: #252525;
    font-size: 14px;
    margin-top: 22.5px;
    .ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      .li {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 25%;
        margin-bottom: 19px;
        img {
          width: 45px;
          height: 45px;
          margin-bottom: 12px;
        }
      }
    }
  }
  .s_banner {
    background-color: #f3f5fd;
    padding: 13px 0;
    img {
      width: 100%;
      height: 84px;
    }
  }
  .list {
    padding: 16.5px;
    background-color: #fff;
    h5 {
      position: relative;
      font-size: 14.5px;
      padding-left: 24px;
      margin: 0;
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-40%);
        width: 15px;
        height: 14px;
        background: url(https://rjgsc-dev-h5.kjj.51kjdata.com/uploads/h5/zt_icon.png) no-repeat center;
        background-size: 100% 100%;
      }
    }
    .item {
      display: flex;
      padding: 16px 0;
      border-bottom: 1px solid #ededed;
      img {
        width: 100.5px;
        height: 100.5px;
        margin-right: 15px;
      }
      .item_text {
        width: calc(100% - 115.5px);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        p {
          margin: 0;
          font-size: 14px;
          color: #252525;
        }
        span {
          font-size: 10px;
          text-overflow: -o-ellipsis-lastline;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          line-clamp: 2;
          -webkit-box-orient: vertical;
          &:first-of-type {
            color: #555555;
            margin-top: 8.5px;
          }
          &:last-of-type {
            color: #c1c1c2;
            margin-top: 6.5px;
          }
        }
      }
    }
  }
}
</style>
