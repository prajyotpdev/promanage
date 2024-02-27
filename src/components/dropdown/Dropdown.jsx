import React, { useState, useEffect } from 'react';

const FilterForm = ({ data }) => {
    const [selectedFilter, setSelectedFilter] = useState('');
    const [filteredItems, setFilteredItems] = useState(data);
    const [filterOptions, setFilterOptions] = useState(["This Week", "This Month", "This Year"]);
  
    const filterItems = (val) => {
        setSelectedFilter(val);
      };

      useEffect(() => {
        if (selectedFilter) {
          const currentDate = new Date();
          const startDate = new Date(currentDate);
    
          switch (selectedFilter) {
            case 'This Week':
              startDate.setDate(currentDate.getDate() - currentDate.getDay());
              break;
            case 'This Month':
              startDate.setDate(1);
              break;
            case 'This Year':
              startDate.setMonth(0, 1);
              break;
            default:
              break;
          }
    
          setFilteredItems(
            data.filter(
              (item) => new Date(item.createdAt) >= startDate && new Date(item.createdAt) <= currentDate
            )
          );
        } else {
          setFilteredItems(data);
        }
      }, [selectedFilter, data]);
      return (
        <div className="container">
          <FilterOptions
            filterOptions={filterOptions}
            selectedFilter={selectedFilter}
            changeOption={filterItems}
          />
          <div className="filter-form">
            <FilterItems data={filteredItems} />
          </div>
        </div>
      );
    };
    const FilterOptions = ({ filterOptions, selectedFilter, changeOption }) => {
        const handleChange = (e) => {
          const val = e.target.value;
          changeOption(val);
        };
      
        return (
          <div className="filter-options">
            <div className="filter-option">
              <label>Filter by Date</label>
              <select value={selectedFilter} onChange={handleChange}>
                {filterOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        );
      };
      
      const FilterItems = ({ data }) => {
        return (
          <div className="filter-items">
            {data.map((item) => (
              <div key={item.name} className="filter-item">
                {item.name}
              </div>
            ))}
          </div>
        );
      };

      const filterData = []; // Your filter data goes here

export default FilterForm;
