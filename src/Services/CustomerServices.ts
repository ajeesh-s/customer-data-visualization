import { ICustomer } from "../Types/CustomerTypes";
import * as Papa from "papaparse";

export const getCustomers = async (): Promise<ICustomer[]> => {
  try {
    const response = await fetch("/data.csv");
    const csvText = await response.text();
    return new Promise((resolve, reject) => {
      Papa.parse(csvText, {
        header: true as const,
        skipEmptyLines: true,
        transformHeader: (header) => header.trim(),
        transform: (value, header) => {
          return Number.isNaN(Number(value)) ? value.trim() : Number(value);
        },
        complete: (results: any) => {
          resolve(results.data);
        },
        error: (error: any) => {
          reject(error);
        },
      });
    });
  } catch (error) {
    console.error("Error fetching or parsing CSV file:", error);
    return [];
  }
};
