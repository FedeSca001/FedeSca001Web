<template>
  <section class="footer">
    <a href="https://github.com/FedeSca001" target="_blank" class="footer-link">Github</a>
    <a href="https://www.linkedin.com/in/federico-scarpecci-developer/" target="_blank" class="footer-link">Linkedin</a>
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
  background-color: rgba(0, 0, 0, 0.8);
  padding: 0.5rem;
}

.footer-link {
  text-decoration: none;
  color: white;
  font-size: 12px;
  padding: 0.25rem 0.5rem;
  margin: 0.25rem;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease;
}

.footer-link:hover {
  transform: scale(1.1);
  background-color: rgba(255, 255, 255, 0.3);
}

@media (min-width: 768px) {
  .footer {
    padding: 0.75rem;
  }

  .footer-link {
    font-size: 14px;
    padding: 0.5rem 1rem;
    margin: 0.5rem;
  }
}
</style>
