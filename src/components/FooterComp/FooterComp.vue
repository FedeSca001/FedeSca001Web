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
    bottom: 0;
}
a{
    font-style: none;
    font-size: 11pt;
    background-color: rgba(28, 146, 44, 0.26);
    color: white;
    padding-bottom: 0vw;
    border-top-left-radius: 0.9vw;
    border-top-right-radius: 0.9vw;
    padding: 0.8vw 1.8vw;
    margin: 0 0.8vw;
}
a:hover{
    transition: 500ms;
    background-color: rgba(81, 255, 0, 0.39);
    color: white;
}
@media (min-width: 1000px){
    a{
        font-size: 11pt;
        padding: 0.3vw 0.8vw;
        margin: 0 0.4vw;
}
}
</style>