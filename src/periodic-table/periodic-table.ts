import * as PeriodicTable from "periodic-table";

/*
 * Examples from the README
 * We don't want any red squigglies.
 */
// entire dataset
PeriodicTable.all();

// single elements by name
PeriodicTable.elements.Helium;

// single elements by symbol
PeriodicTable.symbols.He;

// single elements by atomic number
PeriodicTable.numbers[2];

// This should fail with
// pt.symbols.Mark = {};

const gold: IChemicalElement = PeriodicTable.symbols.Au;

console.log(gold);
