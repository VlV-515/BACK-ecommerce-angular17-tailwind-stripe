// This is your test publishable API key.
const stripe = Stripe("pk_test_51P3uTJRvZadNamZ5Eg0qTeSjmYWNM4QnW3GbxZxWoWIr3gECU6jkHB6sv5tNCuDJSOCV2ZzpwfEqkzHP2ipCqAdu00etlhdvpX");

initialize();

// Create a Checkout Session
async function initialize() {
  const fetchClientSecret = async () => {
    const response = await fetch("/create-checkout-session", {
      method: "POST",
    });
    const { clientSecret } = await response.json();
    return clientSecret;
  };

  const checkout = await stripe.initEmbeddedCheckout({
    fetchClientSecret,
  });

  // Mount Checkout
  checkout.mount('#checkout');
}