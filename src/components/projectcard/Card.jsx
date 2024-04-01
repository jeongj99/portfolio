import { forwardRef } from "react";
import "./card.css";

const Card = forwardRef(({ ...props }, ref) => (
  <div
    ref={ref}
    className="card"
    {...props}
  />
));
Card.displayName = 'Card';

export default Card;