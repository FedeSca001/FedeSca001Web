<template>
    <section class="footContain">
        <a href="https://github.com/FedeSca001" target="blanck">Github</a>
        <a href="https://www.linkedin.com/in/federico-scarpecci-developer/" target="blanck">Linkedin</a>
        <a href="https://twitter.com/FedeScarpecci" target="blanck">Twitter</a>
    </section>
</template>

<script>
export default {
    name: 'footer-comp'
}
</script>

<style scoped>
.footContain{
    position: absolute;
    bottom: 0;
}
a{
    font-style: none;
    background-color: black;
    color: white;
    padding: 0.3vw 0.8vw;
    padding-bottom: 0vw;
    border-top-left-radius: 0.3vw; 
    border-top-right-radius: 0.3vw; 
    margin: 0 0.4vw;
}
</style>