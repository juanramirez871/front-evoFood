<template>
<div>
    <div class="plan">
		<div class="inner">
    <ul class="features">
        <li>
            <span class="icon">
                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                </svg>
            </span>
            <span>Available</span>
        </li>
    </ul>
			<span class="pricing">
				<span>
					$Price
				</span>
			</span>
			<p class="title">Title</p>
			<div class="picture">
                    <img
                        src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
                    />
            </div>
			<div class="action">
            <el-button class="button" style="margin-left: 16px" @click="drawer = true">
                Ver Menú
            </el-button>
			</div>
		</div>
	</div>
</div>
<el-drawer v-model="drawer" title="Selecciona a tu gusto"  :size="getDrawerSize()">
    <div class="imgFoot">
        <img src="https://marketing4ecommerce.net/wp-content/plugins/accelerated-mobile-pages/images/SD-default-image.png" alt="comida">
    </div>
    <div class="titulo">
        <h1>Titulo</h1>
    </div>
    <div class="seleccion">
        <el-row :gutter="20">
            <el-col :span="12" ><div />
                <div>
                    <h3>
                        Ingredientes
                    </h3>
                </div>
                <br>
                <div>
                    <el-checkbox-group v-model="checkList">
                        <el-checkbox label="Option A" />
                        <el-checkbox label="Option B" />
                        <el-checkbox label="Option C" />
                        <el-checkbox label="disabled" disabled />
                    </el-checkbox-group>
                </div>
            </el-col>
            <el-col :span="12"><div />
                <div>
                    <h3>
                        Adicionales
                    </h3>
                </div>
                <br>
                <div>
                    <el-checkbox-group v-model="checkList2">
                        <el-checkbox label="Option A" />
                        <el-checkbox label="Option B" />
                        <el-checkbox label="Option C" />
                        <el-checkbox label="disabled" disabled />
                    </el-checkbox-group>
                </div>
            </el-col>
        </el-row>
    </div>
    <br>
    <hr>
    <br>
    <el-row :gutter="20">
            <el-col :span="12" class="borderCol"><div />
                <div>
                    <h3>
                        Cantidad
                    </h3>
                    <div class="titulo">
                        <el-input-number v-model="num" :min="1" :max="10" @change="handleChange" />
                    </div>
                    <h3>
                        Precio
                    </h3>
                    <h3>$</h3>
                </div>
                <br>
                <div>

                </div>
            </el-col>
            <el-col :span="12"><div />
                <div>
                    <h3>
                        Total
                    </h3>
                    <h3>$</h3>
                </div>
                <br>
                <div>

                </div>
            </el-col>
        </el-row>
        <br>
        <hr>
        <br>
        <el-row :gutter="20">
            <el-col :span="12" class="borderCol"><div />
                <div>
                    <h3>
                        Medio de pago
                    </h3>
                    <div class="titulo">
                        <el-select v-model="value" filterable placeholder="Select">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            />
                        </el-select>
                    </div>
                </div>
                <br>
                <div>

                </div>
            </el-col>
            <el-col :span="12"><div />
                <div>
                    <h3>
                        Mesa
                    </h3>
                    <div class="titulo">
                        <el-select v-model="value" filterable placeholder="Select">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            />
                        </el-select>
                    </div>
                </div>
                <br>
            </el-col>
        </el-row>
        <br>
        <div class="titulo">
            <el-button class="pagar" type="success" round>Pagar</el-button>
        </div>
        <br><br>
</el-drawer>
</template>

<script setup>
import { ref } from 'vue';

const checkList = ref(['selected and disabled', 'Option A', 'Option B'])
const checkList2 = ref(['selected and disabled'])

const drawer = ref(false);
const getDrawerSize = () => {
    return window.innerWidth < 768 ? '100%' : '50%';
};

const num = ref(1)
const handleChange = () => {
    console.log(value)
}

const value = ref('')
    const options = [
    {
        value: 'Option1',
        label: 'Option1',
    },
    {
        value: 'Option2',
        label: 'Option2',
    },
    {
        value: 'Option3',
        label: 'Option3',
    },
    {
        value: 'Option4',
        label: 'Option4',
    },
    {
        value: 'Option5',
        label: 'Option5',
    },
]
</script>

<style scoped>
    .picture img{
        width: 100%;
    }
    .plan:hover {
    transform: scale(1.01);
    }
    .plan {
        border-radius: 16px;
        padding: 10px;
        background-color: #cdcdcd;
        color: #697e91;
        width: 14rem;
    }
    .plan strong {
        font-weight: 600;
        color: #425275;
    }
    .plan .inner {
        align-items: center;
        padding: 20px;
        padding-top: 40px;
        background-color: #ffffff;
        border-radius: 12px;
        position: relative;
    }
    .plan .pricing {
        position: absolute;
        top: 0;
        right: 0;
        background-color: #ffff14;
        border-radius: 99em 0 0 99em;
        display: flex;
        align-items: center;
        padding: 0.625em 0.75em;
        font-size: 1.25rem;
        font-weight: 600;
        color: #425475;
    }
    .plan .pricing small {
        color: #707a91;
        font-size: 0.75em;
        margin-left: 0.25em;
    }
    .plan .title {
        display: flex;
        justify-content: center;
        font-weight: 600;
        font-size: 1.25rem;
        color: #425675;
    }
    .plan .title + * {
        margin-top: 0.75rem;
    }
    .plan .info + * {
        margin-top: 1rem;
    }
    .plan .features {
        display: flex;
        position: relative;
        bottom: 1rem;
        left: -2rem;
        justify-content: flex-start;
    }
    .plan .features li {
        display: flex;
    }
    .plan .features .icon {
    background-color: #66ca1f;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    }
    .plan .features .icon svg {
    width: 14px;
    height: 14px;
    }
    .plan .features + * {
    margin-top: 1.25rem;
    }
    .plan .action {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
    }
    .plan .button {
    background-color: #1f1f20;
    border-radius: 6px;
    color: #ffffff;
    font-weight: 500;
    font-size: 1.125rem;
    text-align: center;
    border: 0;
    outline: 0;
    width: 100%;
    padding: 0.625em 0.75em;
    text-decoration: none;
    margin-top: 0.75rem;
    cursor: pointer;
    }
    .plan .button:hover, .plan .button:focus {
    background-color: #393939;
    }
    .imgFoot{
        display: flex;
        justify-content: center;
    }
    .imgFoot img{
        width: 70%;
        height: 40vh;
    }
    @media (max-width:768px) {
        .imgFoot img{
        width: 100%;
        height: 30vh;
    }
    }
    .titulo{
        display: flex;
        justify-content: center;
    }
    .seleccion el-row{
        max-width: 100%;
    }
    h3{
        display: flex;
        justify-content: center;
    }
    .borderCol{
        border-right-color: #b9b9b9;
        border-right-width: 2px;
        border-right-style: inset;
    }
    .pagar{
        width: 30%;
        letter-spacing: 0.5rem;
        font-size: 1rem;
    }
</style>
