import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  DumpTruckIcon,
  GarbageTruckIcon,
  SemiTruckIcon,
  TruckIcon,
  DeliveryTruck01Icon,
  ContainerTruck01Icon,
  Wrench01Icon,
  Wrench02Icon,
  ToolsIcon,
  Car01Icon,
  Car02Icon,
  ShieldCheckIcon,
  CheckmarkBadge01Icon,
  CpuIcon,
  ComputerIcon,
  BatteryCharging01Icon,
  FlashIcon,
  Location01Icon,
  MapsIcon,
  SmartPhone01Icon,
  Clock01Icon,
  Time01Icon,
  Menu01Icon,
  Cancel01Icon,
  ArrowLeft01Icon,
  ArrowRight01Icon,
  ArrowUpRight01Icon,
  ChevronDownIcon,
  StarIcon,
  SparklesIcon,
  Award01Icon,
  CustomerSupportIcon,
  UserCheck01Icon,
  Target01Icon,
  CheckmarkCircle01Icon,
  WhatsappIcon,
  InstagramIcon,
  TelephoneIcon,
} from "@hugeicons/core-free-icons";

const ICON_MAP: Record<string, any> = {
  DumpTruckIcon,
  GarbageTruckIcon,
  SemiTruckIcon,
  TruckIcon,
  DeliveryTruck01Icon,
  ContainerTruck01Icon,
  Wrench01Icon,
  Wrench02Icon,
  ToolsIcon,
  Car01Icon,
  Car02Icon,
  ShieldCheckIcon,
  CheckmarkBadge01Icon,
  CpuIcon,
  ComputerIcon,
  BatteryCharging01Icon,
  FlashIcon,
  Location01Icon,
  MapsIcon,
  SmartPhone01Icon,
  Clock01Icon,
  Time01Icon,
  Menu01Icon,
  Cancel01Icon,
  ArrowLeft01Icon,
  ArrowRight01Icon,
  ArrowUpRight01Icon,
  ChevronDownIcon,
  StarIcon,
  SparklesIcon,
  Award01Icon,
  CustomerSupportIcon,
  UserCheck01Icon,
  Target01Icon,
  CheckmarkCircle01Icon,
  WhatsappIcon,
  InstagramIcon,
  TelephoneIcon,
};

interface DynamicIconProps {
  name: string;
  className?: string;
  size?: number;
  color?: string;
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({
  name,
  className = "",
  size = 24,
  color = "currentColor",
}) => {
  const iconData = ICON_MAP[name] || Wrench01Icon;

  return (
    <span
      className={`inline-flex items-center justify-center shrink-0 ${className}`}
    >
      <HugeiconsIcon icon={iconData} size={size} color={color} />
    </span>
  );
};
