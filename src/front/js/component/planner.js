import React, { useState, useContext } from 'react';
import Scheduler from 'devextreme-react/scheduler';
import { Context } from "../store/appContext";
const currentDate = new Date(2021, 3, 29);
const views = ['day', 'week', 'workWeek', 'month'];


export const Planner = () => {
    const { store, actions } = useContext(Context);
    return (<div><Scheduler
        timeZone="America/Los_Angeles"
        dataSource={store.appointments}
        views={views}
        defaultCurrentView="day"
        defaultCurrentDate={currentDate}
        height={600}
        startDayHour={9} />
        {/* when coding the app with backend include POST/PUT? fetch instead of consolelog functionality such that you can save the current list */}
        <button onClick={() => { console.log(store.appointments) }}>click here</button>
    </div>
    )
}
