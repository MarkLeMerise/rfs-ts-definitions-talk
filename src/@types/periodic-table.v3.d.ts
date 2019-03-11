export = PeriodicTableStatic;
export as namespace PeriodicTable;

declare const PeriodicTableStatic: IPeriodTableStatic;

declare type GroupBlock =
  | "actinoid"
  | "alkali metal"
  | "alkaline earth metal"
  | "halogen"
  | "lanthanoid"
  | "metal"
  | "metalloid"
  | "noble gas"
  | "nonmetal"
  | "post-transition metal"
  | "transition metal";

declare type MatterState = "" | "gas" | "liquid" | "solid";

declare interface IPeriodTableStatic {
  all(): IChemicalElement[];
  csvFile: string;
  elements: Record<string, IChemicalElement>;
  jsonFile: Record<string, IChemicalElement>;
  numbers: Record<number, IChemicalElement>;
  symbols: Record<string, IChemicalElement>;
}

declare interface IChemicalElement {
  atomicMass: string;
  atomicNumber: number;
  atomicRadius: number;
  boilingPoint: number;
  bondingType: string;
  cpkHexColor: string;
  density: number;
  electronAffinity: number;
  electronegativity: number;
  electronicConfiguration: string;
  groupBlock: GroupBlock;
  ionRadius: string;
  ionizationEnergy: number;
  meltingPoint: number;
  name: string;
  oxidationStates: string;
  standardState: MatterState;
  symbol: string;
  vanDelWaalsRadius: number;
  yearDiscovered: number;
}
