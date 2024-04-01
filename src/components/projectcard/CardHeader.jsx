import { forwardRef } from "react";
import "./cardHeader.css";

const CardHeader = forwardRef(({ ...props }, ref) => (
  <div
    ref={ref}
    className="card-header"
    {...props}
  />
));
CardHeader.displayName = 'CardHeader';

export default CardHeader;