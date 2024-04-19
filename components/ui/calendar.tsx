import React from "react";
import Theme from "../layout/componentTheme";
import { E } from "nextra/dist/types-c8e621b7";

export function Calendar() {
  return <Theme componentName="calendar" componentStyle="normal" componentReactView="CalendarDemo"/>;
}

export function DateRangePickerCalendar() {
  return <Theme componentName="calendar" componentStyle="range" componentReactView="DatePickerWithRange"/>;
}

export function DateInputCalendar() {
  return <Theme componentName="calendar" componentStyle="dateInput" componentReactView="DatePickerDemo"/>;
}

export function DateTimeInputCalendar() {
  return <Theme componentName="calendar" componentStyle="dateTimeInput" componentReactView="dateTimeInput"/>;
}

export function MonthInputCalendar() {
  return <Theme componentName="calendar" componentStyle="monthInput" componentReactView="MonthPickerDemo"/>;
}

export function TimeInputCalendar() {
  return <Theme componentName="calendar" componentStyle="timeInput" componentReactView="TimePickerDemo"/>;
}

export function WeekInputCalendar() {
  return <Theme componentName="calendar" componentStyle="weekInput" componentReactView="WeekPicker"/>;
}
