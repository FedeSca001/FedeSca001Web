<template>
  <section class="footer">
    <a href="https://github.com/FedeSca001" target="_blank" class="footer-link">Github</a>
    <a href="https://www.linkedin.com/in/federico-scarpecci-developer/" target="_blank" class="footer-link">LinkedIn</a>
    <a href="https://twitter.com/FedeScarpecci" target="_blank" class="footer-link">Twitter</a>
    <a href="https://www.instagram.com/fedesca001/" target="_blank" class="footer-link">Instagram</a>
  </section>
</template>

<script>
export default {
  name: "FooterComp",
};
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.footer-link {
  text-decoration: none;
  color: black;
  font-size: 14px;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  border-radius: 4px;
  transition: color 0.3s ease, background-color 0.3s ease;
}

.footer-link:hover {
  color: #6c61d4;
  background-color: rgba(255, 255, 255, 0.15);
}

.footer-link:active {
  transform: scale(0.95);
}

@media (min-width: 768px) {
  .footer-link {
    font-size: 16px;
    margin: 0 1rem;
  }
}
</style>
