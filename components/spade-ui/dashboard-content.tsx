"use client";

import type { FC } from "react";
import {
  Wallet,
  ArrowUpRight,
  ArrowDownRight,
  Compass,
  Send,
  Forward,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { TooltipIconButton } from "@/components/spade-ui/tooltip-icon-button";
import { useState } from "react";
import { LazyMotion, MotionConfig, domAnimation } from "motion/react";
import * as m from "motion/react-m";

interface Asset {
  id: string;
  name: string;
  symbol: string;
  amount: number;
  price: number;
  change24h: number;
  value: number;
  icon?: string;
}

export function DashboardContent() {
  // Mock wallet asset data
  const [walletAddress] = useState("0xabcdef...123456");
  const [assets] = useState<Asset[]>([
    {
      id: "1",
      name: "Ethereum",
      symbol: "ETH",
      amount: 2.5,
      price: 2345.67,
      change24h: 3.45,
      value: 5864.18,
    },
    {
      id: "2",
      name: "USD Coin",
      symbol: "USDC",
      amount: 1500,
      price: 1.0,
      change24h: 0.01,
      value: 1500,
    },
    {
      id: "3",
      name: "Chainlink",
      symbol: "LINK",
      amount: 125.5,
      price: 14.23,
      change24h: -2.34,
      value: 1785.87,
    },
    {
      id: "4",
      name: "Uniswap",
      symbol: "UNI",
      amount: 50,
      price: 6.78,
      change24h: 5.67,
      value: 339,
    },
    {
      id: "5",
      name: "Aave",
      symbol: "AAVE",
      amount: 15,
      price: 89.34,
      change24h: -1.23,
      value: 1340.1,
    },
  ]);

  const totalValue = assets.reduce((sum, asset) => sum + asset.value, 0);
  const totalChange24h = assets.reduce(
    (sum, asset) => sum + (asset.value * asset.change24h) / 100,
    0,
  );
  const totalChangePercent = (totalChange24h / totalValue) * 100;

  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user">
        <div>
          <DashboardHeader walletAddress={walletAddress} />
          <TotalValueCard
            totalValue={totalValue}
            totalChange24h={totalChange24h}
            totalChangePercent={totalChangePercent}
          />
          <AssetsTable assets={assets} />
          <AssetDistribution assets={assets} totalValue={totalValue} />
        </div>
      </MotionConfig>
    </LazyMotion>
  );
}

const DashboardHeader: FC<{ walletAddress: string }> = ({ walletAddress }) => {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mb-6 flex items-center justify-between"
    >
      <div>
        <h1 className="mb-2 text-xl font-bold">Overview</h1>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Wallet className="size-4" />
          <span className="font-mono">{walletAddress}</span>
        </div>
      </div>
      <div className="flex items-center">
        <TooltipIconButton tooltip="Explore" className="size-10">
          <Compass className="size-5" />
        </TooltipIconButton>
        <TooltipIconButton tooltip="Send" className="size-10">
          <Send className="size-5" />
        </TooltipIconButton>
        <TooltipIconButton tooltip="Forward" className="size-10">
          <Forward className="size-5" />
        </TooltipIconButton>
      </div>
    </m.div>
  );
};

const TotalValueCard: FC<{
  totalValue: number;
  totalChange24h: number;
  totalChangePercent: number;
}> = ({ totalValue, totalChange24h, totalChangePercent }) => {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="mb-6 flex justify-between items-center rounded-xl border border-border bg-card px-8 py-4"
    >
      <div>
        <div className="mb-1 text-sm text-muted-foreground">
          Total Asset Value
        </div>
        <div className="mb-1 text-xl font-bold">
          $
          {totalValue.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </div>
        <div
          className={`flex items-center gap-1 text-sm ${totalChangePercent >= 0 ? "text-green-500" : "text-red-500"}`}
        >
          {totalChangePercent >= 0 ? (
            <ArrowUpRight className="size-4" />
          ) : (
            <ArrowDownRight className="size-4" />
          )}
          <span className="font-medium">
            {totalChangePercent >= 0 ? "+" : ""}
            {totalChangePercent.toFixed(2)}%
          </span>
          <span className="text-muted-foreground">
            (${totalChange24h >= 0 ? "+" : ""}
            {totalChange24h.toFixed(2)}) 24h
          </span>
        </div>
      </div>
      <div>
        <Button variant="outline" size="sm">
          <Sparkles className="size-4" />
          <span className="text-xs">AI Analysis</span>
        </Button>
      </div>
    </m.div>
  );
};

const AssetsTable: FC<{ assets: Asset[] }> = ({ assets }) => {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="rounded-xl border border-border bg-card"
    >
      <div className="mt-4 px-8">
        <h2 className="text-lg font-semibold">Asset List</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b border-border">
            <tr>
              <th className="px-8 py-3 text-left text-xs font-medium text-muted-foreground">
                Asset
              </th>
              <th className="px-8 py-3 text-right text-xs font-medium text-muted-foreground">
                Price
              </th>
              <th className="px-8 py-3 text-right text-xs font-medium text-muted-foreground">
                Balance
              </th>
              <th className="px-8 py-3 text-right text-xs font-medium text-muted-foreground">
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            {assets.map((asset) => (
              <tr
                key={asset.id}
                className="border-b border-border last:border-0"
              >
                <td className="px-8 py-1">
                  <div>
                    <div className="text-sm font-medium">{asset.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {asset.symbol}
                    </div>
                  </div>
                </td>
                <td className="px-8 py-1 text-right font-mono text-sm">
                  $
                  {asset.price.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </td>
                <td className="px-8 py-1 text-right font-mono text-sm">
                  {asset.amount.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 4,
                  })}
                </td>
                <td className="px-8 py-1 text-right font-mono text-sm">
                  $
                  {asset.value.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </m.div>
  );
};

const AssetDistribution: FC<{ assets: Asset[]; totalValue: number }> = ({
  assets,
  totalValue,
}) => {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.3 }}
      className="mt-6 rounded-xl border border-border bg-card"
    >
      <h2 className="px-8 py-4 text-lg font-semibold">Asset Distribution</h2>
      <div className="mb-6 space-y-3 px-8">
        {assets.map((asset) => {
          const percentage = (asset.value / totalValue) * 100;
          return (
            <div key={asset.id}>
              <div className="mb-1 flex items-center justify-between text-sm">
                <span className="font-medium">{asset.symbol}</span>
                <span className="text-muted-foreground">
                  {percentage.toFixed(1)}%
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full bg-primary transition-all duration-300"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </m.div>
  );
};

