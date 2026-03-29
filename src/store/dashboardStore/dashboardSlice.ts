import type { DashboardType } from "@/features/dashboard/DashBoardCard";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface DashboardState {
  businessName: string;
  image: string;
  dashboard: DashboardType | null;
}

const initialState: DashboardState = {
  image: "",
  businessName: "",
  dashboard: null,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setImage(state, action: PayloadAction<string>) {
      state.image = action.payload;
    },
    setBusinessName(state, action: PayloadAction<string>) {
      state.businessName = action.payload;
    },
    setDashboard(state, action: PayloadAction<DashboardType | null>) {
      state.dashboard = action.payload;
    },
  },
});

export const { setImage, setBusinessName, setDashboard } =
  dashboardSlice.actions;
export default dashboardSlice.reducer;
