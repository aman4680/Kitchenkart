import React from 'react'
import { View, StyleSheet, Text, Alert } from 'react-native'
import { Agenda, Calendar, CalendarList } from 'react-native-calendars'
// import WeeklyCalendar from 'react-native-weekly-calendar';


const CalenderScreen = () => {

    items=[{
        '2021-11-02': [{name: 'item 1 - any js object'}],
        '2021-11-03': [{name: 'item 2 - any js object', height: 80}],
        '2021-11-04': [],
        '2021-11-05': [{name: 'item 3 - any js object'}, {name: 'any js object'}]
    }]
    const date = new Date()
    return (
        <View style={{ height: 700 }}>
            {/* <Calendar
                style={{ height: "100%" }}
                theme={{
                    // selectedDayBackgroundColor: "#00adf5",
                    // selectedDayTextColor: "#fff",
                    todayTextColor: '#00adf5',
                }} 
                minDate={"2021-08-01"}
                enableSwipeMonths={true}
                // onDayPress={(e) => { <View><Text>{e}</Text></View> }}
            /> */}
            {/* <Agenda /> */}

            {/* <WeeklyCalendar 
                // selected={date}
                startWeekday={7}
                onDayPress={(weekday, i) => alert(weekday.format('ddd') + ' is selected! And it is day ' + (i+1) + ' of the week!')}
                titleStyle={{ paddingTop: 10, paddingBottom: 10 }}
            /> */}

            <Agenda />
            {/* <CalendarList /> */}
        </View>
    )
}

export default CalenderScreen;