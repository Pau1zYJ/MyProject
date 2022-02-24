<template>
    <div class="header">
            <el-image :src="require('@/assets/icon.png')" fit="fill" class="iconImage"></el-image>
        <div class="reminderText">
            <h1>New Life Calculater Results</h1>
            <div class="modelText">
                <p style="color:white;font-weight:600;margin-bottom: 5px;">PREDICTION MODEL : {{model}}</p>
                
            </div>
            <div class="thresholdText">
                <p style="color:white;font-weight:600;margin-bottom: 5px;">THRESHOLD VALUE : {{thresholdValue}} %</p>
            </div>
            <div class="thresholdButton" @click="openThresholdText">
                I'm not sure how to use threshold value
            </div>
        </div>
    </div>
    <div class="resultsArea">       
        <h2>OUTCOMES</h2>
        <div class="resultsContainer">
            <el-tabs type="border-card" tab-position="top" stretch= true class="tabs">
              <el-tab-pane>
                  <template #label>
                    <span>
                        <svg class="pieChart" width="200" height="200" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-042ca774=""><path fill="currentColor" d="M448 68.48v64.832A384.128 384.128 0 00512 896a384.128 384.128 0 00378.688-320h64.768A448.128 448.128 0 0164 512 448.128 448.128 0 01448 68.48z"></path><path fill="currentColor" d="M576 97.28V448h350.72A384.064 384.064 0 00576 97.28zM512 64V33.152A448 448 0 01990.848 512H512V64z"></path></svg>
                    </span>
                    </template>
                    <div class="precentResultsArea">
                        <h2 style="color: #409EFF;margin-bottom: 5px;margin-top:10%">RISK OF DEATH</h2>
                        <p>for infants with the same conditions</p>
                        <el-progress :percentage = "predictionValue" type="circle" :stroke-width=20 :width=240 style="margin-top:7%"></el-progress>
                    </div>
              </el-tab-pane>
              <el-tab-pane>
                  <template #label>
                    <span>
                        <svg class="icon" width="200" height="200" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-042ca774=""><path fill="currentColor" d="M628.736 528.896A416 416 0 01928 928H96a415.872 415.872 0 01299.264-399.104L512 704l116.736-175.104zM720 304a208 208 0 11-416 0 208 208 0 01416 0z"></path></svg>
                    </span>
                  </template>
                  <p style="margin-top:10px;">for 100 infants with the same conditions</p>
                  <div class="babyArea">
                        <div class="babyIconArea">
                            <el-image :src="require('@/assets/diedBaby.png')" fit="fill" style="width:40px;height:40px" v-for="item in (100-babyNumber)" :key="item"></el-image>
                            <el-image :src="require('@/assets/surviveBaby.png')" fit="fill" style="width:40px;height:40px" v-for="item in babyNumber" :key="item"></el-image>
                        </div>
                        <div class="babytextArea">
                            <p style="font-size: 45px;font-weight: 700;text-align: center; margin-bottom: 0px;">{{ babyNumber }}</p>
                            <p style="margin-top:10px">infants <strong>survived</strong> with active management</p>
                        </div>
                  </div>

              </el-tab-pane>
              <el-tab-pane>
                  <template #label>
                    <span>
                        <svg class="icon2" width="200" height="200" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-042ca774=""><path fill="currentColor" d="M416 896V128h192v768H416zm-288 0V448h192v448H128zm576 0V320h192v576H704z"></path></svg>
                    </span>
                  </template>
                  <div class="ThridResultArea">
                    <h2 style="color: #409EFF;margin-bottom: 5px;margin-top:10%">FRAILTY</h2>
                    <p>for infants with the same conditions</p>
                    <el-progress :percentage = "predictionValue" :show-text="false" :stroke-width="60" style="width: 80%;margin: 0 auto;margin-top: 13%;" :color="customColorMethod"></el-progress>
                    <div class="footnote">
                        <p style="font-weight:700;margin-top: 10px;">Low</p>
                        <p style="font-weight:700;margin-left: 20%;margin-top: 10px;">Moderate</p>
                        <p style="font-weight:700;margin-left:20%;margin-top: 10px;">High</p>
                        <p style="font-weight:700;margin-left: 17%;margin-top: 10px;">Very High</p>
                    </div>
                    <el-image :src="require('@/assets/footnote.png')" style="height: 15px;width: 20px;z-index: 200;position: absolute;left: 37%;bottom: 32%;"></el-image>
                    <el-image :src="require('@/assets/footnote.png')" style="height: 15px;width: 20px;z-index: 200;position: absolute;left: 62%;bottom: 32%;"></el-image>
                  </div>
              </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
