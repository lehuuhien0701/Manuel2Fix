import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div>
      
      <div className="relative w-[100%]"> 
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="dd-MM-yyyy"
          placeholderText="18-09-2025"
          className="text-right text-charcoal w-full px-4 py-3 bg-transparent rounded-lg focus:outline-none focus:ring-1 focus:ring-transparent"
        /> 
      </div>
    </div>
  );
};  

export default DatePickerComponent;