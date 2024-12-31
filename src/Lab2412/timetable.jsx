import React from "react";

const Timetable = () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const schedule = [
    {
      time: "8:00 AM - 9:00 AM",
      monday: "Math",
      tuesday: "Science",
      wednesday: "English",
      thursday: "English",
      friday: "English",
    },
    {
      time: "9:00 AM - 10:00 AM",
      monday: "English",
      tuesday: "History",
      wednesday: "PE",
      thursday: "Math",
      friday: "Science",
    },
    {
      time: "location",
      monday: "201",
      tuesday: "203",
      wednesday: "204",
      thursday: "104",
      friday: "LL5",
    },

    {
      time: "10:00 AM - 11:00 AM",
      monday: "Science",
      tuesday: "English",
      wednesday: "History",
      thursday: "PE",
      friday: "Math",
    },
    {
      time: "11:00 AM - 11:40 AM",
      monday: "History",
      tuesday: "PE",
      wednesday: "Math",
      thursday: "Science",
      friday: "English",
    },
    {
      time: "location",
      monday: "201",
      tuesday: "203",
      wednesday: "204",
      thursday: "104",
      friday: "LL5",
    },

    {
      time: "12:30 PM - 1:20 PM",
      monday: "PE",
      tuesday: "Math",
      wednesday: "Science",
      thursday: "English",
      friday: "History",
    },
    {
      time: "1:20 PM - 2:10 PM",
      monday: "PE",
      tuesday: "Math",
      wednesday: "Science",
      thursday: "English",
      friday: "History",
    },
    {
      time: "location",
      monday: "201",
      tuesday: "203",
      wednesday: "204",
      thursday: "104",
      friday: "LL5",
    },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ textAlign: "center" }}>Weekly Timetable</h2>
      <table
        style={{
          borderCollapse: "collapse",
          width: "100%",
          marginTop: "20px",
          textAlign: "center",
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                border: "1px solid black",
                padding: "10px",
                backgroundColor: "#f2f2f2",
              }}
            >
              Time
            </th>
            {days.map((day) => (
              <th
                key={day}
                style={{
                  border: "1px solid black",
                  padding: "10px",
                  backgroundColor: "#f2f2f2",
                }}
              >
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {schedule.map((slot, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid black", padding: "10px" }}>
                {slot.time}
              </td>
              <td style={{ border: "1px solid black", padding: "10px" }}>
                {slot.monday}
              </td>
              <td style={{ border: "1px solid black", padding: "10px" }}>
                {slot.tuesday}
              </td>
              <td style={{ border: "1px solid black", padding: "10px" }}>
                {slot.wednesday}
              </td>
              <td style={{ border: "1px solid black", padding: "10px" }}>
                {slot.thursday}
              </td>
              <td style={{ border: "1px solid black", padding: "10px" }}>
                {slot.friday}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Timetable;
