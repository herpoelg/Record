import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';

export const ResetIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  const fillColor = props.color
    ? props.color === 'disabled'
      ? theme.palette.gray.light
      : props.color
    : theme.palette.text.primary;

  return (
    <SvgIcon {...props} viewBox="0 0 14.007 14.007">
      <path
        d="M174.053,171a3.053,3.053,0,1,0,3.053,3.053A3.056,3.056,0,0,0,174.053,171Zm0,5.028a1.975,1.975,0,1,1,1.975-1.975A1.978,1.978,0,0,1,174.053,176.028Z"
        transform="translate(-167.049 -167.049)"
        fill={fillColor}
      />
      <path
        d="M74.574,66.4l-1.33-.266q-.093-.263-.211-.512l.751-1.127a.539.539,0,0,0-.067-.68l-1.524-1.524a.539.539,0,0,0-.68-.067l-1.127.751q-.248-.117-.512-.211l-.266-1.33A.539.539,0,0,0,69.081,61H66.926a.539.539,0,0,0-.528.433l-.266,1.33q-.263.093-.512.211l-1.127-.751a.539.539,0,0,0-.68.067l-1.524,1.524a.539.539,0,0,0-.067.68l.751,1.127q-.117.248-.211.512l-1.33.266a.539.539,0,0,0-.433.528v2.155a.539.539,0,0,0,.433.528l1.33.266q.093.263.211.512l-.751,1.127a.539.539,0,0,0,.067.68l1.524,1.524a.539.539,0,0,0,.68.067l1.127-.751q.248.117.512.211l.266,1.33a.539.539,0,0,0,.528.433h2.155a.539.539,0,0,0,.528-.433l.266-1.33q.263-.093.512-.211l1.127.751a.539.539,0,0,0,.68-.067l1.524-1.524a.539.539,0,0,0,.067-.68l-.751-1.127q.117-.248.211-.512l1.33-.266a.539.539,0,0,0,.433-.528V66.926a.539.539,0,0,0-.433-.528Zm-.644,2.241-1.206.241a.539.539,0,0,0-.412.378,4.47,4.47,0,0,1-.373.906.539.539,0,0,0,.024.559l.681,1.022-.9.9-1.022-.681a.539.539,0,0,0-.559-.024,4.464,4.464,0,0,1-.905.373.539.539,0,0,0-.378.412l-.241,1.206H67.368l-.241-1.206a.539.539,0,0,0-.378-.412,4.469,4.469,0,0,1-.906-.373.539.539,0,0,0-.559.024l-1.022.681-.9-.9.681-1.022a.539.539,0,0,0,.024-.559,4.469,4.469,0,0,1-.373-.906.539.539,0,0,0-.412-.378l-1.206-.241V67.368l1.206-.241a.539.539,0,0,0,.412-.378,4.471,4.471,0,0,1,.373-.906.539.539,0,0,0-.024-.559l-.681-1.022.9-.9,1.022.681a.539.539,0,0,0,.559.024,4.464,4.464,0,0,1,.905-.373.539.539,0,0,0,.378-.412l.241-1.206h1.272l.241,1.206a.539.539,0,0,0,.378.412,4.469,4.469,0,0,1,.905.373.539.539,0,0,0,.559-.024l1.022-.681.9.9-.681,1.022a.539.539,0,0,0-.024.559,4.469,4.469,0,0,1,.373.906.539.539,0,0,0,.412.378l1.206.241Z"
        transform="translate(-61 -61)"
        fill={fillColor}
      />
    </SvgIcon>
  );
};
