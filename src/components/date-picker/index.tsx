/**
 * Native dependencies 
 */ 
import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableWithoutFeedback } from 'react-native';
import type { PropsWithChildren } from 'react';
/**
 * External dependencies 
 */ 
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
/**
 * Internal dependencies 
 */ 
import { Paragraph } from "@src/components";
import { Wrapper, InputWrapper  } from "./style";

type PropsType = {
    label: string;
    sx?: Object;
    onDateChange?: (text: string) => void;
    date: null | string;
  }

export default function DatePicker( props: PropsWithChildren<PropsType> ) {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date: any) => {
      // change date format to 'dd/mm/yyyy'
      const dateFormatted = moment(date).format('DD-MM-YYYY').toString();

      if( props.onDateChange && typeof props.onDateChange === 'function' ) {
        props.onDateChange(dateFormatted);
      }

      hideDatePicker();
    };

  return (
    <Wrapper style={props.sx || {}}>
        <View style={ styles.labelWrapper }>
            <Paragraph sx={{fontSize: 16,fontFamily: 'Rubik-Regular'}}>{props.label}</Paragraph>
            {props.children}
        </View>
        <TouchableWithoutFeedback
          onPress={() => {
            setIsFocused(true);
            showDatePicker();
          }}
        >
          <InputWrapper isFocused={isFocused}>
              <Paragraph sx={{
                fontSize: 16,
                fontFamily: 'Rubik-Regular',
                color: props.date ? '#101010' : '#bacddb',
                width: '78%',
                paddingLeft: 5
              }}>
                {props.date ? props.date : 'Pick a date'}
              </Paragraph>
              <Image style={styles.flag} source={require('@assets/images/calendar.jpeg')}/>
          </InputWrapper>
        </TouchableWithoutFeedback>
        
        <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            date={props.date ? moment(props.date, 'DD-MM-YYYY').toDate() : new Date()}
            onConfirm={(ev) => {
              handleConfirm(ev)
              setIsFocused(false);
            }}
            onCancel={() => {
              hideDatePicker()
              setIsFocused(false);
            }}
        />
    </Wrapper>
  );
}

const styles = StyleSheet.create({
    labelWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    flag: {
      width: 25,
      height: 25
    }
})