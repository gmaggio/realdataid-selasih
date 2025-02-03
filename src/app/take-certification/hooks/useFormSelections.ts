"use client";

import { useState, useEffect } from "react";
import { getLiniProduksi, getBahanBakuSatuan } from "@/app/take-certification/services/BahanBakuService";
import { SelectItemData } from "@/app/take-certification/models/types";

export const useFormSelections = (uuidTransaksi: string) => {
  const [liniProduksi, setLiniProduksi] = useState<SelectItemData[]>([]);

  // TODO:
  // const [satuan, setSatuan] = useState<SelectItemData[]>([]);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSelections = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const [
          liniData,
          /* satuanData */
        ] = await Promise.all([
          getLiniProduksi(uuidTransaksi),
          // getBahanBakuSatuan(),
        ]);

        setLiniProduksi(liniData);
        // setSatuan(satuanData);
      } catch (err) {
        console.error("⚠️ Failed to fetch form selections", err);
        setError(err instanceof Error ? err.message : "Failed to fetch form selections");
      } finally {
        setIsLoading(false);
      }
    };

    fetchSelections();
  }, []);

  return {
    liniProduksi,
    // satuan,
    isLoading,
    error
  };
};
