import React from 'react';

interface SimpleRowProps {
  label: string;
  children: string | JSX.Element;
}

const SimpleRow = (props: SimpleRowProps) => {
  const { label, children } = props;
  return (
    <div className="row">
      <div className="label">{label}</div>
      <div className="value">{children}</div>
    </div>
  );
};

export default SimpleRow;
