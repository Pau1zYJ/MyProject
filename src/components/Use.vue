<template>
                <div class = "getInput">
                    <div style="display: flex; align-items: center; justify-content: center;">
                        <h5>Gestation:</h5>
                        <el-input v-model="gestationWeeks" type = "number" style="width: 80px"></el-input>
                        <p v-if="weekOrWeeks" style="margin-left: 10px">week</p>
                        <p v-else style="margin-left: 10px">weeks</p>
                        <el-input v-model="gestationDays" type = "number" style="width: 60px"></el-input>
                        <p v-if="dayOrDays" style="margin-left: 10px">day</p>
                        <p v-else style="margin-left: 10px">days</p>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center;">
                        <h5>Birthweight:</h5>
                        <el-input v-model="birthweight" type = "number" class="BirthweightInput"></el-input>
                        <p style="margin-left: 10px">g</p>
                    </div>
                    
                    <div class="select">
                        <h5>Maternal Antenatal Steroid:</h5>
                        <el-select v-model="mas" placeholder="Maternal Antenatal Steroid:">
                            <el-option label="No Treatment" value="NoTreatment"></el-option>
                            <el-option label="Incomplete Treatment" value="IncompleteTreatment"></el-option>
                            <el-option label="Complete Treatment" value="CompleteTreatment"></el-option>
                        </el-select>
                    </div>
                    <div class="select">
                        <h5>Gender:</h5>
                        <el-radio-group v-model="gender">
                            <el-radio-button label="Male" border size = "large"></el-radio-button>
                            <el-radio-button label="Female" border size = "large"></el-radio-button>
                        </el-radio-group>
                    </div>
                    <div class="select">
                        <h5>Multiple Pregnancy:</h5>
                        <el-radio-group v-model="multiplepregnancy">
                            <el-radio-button label="No" border size = "large"></el-radio-button>
                            <el-radio-button label="Yes" border size = "large"></el-radio-button>
                        </el-radio-group>
                    </div>
                    <div class="select">
                        <h5>PROM:</h5>
                        <el-radio-group v-model="prom">
                            <el-radio-button label="No" border size = "large"></el-radio-button>
                            <el-radio-button label="Yes" border size = "large"></el-radio-button>
                        </el-radio-group>
                    </div>
                    <div class="select">
                        <h5>chorioamnionitis:</h5>
                        <el-radio-group v-model="chorioamnionitis">
                            <el-radio-button label="No" border size = "large"></el-radio-button>
                            <el-radio-button label="Yes" border size = "large"></el-radio-button>
                        </el-radio-group>
                    </div>
                    <div class="select">
                        <h5>Congenital Anomaly:</h5>
                        <el-radio-group v-model="congenitialAnomaly">
                            <el-radio-button label="No" border size = "large"></el-radio-button>
                            <el-radio-button label="Yes" border size = "large"></el-radio-button>
                        </el-radio-group>
                    </div>
                    <div class="select">
                        <h5>level3:</h5>
                        <el-radio-group v-model="level3">
                            <el-radio-button label="No" border size = "large"></el-radio-button>
                            <el-radio-button label="Yes" border size = "large"></el-radio-button>
                        </el-radio-group>
                    </div>
                    <div class="select">
                        <el-radio-group v-model="model">
                            <el-radio :label="0">LSTM</el-radio>
                            <el-radio :label="1">NN</el-radio>
                            <el-radio :label="2">ANFIS</el-radio>
                        </el-radio-group>
                    </div>
                    <el-button @click="predict" :disabled = "predictDisabled">Predict</el-button>
                    
                </div>
                <div class="outputResults">
                    <h5 style="font-size: 20px;margin-top: 50px">Outcome with active management</h5>
                    <div class = "outcomeArea">
                        <div class="outcome">
                            <h5 style="font-size: 20px">Prediction</h5>
                            <el-progress type="dashboard" :percentage="predictionPercentage" :color="colors" :stroke-width = 10></el-progress>
                        </div>
                        <div class="outcome">
                            <h5 style="font-size: 20px">Threshold</h5>
                            <el-progress type="dashboard" :percentage="thresholdPrecentage" :color="colors" :stroke-width = 10></el-progress>
                        </div>
                        <div class="outcome">
                            <el-result icon="error" title="Died"  v-if = "death"> </el-result>
                            <el-result icon="success" title="Survived" v-else > </el-result>
                        </div>
                    </div>
                </div>
</template>

<script>
export default {
    name:'Use',
    data()
    {
        return{
            gestationWeeks: '',
            gestationDays: '',
            gestation: '',
            birthweight:'',
            gender: 'Male',
            mas: '',
            multiplepregnancy: 'No',
            prom: 'No',
            chorioamnionitis: 'No',
            congenitialAnomaly: 'No',
            level3: 'No',
            predictionPercentage: 0,
            thresholdPrecentage: 0,
            model:0,
            //predictDisabled: false,
            colors:[
                {color: '#f56c6c', predictionPercentage: 20},
                {color: '#e6a23c', predictionPercentage: 40},
                {color: '#5cb87a', predictionPercentage: 60},
                {color: '#1989fa', predictionPercentage: 80},
                {color: '#6f7ad3', predictionPercentage: 100},
                {color: '#f56c6c', thresholdPrecentage: 20},
                {color: '#e6a23c', thresholdPrecentage: 40},
                {color: '#5cb87a', thresholdPrecentage: 60},
                {color: '#1989fa', thresholdPrecentage: 80},
                {color: '#6f7ad3', thresholdPrecentage: 100}
             ],
            death: false,
            //weekOrWeeks: true,
            //dayOrDays: true
        }
    },
    methods:{
        predict(){
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
                    "model": self.model + ""
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
			})
			.catch( err => {
				console.log(err);
			})
      },
    },
    computed:{
        predictDisabled: {
            get: function()
            {
                const self = this;
                if(self.gestationWeeks != '' && self.gestationDays != '' && self.birthweight != '' && self.mas != '')  return false;
                else return true;
            }
        },
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
        }
    }
}
</script>

<style scoped>
    .el-input{
      margin-left: 10px;
      
  }
  .BirthweightInput{
      width: 30%;
  }
  .el-radio-group{
      margin-left: 10px;
  }

  .getInput{
        display: grid;
        align-items: center;
        justify-content: center;       
        width: 33.3%;       
        border-radius: 4px;
        height: auto;
        box-shadow: 0 1px 5px rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%);
        border-radius: 4px;
        background: #fff;
        padding: 10px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .select{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .el-select{
      margin-left: 10px;
  }

  .el-button{
     margin-top: 20px;
  }

  .outputResults{
      box-shadow: 0 1px 5px rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%);
        border-radius: 4px;
        background: #fff;
        padding: 10px;
        margin-left: 50px;
        width: 100%;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  .outcomeArea{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 70px;
  }

  .outcome{
        box-shadow: 0 1px 5px rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%);
        border-radius: 4px;
        border-radius: 4px;
        vertical-align: top;
        background: #fff;
        width: 30%;
  }
</style>