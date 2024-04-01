"use client";

import React, { FC } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const DayCal: FC = () => {
  return (
    <div className="demo-app">
      <div className="demo-app-main">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]} // pluginsにtimeGridPluginを設定する
          initialView="timeGridFourDay" // 初期表示のモードを設定する
          views={{
            timeGridFourDay: { type: "timeGrid", duration: { days: 4 } },
          }}
          headerToolbar={{
            center: "dayGridDay,timeGridWeek",
          }}
          events={"https://fullcalendar.io/api/demo-feeds/events.json"}
          allDaySlot={false}
          nowIndicator={true}
          selectLongPressDelay={1000}
          editable={true}
          droppable={true}
          eventResizableFromStart={true}
          //   eventDurationEditable={true}
          snapDuration={"00:05:00"}
          slotMinTime={"06:00:00"}
          slotMaxTime={"030:00:00"}
        />
      </div>
    </div>
  );
};

export default DayCal;
