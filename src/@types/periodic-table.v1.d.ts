declare module "periodic-table" {
  // Need a definition for IChemicalElement

  // Notice these each match a module.export.* statement in the source file
  // TODO: Change the "any" typing to the proper types
  export function all(): any;
  export const elements: any;
  export const numbers: any;
  export const symbols: any;

  // Should these necessarily be exposed?
  export const jsonFile: string;
  export const csvFile: string;
}
