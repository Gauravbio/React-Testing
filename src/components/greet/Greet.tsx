import { FC } from "react";

import {GreetProps} from './greet.types';

const Greet:FC<GreetProps> = ({name}) => {
  return (
    <div>Hello {name}</div>
  )
}

export default Greet