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
			<a class="button" href="#">
				Ver Menú
			</a>
			</div>
		</div>
	</div>
</div>
</template>

<script setup>

</script>

<style scoped>
    .picture img{
        width: 100%;
    }
    .plan:hover {
    transform: scale(1.01);
    /* box-shadow: 1px 1px 20px  rgba(0, 0, 0, 0.473); */
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
    }

    .plan .button:hover, .plan .button:focus {
    background-color: #393939;
    }
</style>
