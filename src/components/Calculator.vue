<template>
    <el-container>
        <el-header>
            <div class="headerImageAndName">
                <el-image :src="require('@/assets/icon.png')" fit="fill" style="height:80px"></el-image>
                <h2 class="headerName">NEW-LIFE CALCULATOR</h2>
            </div>
            <div class="line"></div>
        </el-header>
        <el-main>
            <div class="inputArea">
                <div v-if="stepNumber == 0">
                    <div class="inputName">
                    Gestation
                    </div>
                    <el-input v-model="gestationWeeks" type = "number" style="width: 180px"></el-input>
                    <p v-if="weekOrWeeks" style="margin-top: 10px;color: #9b9b9b; font-size: 16px;margin-left: 3px;">week</p>
                    <p v-else style="margin-top: 10px;color: #9b9b9b;font-size: 16px;margin-left: 3px;">weeks</p>
                    <el-input v-model="gestationDays" type = "number" style="width: 180px"></el-input>
                    <p v-if="dayOrDays" style="margin-top: 10px;color: #9b9b9b; font-size: 16px;margin-left: 3px;">day</p>
                    <p v-else style="margin-top: 10px;color: #9b9b9b;font-size: 16px;margin-left: 3px;">days</p>
                </div>
                <div v-if="stepNumber == 1">
                    <div class="inputName">
                    Birthweight
                    </div>
                    <el-input v-model="birthweight" type = "number" style="width: 180px"></el-input>
                    <p style="margin-top: 10px;color: #9b9b9b; font-size: 16px;margin-left: 3px;">g</p>
                </div>
                <div v-if="stepNumber == 2">
                    <div class="inputName">
                    Maternal Antenatal Steroid
                    <el-tooltip effect="dark"  placement="bottom">
                        <template #content>
                            <p style="font-weight:700;margin-top:0px;margin-bottom:0px">If you are confused or unsure about this question, please consult your clinician</p>
                        </template>
                        <el-image :src="require('@/assets/Notification.png')" style="height:25px"></el-image>
                    </el-tooltip>
                    </div>
                    <el-radio-group v-model="mas" size="large">
                        <div style="display:flex;flex-direction: column;">
                            <el-radio-button label="NoTreatment">No Treatment</el-radio-button>
                            <el-radio-button label="IncompleteTreatment">Incomplete Treatment</el-radio-button>
                            <el-radio-button label="CompleteTreatment">Complete Treatment</el-radio-button>
                        </div>
                    </el-radio-group>
                </div>
                <div v-if="stepNumber == 3">
                    <div class="inputName">
                    Gender
                    <el-tooltip effect="dark" placement="bottom">
                        <template #content>
                            <p style="font-weight:700;margin-top:0px;margin-bottom:0px">This question is not about sex identity, but rather physiological gender</p>
                        </template>
                        <el-image :src="require('@/assets/Notification.png')" style="height:25px"></el-image>
                    </el-tooltip>
                    </div>
                    <el-radio-group v-model="gender" size="large">
                        <div style="display:flex;flex-direction: column;">
                            <el-radio-button label="Male">Male</el-radio-button>
                            <el-radio-button label="Female">Female</el-radio-button>
                        </div>
                    </el-radio-group>
                </div>
                <div v-if="stepNumber == 4">
                    <div class="inputName">
                    Multiple Pregnancy
                    <el-tooltip effect="dark"  placement="bottom">
                        <template #content>
                            <p style="font-weight:700;margin-top:0px;margin-bottom:0px">If you are confused or unsure about this question, please consult your clinician</p>
                        </template>
                        <el-image :src="require('@/assets/Notification.png')" style="height:25px"></el-image>
                    </el-tooltip>
                    </div>
                    <el-radio-group v-model="multiplepregnancy" size="large">
                        <div style="display:flex;flex-direction: column;">
                            <el-radio-button label="No">No</el-radio-button>
                            <el-radio-button label="Yes">Yes</el-radio-button>
                        </div>
                    </el-radio-group>
                </div>                
                <div v-if="stepNumber == 5">
                    <div class="inputName">
                    PROM
                    <el-tooltip effect="dark"  placement="bottom">
                        <template #content>
                            <p style="font-weight:700;margin-top:0px;margin-bottom:0px">If you are confused or unsure about this question, please consult your clinician</p>
                        </template>
                        <el-image :src="require('@/assets/Notification.png')" style="height:25px"></el-image>
                    </el-tooltip>
                    </div>
                    <el-radio-group v-model="prom" size="large">
                        <div style="display:flex;flex-direction: column;">
                            <el-radio-button label="No">No</el-radio-button>
                            <el-radio-button label="Yes">Yes</el-radio-button>
                        </div>
                    </el-radio-group>
                </div>
                <div v-if="stepNumber == 6">
                    <div class="inputName">
                    Chorioamnionitis
                    <el-tooltip effect="dark"  placement="bottom">
                        <template #content>
                            <p style="font-weight:700;margin-top:0px;margin-bottom:0px">If you are confused or unsure about this question, please consult your clinician</p>
                        </template>
                        <el-image :src="require('@/assets/Notification.png')" style="height:25px"></el-image>
                    </el-tooltip>
                    </div>
                    <el-radio-group v-model="chorioamnionitis" size="large">
                        <div style="display:flex;flex-direction: column;">
                            <el-radio-button label="No">No</el-radio-button>
                            <el-radio-button label="Yes">Yes</el-radio-button>
                        </div>
                    </el-radio-group>
                </div>
                <div v-if="stepNumber == 7">
                    <div class="inputName">
                    Congenital Anomaly
                     <el-tooltip effect="dark"  placement="bottom">
                        <template #content>
                            <p style="font-weight:700;margin-top:0px;margin-bottom:0px">If you are confused or unsure about this question, please consult your clinician</p>
                        </template>
                        <el-image :src="require('@/assets/Notification.png')" style="height:25px"></el-image>
                    </el-tooltip>
                    </div>
                    <el-radio-group v-model="congenitialAnomaly" size="large">
                        <div style="display:flex;flex-direction: column;">
                            <el-radio-button label="No">No</el-radio-button>
                            <el-radio-button label="Yes">Yes</el-radio-button>
                        </div>
                    </el-radio-group>
                </div>
                <div v-if="stepNumber == 8">
                    <div class="inputName">
                    Level3
                    <el-tooltip effect="dark"  placement="bottom">
                        <template #content>
                            <p style="font-weight:700;margin-top:0px;margin-bottom:0px">If you are confused or unsure about this question, please consult your clinician</p>
                        </template>
                        <el-image :src="require('@/assets/Notification.png')" style="height:25px"></el-image>
                    </el-tooltip>
                    </div>
                    <el-radio-group v-model="level3" size="large">
                        <div style="display:flex;flex-direction: column;">
                            <el-radio-button label="No">No</el-radio-button>
                            <el-radio-button label="Yes">Yes</el-radio-button>
                        </div>
                    </el-radio-group>
                </div>
                <div v-if="stepNumber == 9">
                    <div class="inputName">
                    Prediction Model
                    <el-tooltip effect="dark"  placement="bottom">
                        <template #content>
                            <p style="font-weight:700;margin-top:0px;margin-bottom:0px">The prediction accuracy of the three prediction models is almost the same. Please refer to the results of the three prediction models comprehensively.</p>
                        </template>
                        <el-image :src="require('@/assets/Notification.png')" style="height:25px"></el-image>
                    </el-tooltip>
                    </div>
                    <el-radio-group v-model="model" size="large">
                        <div style="display:flex;flex-direction: column;">
                            <el-radio-button :label= "1">LSTM</el-radio-button>
                            <el-radio-button :label= "2">NN</el-radio-button>
                            <el-radio-button :label= "3">ANFIS</el-radio-button>
                        </div>
                    </el-radio-group>
                </div>
                <el-button class="continueButton" @click="nextStep" v-if="stepNumber == 0 || stepNumber == 1" :disabled = "continueDisabled">Continue</el-button>

            </div>
        </el-main>
        <div class="calculateArea" v-if="stepNumber == 9">
            <p style="margin-bottom:10px;margin-top:2px">Ready to calculate</p>
            <el-tooltip content="Please make sure you have entered all answers" placement="top" :disabled="!calculateDisabled">
                <div>
                    <el-button class="calculateButton" :disabled="calculateDisabled" @click="gotoResults">Calculate</el-button>
                </div>
            </el-tooltip>
        </div>
        <div class="footer">
            <div class="line2"></div>
            <el-steps :active="stepNumber" align-center finish-status="success">
                <el-step title="Step 1" description="Gestation" @click="changeStep(0)"></el-step>
                <el-step title="Step 2" description="Birthweight" @click="changeStep(1)"></el-step>
                <el-step title="Step 3" description="Maternal Antenatal Steroid" @click="changeStep(2)"></el-step>
                <el-step title="Step 4" description="Gender" @click="changeStep(3)"></el-step>
                <el-step title="Step 5" description="Multiple Pregnancy" @click="changeStep(4)"></el-step>
                <el-step title="Step 6" description="PROM" @click="changeStep(5)"></el-step>
                <el-step title="Step 7" description="Chorioamnionitis" @click="changeStep(6)"></el-step>
                <el-step title="Step 8" description="Congenital Anomaly" @click="changeStep(7)"></el-step>
                <el-step title="Step 9" description="Level3" @click="changeStep(8)"></el-step>
                <el-step title="Step 10" description="Prediction Model" @click="changeStep(9)"></el-step>
            </el-steps>
        </div>
    </el-container>
