<template>
  <div id="app">
    <el-dialog
      title="选择城市"
      :visible.sync="dialogVisible"
      :close-on-click-modal="false"
      width="700px"
    >
      <div class="content">
        <div
          class="province-item"
          v-for="(province, provinceIndex) in provinceList"
          :key="province.code"
        >
          <el-checkbox
            :label="province.name"
            v-model="province.checkedAll"
            :indeterminate="
              province.checked.length > 0 &&
              province.checked.length < province.children.length
            "
            @change="(state) => cityCheckAllHandler(state, provinceIndex)"
          ></el-checkbox>
          <el-dropdown trigger="click" :hide-on-click="false">
            <span class="el-dropdown-link">
              <span class="checked-sum">({{ province.checked.length }})</span>
              <i class="more el-icon-arrow-down"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                v-for="city in province['children']"
                :key="city.code"
              >
                <el-checkbox-group
                  v-model="province.checked"
                  @change="
                    (checkList) =>
                      cityCheckItemHandler(checkList, provinceIndex)
                  "
                >
                  <el-checkbox :label="city.name"></el-checkbox>
                </el-checkbox-group>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="selectCityCancel">取 消</el-button>
        <el-button type="primary" @click="sumCheckCity">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { province_list, city_list } from './area'
export default {
  name: 'App',
  data() {
    return {
      province_list,
      city_list,
      dialogVisible: true,
      provinceList: [],
      checkList: []
    }
  },
  mounted() {
    this.initCity()
  },
  methods: {
    initCity() {
      let arr = []
      for (const provinceKey in province_list) {
        let children = []
        const startCode = provinceKey.slice(0, 2)
        for (const cityKey in city_list) {
          if (cityKey.startsWith(startCode)) {
            let cityInfo = {
              code: Number(cityKey),
              name: city_list[cityKey]
            }
            children.push(cityInfo)
          }
        }
        const obj = {
          children,
          checked: [],
          checkedAll: false,
          code: Number(provinceKey),
          name: province_list[provinceKey]
        }
        arr.push(obj)
      }
      this.provinceList = arr
    },

    cityCheckAllHandler(state, index) {
      let province = this.provinceList[index]
      const cityList = province.children.map((item) => item.name)
      province['checked'] = state ? cityList : []
      this.$set(this.provinceList, index, province)
    },

    cityCheckItemHandler(checkList, index) {
      let province = this.provinceList[index]
      const cityList = province.children.map((item) => item.name)
      province.checkedAll = cityList.length === checkList.length
    },

    selectCityCancel() {
      this.dialogVisible = false
    },

    sumCheckCity() {
      console.log(this.provinceList)
      const checkedProvince = this.provinceList.filter(
        (province) => province.checked.length > 0
      )
      const checkedCity = checkedProvince
        .map((item) => item.checked.join(','))
        .join(',')
      console.log(checkedCity)
      this.dialogVisible = false
    }
  }
}
</script>

<style scoped>
.content {
  margin-left: 20px;
}
.province-item {
  display: inline-block;
  margin: 0 30px 30px 0;
}
.province-item .more {
  font-size: 16px;
  margin-left: 4px;
  cursor: pointer;
}
</style>
