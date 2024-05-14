import { createUseState } from "@figliolia/react-galena";
import { ScheduleModel } from "Models/Schedule";

export const Schedule = new ScheduleModel();
export const useSchedule = createUseState(Schedule);