</template>
<script>
export default {
    name: 'Calculator',
    data()
    {
        return{
            gestationWeeks:'',
            gestationDays:'',
            birthweight:'',
            stepNumber: 0,
            mas: '',
            gender:'',
            multiplepregnancy:'',
            prom:'',
            chorioamnionitis:'',
            congenitialAnomaly:'',
            level3:'',
            model:'',
            predictionPercentage: 0,
            thresholdPrecentage: 0,
            death:''
        
        }
    },
    methods:{
        changeStep(index){
            //console.log(index);
            this.stepNumber = index
        },
        nextStep()
        {
            this.stepNumber++;
        },
        gotoResults(){
            const self = this;
            self.axios({
				method:'post',
				url: 'http://localhost:8081/getUserItem',
                datatype: "json",
				data: {
                    "gestationWeeks": self.gestationWeeks,
                    "gestationDays": self.gestationDays,
                    "birthweight": self.birthweight,
                    "mas":self.mas,
                    "gender":self.gender,
                    "multiplepregnancy":self.multiplepregnancy,
                    "prom":self.prom,
                    "chorioamnionitis":self.chorioamnionitis,
                    "congenitialAnomaly":self.congenitialAnomaly,
                    "level3":self.level3,
                    "model": self.model - 1,
				}
			})
			.then( res => {
                console.log(res.data);
                //console.log(res.data.data.anfisDeath)
                self.predictionPercentage = parseInt(parseFloat(res.data.data.Prediction) * 100);
                if(self.predictionPercentage < 0) self.predictionPercentage = 0;
                self.thresholdPrecentage = parseInt(parseFloat(res.data.data.Threshold) * 100);
                if(self.thresholdPrecentage < 0) self.thresholdPrecentage = 0;
                if(res.data.data.Death == "no") self.death = false;
                else self.death = true;
                 this.$router.push({path:'results',query:{
                    predictionValue: self.predictionPercentage,
                    thresholdValue: self.thresholdPrecentage,
                    model: self.model,
                }});
                console.log(self.predictionPercentage);
                
			})
			.catch( err => {
				console.log(err);
			})
            
        }
    },
    computed:{
        weekOrWeeks: {
            get: function()
            {
                const self = this;
                if(self.gestationWeeks =='' || self.gestationWeeks == '1') return true;
                else return false;
            }
        },
        dayOrDays: {
            get: function()
            {
                const self = this;
                if(self.gestationDays =='' || self.gestationDays == '1') return true;
                else return false;
            }
        },
        continueDisabled:{
            get: function()
            {
                if((this.stepNumber == 0 && this.gestationWeeks != '' && this.gestationDays != '') || (this.stepNumber == 1 && this.birthweight != '')) return false;
                else return true;
            }
        },
        calculateDisabled:{
            get:function()
            {
                if(this.gestationWeeks != '' && this.gestationDays != '' && this.birthweight != '' && this.gender != '' && 
                this.mas != '' && this.multiplepregnancy != '' && this.prom != '' && this.chorioamnionitis != '' && this.congenitialAnomaly != '' && this.level3 != '' && this.model != '') return false;
                else return true;
            }
        }
    },
    watch:{
        gestationWeeks: function()
        {
            if(this.gestationWeeks < 0)
            {
                this.$alert('Please input positive number', 'Warning', {
                    confirmButtonText: 'confirm',
                });
                this.gestationWeeks = '';
            }
        },
        gestationDays: function()
        {
            if(this.gestationDays < 0)
            {
                this.$alert('Please input positive number', 'Warning', {
                    confirmButtonText: 'confirm',
                });
                this.gestationDays = '';
            }
            if(this.gestationDays >= 7)
            {
                this.gestationWeeks = parseInt(this.gestationDays/7);
                this.gestationDays = this.gestationDays % 7;
                this.$alert('The data you entered has been converted to the correct format (days should be less than 7)', 'Warning', {
                    confirmButtonText: 'confirm',
                });
            }
        },
        birthweight: function()
        {
            if(this.birthweight < 0)
            {
                this.$alert('Please input positive number', 'Warning', {
                    confirmButtonText: 'confirm',
                });
                this.birthweight = '';
            }
        },
        mas:function()
        {
            if(this.mas != '') 
            {
            clearTimeout(this.timer);  //清除延迟执行
 
            this.timer = setTimeout(()=>{   //设置延迟执行
                this.stepNumber++;
            },500);
                
            }
        },
        gender:function()
        {
            if(this.gender != '') 
            {
            clearTimeout(this.timer);  //清除延迟执行
 
            this.timer = setTimeout(()=>{   //设置延迟执行
                this.stepNumber++;
            },500);
                
            }
        },
        multiplepregnancy:function()
        {
            if(this.multiplepregnancy != '') 
            {
            clearTimeout(this.timer);  //清除延迟执行
 
            this.timer = setTimeout(()=>{   //设置延迟执行
                this.stepNumber++;
            },500);
                
            }
        },
        prom:function()
        {
            if(this.prom != '') 
            {
            clearTimeout(this.timer);  //清除延迟执行
 
            this.timer = setTimeout(()=>{   //设置延迟执行
                this.stepNumber++;
            },500);
                
            }
        },
        chorioamnionitis:function()
        {
            if(this.chorioamnionitis != '') 
            {
            clearTimeout(this.timer);  //清除延迟执行
 
            this.timer = setTimeout(()=>{   //设置延迟执行
                this.stepNumber++;
            },500);
                
            }
        },
        congenitialAnomaly:function()
        {
            if(this.congenitialAnomaly != '') 
            {
            clearTimeout(this.timer);  //清除延迟执行
 
            this.timer = setTimeout(()=>{   //设置延迟执行
                this.stepNumber++;
            },500);
                
            }
        },
        level3:function()
        {
            if(this.level3 != '') 
            {
            clearTimeout(this.timer);  //清除延迟执行
 
            this.timer = setTimeout(()=>{   //设置延迟执行
                this.stepNumber++;
            },500);
                
            }
        },
    }
}
</script>
<style scoped>
    .el-main{
        padding-left: 18%;
    }
    .el-header{
        width: 100%;
        height: 130px;
        padding-left: 18%;
        text-align: left;
    }
    .headerImageAndName
    {
        display: flex;
        align-items: center;
    }
    .headerName{
        font-family: "Bariol";
        color: #99c;
        font-size: 30px;
        margin-left: 20px;
    }

    .step{
        font-size: 25px;
        line-height: 1em;
        color: #9999CB;
        font-family: "Bariol";
        padding: 10px 0px;
        margin-top: 5px;
        margin-bottom: 10px;
    }
    .line{
        background: #9999CB;
        height: 1px;
        width: 80%;
        margin-top: 20px;
    }
    .line2{
        background: #9999CB;
        height: 1px;
        width: 100%;
    }
    .el-steps{
        margin-top: 20px;
    }
    .inputArea{
        display: flex;
        flex-direction: column;
        text-align: left;
        margin-top: 6%;
    }
    .inputName{
        font-size: 31px;
        color: #515151;
        margin-bottom: 25px;
        line-height: 35px;
        font-family: 'Bariol';
        text-align: left;
        font-weight: 700;
    }

    .el-input >>> .el-input__inner 
    {
        border-top: none;
        border-left: none;
        border-right: none;
    }
    .footer{
        z-index: 999;
        position: fixed;
        bottom: 0;
        width: 100%;
    }
    .continueButton, .continueButton:focus:not(.continueButton:hover){ 
        margin-right: 12px;
        border: 1px solid #2794f8;
        border-radius: 12px;
        /* box-shadow: 0 2px 4px 0 #f4f4f4; */
        color: #2794f8;
        background: white;
        height: fit-content;
        width: fit-content;
        box-shadow: 0 5px 15px -4px rgb(0 0 0 / 39%);
    }
    /*鼠标悬浮，没有按下；鼠标按下后抬起，没有移开*/
    .continueButton:focus, .continueButton:hover{
        background: #eaf5ff;
        border: 1px solid #2794f8 !important;
        color: #2794f8;
    }
    /*鼠标按下，没有抬起*/
    .continueButton:active {
        background: whitesmoke;
        color: white;
    }
    .el-radio-button /deep/ .el-radio-button__inner {
        border-left-width: 1px;
        border-left-style: solid;
        border-left-color: #dcdfe6;
        border-radius: 10px !important;
        margin-top: 15px;
        width: 250px;
        font-family: 'Bariol';
        font-size: 20px;
        box-shadow: 0 5px 15px -4px rgb(0 0 0 / 39%);
    }
    .el-radio-button:first-child >>> .el-radio-button__inner
    {
        box-shadow: 0 5px 15px -4px rgb(0 0 0 / 39%) !important;
    }
    .el-radio-button /deep/ .el-radio-button__original-radio:checked+.el-radio-button__inner
    {
        background-color: #9999CB;
        border-color: #9999CB;
    }
    .calculateArea{
        font-family: 'Bariol';
        font-size: 1.5em;
        color: #99c;
    }
    .calculateButton{
        padding: 15px 45px;
        border-radius: 24px;
        background-color: #fff;
        box-shadow: 0 5px 15px -4px rgb(0 0 0 / 39%);
        font-family: Moon, sans-serif;
        color: #99c;
        font-size: 24px;
        font-weight: 700;
        text-align: center;
        height: 50px;
    }
</style>