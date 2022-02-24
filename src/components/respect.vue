<template>
    <div class="container">
        <el-header class="header">
            <div class="iconImage">
                <el-image :src="require('@/assets/icon.png')" fit="fill"></el-image>
            </div>
            <!-- <div class="headerButtonArea">
                <el-button type="text" class="headerButton">ABOUT</el-button>
                <el-button type="text" class="headerButton">BEGIN</el-button>
            </div> -->
        </el-header>
        <el-main class="mainBody">
            <div class="mainInformation">
                <h1 style="color: white;font-size: 45px;line-height: 44px;font-weight: 700;margin-bottom: 10px;">New-Life Calculator for Frail Perterm Infants</h1>
                <p class="mainBodyNotification">Do you want to know healthy condition of your baby? Has anyone ever talked to you about the worst outcome of your preterm infants? This calculator called <strong>UoN-PREDICT</strong> identifies whether a <strong>frail</strong> boby may be nearing the end of life and provides information that helps to determine their care needs.</p>
                <div class="mainBodyMinutesNotification">
                    <el-image :src="require('@/assets/Time.png')" fit="fill" style="margin-right:10px;width:30px"></el-image>
                    <p style="font-size: 20px; line-height: 28px; font-weight: 400; letter-spacing: 1px; color:white">2-3 minutes to complete</p>
                </div>
            </div>
            <div class="mainCarousel">
                <el-carousel style="height:100%">
                  <el-carousel-item v-for="item in carouselItem" :key="item.id">
                      <el-image v-bind:src="item.url" ></el-image>
                  </el-carousel-item>
                </el-carousel>
            </div>
        </el-main>
        <div class="functionArea">
            <el-button round class="functionAreaButton" @click="gotoCalculator">Begin</el-button>
            <div class="line"></div>
            <el-button round class="functionAreaButton" @click="gotoTextArea">About the Model</el-button>
        </div>
        <div class="notification">
            Disclaimer: This calculator does not predict the future for any single individual.
        </div>
        <div class="textArea" id="textArea">
            <div class="textAreaHead">
                <el-image :src="require('@/assets/References.png')" style="height:50px;margin-right:15px"></el-image>
                <h2>Want to Know UoN-PREDICT?</h2>
            </div>   
            <div class="break"></div>        
            <h5 class="textAreaTitle">What is UoN-PREDICT?</h5>
            <p class="textAreaText">
                UoN-PREDICT is a digital tool designed to <strong>predict</strong>(estimate) outcomes for extremely preterm infants if they are offered active care after birth. UoN-PREDICT may be used to assist with counselling families about the possible outcomes for very preterm infants. Active management is defined as resuscitation at birth (if required) and admission to a neonatal intensive care unit (NICU) for ongoing care.The tool can be used before birth to predict outcome, based on a combination of risk factors. Babies born under 28 weeks cannot survive without active management. The mortality data in this tool does not include deaths where active management was not provided.
            </p>
            <div class="break"></div>
            <h5 class="textAreaTitle">Can UoN-PREDICT be used before birth?</h5>
            <p class="textAreaText">
                Yes. UoN-PREDICT can be used before birth. This allows the treating clinician to determine how infant outcomes can be improved by providing perinatal interventions such as antenatal corticosteroids and in-utero transfer (to facilitate tertiary centre birth) before birth. This may further assist with parent counselling and decision-making to provide or withhold such interventions.
            </p>
            <div class="break"></div>
            <h5 class="textAreaTitle">What outcomes does UoN-PREDICT estimate?</h5>
            <p class="textAreaText">
                UoN-PREDICT will predict (estimate) the mortality of preterm infants. The other two outcomes are the threshold of selected prediction model and the final prediction result (death or Survived).    </p>
            <div class="break"></div>
            <h5 class="textAreaTitle">How accurate are the outcome estimations?</h5>
            <p class="textAreaText">
                UoN-PREDICT estimates potential outcomes for an infant based on a combination of 9 perinatal factors. As such, the data generated are more accurate than outcome data based on gestational age alone.</p>
            <p class="textAreaText"> UoN-PREDICT cannot precisely determine the exact outcome for an individual infant as circumstances and clinical course in NICU cannot be predicted before birth.</p>
            <h5 class="textAreaTitle">Which nine perinatal risk factors does NIC-PREDICT require?</h5>
            <p class="textAreaText">1. Gestational age (in completed weeks)</p>
            <p class="textAreaText">2. Birthweight</p>
            <p class="textAreaText">3. Maternal Antenatal Steroid (No Treatment, Incomplete Treatment or Complete Treatment)</p>
            <p class="textAreaText">4. Gender (male or Female)</p>
            <p class="textAreaText">5. multiple Pregnancy (Yes or No)</p>
            <p class="textAreaText">6. PROM (Yes or No)</p>
            <p class="textAreaText">7. Chorioamnionitis(Yes or No)</p>
            <p class="textAreaText">8. Congenital Anomaly (Yes or No)</p>
            <p class="textAreaText">9. Level3 (Yes or No)</p>
            <p class="textAreaText">Also, the user can select three different prediction models named LSTM,NN as well as ANFIS.  </p>
            <div class="break"></div>
            <h5 class="textAreaTitle">Why was UoN-PREDICT developed?</h5>
            <p class="textAreaText">
                Clinicians caring for and advising parents seriously overestimate both mortality and disability rates for children born extremely preterm; hence their advice must be too pessimistic under most circumstances. </p>
            <p class="textAreaText">The research team developed UoN-PREDICT as there was no validated tool for estimating outcome prior to birth in children born extremely preterm in Nottingham. We also wanted to develop a tool that could be used for all infants offered active care from birth, not just those who survived to admission to a neonatal intensive care unit (NICU)- including babies born in non-tertiary settings whose parents wanted active management of their baby from birth.</p>
            <p class="textAreaText"><strong>UoN-PREDICT has the following design advantages:</strong></p>
            <p class="textAreaText"><strong>1.The tool can be used prior to the birth of the baby to estimate outcome</strong></p>
            <p class="textAreaText">This allows clinicians to see how survival rates change by providing or withholding pre-birth interventions, including antenatal corticosteroids, and transfer to a tertiary centre to facilitate inborn birth. This information can be used when counselling parents about management options to improve infant outcome.</p>
            <p class="textAreaText"><strong>2.The tool can be used to predict outcome in inborn (tertiary born) and outborn (non-tertiary born) infants.</strong></p>
            <p class="textAreaText"><strong>3.The tool predicts outcome in infants born on every gestation weeks</strong></p>
            <div class="break"></div>
            <h5 class="textAreaTitle">Credits and acknowledgements</h5>
            <p class="textAreaText">This application was developed as a collaboration between Dr T'ng Chang Kwok, Professor Chao Chen and Yajun Zhao(coding and development).</p>
            <p class="textAreaText">The software for NIC-PREDICT is authored and owned by Yajun Zhao, postgraduate student  majoring in Computer Science at the University of Nottingham</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "respect",
    data()
    {
        return{
            carouselItem:[
                {url:require('@/assets/carousel.png'),id:'1'},
                {url:require('@/assets/carousel2.png'),id:'2'},
                {url:require('@/assets/carousel3.png'),id:'3'},
            ],
            url:require('@/assets/carousel2.png')
        }
    },
    methods:{
        gotoCalculator(){
            this.$router.push('/new-life-calculator');
        },
        gotoTextArea(){
            var page = document.querySelector('#textArea')
            window.scrollTo({
                'top': page.offsetTop,
                'behavior': 'smooth'
            })
        }
    }
}
</script>

