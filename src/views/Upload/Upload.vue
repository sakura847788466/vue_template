<template>
  <div class="uploadBox"
       style="">
    <div class="top">

    </div>
    <div class="container">
      <div class="num">
        <span>number:</span>
        <el-input v-model="number "
                  placeholder="请输入"
                  style="width:250px;height:40px;"></el-input>
        <el-button type="primary"
                   @click='getMess'
                   style="margin-left: 40px;">获取</el-button>
        <span style="margin-left:10px;">value:</span>
        <el-input v-model="arr.value "
                  placeholder="请输入"
                  style="width:250px;height:40px;"></el-input>
        <span style="margin-left:10px;">kay:</span>
        <el-input v-model="arr.kay "
                  placeholder="请输入"
                  style="width:250px;height:40px;"></el-input>
      </div>
    </div>
    <div class='info'>
      <el-collapse-transition>
        <div v-show="show3">
          <div class="transition-box">
            <div class="div_item">
              <div class="item">
                <span>number:</span>
                <el-input v-model="arr.number "
                          placeholder="请输入"
                          style="width:150px;height:40px;"
                          :disabled="true"></el-input>
              </div>
              <div class="item">
                <span>localIpAddress:</span>
                <el-input v-model="arr.localIpAddress "
                          placeholder="请输入"
                          style="width:150px;height:40px;"
                          :disabled="true"></el-input>
              </div>
              <div class="item">
                <span>remoteServerAddress:</span>
                <el-input v-model="arr.remoteServerAddress "
                          placeholder="请输入"
                          style="width:150px;height:40px;"
                          :disabled="true"></el-input>
              </div>
            </div>
            <div class="div_item">
              <div class="item">
                <span>MainDNSServerAddress:</span>
                <el-input v-model="arr.MainDNSServerAddress "
                          placeholder="请输入"
                          style="width:150px;height:40px;"
                          :disabled="true"></el-input>
              </div>
              <div class="item">
                <span>slaveDNSServerAddress:</span>
                <el-input v-model="arr.slaveDNSServerAddress "
                          placeholder="请输入"
                          style="width:150px;height:40px;"
                          :disabled="true"></el-input>
              </div>
              <div class="item">
                <span>odoPort:</span>
                <el-input v-model="arr.odoPort "
                          placeholder="请输入"
                          style="width:150px;height:40px;"
                          :disabled="true"></el-input>
              </div>
            </div>
            <div class="div_item">
              <div class="item">
                <span>controlPort:</span>
                <el-input v-model="arr.controlPort "
                          placeholder="请输入"
                          style="width:150px;height:40px;"
                          :disabled="true"></el-input>
              </div>
              <div class="item">
                <span>dataPort:</span>
                <el-input v-model="arr.dataPort "
                          placeholder="请输入"
                          style="width:150px;height:40px;"
                          :disabled="true"></el-input>
              </div>
              <div class="item">
                <span>domainName:</span>
                <el-input v-model="arr.domainName "
                          placeholder="请输入"
                          style="width:150px;height:40px;"
                          :disabled="true"></el-input>
              </div>
            </div>
            <div class="div_item">
              <div class="item">
                <span>reconnectionInterval:</span>
                <el-input v-model="arr.reconnectionInterval "
                          placeholder="请输入"
                          style="width:150px;height:40px;"
                          :disabled="true"></el-input>
              </div>
              <div class="item">
                <span>number:</span>
                <el-input v-model="arr.number "
                          placeholder="请输入"
                          style="width:150px;height:40px;"
                          :disabled="true"></el-input>
              </div>
              <div class="item">
                <span>number:</span>
                <el-input v-model="arr.payerccg "
                          placeholder="请输入"
                          style="width:150px;height:40px;"
                          :disabled="true"></el-input>
              </div>
            </div>
            <div class="div_item">
              <div class="item">
                <span>number:</span>
                <el-input v-model="arr.payerccg "
                          placeholder="请输入"
                          style="width:150px;height:40px;"
                          :disabled="true"></el-input>
              </div>
              <div class="item">
                <span>number:</span>
                <el-input v-model="arr.payerccg "
                          placeholder="请输入"
                          style="width:150px;height:40px;"
                          :disabled="true"></el-input>
              </div>
              <div class="item">
                <span>number:</span>
                <el-input v-model="arr.payerccg "
                          placeholder="请输入"
                          style="width:150px;height:40px;"
                          :disabled="true"></el-input>
              </div>
            </div>
            <div class="div_item">
              <div class="item">
                <span>number:</span>
                <el-input v-model="arr.payerccg "
                          placeholder="请输入"
                          style="width:150px;height:40px;"
                          :disabled="true"></el-input>
              </div>
              <div class="item">
                <span>number:</span>
                <el-input v-model="arr.payerccg "
                          placeholder="请输入"
                          style="width:150px;height:40px;"
                          :disabled="true"></el-input>
              </div>
              <div class="item">
                <span>number:</span>
                <el-input v-model="arr.payerccg "
                          placeholder="请输入"
                          style="width:150px;height:40px;"
                          :disabled="true"></el-input>
              </div>
            </div>
            <div class="div_item">
              <el-button type="primary"
                         style='width:150px;margin-left:868px;'
                         @click="upDate"> 修改</el-button>
            </div>
          </div>
          <!-- 修改提示框 -->
          <el-dialog title="修改"
                     :visible.sync="dialogVisible"
                     width="90%"
                     :before-close="handleClose">
            <div>
              <div class="div_item">
                <div class="item">
                  <span>number:</span>
                  <el-input v-model="arr.payerccg "
                            placeholder="请输入"
                            style="width:150px;height:40px;"></el-input>
                </div>
                <div class="item">
                  <span>localIpAddress:</span>
                  <el-input v-model="arr.payerccg "
                            placeholder="请输入"
                            style="width:150px;height:40px;"></el-input>
                </div>
                <div class="item">
                  <span>remoteServerAddress:</span>
                  <el-input v-model="arr.payerccg "
                            placeholder="请输入"
                            style="width:150px;height:40px;"></el-input>
                </div>
              </div>
              <div class="div_item">
                <div class="item">
                  <span>MainDNSServerAddress:</span>
                  <el-input v-model="arr.payerccg "
                            placeholder="请输入"
                            style="width:150px;height:40px;"></el-input>
                </div>
                <div class="item">
                  <span>slaveDNSServerAddress:</span>
                  <el-input v-model="arr.payerccg "
                            placeholder="请输入"
                            style="width:150px;height:40px;"></el-input>
                </div>
                <div class="item">
                  <span>odoPort:</span>
                  <el-input v-model="arr.payerccg "
                            placeholder="请输入"
                            style="width:150px;height:40px;"></el-input>
                </div>
              </div>
              <div class="div_item">
                <div class="item">
                  <span>controlPort:</span>
                  <el-input v-model="arr.payerccg "
                            placeholder="请输入"
                            style="width:150px;height:40px;"></el-input>
                </div>
                <div class="item">
                  <span>dataPort:</span>
                  <el-input v-model="arr.payerccg "
                            placeholder="请输入"
                            style="width:150px;height:40px;"></el-input>
                </div>
                <div class="item">
                  <span>domainName:</span>
                  <el-input v-model="arr.payerccg "
                            placeholder="请输入"
                            style="width:150px;height:40px;"></el-input>
                </div>
              </div>
              <div class="div_item">
                <div class="item">
                  <span>reconnectionInterval:</span>
                  <el-input v-model="arr.payerccg "
                            placeholder="请输入"
                            style="width:150px;height:40px;"></el-input>
                </div>
                <div class="item">
                  <span>number:</span>
                  <el-input v-model="arr.payerccg "
                            placeholder="请输入"
                            style="width:150px;height:40px;"></el-input>
                </div>
                <div class="item">
                  <span>number:</span>
                  <el-input v-model="arr.payerccg "
                            placeholder="请输入"
                            style="width:150px;height:40px;"></el-input>
                </div>
              </div>
              <div class="div_item">
                <div class="item">
                  <span>number:</span>
                  <el-input v-model="arr.payerccg "
                            placeholder="请输入"
                            style="width:150px;height:40px;"></el-input>
                </div>
                <div class="item">
                  <span>number:</span>
                  <el-input v-model="arr.payerccg "
                            placeholder="请输入"
                            style="width:150px;height:40px;"></el-input>
                </div>
                <div class="item">
                  <span>number:</span>
                  <el-input v-model="arr.payerccg "
                            placeholder="请输入"
                            style="width:150px;height:40px;"></el-input>
                </div>
              </div>
              <div class="div_item">
                <div class="item">
                  <span>number:</span>
                  <el-input v-model="arr.payerccg "
                            placeholder="请输入"
                            style="width:150px;height:40px;"></el-input>
                </div>
                <div class="item">
                  <span>number:</span>
                  <el-input v-model="arr.payerccg "
                            placeholder="请输入"
                            style="width:150px;height:40px;"></el-input>
                </div>
                <div class="item">
                  <span>number:</span>
                  <el-input v-model="arr.payerccg "
                            placeholder="请输入"
                            style="width:150px;height:40px;"></el-input>
                </div>
              </div>
            </div>
            <span slot="footer"
                  class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary"
                         @click="dialogVisible = false">确 定</el-button>
            </span>
          </el-dialog>
        </div>
      </el-collapse-transition>
    </div>
  </div>

</template>

<script>
import { getMessage } from "../../api/index"
export default {
  name: 'upload',
  mounted () {

  },
  data () {
    return {
      number: '',
      show3: false,
      dialogVisible: false,
      arr: {}
    }
  },
  methods: {
    getMess () {
      let num = this.number
      getMessage(num).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
      // this.show3 = !this.show3


    },
    upDate () {
      this.dialogVisible = !this.dialogVisible
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => { });
    }
  }

}

</script>

<style scoped>
.top {
  height: 40px;
  background-color: aqua;
}
.uploadBox {
  display: flex;
  width: 1050px;
  height: 800px;
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  flex-direction: column;
}
.container {
  padding: 20px;
  display: flex;
  flex-direction: column;
}
.transition-box {
  width: 100%;
  border-radius: 4px;
  color: #fff;
  box-sizing: border-box;
  border: 1px solid #000;
  padding: 5px;
}
.info {
  padding: 10px;
}
.div_item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}
.div_item .item {
  flex: 1;
  display: flex;
}
.item span {
  color: #000;
  flex: 2;
  text-align: center;
  line-height: 40px;
}
</style>