import * as React from 'react';

type ExpenseItemProps = {
  dateYear?: string;
  dateMonth?: string;
  dateDay?: string;
  title?: string;
  amount?: number;
};

export default function ExpenseItem(props: ExpenseItemProps) {
  return (
    <div className='h-30 expense-item flex flex-row'>
      <div className='expense-date w-40 flex-none text-center'>
        <div className='expense-date__month'>{props.dateMonth}</div>
        <div className='expense-date__year'>{props.dateYear}</div>
        <div className='expense-date__day'>{props.dateDay}</div>
      </div>
      <div className='m-auto grow'>
        <h2>{props.title}</h2>
      </div>
      <div className='w-18 expense-item__price m-auto flex-none'>
        <span>${props.amount}</span>
      </div>
    </div>
  );
}
