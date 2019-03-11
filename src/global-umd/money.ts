import { fx as currencyConverter, MoneyFx } from "money";

const conversionRates: MoneyFx.IConversionRates = { USD: 1, BRL: 3.73 };

currencyConverter.rates = conversionRates;

// Simple syntax:
currencyConverter.convert(1000, { from: "USD", to: "BRL" });

// Method chaining:
const reals = currencyConverter(1.99)
  .from("USD")
  .to("BRL");

console.log(reals);

// Basic parsing:
currencyConverter("$1.99 USD").to("BRL");

// Default parameters:
currencyConverter(5318008).convert();
