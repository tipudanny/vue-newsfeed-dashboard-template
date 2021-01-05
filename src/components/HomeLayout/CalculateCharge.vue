<template>
    <div>
        <section id="pricing" class="calculate-charge-section section-padding clearfix">
            <div class="container">
                <!-- section title -->
                <div class="row justify-content-center">
                    <div class="col-xl-9 text-center">
                        <div class="section-title">
                            <h2>Calculate Charge</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitd do eiusmod tempor incididunt ut lore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                        </div>
                    </div>
                </div>
                <!-- calculate charge area -->
                <form action="#" method="POST">
                    <div class="row mt-70">
                        <!-- signle custom  -->
                        <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div class="single-calculate">
                                <div class="form-group">
                                    <label for="form">From</label>
                                    <select class="custom-select" name="selectForm" id="form">
                                        <option value="">Dhaka City</option>
                                        <option value="">Barguna</option>
                                        <option value="">Bhola</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <!-- signle custom  -->
                        <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div class="single-calculate">
                                <div class="form-group">
                                    <label for="destination">Destination</label>
                                    <select class="custom-select" name="selectForm" id="destination">
                                        <option value="">Dhaka City</option>
                                        <option value="">Barguna</option>
                                        <option value="">Bhola</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <!-- signle custom  -->
                        <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div class="single-calculate">
                                <div class="form-group">
                                    <label for="service">Service</label>
                                    <select class="custom-select" name="selectForm" id="service">
                                        <option value="">Regular</option>
                                        <option value="">Some Day</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <!-- signle custom  -->
                        <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div class="single-calculate">
                                <div class="form-group">
                                    <label for="service">Weight (KG)</label>
                                    <input type="number" class="form-control">
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-12">
                            <div class="row justify-content-center">
                                <div class="col-xl-6 col-lg-7 col-md-8 col-sm-10 ">
                                    <div class="calculate-result text-center">
                                        <strong>55TK</strong>
                                    </div>
                                    <!-- pricing condition -->
                                    <div class="pricing-condition">
                                        <ul type="star">
                                            <li>* 1% Cash Handling & Risk Management Charge will be added. </li>
                                            <li>* All charges are VAT & Tax excluded. </li>
                                            <li>* Unavoidable circumstances may change in time of delivery.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    </div>
</template>

<script>
export default {
name: "CalculateCharge"
}
</script>

<style scoped>

</style>