<style scoped>
    .container{
        width: 100%;
        height: 100%;
        background-color: #409EFF;
    }
    .header{
        width: 100%;
        height: 180px;
        display: flex;
        flex-direction: row;
    }
    .iconImage{
        width: 150px;
        height: 150px;
        background: white;
        border-radius: 30px;
        margin-top: 15px;
        margin-left: 250px;
    }
    .headerButtonArea{
        width: 200px;
        height: 80px;
        margin-left: 50%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .headerButton{
        font-weight: 700;
        font-size: 20px;
        line-height: 20px;
        color: white !important;
        font-family: sans-serif;
    }
    .mainBody{
        width: 100%;  
        display: flex;  
    }
    .mainInformation{
        width: 35%;
        height: 40%;
        text-align: left;
        margin-left: 17%;
    }
    .mainBodyNotification
    {
        margin-bottom: 20px;
        font-family: Bariol, sans-serif;
        color: #fff;
        font-size: 24px;
        line-height: 28px;
        font-weight: 400;
        letter-spacing: 1px;
        margin-top: 0px;
    }
    .mainBodyMinutesNotification{
        align-items: center;
        font-family: Bariol, sans-serif;
        
        display: flex;
        
    }
    .mainCarousel{
        width: 35%;
        height: 40%;
        margin-left: 150px;
    }
    .functionArea{
        width: 35%;
        height: 40%;
        font-size: 20px;
        font-weight: 700;
        color: #409EFF;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
    }
    .functionAreaButton{
        width: 250px;
        font-size: 20px;
        font-weight: 700;
        height: 45px;
    }
    .line{
        width: 0.5px;
        height: 50px;
        background: #e2e2e2;
    }
    .notification{
        color: rgba(61,61,61,0.73);
        font-size: 16px;
        font-weight: 700;
        letter-spacing: 0px;
        margin-bottom: 50px;
    }

    .textArea{
        padding: 40px 40px 0;
        border-radius: 20px 20px 20px 20px;
        background-color: #fff;
        margin: 0 auto 0;
        max-width: 710px;
        text-align: initial;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        height: 2000px;
    }
    .textAreaHead
    {
        text-align: center;
        font-size: 25px;
        line-height: 36px;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .break{
        margin: 20px 0;
        border: 1px solid #e2e2e2;
    }
    .textAreaTitle{
        margin: 20px 0 10px;
        font-size: 21px;
        line-height: 24px;
        font-weight: 700;
    }
    .textAreaText{
         margin: 0 0 10px;
        font-size: 17px;
    }
</style>