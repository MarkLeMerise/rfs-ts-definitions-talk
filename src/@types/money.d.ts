declare module "money" {
  export const fx: MoneyFx.ICurrencyConverter;

  namespace MoneyFx {
    export interface ICurrencyConverter {
      readonly version: string;
      base: string;
      rates: IConversionRates;
      settings: IConversionOptions;
      (amount: number | string): this;
      convert(amount?: number, options?: IConversionOptions): number;
      from(originCurrency: string): this;
      to(targetCurrency: string): number;
      noConflict: ICurrencyConverter;
    }

    export interface IConversionRates {
      // Extra credit: more narrowly type the currency codes?
      [iso4217CurrencyCode: string]: number;
    }

    export interface IConversionOptions {
      from: string;
      to: string;
    }
  }

  global {
    const fx: MoneyFx.ICurrencyConverter;
  }
}
