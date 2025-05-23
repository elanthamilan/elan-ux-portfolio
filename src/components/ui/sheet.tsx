import { forwardRef } from 'react';

/** The props for the {@link Button} component. */
export type ButtonProps = JSX.IntrinsicElements['button'];

/** Render a button HTML element applying the reset class name. */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        type="button"
        className={props.className}
        style={props.style}
      />
    );
  }
);