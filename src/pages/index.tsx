import * as React from 'react';

import ExpenseItem from '@/components/expense/ExpenseItem';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='layout expenses flex min-h-screen flex-col justify-center'>
            <ExpenseItem
              dateMonth='December'
              dateYear='2011'
              dateDay='01'
              title='House Issurance'
              amount={700}
            ></ExpenseItem>
            <ExpenseItem
              dateMonth='December'
              dateYear='2012'
              dateDay='01'
              title='New Car'
              amount={3000}
            ></ExpenseItem>
            <ExpenseItem
              dateMonth='November'
              dateYear='2013'
              dateDay='06'
              title='New TV'
              amount={350}
            ></ExpenseItem>
          </div>
        </section>
      </main>
    </Layout>
  );
}
