import React from "react";
import styled from "styled-components";
import { Grid, Button, Input, Text, Image } from "../elements/index";

//데이 피커
import DayPicker from "react-day-picker";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";


const ReservePage = () => {



  return (
    <Wrap>
      <Calendar>
        <DayPicker/>
        <Check>
          <div>
            <Text fontSize="35px" bold="700" ot>
              인원 :
            </Text>
          </div>
          <Person>
			  <p>성인</p>
		 	 <select id="adult-select">		  
				<option value="adult">성인</option>
				<option value="adult">1명</option>
				<option value="adult">2명</option>
				<option value="adult">3명</option>
				<option value="adult">4명</option>
				<option value="adult">5명</option>
				<option value="adult">6명</option>
				<option value="adult">7명</option>
				<option value="adult">8명</option>
				<option value="adult">9명</option>
				<option value="adult">10명</option>
			</select>
			<p>아동</p>			 	 
            <select id="kids-select">		  
				<option value="kids">아동</option>
				<option value="kids">1명</option>
				<option value="kids">2명</option>
				<option value="kids">3명</option>
				<option value="kids">4명</option>
				<option value="kids">5명</option>
				<option value="kids">6명</option>
				<option value="kids">7명</option>
				<option value="kids">8명</option>
				<option value="kids">9명</option>
				<option value="kids">10명</option>
			</select>		
          </Person>
        </Check>
        <ReservBtn>예약하기</ReservBtn>
      </Calendar>
    </Wrap>
  );
};

const Wrap = styled.div`
  padding: 10%;
`;
const Calendar = styled.div`
  min-width: 601px;
  width: 601px;
`;
const Check = styled.div`
  display: flex;
  width: 30%;
  text-align: center;
  margin: 10px 50px 50px 5px;
  border: 1px solid;
  border-radius: 5px;
  padding: 5px;
`;
const Person = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10%;
`;
const ReservBtn = styled.button`
  width: 100%;
  height: 50px;
  display: inline-block;
  padding: 15px 25px;
  font-size: 24px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #4caf50;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
  &:hover {
    background-color: #3e8e41;
  }
  &:active {
    background-color: #3e8e41;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;

export default ReservePage;
