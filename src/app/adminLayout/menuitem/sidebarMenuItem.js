import { ChartBar as ChartBarIcon } from "../icons/chart-bar";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import GroupIcon from "@mui/icons-material/Group";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";
import InventoryIcon from "@mui/icons-material/Inventory";

export const items = [
  {
    href: "/admin/dashboard",
    icon: <ChartBarIcon fontSize="small" />,
    title: "Dashboard",
    id: "dashboardMenu",
  },
  {
    href: "/admin/products",
    icon: <CreditScoreIcon fontSize="small" />,
    title: "Product",
    id: "productMenu",
  },
  {
    href: "/admin/users",
    icon: <GroupIcon fontSize="small" />,
    title: "Admin",
    id: "userMenu",
  },
  {
    href: "/admin/brands",
    icon: <BrandingWatermarkIcon fontSize="small" />,
    title: "Brand",
    id: "brandMenu",
  },
  {
    href: "/admin/colors",
    icon: <BorderColorIcon fontSize="small" />,
    title: "Color",
    id: "colorMenu",
  },
  {
    href: "/admin/orders",
    icon: <InventoryIcon fontSize="small" />,
    title: "Order",
    id: "orderMenu",
  },
];
