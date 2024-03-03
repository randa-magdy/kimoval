'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FC, useEffect, useState } from 'react';
import SelectFilter from '../components/SelectFilter';

interface Plan {
  id: number | string;
  key: string;
  label: string;
  value: string;
  orderBy: string;
  sortedBy: 'ASC' | 'DESC';
}
const plans: Plan[] = [
  {
    id: '1',
    key: 'sorting',
    label: 'Recent',
    value: 'created_at',
    orderBy: 'created_at',
    sortedBy: 'DESC',
  },
  {
    id: '2',
    key: 'sorting',
    label: 'Ratings: Low to High',
    value: 'l2h',
    orderBy: 'rating',
    sortedBy: 'ASC',
  },
  {
    id: '3',
    key: 'sorting',
    label: 'Ratings: High to Low',
    value: 'h2l',
    orderBy: 'rating',
    sortedBy: 'DESC',
  },
];
const SortByFilter: FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const orderBy = searchParams.get('orderBy');
  const queryParams: Record<string, string | string[]> = {};
  for (const [key, value] of searchParams.entries()) {
    queryParams[key] = value;
  }
  const [selected, setSelected] = useState(
    () => plans.find((plan) => plan.orderBy === orderBy) ?? plans[0]
  );

  useEffect(() => {
    if (!orderBy) {
      setSelected(plans[0]);
    }
  }, [orderBy]);

  function handleChange(values: Plan) {
    const { orderBy, sortedBy } = values;

    router.push(
      //@ts-ignore
      {
        pathname,
        query: {
          ...queryParams,
          orderBy,
          sortedBy,
        },
      },
      { scroll: false }
    );
    setSelected(values);
  }

  return (
    <div className="sortby-filter">
      <SelectFilter
        label="SORT BY"
        // @ts-ignore
        defaultValue={selected}
        isMinimal={true}
        isSearchable={false}
        options={plans}
        // width={200}
        // @ts-ignore
        onChange={handleChange}
      />
    </div>
  );
};

export default SortByFilter;
