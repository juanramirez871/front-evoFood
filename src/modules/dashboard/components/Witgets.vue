<template>
    <div class="stats shadow">
        <div class="stat">
            <div class="stat-title">VENTAS</div>
            <div class="stat-value">89,400</div>
            <div class="stat-desc">21% more than last month</div>
        </div>
    </div>
    <div class="stats shadow">
        <div class="stat">
            <div class="stat-title">TOTAL TRAFICO</div>
            <div class="stat-value">89,400</div>
            <div class="stat-desc">21% more than last month</div>
        </div>
    </div>
    <div class="stats shadow">
        <div class="stat">
            <div class="stat-title">PAGINA VISITADA</div>
            <div class="stat-value">89,400</div>
            <div class="stat-desc">21% more than last month</div>
        </div>
    </div>
    <div class="stats shadow">
        <div class="stat">
            <div class="stat-title">COMIDA POPULAR</div>
            <div class="stat-value">Hamburguesa</div>
            <div class="stat-desc">21% </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.stats {
    display: inline-grid;
    background-color: #333333;
    color: #fff;
    border-radius: 1rem;
    border: 1px solid gray;
    margin-bottom: 1rem;
}
.shadow {
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
}
.stat {
    display: inline-grid;
    width: 100%;
    grid-template-columns: repeat(1, 1fr);
    column-gap: 1rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
}
.stat-title,
.stat-value,
.stat-desc {
    white-space: nowrap;
}
.stat-title {
    grid-column-start: 1;
    color: rgb(197, 194, 194);
    font-size: clamp(1rem, 1.5vw, 2rem);
}
.stat-value {
    grid-column-start: 1;
    font-size: clamp(1rem, 2vw, 2.25rem);
    line-height: 2.5rem;
    font-weight: 800;
}
.stat-desc {
    grid-column-start: 1;
    font-size: clamp(1rem, 1.2vw, 0.75rem);
    line-height: 1rem;
    color: rgb(197, 194, 194);
}

@media screen and (max-width: 768px) {
    .stat {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>
