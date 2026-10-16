import type { Filter } from '../types';

type FilterBarProps = {
  filter: Filter;
  onFilterChange: (filter: Filter) => void;
};

export function FilterBar({ filter, onFilterChange }: FilterBarProps) {
  return (
    <div>
      <button disabled={filter === 'all'} onClick={() => onFilterChange('all')}>
        All
      </button>
      <button
        disabled={filter === 'active'}
        onClick={() => onFilterChange('active')}
      >
        Active
      </button>
      <button
        disabled={filter === 'completed'}
        onClick={() => onFilterChange('completed')}
      >
        Completed
      </button>
    </div>
  );
}