export default {
    data()
    {
        return{
            predictionValue:'0',
            thresholdValue: '0',
            model:'',
            babyNumber:''
        }
    },
    methods:{
        openThresholdText(){
            this.$alert('By comparing the threshold value with the final prediction result. Among the three prediction models used in this calculator (LSTM, NN, ANIFS), in general, when the predicted result value is greater than the threshold value, the condition of infants is not optimistic. Conversely, when the predicted outcome value is less than the threshold value, the infant generally survives.', 'NOT SURE?', {
                confirmButtonText: 'CONFIRM',
                customClass: 'messageBox'
        });
        },
        customColorMethod(){
            if(this.predictionValue < 33){
                return '#67C23A'
            }
            if(this.predictionValue < 66){
                return '#E6A23C'
            }
            return '#F56C6C'

        }
    },
    created(){
        this.predictionValue = this.$route.query.predictionValue;
        this.thresholdValue = this.$route.query.thresholdValue;
        this.model = this.$route.query.model;
        if(this.model == 1) this.model = 'LSTM';
        if(this.model == 2) this.model = 'NN';
        if(this.model == 3) this.model = 'ANFIS';
        this.babyNumber = 100 - parseInt(this.predictionValue);
    }
}
</script>
<style scoped>
    .resultsArea{
        padding-top: 60px;
        padding-bottom: 60px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #409EFF
        
    }
    h2{
        font-family: 'Bariol';
        font-weight: 700;
        color: whitesmoke;
            font-size: 35px;
    }
    .resultsContainer{
        width: 60%;
    }  
    .pieChart,.icon{
        height: 32px;
        width: 32px;
        margin-top: 2px;
    }
    .icon2{
         height: 32px;
        width: 32px;
        margin-top: 2px;
        transform: rotate(90deg);
    }
    p{
        font-family: 'Bariol';
        color: #409EFF;
        font-size: 25px;
        margin-top: 0px;
    }
    .el-progress >>> .el-progress__text{
        color: #409EFF;
        font-family: 'Bariol';
        font-size: 41px !important;
        font-weight: 700;
    }
    .header{
        display: flex;
        background-color: #409EFF;
        flex-direction: column;
        text-align: left;
    }
    .iconImage{
        width: 150px;
        height: 150px;
        background: white;
        border-radius: 30px;
        margin-top: 15px;
        margin-left: 255px;
    }
    .reminderText{
        padding-left: 23%;
    }
    h1{
        font-family: 'Bariol';
        color: white;
        font-size: 50px;
        margin-top: 5%;
    }
    .thresholdButton{
        color: darkslategrey;
        font-family: 'Bariol';
        cursor: pointer;
        font-size: 20px;
        font-weight: bold;
    }
    .babyArea{
        display: flex;
        flex-direction: row;
    }
    .babytextArea{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 55px;
        flex-direction: column;
    }
    .babyIconArea{
        width: 400px;
    }
    .footnote{
        text-align: left;
        padding-left: 10%;
        display: flex;
        
    }
    .resultsContainer >>> .el-tabs__content{
        height: 520px;
    }
    .ThridResultArea{
        position: absolute;
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
    }

</style>

<style>
    .messageBox{
        width: 750px !important;
        height: 45%;
    }

    .el-message-box__title{
        margin-top: 20px;
        margin-bottom: 10px;
        font-size: 38px !important;
        line-height: 44px !important;
        font-weight: 700;
        font-family: 'Bariol';
    }

    .el-message-box__message p{
        font-size: 20px;
        font-family: 'Bariol';
        line-height: 30px !important;
    }
    .el-message-box__btns{
        display: flex;
        flex-direction: column;
        margin-top: 15px;
    }
</style>