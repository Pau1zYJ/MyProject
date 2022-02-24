<template>
    <div class="main">
    <h5>What is UoN-PREDICT?</h5>
    <p>
        UoN-PREDICT is a digital tool designed to <strong>predict</strong>(estimate) outcomes for extremely preterm infants if they are offered active care after birth. UoN-PREDICT may be used to assist with counselling families about the possible outcomes for very preterm infants. Active management is defined as resuscitation at birth (if required) and admission to a neonatal intensive care unit (NICU) for ongoing care.The tool can be used before birth to predict outcome, based on a combination of risk factors. Babies born under 28 weeks cannot survive without active management. The mortality data in this tool does not include deaths where active management was not provided.
    </p>
    <h5>Can UoN-PREDICT be used before birth?</h5>
    <p>
        Yes. UoN-PREDICT can be used before birth. This allows the treating clinician to determine how infant outcomes can be improved by providing perinatal interventions such as antenatal corticosteroids and in-utero transfer (to facilitate tertiary centre birth) before birth. This may further assist with parent counselling and decision-making to provide or withhold such interventions.
    </p>
    <h5>What outcomes does UoN-PREDICT estimate?</h5>
    <p>
        UoN-PREDICT will predict (estimate) the mortality of preterm infants. The other two outcomes are the threshold of selected prediction model and the final prediction result (death or Survived).    </p>
    <h5>How accurate are the outcome estimations?</h5>
    <p>
        UoN-PREDICT estimates potential outcomes for an infant based on a combination of 9 perinatal factors. As such, the data generated are more accurate than outcome data based on gestational age alone.</p>
       <p> UoN-PREDICT cannot precisely determine the exact outcome for an individual infant as circumstances and clinical course in NICU cannot be predicted before birth.
    </p>
    <h5>Which nine perinatal risk factors does NIC-PREDICT require?</h5>
        <p>1. Gestational age (in completed weeks)</p>
        <p>2. Birthweight</p>
        <p>3. Maternal Antenatal Steroid (No Treatment, Incomplete Treatment or Complete Treatment)</p>
        <p>4. Gender (male or Female)</p>
        <p>5. multiple Pregnancy (Yes or No)</p>
        <p>6. PROM (Yes or No)</p>
        <p>7. Chorioamnionitis(Yes or No)</p>
        <p>8. Congenital Anomaly (Yes or No)</p>
        <p>9. Level3 (Yes or No)</p>
        <p>Also, the user can select three different prediction models named LSTM,NN as well as ANFIS.  </p>
        <h5>Why was UoN-PREDICT developed?</h5>
        <p>
            Clinicians caring for and advising parents seriously overestimate both mortality and disability rates for children born extremely preterm; hence their advice must be too pessimistic under most circumstances. 
            <el-link type="primary">(Boland et al., 2016)</el-link>
        </p>
        <p>The research team developed UoN-PREDICT as there was no validated tool for estimating outcome prior to birth in children born extremely preterm in Nottingham. We also wanted to develop a tool that could be used for all infants offered active care from birth, not just those who survived to admission to a neonatal intensive care unit (NICU)- including babies born in non-tertiary settings whose parents wanted active management of their baby from birth.</p>
        <p><strong>UoN-PREDICT has the following design advantages:</strong></p>
        <p><strong>1.The tool can be used prior to the birth of the baby to estimate outcome</strong></p>
        <p>This allows clinicians to see how survival rates change by providing or withholding pre-birth interventions, including antenatal corticosteroids, and transfer to a tertiary centre to facilitate inborn birth. This information can be used when counselling parents about management options to improve infant outcome.</p>
        <p><strong>2.The tool can be used to predict outcome in inborn (tertiary born) and outborn (non-tertiary born) infants.</strong></p>
        <p><strong>3.The tool predicts outcome in infants born on every gestation weeks</strong></p>
        <h5>Credits and acknowledgements</h5>
        <p>This application was developed as a collaboration between Dr T'ng Chang Kwok, Professor Chao Chen and Yajun Zhao(coding and development).</p>
        <p>The software for NIC-PREDICT is authored and owned by Yajun Zhao, postgraduate student  majoring in Computer Science at the University of Nottingham</p>
    </div>
</template>


<style scoped>
    .main{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 16px;
    }
    p
    {
        text-align: left;
    }
    h5{
        font-size: 1.5rem;
        font-weight:500;
        letter-spacing: normal;
    }
</style>