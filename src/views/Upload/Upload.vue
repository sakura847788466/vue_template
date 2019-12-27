<template>
  <div class="uploadBox"
       style="">
    <div class="top">
      <span type="primary"
            class="select_file"
            style="position:relative">选择文件
        <input type="file"
               name="image"
               class="get_file"
               @change="uploader($event)">
      </span>
    </div>
    <div class="container">
      <el-table :data="tableData"
                style="width: 100%">
        <el-table-column label="日期"
                         width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="文件名"
                         width="180">
          <template slot-scope="scope">
            {{scope.row.fileName}}
          </template>
        </el-table-column>
        <el-table-column label="大小"
                         width="180">
          <template slot-scope="scope">
            {{scope.row.size}}
          </template>
        </el-table-column>
        <el-table-column label="状态"
                         width="180">
          <template slot-scope="scope">
            {{scope.row.satus?'已打印':'未打印'}}
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini"
                       type="danger"
                       @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="num">
        <span>请输入设备号:</span>
        <el-input v-model="input"
                  placeholder="请输入设备编号"
                  style="width:400px;height:40px;margin-left:30px;"></el-input>
      </div>
      <el-button type="primary"
                 style="width:95%;margin:0 20px 0 20px;background-color:#009688;position:relative;"
                 @click="beforeUpload(files)">{{status?'打印成功':'开始打印'}}</el-button>
      <span :style="{'display':(span_s?'none':'block'),'position':'absolute','top':'50%','left':'50%','transform':'translate(-50%,-50%)'}">打印中....</span>
    </div>
  </div>

</template>

<script>
import { sendMsg, sendFile, sendExel } from "../../api/index"
// import xls from '../../../public/excel.xls'
export default {
  name: 'upload',
  mounted () {

  },
  data () {
    return {
      fileName: '',
      files: '',
      input: '',
      tableData: [],
      status: false,
      span_s: true,
    }
  },
  methods: {
    //文件大小检验
    beforeUpload (file) {
      this.files = file;
      this.span_s = !this.span_s
      const extension = file.name.split('.')[1] === 'jpg'
      const extension2 = file.name.split('.')[1] === 'pdf'
      const extension3 = file.name.split('.')[1] === 'xlsx'
      const extension4 = file.name.split('.')[1] === 'xls'


      const isLt2M = file.size / 1024 / 1024 < 2
      if (!extension && !extension2 && !extension3 && !extension4) {
        this.$message.warning('上传模板只能是 jpg、pdf格式!')
        return
      }
      if (!isLt2M) {
        this.$message.warning('上传模板大小不能超过 2MB!')
        return
      }
      this.fileName_send = file.name;
      this.submitUpload(this.fileName_send, file)
      return false // 返回false不会自动上传
    },
    uploader ($event) {
      const file = $event.srcElement.files[0]
      const name = $event.target.files[0].name
      const size = $event.target.files[0].size
      const fileItem = {
        date: this.getNowFormatDate(),
        fileName: name,
        size: size,
        status: false
      }
      this.tableData.push(fileItem)
      console.log(this.tableData)
      let reader = new FileReader();
      reader.onload = ($event) => {
        let result = $event.target.result
        this.fileName = name
        this.files = file
      }
      reader.readAsDataURL(file);
    },
    submitUpload (name, file) {
      if (name == "") {
        this.$message.warning('请选择要上传的文件！')
        return false
      }
      let fileFormData = new FormData();
      fileFormData.append('file', file, name);

      sendExel(fileFormData, this.input).then((res) => {
        this.$message.success('上传成功')
        this.status = !this.status
        this.span_s = !this.span_s
        console.log(res)
      }).catch((err) => {
        this.$message.error('上传失败')
        console.log(err)
      })

    },
    handleDelete (index, row) {
      this.tableData.splice(index, 1)
    },
    getNowFormatDate () {
      var date = new Date();
      var seperator1 = "-";
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      var currentdate = year + seperator1 + month + seperator1 + strDate;
      return currentdate;
    }
  }
}
</script>

<style scoped>
.uploadBox {
  display: flex;
  width: 800px;
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
.top {
  flex: 1;
  width: 100%;
  display: flex;
  align-items: flex-end;
  margin-left: 9px;
}
.container {
  flex: 6;
  width: 100%;
}
.num {
  display: flex;
  padding: 10px 40px 10px 40px;
}
.num span {
  height: 100%;
  text-align: center;
  line-height: 40px;
}
.get_file {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  display: inline-block;
  cursor: pointer;
}
.select_file {
  height: 35px;
  width: 100px;
  background-color: #409eff;
  color: #fff;
  line-height: 35px;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
}
</style>