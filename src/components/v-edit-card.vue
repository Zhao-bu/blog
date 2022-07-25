<template>
    <el-card class="box-card" shadow="hover">
        <p class="title">个人资料</p>
        <el-divider></el-divider>
        <div class="boxs">

            <el-tabs tab-position="left" v-model="editableTabsValue">
                <el-tab-pane label="个人信息" value="1">个人信息</el-tab-pane>
                <el-tab-pane label="修改密码" value="2">修改密码</el-tab-pane>
            </el-tabs>
            <div class="input-box">
                <div class="box1" v-if="editableTabsValue == '0'">
                    <div class="avatar-box">
                        <el-upload class="avatar-uploader" action="http://localhost:3001/admin/user/upload"
                            :multiple="false" :show-file-list="false" :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload">
                            <img v-if="user.avatar" :src="user.avatar" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </div>
                    <div class="input-grid">
                        <div>昵称</div>
                        <el-input v-model="user.nickName" placeholder="请输入昵称" maxlength="10" show-word-limit></el-input>
                    </div>
                    <div class="input-grid">
                        <div>简介</div>
                        <el-input v-model="user.synopsis" placeholder="请输入内容" maxlength="20" show-word-limit></el-input>
                    </div>
                    <div class="button">
                        <el-button type="primary" @click="onSave">保存修改</el-button>
                    </div>
                </div>
                <div class="box2" v-if="editableTabsValue == '1'">
                    <div class="input-grid">
                        <div>旧密码</div>
                        <el-input v-model="oldPass" placeholder="请输入旧密码" maxlength="20"></el-input>
                    </div>
                    <div class="input-grid">
                        <div>新密码</div>
                        <!-- <div class="rePass"><span>重置</span></div> -->
                        <el-input v-model="newPass" placeholder="请输入新密码" maxlength="20"></el-input>
                    </div>
                    <div class="button">
                        <el-button type="primary" @click="onRevise">确认修改</el-button>
                    </div>
                </div>
            </div>
        </div>

    </el-card>
</template>

<script>
export default {
    name: 'vEditCard',
    data() {
        return {
            input: '',
            user: {
                nickName: '',
                synopsis: '',
                avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
            },
            newPass:'',
            oldPass:'',
            imageUrl: '',
            editableTabsValue: '0'

        }
    },
    created() {
        let { nickName, synopsis, avatar } = this.$store.state.userInfo;
        this.user.nickName = nickName || '';
        this.user.synopsis = synopsis || '';
        this.user.avatar = avatar
    },
    methods: {
        onSave() {
            let uid = this.$store.state.userInfo.id;
            this.user.uid = uid;
            this.$emit("onSubmit", this.user)
        },
        onRevise(){
            let that = this;
            let uid = this.$store.state.userInfo.id;
            let data = {
                uid,
                newPass:that.newPass ,
                oldPass:that.oldPass
            }
             this.$api.demo.revisePass(data).then((res)=>{
                //接口成功返回结果执行
                const {code,data,message} = res;
                that.$message(message);
                that.showEdit = false;
                if(code == '200'){
                    that.$store.commit('setUserInfo', {})
                   sessionStorage.removeItem("userInfo");
                   that.$router.push('/login')
                }
            })
        },
        handleAvatarSuccess(response, file, fileList) {
            // this.imageUrl = URL.createObjectURL(file.raw);
            let path = response.data.path
            let host = 'http://localhost:3001/'
            this.user.avatar = host + path.split('/')[2]
            console.log(this.user)
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        },
    }
}
</script>

<style scoped>
.box-card {
    margin-top: 6px;
}

.boxs {
    display: grid;
    grid-template-columns: 20% 79%;
    grid-gap: 1%;
}

.input-grid {
    display: grid;
    grid-template-columns: 10% 88%;
    grid-gap: 2%;
    margin-bottom: 20px;
}

.title {
    padding: 0;
    margin: 10px 0 5px 10px;
    font-weight: 600;
    font-size: 18px;
}

.input-box {
    width: 70%;
    padding: 0 15% 0 5%;
    height: 400px;
}

.input-grid>div {
    line-height: 40px;
}

.avatar-box {
    text-align: center;
    margin-bottom: 40px;
}

.button {
    text-align: right;
}

.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
}

.rePass {
    text-align: right;
}

.rePass>span:hover {
    color: #409EFF;
}

.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 85px;
    height: 85px;
    line-height: 85px;
    text-align: center;
    border: 1px solid #EBEEF5;
    border-radius: 50%;
}

.avatar {
    width: 85px;
    height: 85px;
    border-radius: 50%;
    border: 1px solid #EBEEF5;
}
</style>