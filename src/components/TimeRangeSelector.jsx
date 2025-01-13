export default function TimeRangeSelector({ currentRange, onChange }) {
      const ranges = [
        { value: '24h', label: '24 Hours' },
        { value: '1d', label: '1 Day' },
        { value: '1w', label: '1 Week' },
        { value: '1m', label: '1 Month' },
        { value: '6m', label: '6 Months' },
        { value: 'ytd', label: 'YTD' }
      ]

      return (
        <div className="time-range-selector">
          {ranges.map(range => (
            <button
              key={range.value}
              className={currentRange === range.value ? 'active' : ''}
              onClick={() => onChange(range.value)}
            >
              {range.label}
            </button>
          ))}
        </div>
      )
    }
